
const path = require('path');
// < Importa o MySQL >
const mysql = require('mysql2/promise');

// <só le oq ta dentro do .env" Extrai as informações do arquivo .env de forma segura>
require('dotenv').config({ path: path.resolve(__dirname, './.env') }); 

// < Cria a conexão com o banco de dados >
const pool = mysql.createPool(
    {
        host: process.env.HOST,
        port: process.env.PORT,
        database: process.env.DATABASE,
        user: process.env.USER,
        password: process.env.PASSWORD
    }
)

// process é reservado pela linguagem para extrair dados do .env 

module.exports = pool; // exportando módulo "pode exportar o sql para qualquer outro arquivo"

// pool = termo para piscina de conexões = cria diversas conexões com sql para manter o programa conectado

// A função do 'mysql' é fazer a conexão com o banco de dados