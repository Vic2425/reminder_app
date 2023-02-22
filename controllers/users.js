const mysql = require('mysql2');
const pool = require('../mysql/connection');
const { errors } = require('../mysql/error');
// const userData = require('../DB/users.sql')

const getAllUsers = (req, res) => {
    pool.query("SELECT * FROM appusers", (err, rows) => {
        if (err) return errors(res, err);
        return res.json(rows);
    })
}

const getUserById = (req, res) => {
    let sql = "SELECT * FROM ?? WHERE ?? = ?";
    let rep = ['appusers', 'id', req.params.id];
    sql = mysql.format(sql, rep);

    pool.query(sql, (err, rows) => {
        if (err) return errors(res, err);
        return res.json(rows);
    })

}

module.exports = {
    getAllUsers,
    getUserById
}