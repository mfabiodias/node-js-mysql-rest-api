const express = require('express');
const router = express.Router();
const crud = require('../crud');
const func = require('../functions');

// GET All and POST Item
router.route('/')
    .get((req, res) => {

        const sql = 'SELECT * FROM product';

        crud(res, sql);
    })
    .post((req, res) => {

        if(!req.body.id_category) { throw 'Attribute id_category is required to insert a product.'; }
        else if(!req.body.name) { throw 'Attribute name is required to insert a product.'; }
        else if(!req.body.price) { throw 'Attribute price is required to insert a product.'; }

        // Create url slug
        req.body.url = !!req.body.url ? func.urlSlug(req.body.url) : func.urlSlug(req.body.name);

        const sql = 'INSERT INTO product (id_category, name, price, url) VALUES (?,?,?,?)';
        const prm = [req.body.id_category, req.body.name, req.body.price, req.body.url];
        const msg = {code: 'SUCCESS', sqlMessage: 'Inserted record'};

        crud(res, sql, prm, msg);
    })
;

// GET Item, UPDATE Item and DELETE Item
router.route('/:id')
    .get((req, res) => {

        const sql = 'SELECT * FROM product WHERE id_product = ?';
        const prm = [req.params.id];

        crud(res, sql, prm);
    })
    .put((req, res) => {

        if(!req.body.id_category && !req.body.name && !req.body.price && !req.body.url && !req.body.description) { 
            throw 'Attributes id_category, name, description, price or url is required to update a product.'; 
        }

        // Attributes with update permission
        const attrToUpdate = ['id_category','name','price','url','description'];
        let sql = 'UPDATE product SET updatedAt = ?,';
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
        
        sql = `${sql.substr(0, (sql.length - 1))} WHERE id_product = ?`;
        prm.push(req.params.id)

        const msg = {code: 'SUCCESS', sqlMessage: 'Updated record'};

        crud(res, sql, prm, msg);
    })
    .delete((req, res) => {

        const sql = 'DELETE FROM product WHERE id_product = ?';
        const prm = [req.params.id];
        const msg = {code: 'SUCCESS', sqlMessage: 'Deleted record'};

        crud(res, sql, prm, msg);
    })
;

module.exports = router;