const fs = require("fs");
const server = require("http").createServer();

server.on("request", (req, res) => {
  //solution 1 with using streams
  //   fs.readFile("./test-file.txt", "utf-8", (err, data) => {
  //     if (err) {
  //       console.log(err);
  //     }
  //     res.end(data);
  //   });
  //Solution 2 ( using createReadStream but has back pressure)
  //   const readable = fs.createReadStream("./ttest-file.txt");
  //   readable.on("data", (chunk) => {
  //     res.write(chunk);
  //   });
  //   readable.on("end", () => {
  //     res.end();
  //   });
  //   readable.on("error", (err) => {
  //     res.statusCode = 501;
  //     console.log(err);
  //     res.end("File Not Found");
  //   });

  //solution 3 (best solution)

  const readable = fs.createReadStream("./test-file.txt");
  readable.pipe(res);
  readable.on("error", (err) => {
    res.statusCode = 501;
    console.log(err);
    res.end("File not found");
  });
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Server started and listening to port 8000........");
});
