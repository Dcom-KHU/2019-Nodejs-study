const mymodule01 = require('./mymodule-01')
const mymodule02 = require('./mymodule-02')

module.exports = () => {
    console.log('mymodule01 이용 : ', mymodule01.func(mymodule01.name))
    console.log('mymodule02 이용 : ', mymodule02.func(mymodule02.name))
}