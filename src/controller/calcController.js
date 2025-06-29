const joi = require("joi");
const CalcService = require("../services/calcService");

class CalcController{
    static async soma(req,res){
        const schema = joi.object({
            num1: joi.number().required(),
            num2: joi.number().required()
        });

        const {error,value} = schema.validate(req.query);

        if(error){
            return res.status(400).json({erro: "Parametros inválidos.",})
        }
        const {num1,num2} = value;

        const result = CalcService.soma(num1,num2);
        res.status(200).json({result});
   }
   static async subtracao(req,res){
        const schema = joi.object({
            num1: joi.number().required(),
            num2: joi.number().required()
        });

        const {error, value} = schema.validate(req.body);

        if(error){
            return res.status(400).json({erro: "Corpo inválido.",})
        }
        const {num1,num2} = value;

        const result = CalcService.subtracao(num1,num2);
        res.status(200).json({result});
   }
   static async multiplicacao(req,res){
        const schema = joi.object({
            num1: joi.number().required(),
            num2: joi.number().required()
        });

        const num1 = parseFloat(req.params.num1);
        const num2 = parseFloat(req.params.num1);

        const {error} = schema.validate({num1,num2});

        if(error){
            return res.status(400).json({erro: "Parametros inválido.",})
        }

        const result = CalcService.multiplicacao(num1,num2);
        res.status(200).json({result});
   }
   static async divisao(req,res){
        const schema = joi.object({
            num1: joi.number().required(),
            num2: joi.number().required().not(0).error(new Error("Divisao por 0!"))
        });

        const {error,value} = schema.validate(req.body);
    
        if(error){
            return res.status(400).json({error: "Corpo inválido.", details: error.details[0].message})
        }
        const {num1,num2} = value;
        try{
            const result = CalcService.divisao(num1,num2);
            res.status(200).json({result});
        } catch(err){
            res.status(400).json({error: err.message});
        }
    }
}

module.exports = CalcController;