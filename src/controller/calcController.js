const CalcService = require("../services/calcService");

class CalcController{
    static async soma(req,res){
        const {num1,num2} = req.query;

        if(num1 === undefined || num2 === undefined || isNaN(Number(num1)) || isNaN(Number(num2))){
            return res.status(400).json({error: "Parametros Inválidos"});
        }

        const nNum1 = Number(num1);
        const nNum2 = Number(num2);
        const result = CalcService.soma(nNum1,nNum2);
        res.status(200).json({result})
   }
   static async subtracao(req,res){
        const {num1,num2} = req.body;

        if(num1 === undefined || num2 === undefined || typeof num1 !== 'number' || typeof num2 !== 'number'){
            return res.status(400).json({error: "Corpo da requisção Inválido"});
        }

        const result = CalcService.subtracao(num1,num2);
        res.status(200).json({result});
   }
   static async multiplicacao(req,res){
        const {num1,num2} = req.params;

        if(isNaN(Number(num1)) || isNaN(Number(num2))){
            return res.status(400).json({error: "Parametros Inválidos"});
        }

        const nNum1 = Number(num1);
        const nNum2 = Number(num2);
        const result = CalcService.multiplicacao(nNum1,nNum2);
        res.status(200).json({result})
   }
   static async divisao(req,res){
        const {num1,num2} = req.body;

        if(num1 === undefined || num2 === undefined || typeof num1 !== 'number' || typeof num2 !== 'number'){
            return res.status(400).json({error: "Corpo da requisção Inválido"});
        }

        if(num2 === 0){
            return res.status(400).json({error:"Divisão por 0!"});
        }

        const result = CalcService.divisao(num1,num2);
        res.status(200).json({result});
    }   
}

module.exports = CalcController;