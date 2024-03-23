
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://admin:123@cluster0.mvnhpto.mongodb.net/TiyatroApp?retryWrites=true&w=majority";

var express = require("express")
const app = express();
const PORT = process.env.PORT || 27117;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });

async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();
        // Send a ping to confirm a successful connection
        await client.db("TiyatroApp").command({ ping: 1 });
        app.get('/database', (req, res) => {
            res.send('Express.js backend server is running!');
        });
    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
}
run().catch(console.dir);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

app.get('/', (req, res) => {
    res.send('Express.js backend server is running!');
  });
  


/*         await client.db("TiyatroApp").collection('users').insertMany([
            { 'username': 'abc', 'email': "101", 'password': "223" },
            { 'username': 'abcdd', 'email': "102", 'password': "242" },
            { 'username': 'abc121', 'email': "103", 'password': "222" },
            { 'username': 'abcqq', 'email': "104", 'password': "242" },
          ]);
        const users = await client.db("TiyatroApp").collection("users").find({}).toArray();


       
        console.log(users); */