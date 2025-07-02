const express = require("express");
const calcRoutes = require("./routes/calcRoutes");
const cors = require('cors')

const app = express();
const PORT = 3001;

app.use(cors())

app.use(express.json());

app.use("",calcRoutes);

app.get('/',(req,res)=>{
    res.status(200).json("Servidor Funcionando")
})

app.listen(PORT, ()=>{
    console.log(`Servidor rodando na porta ${PORT}`);
})