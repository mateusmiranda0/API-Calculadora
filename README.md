# API de Calculadora em Node.js

API REST desenvolvida usando Node.js e Express, expondo endpoints para quatro operações simples: soma, subtração, multiplicação e divisão.

# Como rodar a API

## 1. Clonar o Repositório 

`git clone [LINK_DO_SEU_REPOSITORIO]`<br>
`cd Calculadora`

## 2. Instalar as Dependências (Express)

`npm install `

## 3. Inicie a API

`node src/app.js` <br>
Aparecerá uma mensagem no console: "Servidor rodando na porta 3000"

# Como testar a API

Utilize a ferramenta Insomnia ou Postman para testes dos endpoints.
A URL base para as operações são:
-> http://localhost:3000/soma?num1=10&num2=10  (Query Params) - (Exemplo)
-> http://localhost:3000/subtracao             (Utilize body JSON)
-> http://localhost:3000/multiplicacao/:10/:10 (URL Params) - (Exemplo)
-> http://localhost:3000/divisao               (Utilize body JSON)