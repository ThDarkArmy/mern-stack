const express = require('express');
const app = express();
const cors = require('cors');
require('./db/conn');

app.use(express.json());
app.use(cors());
const PORT = process.env.PROCESS || 5000;

app.use(require('./router/auth'));

app.listen(PORT, () =>{
    console.log(`server is running at port no ${PORT}`);
})  


