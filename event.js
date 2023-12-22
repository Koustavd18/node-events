const fs = require("fs");
const crypto = require("crypto");

process.env.UV_THREADPOOL_SIZE = 4;

const start = Date.now();
const password = "password";
setTimeout(() => console.log("timer 1"), 0);
setImmediate(() => console.log("immediate 1"));

fs.readFile("./test-file.txt", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("I/O completed");

  console.log("------------------");
  setTimeout(() => console.log("Timer 2"), 0);
  setImmediate(() => console.log("Immediate 2"));
  setTimeout(() => console.log("Timer 3"), 3000);

  process.nextTick(() => console.log("Process.nextTick"));

  crypto.pbkdf2(password, "salt", 100000, 1024, "sha512", () => {
    console.log(Date.now() - start, "Password Encypted");
  });

  crypto.pbkdf2(password, "salt", 100000, 1024, "sha512", () => {
    console.log(Date.now() - start, "Password is Encrypted");
  });

  crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
    console.log(Date.now() - start, "Password Encrypted");
  });

  crypto.pbkdf2("Password ", "salt", 100000, 1024, "sha512", () => {
    console.log(Date.now() - start, "Password Encypted");
  });

  crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
    console.log(Date.now() - start, "PASSWORD ENCRYPTED");
  });
});

console.log("Logging from the top of the code");

/////////////////////
