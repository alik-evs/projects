const http = require("http");
const personalModule = require("./personalmodule");

const server = http.createServer((req, res) => {
  const userName = "Alya"; 
  const greetingMessage = personalModule.getGreetingMessage(userName);

  const currentDate = new Date();
  const requestDate = currentDate.toLocaleString();

  res.writeHead(200, { "Content-Type": "text/html" });
  res.write(`<h1>${greetingMessage}</h1>`);
  res.write(`<p>Request date: ${requestDate}</p>`);
  res.end();
});

const port = 5000;

server.listen(port, () => {
  console.log(`Port ${port}`);
});
