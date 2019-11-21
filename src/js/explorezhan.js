const exploreZhan = [{
    url: "https://zh.wikipedia.org/",
    title: "维基百科 | 自由的百科全书",
    icon: "https://zh.wikipedia.org/static/apple-touch/wikipedia.png"
}, {
    url: "https://www.tofugu.com/",
    title: "Tofugu | A Japanese Culture & Language Blog",
    icon: "https://www.tofugu.com/apple-touch-icon-152x152-precomposed.png"
}, {
    url: "https://www.naver.com/",
    title: "네이버 메인에서 다양한 정보와 유용한 컨텐츠를 만나 보세요",
    icon: "https://s.pstatic.net/static/www/mobile/edit/2016/0705/mobile_212852414260.png"
}, {
    url: "https://www.wuzuowei.net",
    title: "无作为 | 分享不仅仅是一种态度！",
    icon: "https://www.wuzuowei.net/favicon.ico"
}, {
    url: "https://www.sigure.tw/",
    title: "時雨の町 | 日文學習園地",
    icon: "https://www.sigure.tw/templates/ol_transparent2/images/favicon.ico"
}, {
    url: "http://www.sssoou.com/",
    title: "telegram频道搜索",
    icon: "#"
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