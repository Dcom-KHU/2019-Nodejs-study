// http 모듈 : http 통신과 관련된 모듈을 가지고 있다.
const http = require('http')


/*
http.createServer :
콜백 함수로 request, response 파라미터를 가진다.
request는 요청과 관련된 객체를 가진다.
response는 응답과 관련된 객체를 가진다.
*/
http.createServer((request, response) => {
    response.statusCode = 200
    response.setHeader('Content-Type', 'text/plain')
    response.end('Hello World')
}).listen(3000)  // 3000번 포트에서 응답을 기다린다.

console.log('Server running at http://127.0.0.1:3000/')

