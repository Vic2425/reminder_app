const mysql = require('mysql2');
const pool = require('../mysql/connection');
const { errors } = require('../mysql/error');

const getAllContacts = (req, res) => {
    pool.query("SELECT * FROM userscontact", (err, rows) => {
        if (err) return errors(res, err);
        return res.json(rows);
    })
}

const getContactById = (req, res) => {
    let sql = "SELECT * FROM ?? WHERE ?? = ?";
    let rep = ['userscontact', 'id', req.params.id];
    sql = mysql.format(sql, rep);

    pool.query(sql, (err, rows) => {
        if (err) return errors(res, err);
        return res.json(rows);
    })

}

const deleteContactById = (req, res) => {
    let sql = "DELETE FROM ?? WHERE ?? = ?";
    let rep = ['userscontact', 'id', req.params.id];
    sql = mysql.format(sql, rep);

    pool.query(sql, (err, rows) => {
        if (err)  return errors(res, err);
        return res.send("User contact deleted!")
    })
}

module.exports = {
    getAllContacts,
    getContactById,
    deleteContactById
}