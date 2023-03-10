export default {

    // 文件管理器
    "file-manager": function () {
        return import('./file-manager/index.js')
    },

    // 浏览器
    "browser": function () {
        return import('./browser/index.js')
    },

    // 记事本
    "notepad": function () {
        return import('./notepad/index.js')
    },

    // 设置
    "setting": function () {
        return import('./setting/index.js')
    },

    // 可视化图表
    "echarts": function () {
        return import('./echarts/index.js')
    }

};