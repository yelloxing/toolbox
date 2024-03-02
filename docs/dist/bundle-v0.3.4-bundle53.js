
/*************************** [bundle] ****************************/
// Original file:./src/pages/model-editor/dialogs/save/index.js
/*****************************************************************/
window.__pkg__bundleSrc__['188']=function(){
    var __pkg__scope_bundle__={};
    var __pkg__scope_args__;
    __pkg__scope_args__=window.__pkg__getBundle('352');
var template =__pkg__scope_args__.default;

__pkg__scope_args__=window.__pkg__getBundle('353');


__pkg__scope_bundle__.default= function (obj, props) {

    return {
        name: "save",
        render: template,
        data: {
            name: obj.ref(props.name),
        },
        methods: {

            // 确定
            doSubmit: function () {

                this.$closeDialog({
                    name: this.name,
                    type: this._refs.type.value.value,
                    format: this._refs.format.value.value
                });
            },

            // 取消
            doClose: function () {
                this.$closeDialog();
            }
        }
    };
};

    return __pkg__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/pages/model-editor/dialogs/save/index.html
/*****************************************************************/
window.__pkg__bundleSrc__['352']=function(){
    var __pkg__scope_bundle__={};
    var __pkg__scope_args__;
    __pkg__scope_bundle__.default= [{"type":"tag","name":"root","attrs":{},"childNodes":[1,3]},{"type":"tag","name":"h2","attrs":{"ui-dragdrop":""},"childNodes":[2]},{"type":"text","content":"保存","childNodes":[]},{"type":"tag","name":"div","attrs":{"class":"right-btn"},"childNodes":[4,36]},{"type":"tag","name":"div","attrs":{},"childNodes":[5,25]},{"type":"tag","name":"fieldset","attrs":{},"childNodes":[6,8]},{"type":"tag","name":"legend","attrs":{},"childNodes":[7]},{"type":"text","content":"基础","childNodes":[]},{"type":"tag","name":"ul","attrs":{},"childNodes":[9,13,19]},{"type":"tag","name":"li","attrs":{},"childNodes":[10,12]},{"type":"tag","name":"label","attrs":{},"childNodes":[11]},{"type":"text","content":"名称：","childNodes":[]},{"type":"tag","name":"input","attrs":{"ui-model":"name"},"childNodes":[]},{"type":"tag","name":"li","attrs":{},"childNodes":[14,16]},{"type":"tag","name":"label","attrs":{},"childNodes":[15]},{"type":"text","content":"类型：","childNodes":[]},{"type":"tag","name":"select","attrs":{"ref":"type"},"childNodes":[17]},{"type":"tag","name":"option","attrs":{"value":"json"},"childNodes":[18]},{"type":"text","content":"JSON","childNodes":[]},{"type":"tag","name":"li","attrs":{},"childNodes":[20,22]},{"type":"tag","name":"label","attrs":{},"childNodes":[21]},{"type":"text","content":"格式：","childNodes":[]},{"type":"tag","name":"select","attrs":{"ref":"format"},"childNodes":[23]},{"type":"tag","name":"option","attrs":{"value":"vislite"},"childNodes":[24]},{"type":"text","content":"VISLite","childNodes":[]},{"type":"tag","name":"div","attrs":{"class":"tips"},"childNodes":[26,34]},{"type":"tag","name":"div","attrs":{},"childNodes":[27,28,30,31,33]},{"type":"text","content":"1、上述选项中的","childNodes":[]},{"type":"tag","name":"a","attrs":{"href":"https://github.com/oi-contrib/VISLite","target":"_blank"},"childNodes":[29]},{"type":"text","content":"VISLite","childNodes":[]},{"type":"text","content":"是一个开源项目，具体的可以查看","childNodes":[]},{"type":"tag","name":"a","attrs":{"href":"https://oi-contrib.github.io/VISLite/#/api/webgl/api","target":"_blank"},"childNodes":[32]},{"type":"text","content":"WebGl接口文档","childNodes":[]},{"type":"text","content":"。","childNodes":[]},{"type":"tag","name":"div","attrs":{},"childNodes":[35]},{"type":"text","content":"2、导出的是Array&lt;object3D&gt;而不是object3D。","childNodes":[]},{"type":"tag","name":"div","attrs":{},"childNodes":[37,39]},{"type":"tag","name":"button","attrs":{"ui-on:click":"doSubmit"},"childNodes":[38]},{"type":"text","content":"确定","childNodes":[]},{"type":"tag","name":"button","attrs":{"ui-on:click":"doClose"},"childNodes":[40]},{"type":"text","content":"取消","childNodes":[]}]

    return __pkg__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/pages/model-editor/dialogs/save/index.scss
/*****************************************************************/
window.__pkg__bundleSrc__['353']=function(){
    var __pkg__scope_bundle__={};
    var __pkg__scope_args__;
    var styleElement = document.createElement('style');
var head = document.head || document.getElementsByTagName('head')[0];
styleElement.innerHTML = "\n [dialog-view='save']{\n\nleft: calc(50vw - 150px);\n\ntop: 100px;\n\nmin-height: 300px;\n\nwidth: 300px;\n\nbackground-color: white;\n\n}\n\n [dialog-view='save']>h2{\n\nfont-size: 12px;\n\npadding-left: 30px;\n\nbackground-image: url('./model-editor.png');\n\nbackground-size: auto 80%;\n\nbackground-repeat: no-repeat;\n\nbackground-position: 3px center;\n\nline-height: 30px;\n\nheight: 30px;\n\nuser-select: none;\n\nbackground-color: #cad6db;\n\n}\n\n [dialog-view='save']>div.right-btn{\n\ndisplay: flex;\n\n}\n\n [dialog-view='save']>div.right-btn>div:first-child{\n\nflex-grow: 1;\n\npadding: 10px 0 10px 10px;\n\n}\n\n [dialog-view='save']>div.right-btn>div:last-child{\n\ntext-align: center;\n\nflex-grow: 0;\n\nflex-shrink: 0;\n\nflex-basis: 70px;\n\n}\n\n [dialog-view='save']>div.right-btn>div:last-child>button{\n\nheight: 30px;\n\nborder-radius: 15px;\n\nwidth: 50px;\n\nmargin-top: 10px;\n\n}\n\n [dialog-view='save']>div.right-btn>div:last-child>button:hover{\n\nbackground-color: rgb(127, 131, 131);\n\ncursor: pointer;\n\n}\n\n [dialog-view='save'] fieldset{\n\nmargin-top: 10px;\n\nfont-size: 12px;\n\n}\n\n [dialog-view='save'] ul>li{\n\nline-height: 2em;\n\nmargin-top: 5px;\n\nwhite-space: nowrap;\n\n}\n\n [dialog-view='save'] ul>li>label{\n\nwidth: 40px;\n\ndisplay: inline-block;\n\ntext-align: right;\n\n}\n\n [dialog-view='save'] ul>li>input, [dialog-view='save'] ul>li select{\n\nwidth: 150px;\n\nmargin-right: 5px;\n\n}\n\n [dialog-view='save'] .tips{\n\nmargin-top: 20px;\n\nposition: relative;\n\ntext-indent: 2em;\n\nfont-size: 12px;\n\nline-height: 1.6em;\n\n}\n\n [dialog-view='save'] .tips .important{\n\nmargin: 0 10px;\n\nfont-weight: 800;\n\nborder-bottom: 2px dashed black;\n\n}\n\n [dialog-view='save'] .tips a{\n\nmargin: 0 10px;\n\nfont-weight: 800;\n\ntext-decoration: underline;\n\ncolor: #2196F3;\n\n}\n";
styleElement.setAttribute('type', 'text/css');head.appendChild(styleElement);

    return __pkg__scope_bundle__;
}
