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
        blink=false
        if (dataRate >= 1000000000) {
            units = 'Gb'
            places = 1
            factor = 1000000000
            blink=true
        } else if (dataRate >= 1000000) {
            units = 'Mb'
            places = 1
            factor = 1000000
            blink=true
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
        RfBandColors = {X: '#b7d7e8', S: '#f2ae72', Ka: '#80ced6'}

        if (band in RfBandColors) {
            s += '<span style="text-align: center; color: ' + RfBandColors[band] + '">' + band + ':&nbsp;' + dataDateDisplay + '&nbsp;' + units + '&nbsp;' + arrowchar + '</span>'
        } else {
            s += '<span style="text-align: center;' + dataDateDisplay + '&nbsp;' + units + '&nbsp;' + arrowchar + '</span>'
        }
    }
    if (blink) {
        s = '<span class="blink_me">' + s + '</span>'
    }
    return s
}


function processRange(uprange_km, rtlt_sec) {
    uprange = uprange_km * 0.621371
    blink = false
    if (uprange_km == -1) {
        uprange = ''
    } else if (uprange >= 1000000000) {
        uprange = uprange / 1000000000
        uprange = uprange.toFixed(2)
        uprange = uprange.toString() + '&nbsp;billion&nbsp;mi'
        blink = true
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

    uprange += '<br>'
    if (rtlt_hours > 1) {
        uprange += rtlt_hours.toFixed(1) + '&nbsp;light&nbsp;hrs'
    } else if (rtlt_min > 1) {
        uprange += rtlt_min.toFixed(1) + '&nbsp;light&nbsp;min'
    } else if (rtlt_sec > 0) {
        uprange += rtlt_sec + '&nbsp;light&nbsp;sec'
    }
    if (blink) {
        uprange = '<span class="blink_me" style="color: yellow">' + uprange + '</span>'
    } else if  (rtlt_min > 20) {
        uprange = '<span style="color: orange">' + uprange + '</span>'
    } else if  (rtlt_min > 10) {
        uprange = '<span style="color: #FFCBA4">' + uprange + '</span>'
    } else if  (rtlt_min > 4) {
        uprange = '<span style="color: #FA8072">' + uprange + '</span>'
    } else if  (rtlt_min > 1) {
        uprange = '<span style="color: #C0C0C0">' + uprange + '</span>'
    } else {
        uprange = '<span style="color: #ADD8E6">' + uprange + '</span>'

    }
    return uprange
}

function replaceTableRows(tableId, newData) {
    const table = document.getElementById(tableId);
    const tbody = table.querySelector("tbody");

    // Clear existing rows
    tbody.innerHTML = "";

    // Add new rows
    newData.forEach(rowData => {
        var cnt = 0
        const row = tbody.insertRow();
        rowData.forEach(cellData => {
            cnt++
            const cell = row.insertCell();
            cell.innerHTML = cellData;
        });
    });
}

