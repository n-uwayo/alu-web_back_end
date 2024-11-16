const http = require('http');
const countStudents = require('./3-read_file_async');

const args = process.argv.slice(2);
const DATABASE = args[0];

const hostname = '127.0.0.1';
const port = 1245;

const app = http.createServer(async (req, res) => {
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/') {
    res.statusCode = 200;
    res.end('Hello Holberton School!');
    return;
  }

  if (req.url === '/students') {
    res.statusCode = 200;
    res.write('This is the list of our students\n');

    try {
      const studentInfo = await getStudentData(DATABASE);
      res.end(studentInfo);
    } catch (error) {
      res.end(error.message);
    }
    return;
  }

  // For all other routes
  res.statusCode = 404;
  res.end('Not Found');
});

async function getStudentData(path) {
  return countStudents(path)
    .then((students) => students.join('\n'))
    .catch((error) => {
      throw error;
    });
}

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

module.exports = app;
