const express = require('express');
const app = express();
const { MongoClient } = require('mongodb');
const cors = require('cors');
require('dotenv').config()
const port = process.env.PORT || 5000 ;

// user = ema-jhon
// pass = YfIt9p3NXzSIqVs1

// Middleware 
app.use(cors());
app.use(express.json());

// MongoDB Connection 
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.h80zj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });


app.get('/', (req, res)=>{
    res.send('Ema-Jhon Server Is Running')
})

console.log(uri);

async function run (){
    try{
        await client.connect();
        console.log('DB connected Successfully');
    }
    finally{
        // await client.close(); 
    }
}
run().catch(console.dir)


app.listen(port, ()=>{
    console.log('Server Is Running at Port', port);
})