// npm install morgan dotenv
// 위 두 명령어를 터미널에서 실행해 주세요.
//

// express 모듈 가져오기
require('dotenv').config()
const express = require('express')
const app = express()
const morgan = require('morgan')
const pool = require('./mysql-pool')


app.use(morgan('[:date[iso]] :method :status :url :response-time(ms) :user-agent'))

/*
create database test;

use test;

CREATE TABLE IF NOT EXISTS USER (
    ID INT UNIQUE AUTO_INCREMENT,
    USERID VARCHAR(16) UNIQUE,
    PASSWORD VARCHAR(64),
    EMAIL VARCHAR(32) unique,
    NAME VARCHAR(16),

    PRIMARY KEY(ID)
);

insert into user value(userid, password, email, name)
values (1, 123, a@a.com, 1);

insert into user value(userid, password, email, name)
values (2, 123, b@b.com, 1);

insert into user value(userid, password, email, name)
values (3, 123, c@c.com, 1);

insert into user value(userid, password, email, name)
values (4, 123, d@d.com, 1);
*/

app.get('/', async (req, res) => {
    const [rows, fields] = await pool.query("SELECT * FROM USERS")
    res.json(rows)
})
app.listen(process.env.PORT || 8000, () => console.log('서버가 8000번 포트에서 실행 중 입니다.'))