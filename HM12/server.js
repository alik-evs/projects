const http = require('http');
const os = require('os');
const path = require('path');

const server = http.createServer((req, res) => {
  const userInfo = os.userInfo();
  const osType = os.type();
  const uptimeMinutes = Math.floor(os.uptime() / 60);
  const currentDir = process.cwd();
  const serverFileName = path.basename(__filename);

  const html = `
    <html>
      <head>
        <title>System Information</title>
      </head>
      <body>
        <h1>System Information</h1>
        <p><b>Username:</b> ${userInfo.username}</p>
        <p><b>Operating System:</b> ${osType}</p>
        <p><b>Uptime (minutes):</b> ${uptimeMinutes}</p>
        <p><b>Current Directory:</b> ${currentDir}</p>
        <p><b>Server File Name:</b> ${serverFileName}</p>
      </body>
    </html>
  `;

  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(html);
});

server.listen(5000, () => {
  console.log('Server is running on http://localhost:5000/');
});
