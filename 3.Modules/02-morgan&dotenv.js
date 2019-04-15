// npm install morgan dotenv
// 위 두 명령어를 터미널에서 실행해 주세요.
//

// express 모듈 가져오기
const express = require('express')
const app = express()
const morgan = require('morgan')
require('dotenv').config()


app.use(morgan('[:date[iso]] :method :status :url :response-time(ms) :user-agent'))

app.get('/', (req, res) => {
    // res.json(process.env) : 보안상 미친 짓입니다. 하지 마세요
    res.json({
        port: process.env.PORT,
        secret_key: process.env.SECRET_KEY
    })
})
app.listen(process.env.PORT || 8888, () => console.log('서버가 8000번 포트에서 실행 중 입니다.'))