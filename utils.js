function countDown(seconds) {
    let countdownElement = document.getElementById('countdown');
    let timeLeft = seconds;

    function startCountdown() {
        countdownElement.innerText = timeLeft;
        if (timeLeft === 0) {
            timeLeft = seconds;  // Reset countdown
            main();
        } else {
            timeLeft--;
        }
    }
    // Update countdown every second
    setInterval(startCountdown, 1000);
}


function dataRateHuman(b) {
    if (b > 1000000000) {
        units = 'Gb'
        places = 0
        factor = 1000000000
    } else if (b >= 1000000) {
        units = 'Mb'
        places = 1
        factor = 1000000
    } else if (b >= 1000) {
        units = 'kb'
        places = 0
        factor = 1000
    } else if (b >= 100) {
        units = 'kb'
        places = 1
        factor = 1000
    } else {
        units = 'b'
        places = 2
        factor = 1
    }
    var dataDateDisplay = (b / factor).toFixed(places)
    return [dataDateDisplay, units]
}


function processUpDown(obj, arrowchar) {
    s = ''
    for (let [band, value] of Object.entries(obj)) {
        if (band == 'totalDataRate') {
            continue // this really shouldn't be at this level, but here we are
        }

        var dataRate = value.dataRate
        if (dataRate >= 1000000000) {
            units = 'Gb'
            places = 1
            factor = 1000000000
        } else if (dataRate >= 1000000) {
            units = 'Mb'
            places = 1
            factor = 1000000
        } else if (dataRate >= 10000) {
            units = 'kb'
            places = 0
            factor = 1000
        } else if (dataRate >= 1000) {
            units = 'kb'
            places = 1
            factor = 1000
        } else if (dataRate > 100) {
            units = 'kb'
            places = 2
            factor = 1000
        } else {
            units = 'b'
            places = 2
            factor = 1
        }
        units += '/sec'
        var dataDateDisplay = (dataRate / factor).toFixed(places)
        if (s.length > 0) {
            s += '<br>'
        }
        s += '<font color="#808080">' + dataDateDisplay + '&nbsp;' + units + '&nbsp;(' + band + ')</font>'
    }
    return s
}

function processRange(uprange_km, rtlt_sec) {
    uprange = uprange_km * 0.621371
    if (uprange_km == -1) {
        uprange = ''
    } else if (uprange >= 1000000000) {
        uprange = uprange / 1000000000
        uprange = uprange.toFixed(2)
        uprange = uprange.toString() + '&nbsp;billion&nbsp;mi'
    } else if (uprange >= 1000000) {
        uprange = uprange / 1000000
        uprange = uprange.toFixed(2)
        uprange = uprange.toString() + '&nbsp;million&nbsp;mi'
    } else {
        uprange = Math.round(uprange / 1000) * 1000
        uprange = uprange.toLocaleString(2) + '&nbsp;mi'
    }
    rtlt_min = rtlt_sec / 60
    rtlt_hours = rtlt_min / 60

    uprange += '<br><font color="#808080">'
    if (rtlt_hours > 1) {
        uprange += rtlt_hours.toFixed(1) + '&nbsp;light&nbsp;hrs'
    } else if (rtlt_min > 1) {
        uprange += rtlt_min.toFixed(1) + '&nbsp;light&nbsp;min'
    } else if (rtlt_sec > 0) {
        uprange += rtlt_sec + '&nbsp;light&nbsp;sec'
    }
    uprange += '</font>'
    return uprange
}