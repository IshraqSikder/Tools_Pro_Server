const express = require('express')
const app = express()
require('dotenv').config()
const cors = require('cors')
const port = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

app.post('/login',(req,res)=>{
    const user = req.body;
    console.log(user);
})

app.post('/register',(req,res)=>{
    const user = req.body;
    console.log(user);
})

app.get('/', (req, res) => {
  res.send('Server is running')
})

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
})