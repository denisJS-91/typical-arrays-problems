
exports.min = function min (array) {
    if (array == undefined || array == 0) return 0;
    let arr_min = array[0];
    for (i = 1; i <= array.length; i++) {
        if (array[i] <= arr_min) {
            arr_min = array[i];
        }
    }
    return arr_min;  
}

exports.max = function max (array) {
    if (array == undefined || array == 0) return 0;
    let arr_max = array[0];
    for (i = 1; i < array.length; i++) {
        if (arr_max <= array[i]) {
            arr_max = array[i];
        }
    }
    return arr_max;
}

exports.avg = function avg (array) {
    if (array === undefined || array.length === 0) return 0;
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum / array.length;
}
