
exports.min = function min (array) {
    if (array == undefined || array == 0) return 0;
    let arrMin = array[0];
    for (i = 1; i <= array.length; i++) {
        if (array[i] <= arrMin) {
            arrMin = array[i];
        }
    }
    return arrMin;  
}

exports.max = function max (array) {
    if (array == undefined || array == 0) return 0;
    let arrMax = array[0];
    for (i = 1; i < array.length; i++) {
        if (arrMax <= array[i]) {
            arrMax = array[i];
        }
    }
    return arrMax;
}

exports.avg = function avg (array) {
    if (array === undefined || array.length === 0) return 0;
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum / array.length;
}
