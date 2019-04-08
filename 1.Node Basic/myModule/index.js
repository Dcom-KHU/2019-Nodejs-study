const print = require('./print')

module.exports = (number) => {
    console.log(`Print ${number} Times`)
    for(let i = 0; i < number; i++) {
        print()
    }
}