
/*************************** [bundle] ****************************/
// Original file:./src/pages/type-practice/index.js
/*****************************************************************/
window.__pkg__bundleSrc__['83']=function(){
    var __pkg__scope_bundle__={};
    var __pkg__scope_args__;
    __pkg__scope_args__=window.__pkg__getBundle('231');
var template =__pkg__scope_args__.default;

__pkg__scope_args__=window.__pkg__getBundle('232');


__pkg__scope_bundle__.default= function (obj) {

    return {
        name: "type-practice",
        render: template,
        beforeFocus: function () {
            document.getElementsByTagName('title')[0].innerText = "金山打字" + window.systeName;
            document.getElementById('icon-logo').setAttribute('href', './type-practice/logo.png');
        },
        mounted: function () {

        },
        methods: {
            openDialog: function (event, target) {
                alert("非常抱歉，时间问题，此功能未完成~");
            }
        }
    };
};

    return __pkg__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/pages/type-practice/index.html
/*****************************************************************/
window.__pkg__bundleSrc__['231']=function(){
    var __pkg__scope_bundle__={};
    var __pkg__scope_args__;
    __pkg__scope_bundle__.default= [{"type":"tag","name":"root","attrs":{},"childNodes":[1,9]},{"type":"tag","name":"header","attrs":{"ui-dragdrop:desktop":""},"childNodes":[2,4]},{"type":"tag","name":"h2","attrs":{},"childNodes":[3]},{"type":"text","content":"金山打字","childNodes":[]},{"type":"tag","name":"div","attrs":{"class":"win-btns"},"childNodes":[5,7]},{"type":"tag","name":"button","attrs":{"class":"min","ui-on:click.stop":"$minView"},"childNodes":[6]},{"type":"text","content":"最小化","childNodes":[]},{"type":"tag","name":"button","attrs":{"class":"close","ui-on:click.stop":"$closeView"},"childNodes":[8]},{"type":"text","content":"关闭","childNodes":[]},{"type":"tag","name":"div","attrs":{"class":"content"},"childNodes":[10,12,14]},{"type":"tag","name":"span","attrs":{"class":"single btn","ui-on:click":"openDialog","tag":"single"},"childNodes":[11]},{"type":"text","content":"键盘练习","childNodes":[]},{"type":"tag","name":"span","attrs":{"class":"english btn","ui-on:click":"openDialog","tag":"english"},"childNodes":[13]},{"type":"text","content":"英文打字","childNodes":[]},{"type":"tag","name":"span","attrs":{"class":"pinyin btn","ui-on:click":"openDialog","tag":"pinyin"},"childNodes":[15]},{"type":"text","content":"拼音打字","childNodes":[]}]

    return __pkg__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/pages/type-practice/index.scss
/*****************************************************************/
window.__pkg__bundleSrc__['232']=function(){
    var __pkg__scope_bundle__={};
    var __pkg__scope_args__;
    var styleElement = document.createElement('style');
var head = document.head || document.getElementsByTagName('head')[0];
styleElement.innerHTML = "\n [page-view=\"type-practice\"]{\n\npadding-bottom: 20px;\n\nwidth: 800px;\n\nleft: calc(50vw - 400px);\n\ntop: calc(50vh - 200px);\n\n}\n\n [page-view=\"type-practice\"][focus=\"no\"]>header{\n\nbackground-color: #fafafa;\n\n}\n\n [page-view=\"type-practice\"]>header{\n\ntext-align: left;\n\nline-height: 50px;\n\nbackground-color: #ffffff;\n\nmargin-bottom: 30px;\n\nbox-shadow: -3px 3px 20px #d2d2db;\n\n}\n\n [page-view=\"type-practice\"]>header>h2{\n\ncolor: #000000;\n\nfont-size: 20px;\n\npadding-left: 50px;\n\nbackground-image: url(\"./type-practice/logo.png\");\n\nbackground-position: 10px center;\n\nbackground-repeat: no-repeat;\n\nbackground-size: auto 60%;\n\nfont-family: cursive;\n\ndisplay: inline-block;\n\n}\n\n [page-view=\"type-practice\"]>div.content{\n\ntext-align: center;\n\npadding: 50px 0;\n\n}\n\n [page-view=\"type-practice\"]>div.content>span.btn{\n\ndisplay: inline-block;\n\nwidth: 100px;\n\nheight: 100px;\n\nbox-shadow: -3px 3px 20px #d2d2db;\n\nmargin: 50px;\n\nbackground-repeat: no-repeat;\n\nbackground-position: center center;\n\npadding-top: 100px;\n\nline-height: 2em;\n\ncursor: pointer;\n\n}\n\n [page-view=\"type-practice\"]>div.content>span.btn:hover{\n\noutline: 1px solid white;\n\ntext-decoration: underline;\n\n}\n\n [page-view=\"type-practice\"]>div.content>span.btn.single{\n\nbackground-image: url('./type-practice/single.png');\n\n}\n\n [page-view=\"type-practice\"]>div.content>span.btn.english{\n\nbackground-image: url('./type-practice/english.png');\n\n}\n\n [page-view=\"type-practice\"]>div.content>span.btn.pinyin{\n\nbackground-image: url('./type-practice/pinyin.png');\n\n}\n";
styleElement.setAttribute('type', 'text/css');head.appendChild(styleElement);

    return __pkg__scope_bundle__;
}
