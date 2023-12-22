const EventEmitter = require("events");
const http = require("http");

const myEmitter = new EventEmitter();

myEmitter.on("newSales", () => {
  console.log("New item sold");
});

myEmitter.on("newSales", () => {
  console.log("Customer Name : Zuck Makerberg");
});

myEmitter.on("stock", (stock) => {
  console.log(`Stock has been updated with ${stock} items`);
});

myEmitter.emit("newSales");
myEmitter.emit("stock", 10);

const server = http.createServer();

server.on("request", (req, res) => {
  console.log("request received 1");
  res.end("Request Received");
});

server.on("request", (req, res) => {
  console.log("another req");
  // res.end('Another req');
});

server.on("close", () => {
  console.log("server closed");
});

server.listen(8000, "127.0.0.1", () => {
  console.log("server started");
});
