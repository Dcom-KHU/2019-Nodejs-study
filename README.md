# Node.js란?
Node.js는 C++ 기반 V8 엔진 위에서 동작하는 이벤트 처리 I/O 프레임워크로, 웹 서버와 같이 확장성 있는 네트워크 프로그램 제작을 위해 고안되었습니다. 서버 사이드 플랫폼이라고 이야기 해도 무방합니다.

우리는 이를 통해 간단한 서버를 만들어 실제 프로젝트에서 Node.js를 도입할 수 있도록 공부 해 보려고 합니다.

![Node.js](https://nodejs.org/static/images/logos/nodejs-new-pantone-black.png)

# 목차
1. Node.js에 대하여
2. Express란 무엇인가?
3. 요청/응답에 대하여
4. Postman으로 요청/응답 유닛 테스트 해보기
5. Router를 다루어 보자.
6. Cookie, Session에 대하여
7. Promise? async/await? (비동기에 대하여)
8. MySQL 연동해 보기
9. 나만의 블로그를 만들어 보자!
10. RESTFul Server를 만들어 보자!

# 필요한 사전 지식들
- JavaScript : <https://opentutorials.org/course/743>
- MySQL : <https://opentutorials.org/course/3161>
- Linux(선택적) : <https://opentutorials.org/course/2598>

# Node 맛보기
```javascript
const http = require('http'); // 1

http.createServer((request, response) => { // 2
  response.statusCode = 200;
  response.setHeader('Content-Type', 'text/plain');
  response.end('Hello World');
}).listen(3000); // 3

console.log('Server running at http://127.0.0.1:3000/');
```
