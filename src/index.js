exports.min = function min (array = []) {
    if (array.length === 0) return 0;
    return Math.min(...array);
}

exports.max = function max (array = []) {
    if (array.length === 0) return 0;
    return Math.max(...array);
}

exports.avg = function avg (array) {
    if (typeof array === 'undefined' || array.length === 0) return 0;
    return array.reduce((res, current) => res + current) / array.length;
}
