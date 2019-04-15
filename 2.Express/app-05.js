// Response method
// https://poiemaweb.com/express-basics#34-response-method

const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Hello D.Com!'))
app.get('/403', (req, res) => res.status(403).send('Forbidden'))
app.get('/json', (req, res) => res.json({message: 'D.Com'}))
app.get('/json/403', (req, res) => res.status(403).json({message: 'Forbidden'}))
app.get('/index', (req, res) => res.redirect('/'))
app.get('/hello', (req, res) => res.sendFile(__dirname + '/static/upload.html'))
app.use('/static', express.static('static'))

app.listen(8000, () => console.log('서버가 8000번 포트에서 실행 중 입니다.'))