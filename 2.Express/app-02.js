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

// '/' 경로로 GET 요청이 들어올 시  'Hello D.Com!' 문자열 전송
app.get('/', (req, res) => res.send('Hello D.Com!'))

// '/' 경로로 POST 요청이 들어올 시 받은 입력 값을 그대로 반환
app.post('/', (req, res) => {
    const message = req.body.message
    res.send(`입력한 메세지 : ${message}`)
})

// express 서버 실행, 8000번 포트 사용
app.listen(8000, () => console.log('서버가 8000번 포트에서 실행 중 입니다.'))