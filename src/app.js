const express = require("express");
const calcRoutes = require("./routes/calcRoutes");

const app = express();
const PORT = 3000;

app.use(express.json());

app.use("",calcRoutes);

app.get('/',(req,res)=>{
    res.status(200).json({message: "API funcionando!"});
})

app.listen(PORT, ()=>{
    console.log(`Servidor rodando na porta ${PORT}`);
})