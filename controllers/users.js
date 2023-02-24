const mysql = require('mysql2');
const pool = require('../mysql/connection');
const { errors } = require('../mysql/error');

const getAllUsers = (req, res) => {
    pool.query("SELECT * FROM appusers", (err, rows) => {
        if (err) return errors(res, err);
        console.log(rows)
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

const updateUserById = (req, res) => {
    let sql = "UPDATE appusers SET first_name = ?, last_name = ? WHERE id = ?";
    let rep = [req.body.first_name, req.body.last_name, req.params.id];
    sql = mysql.format(sql, rep);

    pool.query(sql, (err, rows) => {
        if (err) return errors(res, err);
        return res.json(rows);
    })
}

const addUser = (req, res) => {
    let sql = "INSERT INTO appusers (first_name, last_name) VALUES (?, ?)";
    let rep = [req.body.first_name, req.body.last_name];
    sql = mysql.format(sql, rep);

    pool.query(sql, (err, rows) => {
        if (err) return errors(res, err);
        return res.send('A new user added!')
    })
}

const deleteUserById = (req, res) => {
    let sql = "DELETE FROM ?? WHERE ?? = ?";
    let rep = ['appusers', 'id', req.params.id];
    sql = mysql.format(sql, rep)

    pool.query(sql, (err, rows) => {
        if (err) return errors(res, err);
        return res.send('User deleted!')
    })
}

module.exports = {
    getAllUsers,
    getUserById,
    updateUserById,
    addUser,
    deleteUserById
}