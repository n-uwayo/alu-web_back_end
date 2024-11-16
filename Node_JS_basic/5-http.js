const http = require('http');
const countStudents = require('./3-read_file_async');

const args = process.argv.slice(2);
const DATABASE = args[0];

const hostname = '127.0.0.1';
const port = 1245;

const app = http.createServer(async (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  const { url } = req;

  if (url === '/') {
    res.end('Hello Holberton School!');
    return;
  }

  if (url === '/students') {
    res.write('This is the list of our students\n');
    try {
      await countStudents(DATABASE);
      res.end();
    } catch (error) {
      res.end(error.message);
    }
    return;
  }

  // For all other routes
  res.statusCode = 404;
  res.end('Not Found');
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

module.exports = app;
