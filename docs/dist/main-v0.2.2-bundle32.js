
/*************************** [bundle] ****************************/
// Original file:./src/mobile/echarts/index.js
/*****************************************************************/
window.__pkg__bundleSrc__['87']=function(){
    var __pkg__scope_bundle__={};
    var __pkg__scope_args__;
    __pkg__scope_args__=window.__pkg__getBundle('237');
var template =__pkg__scope_args__.default;

__pkg__scope_args__=window.__pkg__getBundle('238');


__pkg__scope_bundle__.default= function (obj) {
    return {
        name: "echarts",
        render: template,
        data: {

        },
        beforeFocus: function () {
            document.getElementsByTagName('title')[0].innerText = "可视化图表" + window.systeName;
            document.getElementById('icon-logo').setAttribute('href', './echarts/logo.png');
        }
    };
};

    return __pkg__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/mobile/echarts/index.html
/*****************************************************************/
window.__pkg__bundleSrc__['237']=function(){
    var __pkg__scope_bundle__={};
    var __pkg__scope_args__;
    __pkg__scope_bundle__.default= [{"type":"tag","name":"root","attrs":{},"childNodes":[1]},{"type":"tag","name":"header","attrs":{"class":"top-title"},"childNodes":[2]},{"type":"tag","name":"div","attrs":{},"childNodes":[3,5,7]},{"type":"tag","name":"button","attrs":{"class":"goback","ui-on:click.stop":"$minView"},"childNodes":[4]},{"type":"text","content":"返回","childNodes":[]},{"type":"tag","name":"h2","attrs":{},"childNodes":[6]},{"type":"text","content":"可视化图表","childNodes":[]},{"type":"tag","name":"button","attrs":{"class":"close","ui-on:click.stop":"$closeView"},"childNodes":[8]},{"type":"text","content":"关闭","childNodes":[]}]

    return __pkg__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/mobile/echarts/index.scss
/*****************************************************************/
window.__pkg__bundleSrc__['238']=function(){
    var __pkg__scope_bundle__={};
    var __pkg__scope_args__;
    var styleElement = document.createElement('style');
var head = document.head || document.getElementsByTagName('head')[0];
styleElement.innerHTML = "";
styleElement.setAttribute('type', 'text/css');head.appendChild(styleElement);

    return __pkg__scope_bundle__;
}
