const template = require('./src/pages/terminal/index.html', true);
require('./src/pages/terminal/index.scss', true);

export default function (obj, props) {
    return {

        // 模板
        render: template,

        // 数据
        data: {

        }
    };
};