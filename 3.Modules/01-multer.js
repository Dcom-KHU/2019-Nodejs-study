// npm install morgan dotenv
// 위 두 명령어를 터미널에서 실행해 주세요.
//

// express 모듈 가져오기
const express = require('express')
const app = express()
const multer = require('multer')
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, __dirname + '/uploads')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname + '-' + Date.now())
    }
})
const upload = multer({storage: storage})

app.get('/upload', (req, res) => {
    res.sendFile(__dirname + '/static/upload.html')
})
app.post('/upload', upload.single('file'), (req, res) => {
    console.log(req.file)  // file 정보 출력
    res.json(req.file)
})
app.listen(8000, () => console.log('서버가 8000번 포트에서 실행 중 입니다.'))