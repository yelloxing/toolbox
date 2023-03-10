/**
 * 轨迹或线段进度插值
 */
export default function (type) {

    /**
     * 进度参考谁？
     * 1、x：参考x值
     * 2、y：参考y值
     * 3、line：参考轨迹
     */
    type = type || 'line';

    /**
     * 根据进度返回点坐标
     * @param {number} deep 进度
     * @return Array<x:number,y:number>
     */
    var pointsline = function (deep) {


    };

    pointsline.setType = function (_type) {
        type = _type;
        return pointsline;
    };

    pointsline.setP = function (points) {

        return pointsline;
    };

    return pointsline;
};