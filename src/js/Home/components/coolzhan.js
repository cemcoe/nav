const CoolZhanListFirst = [{
    url: "https://www.dcard.tw/f",
    name: "Dcard"
}, {
    url: "https://aotu.io/cates/Web%E5%BC%80%E5%8F%91/index.html",
    name: "aoto"
}, {
    url: "https://learn.co/tracks/bootcamp-prep-v2",
    name: "prep"
}, {
    url: "https://magi.com/",
    name: "magi"
}]

const CoolZhanListSecond = [{
    url: "https://m.weibo.cn/",
    name: "weibo"
}, {
    url: "https://stackoverflow.com/",
    name: "SF"
}, {
    url: "https://www.okzy.co/?m=vod-type-id-3.html",
    name: "ok"
}, {
    url: "https://www.freecodecamp.org/",
    title: "The Home of the Hacker - Malware, Reverse Engineering, and Computer Science",
    name: "camp"
}]

const CoolZhanListThird = [{
    url: "https://learn-anything.xyz/",
    name: "anything"
}, {
    url: "https://bbs.nga.cn/",
    name: "Nga"
}, {
    url: "https://qiita.com/",
    name: "Qiita"
}, {
    url: "https://hacpai.com/",
    name: "黑派"
}]


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