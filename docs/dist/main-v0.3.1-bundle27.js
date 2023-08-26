
/*************************** [bundle] ****************************/
// Original file:./src/pages/echarts/index.js
/*****************************************************************/
window.__pkg__bundleSrc__['82']=function(){
    var __pkg__scope_bundle__={};
    var __pkg__scope_args__;
    __pkg__scope_args__=window.__pkg__getBundle('224');
var template =__pkg__scope_args__.default;

__pkg__scope_args__=window.__pkg__getBundle('225');


__pkg__scope_args__=window.__pkg__getBundle('30');
var urlFormat =__pkg__scope_args__.default;

__pkg__scope_args__=window.__pkg__getBundle('115');
var animation =__pkg__scope_args__.default;


__pkg__scope_args__=window.__pkg__getBundle('226');

__pkg__scope_args__=window.__pkg__getBundle('227');
var lazyDialogs =__pkg__scope_args__.default;


__pkg__scope_bundle__.default= function (obj) {

    return {
        name: "echarts",
        render: template,
        beforeFocus: function () {
            document.getElementsByTagName('title')[0].innerText = "可视化图表" + window.systeName;
            document.getElementById('icon-logo').setAttribute('href', './echarts/logo.png');
        },
        methods: {
            openExamples: function (event, target) {
                this.openDialog(target.getAttribute('tag'));
            },
            openDialog: function (pagename, isInit) {

                // 打开
                if (!isInit) window.location.href = "#/echarts/" + pagename;
                this.$openDialog(lazyDialogs[pagename], {
                    srcUrl: "https://github.com/zxl20070701/toolbox/edit/master/src/pages/echarts/dialogs/" + pagename
                }).then(function () {

                    // 关闭后恢复路由
                    window.location.href = "#/echarts";
                });
            },
        },
        mounted: function () {
            var urlObj = urlFormat(), _this = this;

            if (urlObj.router.length >= 2 && urlObj.router[1] in lazyDialogs) {
                this.openDialog(urlObj.router[1], true);
            }

            // 生成导航
            var h4s = this._refs.mymenu.value.getElementsByTagName("h4"), i, navName, navLabel, navEl;
            for (i = 0; i < h4s.length; i++) {
                navName = h4s[i].getElementsByTagName('span')[0].innerText.trim();
                navLabel = h4s[i].innerText.replace(navName, "").trim();

                navEl = document.createElement("h4");
                this._refs.mynav.value.appendChild(navEl);

                navEl.innerText = navLabel;
                navEl.setAttribute('class', navName);

                (function (i) {
                    navEl.addEventListener("click", function () {

                        var offsetTop = h4s[i].offsetTop - 70;
                        var currentScrollTop = _this._refs.mymenu.value.scrollTop || 0;

                        animation(
                            function (deep) {
                                _this._refs.mymenu.value.scrollTop =
                                    (offsetTop - currentScrollTop) * deep + currentScrollTop;
                            },
                            500,
                            function () {
                                _this._refs.mymenu.value.scrollTop = offsetTop;
                            }
                        );

                    });
                })(i);

            }
        }
    };
};

    return __pkg__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/pages/echarts/index.html
/*****************************************************************/
window.__pkg__bundleSrc__['224']=function(){
    var __pkg__scope_bundle__={};
    var __pkg__scope_args__;
    __pkg__scope_bundle__.default= [{"type":"tag","name":"root","attrs":{},"childNodes":[1,9]},{"type":"tag","name":"header","attrs":{"ui-dragdrop:desktop":""},"childNodes":[2,7]},{"type":"tag","name":"div","attrs":{"class":"win-btns"},"childNodes":[3,5]},{"type":"tag","name":"button","attrs":{"class":"min","ui-on:click.stop":"$minView"},"childNodes":[4]},{"type":"text","content":"最小化","childNodes":[]},{"type":"tag","name":"button","attrs":{"class":"close","ui-on:click.stop":"$closeView"},"childNodes":[6]},{"type":"text","content":"关闭","childNodes":[]},{"type":"tag","name":"h2","attrs":{},"childNodes":[8]},{"type":"text","content":"可视化图表","childNodes":[]},{"type":"tag","name":"div","attrs":{"class":"content"},"childNodes":[10,11]},{"type":"tag","name":"div","attrs":{"class":"nav","ref":"mynav"},"childNodes":[]},{"type":"tag","name":"div","attrs":{"class":"menu","ref":"mymenu"},"childNodes":[12,16,21,25,30,34,39,43,48,52,54,58,63,67,69,73,75,79,81,85,87,91,96,100,105,109,111,115,117,121,126,130,132,136,141,145]},{"type":"tag","name":"h4","attrs":{},"childNodes":[13,14]},{"type":"text","content":"折线图","childNodes":[]},{"type":"tag","name":"span","attrs":{},"childNodes":[15]},{"type":"text","content":"line","childNodes":[]},{"type":"tag","name":"ul","attrs":{},"childNodes":[17]},{"type":"tag","name":"li","attrs":{"ui-on:click":"openExamples","tag":"line-multiple-x-axis"},"childNodes":[18,19]},{"type":"tag","name":"div","attrs":{"class":"line-multiple-x-axis"},"childNodes":[]},{"type":"tag","name":"h6","attrs":{},"childNodes":[20]},{"type":"text","content":"多X轴折线图","childNodes":[]},{"type":"tag","name":"h4","attrs":{},"childNodes":[22,23]},{"type":"text","content":"柱状图","childNodes":[]},{"type":"tag","name":"span","attrs":{},"childNodes":[24]},{"type":"text","content":"bar","childNodes":[]},{"type":"tag","name":"ul","attrs":{},"childNodes":[26]},{"type":"tag","name":"li","attrs":{"ui-on:click":"openExamples","tag":"bar-polar-real-estate"},"childNodes":[27,28]},{"type":"tag","name":"div","attrs":{"class":"bar-polar-real-estate"},"childNodes":[]},{"type":"tag","name":"h6","attrs":{},"childNodes":[29]},{"type":"text","content":"极坐标下的柱状图","childNodes":[]},{"type":"tag","name":"h4","attrs":{},"childNodes":[31,32]},{"type":"text","content":"饼图","childNodes":[]},{"type":"tag","name":"span","attrs":{},"childNodes":[33]},{"type":"text","content":"pie","childNodes":[]},{"type":"tag","name":"ul","attrs":{},"childNodes":[35]},{"type":"tag","name":"li","attrs":{"ui-on:click":"openExamples","tag":"pie-simple"},"childNodes":[36,37]},{"type":"tag","name":"div","attrs":{"class":"pie-simple"},"childNodes":[]},{"type":"tag","name":"h6","attrs":{},"childNodes":[38]},{"type":"text","content":"简单的饼图","childNodes":[]},{"type":"tag","name":"h4","attrs":{},"childNodes":[40,41]},{"type":"text","content":"散点图","childNodes":[]},{"type":"tag","name":"span","attrs":{},"childNodes":[42]},{"type":"text","content":"scatter","childNodes":[]},{"type":"tag","name":"ul","attrs":{},"childNodes":[44]},{"type":"tag","name":"li","attrs":{"ui-on:click":"openExamples","tag":"scatter-bubble-gradient"},"childNodes":[45,46]},{"type":"tag","name":"div","attrs":{"class":"scatter-bubble-gradient"},"childNodes":[]},{"type":"tag","name":"h6","attrs":{},"childNodes":[47]},{"type":"text","content":"渐变气泡图","childNodes":[]},{"type":"tag","name":"h4","attrs":{},"childNodes":[49,50]},{"type":"text","content":"地理坐标/地图","childNodes":[]},{"type":"tag","name":"span","attrs":{},"childNodes":[51]},{"type":"text","content":"map","childNodes":[]},{"type":"tag","name":"ul","attrs":{},"childNodes":[53]},{"type":"tag","name":"li","attrs":{},"childNodes":[]},{"type":"tag","name":"h4","attrs":{},"childNodes":[55,56]},{"type":"text","content":"K线图","childNodes":[]},{"type":"tag","name":"span","attrs":{},"childNodes":[57]},{"type":"text","content":"candlestick","childNodes":[]},{"type":"tag","name":"ul","attrs":{},"childNodes":[59]},{"type":"tag","name":"li","attrs":{"ui-on:click":"openExamples","tag":"candlestick-simple"},"childNodes":[60,61]},{"type":"tag","name":"div","attrs":{"class":"candlestick-simple"},"childNodes":[]},{"type":"tag","name":"h6","attrs":{},"childNodes":[62]},{"type":"text","content":"基础K线图","childNodes":[]},{"type":"tag","name":"h4","attrs":{},"childNodes":[64,65]},{"type":"text","content":"雷达图","childNodes":[]},{"type":"tag","name":"span","attrs":{},"childNodes":[66]},{"type":"text","content":"radar","childNodes":[]},{"type":"tag","name":"ul","attrs":{},"childNodes":[68]},{"type":"tag","name":"li","attrs":{},"childNodes":[]},{"type":"tag","name":"h4","attrs":{},"childNodes":[70,71]},{"type":"text","content":"关系图","childNodes":[]},{"type":"tag","name":"span","attrs":{},"childNodes":[72]},{"type":"text","content":"graph","childNodes":[]},{"type":"tag","name":"ul","attrs":{},"childNodes":[74]},{"type":"tag","name":"li","attrs":{},"childNodes":[]},{"type":"tag","name":"h4","attrs":{},"childNodes":[76,77]},{"type":"text","content":"树图","childNodes":[]},{"type":"tag","name":"span","attrs":{},"childNodes":[78]},{"type":"text","content":"tree","childNodes":[]},{"type":"tag","name":"ul","attrs":{},"childNodes":[80]},{"type":"tag","name":"li","attrs":{},"childNodes":[]},{"type":"tag","name":"h4","attrs":{},"childNodes":[82,83]},{"type":"text","content":"矩形树图","childNodes":[]},{"type":"tag","name":"span","attrs":{},"childNodes":[84]},{"type":"text","content":"treemap","childNodes":[]},{"type":"tag","name":"ul","attrs":{},"childNodes":[86]},{"type":"tag","name":"li","attrs":{},"childNodes":[]},{"type":"tag","name":"h4","attrs":{},"childNodes":[88,89]},{"type":"text","content":"旭日图","childNodes":[]},{"type":"tag","name":"span","attrs":{},"childNodes":[90]},{"type":"text","content":"sunburst","childNodes":[]},{"type":"tag","name":"ul","attrs":{},"childNodes":[92]},{"type":"tag","name":"li","attrs":{"ui-on:click":"openExamples","tag":"sunburst-visualMap"},"childNodes":[93,94]},{"type":"tag","name":"div","attrs":{"class":"sunburst-visualMap"},"childNodes":[]},{"type":"tag","name":"h6","attrs":{},"childNodes":[95]},{"type":"text","content":"旭日图使用视觉编码","childNodes":[]},{"type":"tag","name":"h4","attrs":{},"childNodes":[97,98]},{"type":"text","content":"平行坐标系","childNodes":[]},{"type":"tag","name":"span","attrs":{},"childNodes":[99]},{"type":"text","content":"parallel","childNodes":[]},{"type":"tag","name":"ul","attrs":{},"childNodes":[101]},{"type":"tag","name":"li","attrs":{"ui-on:click":"openExamples","tag":"parallel-simple"},"childNodes":[102,103]},{"type":"tag","name":"div","attrs":{"class":"parallel-simple"},"childNodes":[]},{"type":"tag","name":"h6","attrs":{},"childNodes":[104]},{"type":"text","content":"基础平行坐标","childNodes":[]},{"type":"tag","name":"h4","attrs":{},"childNodes":[106,107]},{"type":"text","content":"桑基图","childNodes":[]},{"type":"tag","name":"span","attrs":{},"childNodes":[108]},{"type":"text","content":"sankey","childNodes":[]},{"type":"tag","name":"ul","attrs":{},"childNodes":[110]},{"type":"tag","name":"li","attrs":{},"childNodes":[]},{"type":"tag","name":"h4","attrs":{},"childNodes":[112,113]},{"type":"text","content":"漏斗图","childNodes":[]},{"type":"tag","name":"span","attrs":{},"childNodes":[114]},{"type":"text","content":"funnel","childNodes":[]},{"type":"tag","name":"ul","attrs":{},"childNodes":[116]},{"type":"tag","name":"li","attrs":{},"childNodes":[]},{"type":"tag","name":"h4","attrs":{},"childNodes":[118,119]},{"type":"text","content":"仪表盘","childNodes":[]},{"type":"tag","name":"span","attrs":{},"childNodes":[120]},{"type":"text","content":"gauge","childNodes":[]},{"type":"tag","name":"ul","attrs":{},"childNodes":[122]},{"type":"tag","name":"li","attrs":{"ui-on:click":"openExamples","tag":"gauge-barometer"},"childNodes":[123,124]},{"type":"tag","name":"div","attrs":{"class":"gauge-barometer"},"childNodes":[]},{"type":"tag","name":"h6","attrs":{},"childNodes":[125]},{"type":"text","content":"气压表","childNodes":[]},{"type":"tag","name":"h4","attrs":{},"childNodes":[127,128]},{"type":"text","content":"数据区域缩放","childNodes":[]},{"type":"tag","name":"span","attrs":{},"childNodes":[129]},{"type":"text","content":"dataZoom","childNodes":[]},{"type":"tag","name":"ul","attrs":{},"childNodes":[131]},{"type":"tag","name":"li","attrs":{},"childNodes":[]},{"type":"tag","name":"h4","attrs":{},"childNodes":[133,134]},{"type":"text","content":"自定义系列","childNodes":[]},{"type":"tag","name":"span","attrs":{},"childNodes":[135]},{"type":"text","content":"custom","childNodes":[]},{"type":"tag","name":"ul","attrs":{},"childNodes":[137]},{"type":"tag","name":"li","attrs":{"ui-on:click":"openExamples","tag":"money-schedule"},"childNodes":[138,139]},{"type":"tag","name":"div","attrs":{"class":"money-schedule"},"childNodes":[]},{"type":"tag","name":"h6","attrs":{},"childNodes":[140]},{"type":"text","content":"金额波浪球","childNodes":[]},{"type":"tag","name":"h4","attrs":{},"childNodes":[142,143]},{"type":"text","content":"三维图形","childNodes":[]},{"type":"tag","name":"span","attrs":{},"childNodes":[144]},{"type":"text","content":"WebGL","childNodes":[]},{"type":"tag","name":"ul","attrs":{},"childNodes":[146]},{"type":"tag","name":"li","attrs":{},"childNodes":[]}]

    return __pkg__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/pages/echarts/index.scss
/*****************************************************************/
window.__pkg__bundleSrc__['225']=function(){
    var __pkg__scope_bundle__={};
    var __pkg__scope_args__;
    var styleElement = document.createElement('style');
var head = document.head || document.getElementsByTagName('head')[0];
styleElement.innerHTML = "\n [page-view=\"echarts\"]{\n\nwidth: calc(100vw - 160px);\n\nheight: calc(100vh - 70px);\n\nleft: 80px;\n\ntop: 20px;\n\nbackground-color: #f3f4fa;\n\n}\n\n [page-view=\"echarts\"][focus=\"no\"]>header{\n\nbackground-color: rgba(244, 242, 242, 0.85);\n\n}\n\n [page-view=\"echarts\"]>header{\n\nbackground-color: rgba(255, 255, 255, 0.85);\n\nbox-shadow: 0 0 6px 0px grey;\n\nposition: relative;\n\n}\n\n [page-view=\"echarts\"]>header>h2{\n\nfont-size: 20px;\n\nline-height: 50px;\n\npadding-left: 60px;\n\nbackground-image: url('./echarts/logo.png');\n\nbackground-repeat: no-repeat;\n\nbackground-position: 10px center;\n\nbackground-size: auto 80%;\n\nfont-family: cursive;\n\n}\n\n [page-view=\"echarts\"]>div.content{\n\ndisplay: flex;\n\nheight: calc(100% - 50px);\n\n}\n\n [page-view=\"echarts\"]>div.content>div{\n\noverflow: auto;\n\n}\n\n [page-view=\"echarts\"]>div.content>div.nav{\n\nflex-basis: 200px;\n\nflex-shrink: 0;\n\nbackground-color: white;\n\npadding: 10px 0;\n\n}\n\n [page-view=\"echarts\"]>div.content>div.nav>h4{\n\nline-height: 45px;\n\nheight: 45px;\n\ncolor: rgb(110, 112, 121);\n\npadding-left: 50px;\n\nfont-weight: 200;\n\nbackground-size: 20px auto;\n\nbackground-repeat: no-repeat;\n\nbackground-position: 20px center;\n\ncursor: pointer;\n\n}\n\n [page-view=\"echarts\"]>div.content>div.nav>h4:hover{\n\nborder-left: 3px solid rgb(84, 112, 198);\n\nbackground-color: rgba(193, 191, 191, 0.33);\n\n}\n\n [page-view=\"echarts\"]>div.content>div.nav>h4.line{\n\nbackground-image: url('./echarts/line.svg');\n\n}\n\n [page-view=\"echarts\"]>div.content>div.nav>h4.bar{\n\nbackground-image: url('./echarts/bar.svg');\n\n}\n\n [page-view=\"echarts\"]>div.content>div.nav>h4.pie{\n\nbackground-image: url('./echarts/pie.svg');\n\n}\n\n [page-view=\"echarts\"]>div.content>div.nav>h4.scatter{\n\nbackground-image: url('./echarts/scatter.svg');\n\n}\n\n [page-view=\"echarts\"]>div.content>div.nav>h4.map{\n\nbackground-image: url('./echarts/map.svg');\n\n}\n\n [page-view=\"echarts\"]>div.content>div.nav>h4.candlestick{\n\nbackground-image: url('./echarts/candlestick.svg');\n\n}\n\n [page-view=\"echarts\"]>div.content>div.nav>h4.radar{\n\nbackground-image: url('./echarts/radar.svg');\n\n}\n\n [page-view=\"echarts\"]>div.content>div.nav>h4.graph{\n\nbackground-image: url('./echarts/graph.svg');\n\n}\n\n [page-view=\"echarts\"]>div.content>div.nav>h4.tree{\n\nbackground-image: url('./echarts/tree.svg');\n\n}\n\n [page-view=\"echarts\"]>div.content>div.nav>h4.treemap{\n\nbackground-image: url('./echarts/treemap.svg');\n\n}\n\n [page-view=\"echarts\"]>div.content>div.nav>h4.sunburst{\n\nbackground-image: url('./echarts/sunburst.svg');\n\n}\n\n [page-view=\"echarts\"]>div.content>div.nav>h4.parallel{\n\nbackground-image: url('./echarts/parallel.svg');\n\n}\n\n [page-view=\"echarts\"]>div.content>div.nav>h4.sankey{\n\nbackground-image: url('./echarts/sankey.svg');\n\n}\n\n [page-view=\"echarts\"]>div.content>div.nav>h4.funnel{\n\nbackground-image: url('./echarts/funnel.svg');\n\n}\n\n [page-view=\"echarts\"]>div.content>div.nav>h4.gauge{\n\nbackground-image: url('./echarts/gauge.svg');\n\n}\n\n [page-view=\"echarts\"]>div.content>div.nav>h4.dataZoom{\n\nbackground-image: url('./echarts/dataZoom.svg');\n\n}\n\n [page-view=\"echarts\"]>div.content>div.nav>h4.custom{\n\nbackground-image: url('./echarts/custom.svg');\n\n}\n\n [page-view=\"echarts\"]>div.content>div.nav>h4.WebGL{\n\nbackground-image: url('./echarts/webgl.svg');\n\n}\n\n [page-view=\"echarts\"]>div.content>div.menu{\n\nflex-grow: 1;\n\npadding: 30px;\n\n}\n\n [page-view=\"echarts\"]>div.content>div.menu>h4{\n\nmargin-bottom: 20px;\n\npadding-bottom: 10px;\n\nfont-weight: normal;\n\ncolor: rgb(70, 70, 70);\n\nfont-size: 20px;\n\nborder-bottom: 1px solid rgb(225, 229, 242);\n\n}\n\n [page-view=\"echarts\"]>div.content>div.menu>h4>span{\n\nfont-size: 16px;\n\npadding-left: 5px;\n\ncolor: rgb(148, 156, 177);\n\nfont-weight: 200;\n\n}\n\n [page-view=\"echarts\"]>div.content>div.menu>ul>li{\n\ndisplay: inline-block;\n\nmargin-bottom: 10px;\n\npadding: 0 10px;\n\n}\n\n [page-view=\"echarts\"]>div.content>div.menu>ul>li:hover{\n\ntext-decoration: underline;\n\n}\n\n [page-view=\"echarts\"]>div.content>div.menu>ul>li:hover>div{\n\nbackground-size: 110% auto;\n\n}\n\n [page-view=\"echarts\"]>div.content>div.menu>ul>li:hover>h6{\n\nfont-weight: 400;\n\n}\n\n [page-view=\"echarts\"]>div.content>div.menu>ul>li>div{\n\nwidth: 175px;\n\nheight: 133px;\n\nbackground-position: center center;\n\nbackground-size: 100% auto;\n\nbackground-repeat: no-repeat;\n\ncursor: pointer;\n\ntransition: 0.3s ease-in-out;\n\nborder-radius: 5px;\n\nbox-shadow: 0 0 20px rgb(0 0 0 / 5%);\n\n}\n\n [page-view=\"echarts\"]>div.content>div.menu>ul>li>div.pie-simple{\n\nbackground-image: url(\"./echarts/examples/pie-simple.webp\");\n\n}\n\n [page-view=\"echarts\"]>div.content>div.menu>ul>li>div.line-multiple-x-axis{\n\nbackground-image: url(\"./echarts/examples/line-multiple-x-axis.webp\");\n\n}\n\n [page-view=\"echarts\"]>div.content>div.menu>ul>li>div.bar-polar-real-estate{\n\nbackground-image: url(\"./echarts/examples/bar-polar-real-estate.webp\");\n\n}\n\n [page-view=\"echarts\"]>div.content>div.menu>ul>li>div.scatter-bubble-gradient{\n\nbackground-image: url(\"./echarts/examples/scatter-bubble-gradient.webp\");\n\n}\n\n [page-view=\"echarts\"]>div.content>div.menu>ul>li>div.candlestick-simple{\n\nbackground-image: url(\"./echarts/examples/candlestick-simple.webp\");\n\n}\n\n [page-view=\"echarts\"]>div.content>div.menu>ul>li>div.gauge-barometer{\n\nbackground-image: url(\"./echarts/examples/gauge-barometer.webp\");\n\n}\n\n [page-view=\"echarts\"]>div.content>div.menu>ul>li>div.sunburst-visualMap{\n\nbackground-image: url(\"./echarts/examples/sunburst-visualMap.webp\");\n\n}\n\n [page-view=\"echarts\"]>div.content>div.menu>ul>li>div.parallel-simple{\n\nbackground-image: url(\"./echarts/examples/parallel-simple.webp\");\n\n}\n\n [page-view=\"echarts\"]>div.content>div.menu>ul>li>div.money-schedule{\n\nbackground-image: url(\"./echarts/examples/money-schedule.jpeg\");\n\n}\n\n [page-view=\"echarts\"]>div.content>div.menu>ul>li>h6{\n\ntext-align: center;\n\nline-height: 40px;\n\nfont-size: 14px;\n\nfont-weight: 200;\n\n}\n";
styleElement.setAttribute('type', 'text/css');head.appendChild(styleElement);

    return __pkg__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/tool/animation
/*****************************************************************/
window.__pkg__bundleSrc__['115']=function(){
    var __pkg__scope_bundle__={};
    var __pkg__scope_args__;
    //当前正在运动的动画的tick函数堆栈
var $timers = [];
//唯一定时器的定时间隔
var $interval = 13;
//指定了动画时长duration默认值
var $speeds = 400;
//定时器ID
var $timerId = null;

/**
 * 动画轮播
 * @param {function} doback 轮询函数，有一个形参deep，0-1，表示执行进度
 * @param {number} duration 动画时长，可选
 * @param {function} callback 动画结束回调，可选，有一个形参deep，0-1，表示执行进度
 *
 * @returns {function} 返回一个函数，调用该函数，可以提前结束动画
 */
__pkg__scope_bundle__.default= function (doback, duration, callback) {

    // 如果没有传递时间，使用内置默认值
    if (arguments.length < 2) duration = $speeds;

    var clock = {
        //把tick函数推入堆栈
        "timer": function (tick, duration, callback) {
            if (!tick) {
                throw new Error('Tick is required!');
            }
            var id = new Date().valueOf() + "_" + (Math.random() * 1000).toFixed(0);
            $timers.push({
                "id": id,
                "createTime": new Date(),
                "tick": tick,
                "duration": duration,
                "callback": callback
            });
            clock.start();
            return id;
        },

        //开启唯一的定时器timerId
        "start": function () {
            if (!$timerId) {
                $timerId = setInterval(clock.tick, $interval);
            }
        },

        //被定时器调用，遍历timers堆栈
        "tick": function () {
            var createTime, flag, tick, callback, timer, duration, passTime,
                timers = $timers;
            $timers = [];
            $timers.length = 0;
            for (flag = 0; flag < timers.length; flag++) {
                //初始化数据
                timer = timers[flag];
                createTime = timer.createTime;
                tick = timer.tick;
                duration = timer.duration;
                callback = timer.callback;

                //执行
                passTime = (+new Date() - createTime) / duration;
                passTime = passTime > 1 ? 1 : passTime;
                tick(passTime);
                if (passTime < 1 && timer.id) {
                    //动画没有结束再添加
                    $timers.push(timer);
                } else if (callback) {
                    callback(passTime);
                }
            }
            if ($timers.length <= 0) {
                clock.stop();
            }
        },

        //停止定时器，重置timerId=null
        "stop": function () {
            if ($timerId) {
                clearInterval($timerId);
                $timerId = null;
            }
        }
    };

    var id = clock.timer(function (deep) {
        //其中deep为0-1，表示改变的程度
        doback(deep);
    }, duration, callback);

    // 返回一个函数
    // 用于在动画结束前结束动画
    return function () {
        var i;
        for (i in $timers) {
            if ($timers[i].id == id) {
                $timers[i].id = undefined;
                return;
            }
        }
    };

};


    return __pkg__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/pages/echarts/dialogs/index.scss
/*****************************************************************/
window.__pkg__bundleSrc__['226']=function(){
    var __pkg__scope_bundle__={};
    var __pkg__scope_args__;
    var styleElement = document.createElement('style');
var head = document.head || document.getElementsByTagName('head')[0];
styleElement.innerHTML = "\n [dialog-view='echarts-example']{\n\nleft: 20px;\n\ntop: 20px;\n\nuser-select: none;\n\nwidth: calc(100vw - 40px);\n\nheight: calc(100vh - 40px);\n\n}\n\n [dialog-view='echarts-example']>header{\n\ntext-align: left;\n\nline-height: 50px;\n\nbackground-color: #ffffff;\n\nborder-bottom: 1px solid rgb(187, 184, 184);\n\nwhite-space: nowrap;\n\n}\n\n [dialog-view='echarts-example']>header>h2{\n\ncolor: #000000;\n\nfont-size: 20px;\n\npadding-left: 50px;\n\nbackground-image: url(\"./echarts/logo.png\");\n\nbackground-position: 10px center;\n\nbackground-repeat: no-repeat;\n\nbackground-size: auto 60%;\n\ndisplay: inline-block;\n\nfont-family: sans-serif;\n\n}\n\n [dialog-view='echarts-example']>header>div.src-url{\n\nline-height: 17px;\n\nfont-size: 12px;\n\ndisplay: inline-block;\n\npadding-left: 50px;\n\npadding-top: 8px;\n\nvertical-align: top;\n\n}\n\n [dialog-view='echarts-example']>header>div.src-url>a{\n\ndisplay: block;\n\ntext-decoration: underline;\n\ncolor: rgb(3, 136, 230);\n\n}\n\n [dialog-view='echarts-example']>div.content{\n\nheight: calc(100% - 50px);\n\ntext-align: center;\n\nbackground-color: white;\n\n}\n";
styleElement.setAttribute('type', 'text/css');head.appendChild(styleElement);

    return __pkg__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/pages/echarts/dialogs/lazy-load
/*****************************************************************/
window.__pkg__bundleSrc__['227']=function(){
    var __pkg__scope_bundle__={};
    var __pkg__scope_args__;
    __pkg__scope_bundle__.default= {

    // 简单的饼图
    "pie-simple": function () {
        return window.__pkg__getLazyBundle('./dist/main-v0.3.1-bundle52.js','228')
    },

    // 多X轴折线图
    "line-multiple-x-axis": function () {
        return window.__pkg__getLazyBundle('./dist/main-v0.3.1-bundle53.js','229')
    },

    // 极坐标下的柱状图
    "bar-polar-real-estate": function () {
        return window.__pkg__getLazyBundle('./dist/main-v0.3.1-bundle54.js','230')
    },

    // 渐变气泡图
    "scatter-bubble-gradient": function () {
        return window.__pkg__getLazyBundle('./dist/main-v0.3.1-bundle55.js','231')
    },

    // 基础K线图
    "candlestick-simple": function () {
        return window.__pkg__getLazyBundle('./dist/main-v0.3.1-bundle56.js','232')
    },

    // 气压表
    "gauge-barometer": function () {
        return window.__pkg__getLazyBundle('./dist/main-v0.3.1-bundle57.js','233')
    },

    // 旭日图使用视觉编码
    "sunburst-visualMap": function () {
        return window.__pkg__getLazyBundle('./dist/main-v0.3.1-bundle58.js','234')
    },

    // 基础平行坐标
    "parallel-simple": function () {
        return window.__pkg__getLazyBundle('./dist/main-v0.3.1-bundle59.js','235')
    },

    // 金额波浪球
    "money-schedule": function () {
        return window.__pkg__getLazyBundle('./dist/main-v0.3.1-bundle60.js','236')
    }
};

    return __pkg__scope_bundle__;
}
