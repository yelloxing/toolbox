import template from './index.html';
import './index.scss';

export default function (obj) {
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