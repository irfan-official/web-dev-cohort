const fs = require("fs");

console.log("Startinng Program");

const contents = fs.readFileSync("./hello.txt", "utf-8");

console.log("File Reading Success:\n", contents);

// modern code
// fs.readFile("./hello.txt", "utf-8").then((content) =>
//   fs.writeFile("backup.txt", content)
// ).then(())

// callback hell || -> triangle callback ---- ||||  Lagacy code old code
fs.readFile("./hello.txt", "utf-8", (err, content) => {
  if (err) {
    console.log("Error ==> ", err);
  } else {
    console.log("File reading Success", content);
    fs.writeFile("backup.txt", content, (err) => {
      if (err) {
        console.log("error == > ", err);
      } else {
        fs.unlink("./hello.txt", (err) => {
          if (err) {
            console.log("error ==> ", err);
          } else {
            console.log("Done");
          }
        });
      }
    });
  }
});

// make a custom promise CB Supported code to custom Promises

// readFile , writeFile , ulink
// Promisification 
function readFileWithPromise(filepath, encoding) {
  return new Promise((resolve, reject) => {
    fs.readFile(filepath, encoding, (err, content) => {
      if (err) {
        reject(err);
      } else {
        resolve(content); // signal do - user ke then function ko execute kardo
      }
    });
  });
}

const result = readFileWithPromise("./hello.txt", "utf-8");

result.then((e) => {}).catch((e) => {});

function writeFileWithPromise(filepath, content) {
  return new Promise((resolve, reject) => {
    fs.writeFile(filepath, content, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
}
function unlinkWithPromise(filepath) {
  return new Promise((resolve, rehject) => {
    fs.unlink();
  });
}

async function test(params) {
  await new Promise()
}