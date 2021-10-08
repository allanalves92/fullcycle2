const express = require('express')
const app = express()
const port = 3000
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
};

const mysql = require('mysql')
const connection = mysql.createConnection(config)

const sqlInsert = `INSERT INTO people(name) values ('Allan')`
const sqlSelect = `SELECT * FROM people`
var name = [];

connection.query(sqlInsert)

connection.query(sqlSelect, function (err, rows, fields) {
    if (err) throw err;
    setValue(rows);
});
 
function setValue(value) {
  name = value;
}

connection.end() 

app.get('/', (req, res) => {
    res.send('<h1>Full Cycle Rocks!</h1>' + "Registro inserido com id: " + name[0].id + " e nome: " + name[0].name)
})

app.listen(port, () => {
    console.log('Rodando na porta ' + port)
})