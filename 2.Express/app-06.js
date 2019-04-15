const express = require('express')
const app = express()
const helloRouter = express.Router()  // Router 객체 할당
const goodByeRouter = express.Router()
// https://www.w3schools.com/nodejs/nodejs_filesystem.asp


helloRouter.get('/', (req, res) => res.end('Hello!'))  // Router에 함수 등록
helloRouter.get('/json', (req, res) => res.json({message: 'Hello!'}))

goodByeRouter.get('/', (req, res) => res.end('Good Bye!'))
goodByeRouter.get('/json', (req, res) => res.json({message: 'Good Bye!'}))

app.use('/hello', helloRouter)  // Express 객체에서 Router 객체 사용캐 함
app.use('/goodbye', goodByeRouter)

app.listen(8000, () => console.log('서버가 8000번 포트에서 실행 중 입니다.'))