// 获取平台名称
export var platformName = function () {
    return /Android|webOS|iPhone|iPod|iPad|BlackBerry/i.test(navigator.userAgent) ? "mobile" : "pc";
};