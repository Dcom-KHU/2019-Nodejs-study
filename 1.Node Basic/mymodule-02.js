// 다른 모듈들이 들어 가도 됨

// module.exports 로는 단 하나의 값을 할당 할 수 있다.
// ex) 원시 타입, 함수, 객체 등

module.exports = {
    name: '장연모',
    func: function (str) {
        return str + '는 최고의 교수다'
    }
}