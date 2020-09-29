exports.min = function min(array) {
    if (!array || array.length === 0) {
        return 0;
    }
    return Math.min(...array);
}

exports.max = function max(array) {
    if (!array || array.length === 0) {
        return 0;
    }
    return Math.max(...array);
}

exports.avg = function avg(array) {
    if (!array || array.length === 0) {
        return 0;
    }
    return array.reduce((result, num, index) => {
        result += num;
        if (index === array.length - 1) {
            return result / (index + 1);
        }
        return result;
    });
}
