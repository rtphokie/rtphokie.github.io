const parser = new DOMParser();

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
            cell.style.textAlign = 'center';
            if (cnt == 6) {
                if (cellData.includes('billion')) {
                    cell.style.color = 'yellow';
                }
            } else if (cnt == 3) {
                cell.style.textAlign = 'center';
                if (cellData.includes('Mb')) {
                    cell.style.color = 'yellow';
                }
            }
            cell.innerHTML = cellData;
        });
    });
}


function processSignals(signalData, seconds) {
    data = {}
    for (let i = 0; i < signalData.length; i++) {
        const signal = signalData[i];
        var active = signal.getAttribute('active')
        if (active != "true") {
            continue
        }
        const spacecraft = signal.getAttribute('spacecraft').toLowerCase();
        var dataRate = Number(signal.getAttribute('dataRate'))
        var power = signal.getAttribute('power')
        var band = signal.getAttribute('band')
        if (dataRate > 0) {
            if (!(spacecraft in data)) {
                data[spacecraft] = {
                    totalDataRate: 0
                }
            }
            if (!(band in data[spacecraft])) {
                // track bands separately so we can display them
                data[spacecraft][band] = {dataRate: 0, power: 0}
            }
            // store this signal with the appropriate rf band
            data[spacecraft][band].dataRate += dataRate
            data[spacecraft][band].power += power
            // accumulate data
            data[spacecraft].totalDataRate += dataRate * seconds
        }
    }
    return data
}

function processTarget(target, seen) {
    const id = target.getAttribute('name').toLowerCase();

    // accumulate data across all bands
    if (id in download) {
        spacecraftMap[id].total_down += download[id].totalDataRate
    }
    // process range
    var rtlt_sec = Number(target.getAttribute('rtlt')) / 2
    var uprange_km = Number(target.getAttribute('uplegRange'))
    uprange = processRange(uprange_km, rtlt_sec)

    // prepare table
    if (!(id in spacecraftMap)) {
        // new spacecraft, should be added to hard coded map above.
        spacecraftMap[id] = {
            id: id,
            title: target.getAttribute('name'),
        }
    }
    if ((!seen.has(spacecraftMap[id].title)) & (spacecraftMap[id].title != 'Testing')) {
        updown = ''

        // build speed column
        if (id in upload) {
            updown += processUpDown(upload[id], '&uprr;')
        }
        if (id in download) {
            updown += processUpDown(download[id], '&darr;')
        }
        if (updown.length <= 5) {
            if (spacecraftMap[id].total_down > 0) {
                updown += '<font color="#808080">teardown</font>'
            } else {
                updown += '<font color="#808080">startup</font>'
            }
        }
        // accumulated total
        if (spacecraftMap[id].total_down > 0) {
            [total_down_human, total_down_units] = dataRateHuman(spacecraftMap[id].total_down)
            console.log(id, spacecraftMap[id].total_down, total_down_human, total_down_units)
            updown += '<br>' + total_down_human + '&nbsp;' + total_down_units + '&nbsp;total'
        }

        // add flag for non-NASA spacecraft
        flag = ''
        if (spacecraftMap[id].flag != null) {
            flag = '<img src="' + spacecraftMap[id].flag + '" height="20">'

        }
        newRow = [id.toUpperCase() + flag, spacecraftMap[id].title, updown, spacecraftMap[id].location, spacecraftMap[id].mission, uprange]
    }
    return [id, newRow]
}


function main() {
    var newData = []
    const refresh_seconds = 10

    fetch('https://eyes.nasa.gov/dsn/data/dsn.xml?r=' + Date.now())
        .then(response => response.text())
        .then(xmlString => {
                const parser = new DOMParser();
                const xmlDoc = parser.parseFromString(xmlString, 'text/xml');
                var seen = new Set();

                // gather signals
                upload = processSignals(xmlDoc.getElementsByTagName('upSignal'), refresh_seconds);
                download = processSignals(xmlDoc.getElementsByTagName('downSignal'), refresh_seconds);

                // gather targets
                const targets = xmlDoc.getElementsByTagName('target');
                for (let i = 0; i < targets.length; i++) {
                    const target = targets[i];
                    [id, newRow] = processTarget(target, seen)
                    seen.add(spacecraftMap[id].title);
                    newData.push(newRow)
                }
                newData.sort((a, b) => a[0].localeCompare(b[0]));
                replaceTableRows("SPACECRAFTTARGETS", newData);
            }
        )
        .catch(error => {
            console.error('Error fetching or parsing XML:', error);
        });
}

setInterval(main, 100000)