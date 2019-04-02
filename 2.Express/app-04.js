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

// Route handler
app.get('/', (req, res) => res.send('Hello D.Com!'))
app.get('/hello/a', (req, res) => res.send('Hello From A!'))
app.get('/hello/:name', (req, res) => {
    const name = req.params.name
    res.send(`Hello! ${name}!`)
})


// express 서버 실행, 8000번 포트 사용
app.listen(8000, () => console.log('서버가 8000번 포트에서 실행 중 입니다.'))