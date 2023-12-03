
/*************************** [bundle] ****************************/
// Original file:./src/pages/type-practice/dialogs/keyboard/index.js
/*****************************************************************/
window.__pkg__bundleSrc__['246']=function(){
    var __pkg__scope_bundle__={};
    var __pkg__scope_args__;
    __pkg__scope_args__=window.__pkg__getBundle('350');
var template =__pkg__scope_args__.default;

__pkg__scope_args__=window.__pkg__getBundle('351');


__pkg__scope_bundle__.default= function (obj) {

    return {
        name: "type-practice",
        render: template,
        data: {

        },
        mounted() {


        }
    };
};

    return __pkg__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/pages/type-practice/dialogs/keyboard/index.html
/*****************************************************************/
window.__pkg__bundleSrc__['350']=function(){
    var __pkg__scope_bundle__={};
    var __pkg__scope_args__;
    __pkg__scope_bundle__.default= [{"type":"tag","name":"root","attrs":{},"childNodes":[1,7]},{"type":"tag","name":"header","attrs":{"ui-dragdrop:desktop":""},"childNodes":[2,4]},{"type":"tag","name":"h2","attrs":{},"childNodes":[3]},{"type":"text","content":"键盘练习","childNodes":[]},{"type":"tag","name":"div","attrs":{"class":"win-btns"},"childNodes":[5]},{"type":"tag","name":"button","attrs":{"class":"close","ui-on:click.stop":"$closeDialog"},"childNodes":[6]},{"type":"text","content":"关闭","childNodes":[]},{"type":"tag","name":"div","attrs":{"class":"content"},"childNodes":[]}]

    return __pkg__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/pages/type-practice/dialogs/keyboard/index.scss
/*****************************************************************/
window.__pkg__bundleSrc__['351']=function(){
    var __pkg__scope_bundle__={};
    var __pkg__scope_args__;
    var styleElement = document.createElement('style');
var head = document.head || document.getElementsByTagName('head')[0];
styleElement.innerHTML = "";
styleElement.setAttribute('type', 'text/css');head.appendChild(styleElement);

    return __pkg__scope_bundle__;
}
