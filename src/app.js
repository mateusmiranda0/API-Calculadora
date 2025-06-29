const express = require("express");
const calcRoutes = require("./routes/calcRoutes");

const app = express();
const PORT = 3000;

app.use(express.json());

app.use("/calculadora",calcRoutes);

app.get('/',(req,res)=>{
    res.status(200).json({message: "API funcionando!"});
})

app.use((err,req,res,next)=>{
    console.error(err.stack);
    res.status(500).json({error: "Erro interno do servidor!"});
})

app.listen(PORT, ()=>{
    console.log(`Servidor rodando na porta ${PORT}`);
})