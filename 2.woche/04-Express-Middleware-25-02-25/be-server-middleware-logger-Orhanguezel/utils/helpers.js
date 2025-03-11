import fs from "fs";

const fileName = "log.txt";

export function appendToLogFile(string) {
  try {
    fs.appendFileSync(fileName, `${string}\n`);
    console.log(`Data written to ${fileName}`);
  } catch (error) {
    console.error("Error writing file (did you pass the correct data?)");
    console.error(error.message);
  }
}
