const conn = require('./db');
const func = require('./functions');

const crud = (res, sql, prm = [], msg) => {

    conn.query(sql, prm, (error, results, fields) => {
    
        if(error) { res.send(error); }
        else if(msg) { res.send(msg); }
        else { res.send(results); }
    })
}

module.exports = crud;