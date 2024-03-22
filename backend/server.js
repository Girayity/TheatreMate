
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://admin:123@cluster0.mvnhpto.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

var express = require("express")
const app = express();
const PORT = process.env.PORT || 3001;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });

// Sunucuyu başlatmadan önce MongoDB'ye bağlan
async function connectMongoDB() {
    try {
      // MongoDB'ye bağlan
      await client.connect();
      console.log('MongoDB Connected Successfully');
    } catch (error) {
      console.error('Error Connecting to MongoDB:', error);
    }
}
connectMongoDB();
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

app.get('/', (req, res) => {
    res.send('Express.js backend server is running!');
  });
  
  app.get('/database', (req, res) => {
    res.send('okito');

});