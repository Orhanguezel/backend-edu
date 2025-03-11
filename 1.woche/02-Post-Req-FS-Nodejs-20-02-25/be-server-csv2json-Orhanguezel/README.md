# CSV Converter

This is a problem solving exercise that requires you to research and figure out how to use a specific library and how to write to a file.

Create a program that converts [CSV](https://en.wikipedia.org/wiki/Comma-separated_values) files into JSON files, using the [`csvtojson`](https://www.npmjs.com/package/csvtojson) library. The library examples use `CommonJS` for modules, but you can simply use `import csv from "csvtojson"` instead.

## Requirements

See usage examples below.

- The program should accept one or two arguments. If no arguments are passed, the program should exit the process and print a message to the user.

- If only one argument is passed, the program should convert the file in that path to a json file in the same directory.

- If two arguments are passed, the program should write the file to the path in the second argument.

- If the program cannot read or write the file, it should print out a message to the user (see examples).

## Examples

### One argument passed (Source CSV)

```bash
$ node index.js demo.csv
> "JSON file saved at: demo.json"
```

### Two arguments passed (Source CSV, target JSON)

```bash
$ node index.js demo.csv hello.json
> "JSON file saved at: hello.json"
```

### No arguments passed

```bash
$ node index.js
> "Please provide a csv file to convert to JSON"
```

### An error occurred

```bash
$ node index.js demo.csv hello.json
> "Something went wrong, Could not write json to: hello.json"
```

## Bonus

As a bonus research task, figure out how to set up the program so that you can use it in the terminal with a simple command no matter where you are, for example;

```bash
$ # Switch to ~/Downloads
$ cd ~/Downloads

$ # Download world population data CSV
$ curl https://datacatalogfiles.worldbank.org/ddh-published/0038126/DR0046428/POP.csv > pop.csv

$ # Convert CSV to JSON
$ csv2json pop.csv pop.json
```