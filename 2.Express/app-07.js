const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const session = require('express-session')


app.set('view engine','ejs');
app.set('views','./view');

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.use(session({
    secret: '@#@$MYSIGN#@$#$', // Secret Key
    resave: false,  // session을 언제나 저장할지 결정
    saveUninitialized: true  // 새로 생겼지만 변경 되지 않은 세션을 Uninitialized 라고 하는데 그냥 저장하는게 좋다.
}))


// Index page
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/static/login.html')
})


// Login
app.post('/', (req, res) => {
    const id = req.body.id
    const password = req.body.password

    const userInfo = [{  // 유저 정보
        id: 'khu',
        password: 'khuuniv',
        name: '경희대학교'
    }, {
        id: 'dcom',
        password: 'dcom58235',
        name: '디닷컴'
    }]

    for (let i = 0; i < 2; i++) {
        if (userInfo[i].id === id && userInfo[i].password === password) {
            req.session.userId = userInfo[i].id
            req.session.name = userInfo[i].name
            res.end('Login Success!')
        }
    }
    res.end('Login Failed!')
})

// 로그인 시, ejs로 세션 정보 렌더링, 아니면 로그인으로 redirect
app.get('/status', (req, res) => {
    const userId = req.session.userId
    const name = req.session.name


    if (!userId || !name) {
        res.redirect('/')
    }
    else {
        res.render('login', {
            id: userId,
            name: name
        })
    }

})

// 로그 아웃
app.get('/logout', (req, res) => {
    req.session.destroy(function(err){
        if(err){
            console.log(err);
        }else{
            res.redirect('/');
        }
    })
})

app.listen(8000, () => console.log('서버가 8000번 포트에서 실행 중 입니다.'))