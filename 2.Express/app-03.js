// npm init -y
// npm install express
// 위 두 명령어를 터미널에서 실행해 주세요.

// express, body-parser 모듈 가져오기
const express = require('express')
const bodyParser = require('body-parser')

// express 객체 호출
const app = express()

// x-www-form-urlencoded, application/json 를 사용 할 수 있도록 미들 웨어 등록
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

// 한 요청에 함수가 여러개가 올 수도 있다.
app.get('/', (req, res, next) => {
    const user = req.query.user
    console.log(`로그인 유저: ${user}`)
    next()
}, (req, res) => {
    const message = req.query.message
    res.send(`당신의 메세지: ${message}`)
})

// express 서버 실행, 8000번 포트 사용
app.listen(8000, () => console.log('서버가 8000번 포트에서 실행 중 입니다.'))