// csvParserGenerator.js

module.exports = {
    parseCSV,
    generateCSV
};

function parseCSV(csvData, delimiter = ',') {
    const lines = csvData.split('\n');
    const headers = lines[0].split(delimiter);
    const rows = [];

    for (let i = 1; i < lines.length; i++) {
        const values = lines[i].split(delimiter);
        if (values.length === headers.length) {
            const row = {};
            for (let j = 0; j < headers.length; j++) {
                row[headers[j]] = values[j];
            }
            rows.push(row);
        }
    }

    return rows;
}

function generateCSV(data, delimiter = ',') {
    if (!Array.isArray(data) || data.length === 0) {
        return '';
    }

    const headers = Object.keys(data[0]);
    const headerRow = headers.join(delimiter);

    const rows = data.map(item => {
        return headers.map(header => {
            return item[header];
        }).join(delimiter);
    });

    return [headerRow, ...rows].join('\n');
}
