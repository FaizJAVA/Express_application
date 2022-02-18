const { response } = require('express');
const pool = require('./db.js');

module.exports = class User {
    constructor(name, email, password) {
        this.name = name;
        this.email = email;
        this.password = password;
    }

    userCheck() {
        return new Promise((resolve, reject) => {
            pool.getConnection((err, conn) => {
                if (!err) {
                    let sql = "select * from exuser1 where email=? and password=?"
                    conn.query(sql, [this.email, this.password], (err, result) => {
                        if (err)
                            reject(err);
                        else
                            resolve(result);
                    });
                }
                else
                    reject(err);
            });
        });
    }

    save() {
        return new Promise((resolve, reject) => {
            pool.getConnection((err, con) => {
                if (err)
                    reject(err);
                else {
                    let sql = "insert into exuser1(name,email,password) values(?,?,?)";
                    con.query(sql, [this.name, this.email, this.password], (err, result) => {

                        con.release();
                        if (err)
                            reject(err);
                        else
                            resolve(result);
                    });
                }
            });
        });
    }
}