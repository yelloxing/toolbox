export default function (x, y, z, x2, y2, z2) {
    return function (x0, y0, z0, isNormal) {
        if (x == x2 && z == z2) return [x0, y0, z0];

        var sin, cos, temp;

        // 第一步：归零化
        var _x0 = x0 - (isNormal ? 0 : x), _y0 = y0 - (isNormal ? 0 : y), _z0 = z0 - (isNormal ? 0 : z);  // 法向量起点本来就是原点
        var _x2 = x2 - x, _y2 = y2 - y, _z2 = z2 - z;

        // 第二步：围绕OZ轴旋转

        var __d = Math.sqrt(_x2 * _x2 + _z2 * _z2);
        cos = _x2 / __d;
        sin = _z2 / __d;

        var _x2N = _z2 * sin + _x2 * cos;

        var d = Math.sqrt(_y2 * _y2 + _x2N * _x2N);
        cos = _y2 / d;
        sin = _x2N / d;

        temp = [_y0, _x0];
        _y0 = temp[0] * cos - temp[1] * sin;
        _x0 = temp[0] * sin + temp[1] * cos;

        // 第三步：围绕0Y轴旋转
        cos = _x2 / __d;
        sin = _z2 / __d;

        temp = [_x0, _z0];
        _x0 = temp[0] * cos - temp[1] * sin;
        _z0 = temp[0] * sin + temp[1] * cos;

        // 第四步：去零化（直接返回）
        return [_x0 + (isNormal ? 0 : x), _y0 + (isNormal ? 0 : y), _z0 + (isNormal ? 0 : z)];
    };
};