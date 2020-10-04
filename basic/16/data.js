async function csvData() {
    const response = await fetch('trial.csv');
    const data = await response.text();

    const rawData = data.split('\n').slice(1);
    rawData.forEach(rows => {
        const columns = rows.split(',');
        const yr = columns[0];
        const temp = columns[1];
        console.log(yr, temp);
    })
}

csvData();