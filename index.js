const express = require('express')
const app = express()
require('dotenv').config()
const cors = require('cors')
const port = process.env.PORT || 5000

app.use(cors())
app.use(express.json())


const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = `mongodb+srv://Ishraq_Sikder:rjBGGDiPaCZ8NHm7@ishn.o7skt.mongodb.net/?retryWrites=true&w=majority&appName=ISHN`;

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
    // await client.connect(); 
    const UsersCollection = client.db('ISHN').collection('users');

    app.post('/register',async(req,res)=>{
        const user = req.body;
        console.log(user);
        const result = await UsersCollection.insertOne(user)
        res.send(result)
    })
    
    app.get("/get-user", async (req, res) => {
      const result = await UsersCollection.find().toArray();
      res.send(result);
    });
    
    console.log("You successfully connected to MongoDB!");

  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.listen(port, () => {
  console.log("Server is running on ${port}")
  }
)