const { exploreZhan } = require('./data/explorezhan.json')

const explorezhan = new Vue({
    el: "#exploreZhan",
    data: {
        exploreZhan
    }
})

module.exports = {
    explorezhan
}