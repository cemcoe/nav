const exploreZhan = [{
    url: "https://zh.wikipedia.org/",
    title: "维基百科 | 自由的百科全书",
}, {
    url: "https://www.tofugu.com/",
    title: "Tofugu | A Japanese Culture & Language Blog",
}, {
    url: "https://www.naver.com/",
    title: "네이버 메인에서 다양한 정보와 유용한 컨텐츠를 만나 보세요",
}, {
    url: "https://www.wuzuowei.net",
    title: "无作为 | 分享不仅仅是一种态度！",
}, {
    url: "https://www.sigure.tw/",
    title: "時雨の町 | 日文學習園地",
}, {
    url: "https://v.jlszyy.org/",
    title: "达达兔电影网",
}]


const explorezhan = new Vue({
    el: "#exploreZhan",
    data: {
        exploreZhan
    }
})

module.exports = {
    explorezhan
}