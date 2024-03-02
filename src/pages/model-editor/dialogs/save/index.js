import template from './index.html';
import './index.scss';

export default function (obj, props) {

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