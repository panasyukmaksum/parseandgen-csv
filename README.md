# parseandgen-csv

This is a simple CSV parser and generator module for Node.js.

## Installation

To install the package, use npm:

```
npm install parseandgen-csv
```

## Usage

```javascript
const { parseCSV, generateCSV } = require('parseandgen-csv');

// Parse CSV data
const csvData = `Name,Age,Location
John,30,New York
Alice,25,Los Angeles
Bob,35,Chicago`;
const parsedData = parseCSV(csvData);
console.log('Parsed Data:', parsedData);

// Generate CSV data
const data = [
    { Name: 'John', Age: 30, Location: 'New York' },
    { Name: 'Alice', Age: 25, Location: 'Los Angeles' },
    { Name: 'Bob', Age: 35, Location: 'Chicago' }
];
const generatedCSV = generateCSV(data);
console.log('Generated CSV:', generatedCSV);
```

## API

### `parseCSV(csvData, delimiter = ',')`

Parses the given CSV data into an array of objects.

- `csvData`: The CSV data to parse.
- `delimiter`: (Optional) The delimiter used in the CSV data. Default is ','.

Returns an array of objects representing the CSV rows.

### `generateCSV(data, delimiter = ',')`

Generates CSV data from an array of objects.

- `data`: The array of objects to convert to CSV.
- `delimiter`: (Optional) The delimiter to use in the CSV data. Default is ','.

Returns a string representing the CSV data.

## License

This package is licensed under the MIT License.
