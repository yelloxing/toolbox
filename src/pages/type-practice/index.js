import template from './index.html';
import './index.scss';

export default function (obj) {

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