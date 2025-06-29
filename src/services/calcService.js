class CalcService{
    static soma(num1,num2){
        return num1 + num2;
    }
    static subtracao(num1,num2){
        return num1 - num2;
    }
    static multiplicacao(num1,num2){
        return num1 * num2;
    }
    static divisao(num1,num2){
        if(num2 === 0){
            throw new Error("Divisão por zero!");
        }
        return num1 / num2;
    }
}

module.exports = CalcService;