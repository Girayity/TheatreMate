const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://admin:123@cluster0.mvnhpto.mongodb.net/TiyatroApp?retryWrites=true&w=majority";
const cors = require('cors');
const express = require("express")
const bodyParser = require('body-parser')

const app = express();
const PORT = 8000;

const jwt = require('jsonwebtoken');
const crypto = require('crypto');
crypto.randomBytes(24);
const SECRET_KEY = crypto.randomBytes(24).toString('hex');

var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use(cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type', 'Authorization'],
}));

async function run() {
    try {
        // MongoDB bağlantısını oluştur
        const client = new MongoClient(uri, {
            serverApi: {
                version: ServerApiVersion.v1,
                strict: true,
                deprecationErrors: true,
            }
        });

        // MongoDB bağlan
        await client.connect();
        console.log("MongoDB'ye başarıyla bağlandı");

        // MongoDB bağlantısı üzerinden Express uygulamasını başlat
        app.listen(PORT, () => {
            console.log(`Express.js backend server is running on port ${PORT}`);
        });

        // Login rotası
        app.post('/login', jsonParser, async (req, res) => {
            const { username, password } = req.body;

            // Kullanıcı bilgilerini kontrol et
            if (!username || !password) {
                return res.status(200).json({ message: 'Kullanıcı adı ve şifre boş bırakılamaz!' });
            }

            // MongoDB'de kullanıcıyı bul
            const user = await client.db("TiyatroApp").collection("users").findOne({ username, password });

            // Kullanıcı bulunduysa başarılı bir yanıt gönderin
            if (user) { 
                const token = jwt.sign({ username: user.username }, SECRET_KEY, {
                    expiresIn: '1d' // bir gün
                });

                return res.status(200).json({ 
                    message: 'Giriş başarılı!',
                    user: { username: username },
                    token: token
                });
            } else {
                // Kullanıcı bulunamazsa hata mesajı gönderin
                return res.status(200).json({ message: 'Yanlış kullanıcı adı veya şifre girdiniz!' });
            }
        });

        app.post('/register', jsonParser , async (req, res) => {
            const { username, email, password, confirmPassword} = req.body;
            // Kullanıcı bilgilerini kontrol et
            if (!username || !email || !password || !confirmPassword) {
                return res.status(400).json({ message: 'Kullanıcı adı, email, şifre ve şifre tekrarı gerekli!' });
                }

                // MongoDB'de kullanıcıyı ara
                const existingUser = await client.db("TiyatroApp").collection("users").findOne({ username });

                // Kullanıcı adının benzersiz olup olmadığını kontrol et
                if (existingUser) {
                    return res.status(400).json({ message: 'Böyle bir kullanıcı zaten mevcut!' });
                }

                // Yeni kullanıcıyı MongoDB'ye ekle
                await client.db("TiyatroApp").collection("users").insertOne({ username, password, email });

                // Başarılı yanıtı gönder
                res.status(201).json({ message: 'Kayıt başarılı!' });

        });
        
        app.post('/getUserInfo', jsonParser, async (req, res) => {
            const { username } = req.body;
            const user = await client.db("TiyatroApp").collection("users").findOne({ username });
            const reservations = await client.db("TiyatroApp").collection("reservations").find({ username })
                .project({ _id: 0, playName: 1, seatNumber: 1, ticketType: 1, ticketPrice: 1, referenceNumber: 1, purchaseDate: 1 }).toArray();;

            if (user) { 
                return res.status(200).json({ 
                    user: { username: user.username },
                    email: { email: user.email },
                    reservations: reservations,
                });          
            }
        });

        app.post('/saveSeatNumbers', jsonParser, async (req, res) => {
            const { username, playName, selectedSeats, normalTicket, studentTicket} = req.body;
            const purchaseDate = new Date().toLocaleString('tr-TR');

            let normalTicketCount = parseInt(normalTicket);
            let studentTicketCount = parseInt(studentTicket);

            for (const seatNumber of selectedSeats) {
                const referenceNumber = generateReferenceNumber();
                let ticketType;

                if (normalTicketCount > 0) {
                    ticketType = 'Tam';
                    ticketPrice = "50";
                    normalTicketCount--;
                } else if (studentTicketCount > 0) {
                    ticketType = 'Öğrenci';
                    ticketPrice = "30";
                    studentTicketCount--;
                }

                await client.db("TiyatroApp").collection("reservations").insertOne({ username, playName, seatNumber, ticketType, ticketPrice, referenceNumber, purchaseDate });
            }
        });

        app.post('/getOccupiedSeats', jsonParser, async (req, res) => {
            const { playName } = req.body;
        
            const occupiedSeats = await client.db("TiyatroApp").collection("reservations").find({ playName }).toArray();
            const seatNumbers = occupiedSeats.map(seat => seat.seatNumber);

            return res.status(200).json({
                occupiedSeats: seatNumbers
            });
        });

        function generateReferenceNumber() {
            const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ01234567890123456789';
            let referenceNumber = '';
            for (let i = 0; i < 6; i++) {
                referenceNumber += characters.charAt(Math.floor(Math.random() * characters.length));
            }
            return referenceNumber;
        }

    } catch (error) {
        console.error('Error:', error);
    }
}

run().catch(console.dir);

/*         await client.db("TiyatroApp").collection('users').insertMany([
            { 'username': 'abc', 'email': "101", 'password': "223" },
            { 'username': 'abcdd', 'email': "102", 'password': "242" },
            { 'username': 'abc121', 'email': "103", 'password': "222" },
            { 'username': 'abcqq', 'email': "104", 'password': "242" },
          ]);
        const users = await client.db("TiyatroApp").collection("users").find({}).toArray();


       
        console.log(users); */