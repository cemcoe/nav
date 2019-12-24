const { mingZhanList } = require('./data/mingzhan.json')

const mingzhan = new Vue({
    el: "#mingzhan",
    data: {
        mingZhanList
    }
})

module.exports = {
    mingzhan
}