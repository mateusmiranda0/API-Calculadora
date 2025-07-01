const express = require("express");
const CalcController = require("../controller/calcController");

const router = express.Router();

router.get('/soma',CalcController.soma);

router.post('/subtracao',CalcController.subtracao);

router.get('/multiplicacao/:num1/:num2',CalcController.multiplicacao);

router.post('/divisao',CalcController.divisao);

module.exports = router;