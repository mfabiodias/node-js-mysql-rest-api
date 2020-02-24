const mysql = require('mysql');

const db_local = {
    host: 'localhost',
    user: 'crud',
    password: '123456',
    database: 'node_crud',
    port: '3306'
};

const db_remote = {
    host: 'spvunyfm598dw67v.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    user: 'h0hjv0j87vsiwp2j',
    password: 'lal5crnpytn5000e',
    database: 'fzv6qajui93hh80c',
    port: '3306'
};

const conn = mysql.createConnection(!!process.env.PORT ? db_remote : db_local);

conn.connect(err => {
    if(err) throw err

    console.log('Database connection succeded');
});

module.exports = conn;