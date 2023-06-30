// 主视图
export var mainView = function () {

    var modelValue = [{
        geometry: {
            attributes: {
                position: {
                    array: [],
                    count: 0,
                    itemSize: 3
                }
            },
            type: "LINES"
        },
        material: {
            color: {
                r: 0.5,
                g: 0.5,
                b: 0.5
            }
        }
    }, {
        geometry: {
            attributes: {
                position: {
                    array: [],
                    count: 0,
                    itemSize: 3
                }
            },
            type: "LINES"
        },
        material: {
            color: {
                r: 0.8,
                g: 0.8,
                b: 0.8
            }
        }
    }];

    for (var i = 0; i <= 25; i++) {

        // 深色线
        if (i % 5 == 0) {
            modelValue[0].geometry.attributes.position.array.push(

                // 横
                // [-1,0,-1+(2/25)*i]
                -1, 0, 0.08 * i - 1,
                1, 0, 0.08 * i - 1,

                // 竖
                0.08 * i - 1, 0, -1,
                0.08 * i - 1, 0, 1
            );
        }

        // 浅色线
        else {
            modelValue[1].geometry.attributes.position.array.push(
                -1, 0, 0.08 * i - 1,
                1, 0, 0.08 * i - 1,
                0.08 * i - 1, 0, -1,
                0.08 * i - 1, 0, 1
            );
        }

    }

    modelValue[0].geometry.attributes.position.count = modelValue[0].geometry.attributes.position.array.length / 3;
    modelValue[1].geometry.attributes.position.count = modelValue[1].geometry.attributes.position.array.length / 3;

    return modelValue;
};

// 方向图标
export var axios = function () {

    return [

        // X轴承
        {
            length: 2,
            method: "lines",
            points: [-1.3, 0, 0, 1.3, 0, 0],
            color: [1, 0, 0, 1]
        }, {
            length: 6,
            method: "fanTriangles",
            points: [
                2, 0, 0,
                1.25, 0.3, 0.3,
                1.25, -0.3, 0.3,
                1.25, -0.3, -0.3,
                1.25, 0.3, -0.3,
                1.25, 0.3, 0.3
            ],
            color: [1, 0, 0, 1]
        },

        // Y轴承
        {
            length: 2,
            method: "lines",
            points: [0, -1.3, 0, 0, 1.3, 0],
            color: [0, 1, 0, 1]
        }, {
            length: 6,
            method: "fanTriangles",
            points: [
                0, 2, 0,
                0.3, 1.25, 0.3,
                -0.3, 1.25, 0.3,
                -0.3, 1.25, -0.3,
                0.3, 1.25, -0.3,
                0.3, 1.25, 0.3,
            ],
            color: [0, 1, 0, 1]
        },

        // Z轴承
        {
            length: 2,
            method: "lines",
            points: [0, 0, -1.3, 0, 0, 1.3],
            color: [0, 0, 1, 1]
        }, {
            length: 6,
            method: "fanTriangles",
            points: [
                0, 0, 2,
                0.3, 0.3, 1.25,
                -0.3, 0.3, 1.25,
                -0.3, -0.3, 1.25,
                0.3, -0.3, 1.25,
                0.3, 0.3, 1.25
            ],
            color: [0, 0, 1, 1]
        }
    ];

};