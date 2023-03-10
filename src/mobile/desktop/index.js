import template from './index.html';
import './index.scss';

export default function (obj) {
    return {
        name: "desktop",
        render: template,
        data: {
            view: obj.ref(false) // 是否显示悬浮区域，默认false，显示小球
        },
        mounted: function () {
            var i, node;

            // 补充辅助标签
            var helpCount = Math.ceil(Math.max(window.innerWidth, window.innerHeight) / 60);
            for (i = 0; i < helpCount; i++) {
                node = document.createElement('li');
                this._refs.desktopApplication.value.appendChild(node);
            }

        },
        methods: {
            toggleView: function () {
                this.view = !this.view;
            },

            // 打开应用
            goto: function (event, target) {
                this.$openView(target.getAttribute('tag'));
            },

            // 打开弹框
            openDialog: function (event, target) {
                this.$openDialog(target.getAttribute('tag'));
            },
        }
    };
};