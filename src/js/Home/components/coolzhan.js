const {
    CoolZhanListFirst,
    CoolZhanListSecond,
    CoolZhanListThird } = require('./data/coolzhan.json')

console.log(
    CoolZhanListFirst,
    CoolZhanListSecond,
    CoolZhanListThird)

const coolzhan = new Vue({
    el: "#coolZhan",
    data: {
        CoolZhanListFirst,
        CoolZhanListSecond,
        CoolZhanListThird
    }
})

module.exports = {
    coolzhan
}