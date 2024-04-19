import fs from "node:fs/promises";
import pc from "picocolors";
import readline from "node:readline";
import path from "node:path";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

async function createFile(fileName, content) {
  try {
    await fs.writeFile(path.join(".", "notes", `${fileName}.txt`), content);
  } catch (err) {
    console.error(pc.red(`It was an error writing the file:  ${err}`));
  }
}

function createUI() {
  console.log(pc.blue("Welcome!"));
  console.log(pc.green("*1 New Note"));
  console.log(pc.green("*2 Open Note"));
}

async function readFile(name) {
  try {
    const data = await fs.readFile(path.join(".", "notes", `${name}.txt`), {
      encoding: "utf8",
    });
    console.log(pc.magenta("File Opened: "));
    console.log(data);
  } catch (error) {
    console.error("It was a problem reading the file: ", error);
  }
}

function selectOption() {
  rl.question(pc.yellow("Select an option: "), (option) => {
    console.log(`Option ${option} choosed`);
    askName(option);
  });
}

function askName(opt) {
  rl.question(pc.yellow("What's the name of the file?: "), (name) => {
    if (opt === "1") {
      writeContent(name);
    } else if (opt === "2") {
      readFile(name);
    }
  });
}

function writeContent(fileName) {
  rl.question(pc.cyan("Write some text!: "), (content) => {
    createFile(fileName, content);
    rl.close();
  });
}

createUI();
selectOption();
