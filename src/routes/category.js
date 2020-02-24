const express = require('express');
const router = express.Router();
const crud = require('../crud');
const func = require('../functions');

// GET All and POST Item
router.route('/')
    .get((req, res) => {

        const sql = 'SELECT * FROM category';

        crud(res, sql);
    })
    .post((req, res) => {

        if(!req.body.name) { throw 'Attribute name is required to insert a category.'; }

        // Create url slug
        req.body.url = !!req.body.url ? func.urlSlug(req.body.url) : func.urlSlug(req.body.name);

        const sql = 'INSERT INTO category (name, url) VALUES (?,?)';
        const prm = [req.body.name, req.body.url];
        const msg = {code: 'SUCCESS', sqlMessage: 'Inserted record'};

        crud(res, sql, prm, msg);
    })
;

// GET Item, UPDATE Item and DELETE Item
router.route('/:id')
    .get((req, res) => {

        const sql = 'SELECT * FROM category WHERE id_category = ?';
        const prm = [req.params.id];

        crud(res, sql, prm);
    })
    .put((req, res) => {

        if(!req.body.name && !req.body.url) { 
            throw 'Attributes name or url is required to update a category.'; 
        }

        // Attributes with update permission
        const attrToUpdate = ['name', 'url'];
        let sql = 'UPDATE category SET updatedAt = ?,';
        const prm = [func.mysqlDateTime()];

        // Create url slug when not received
        if(req.body.name && !req.body.url) {
            req.body.url = func.urlSlug(req.body.name);
        }
        
        // Create sql statement and define parameters
        Object.entries(req.body).forEach((item, idx) => {
            
            let [attr, val] = item;

            if(attrToUpdate.includes(attr))
            {
                sql +=  ` ${attr} = ?,`;
                prm.push(val);
            }
        });
        
        sql = `${sql.substr(0, (sql.length - 1))} WHERE id_category = ?`;
        prm.push(req.params.id)

        const msg = {code: 'SUCCESS', sqlMessage: 'Updated record'};

        crud(res, sql, prm, msg);
    })
    .delete((req, res) => {

        const sql = 'DELETE FROM category WHERE id_category = ?';
        const prm = [req.params.id];
        const msg = {code: 'SUCCESS', sqlMessage: 'Deleted record'};

        crud(res, sql, prm, msg);
    })
;

module.exports = router;