function timeFormat(time) {
    var hour = Math.floor(time / 3600);
    var minute = Math.floor(time % 3600 / 60);
    var second = Math.floor(time % 3600 % 60);
    var display = 0;
    if (hour === 0) {
        display = minute + 'min ' + second + 's';

    } else if (hour === 0 && minute === 0) {
        display = second + 's ';

    } else {
        display = hour + 'h ' + minute + 'min ' + second + 's ';
    }
    return display;
}

exports.print = timeFormat;