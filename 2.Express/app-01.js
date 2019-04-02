// npm init -y
// npm install express
// 위 두 명령어를 터미널에서 실행해 주세요.

// express 모듈 가져오기
const express = require('express')

// express 객체 호출
const app = express()

// '/' 경로로 GET 요청이 들어올 시  'Hello D.Com!' 문자열 전송
app.get('/', (req, res) => res.send('Hello D.Com!'))

// express 서버 실행, 8000번 포트 사용
app.listen(8000, () => console.log('서버가 8000번 포트에서 실행 중 입니다.'))