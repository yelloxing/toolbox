export default {

    // 简单的饼图
    "pie-simple": function () {
        return import('./pie-simple/index.js')
    },

    // 多X轴折线图
    "line-multiple-x-axis": function () {
        return import('./line-multiple-x-axis/index.js')
    },

    // 极坐标下的柱状图
    "bar-polar-real-estate": function () {
        return import('./bar-polar-real-estate/index.js')
    },

    // 渐变气泡图
    "scatter-bubble-gradient": function () {
        return import('./scatter-bubble-gradient/index.js')
    },

    // 基础K线图
    "candlestick-simple": function () {
        return import('./candlestick-simple/index.js')
    },

    // 气压表
    "gauge-barometer": function () {
        return import('./gauge-barometer/index.js')
    },

    // 旭日图使用视觉编码
    "sunburst-visualMap": function () {
        return import('./sunburst-visualMap/index.js')
    },

    // 基础平行坐标
    "parallel-simple": function () {
        return import('./parallel-simple/index.js')
    },

    // 金额波浪球
    "money-schedule": function () {
        return import('./money-schedule/index.js')
    }
};