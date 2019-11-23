const CoolZhanListFirst = [{
    url: "https://www.dcard.tw/f",
    name: "Dcard"
}, {
    url: "https://bbs.kafan.cn",
    name: "卡饭"
}, {
    url: "https://just998.com/baicai/meishi",
    name: "美食"
}, {
    url: "https://www.mgtv.com/",
    name: "芒果"
}]

const CoolZhanListSecond = [{
    url: "http://www.shouxb.com/",
    title: "86",
    name: "86"
}, {
    url: "https://stackoverflow.com/",
    name: "SF"
}, {
    url: "https://www.okzy.co/?m=vod-type-id-3.html",
    name: "ok"
}, {
    url: "https://e-hentai.org/",
    title: "The Home of the Hacker - Malware, Reverse Engineering, and Computer Science",
    name: "E站"
}]

const CoolZhanListThird = [{
    url: "https://www.pixiv.net/",
    name: "P站"
}, {
    url: "https://right.com.cn/FORUM/forum.php",
    name: "恩山"
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