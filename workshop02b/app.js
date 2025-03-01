const axios = require('axios');

const API_URL = 'https://jsonplaceholder.typicode.com/todos/1';

axios.get(API_URL)
    .then(response => {
        console.log('✅ Response Data:', response.data);
    })
    .catch(error => {
        console.error('❌ Error fetching data:', error.message);
    });

    const fs = require('fs');

fs.readFile('example.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading the file:', err);
    return;
  }

  console.log(data);
});

const textToWrite = 'This is the first line of text in output.txt.\n';
const textToAppend = 'This is an appended line of text.\n';

fs.writeFile('output.txt', textToWrite, (err) => {
  if (err) {
    console.error('Error writing to file:', err);
    return;
  }
  console.log('File written successfully!');
});

  fs.appendFile('output.txt', textToAppend, (err) => {
    if (err) {
      console.error('Error appending to file:', err);
      return;
    }
    console.log('Additional text appended successfully!');
});

fs.unlink('temp.txt', (err) => {
    if (err) {
      console.error('Error deleting the file:', err);
      return;
    }
    console.log('File deleted successfully!');
});

fs.mkdir('testDir', (err) => {
    if (err) {
      console.error('Error creating directory:', err);
      return;
    }

    console.log('Directory "testDir" created successfully!');
    
    fs.rmdir('testDir', (err) => {
        if (err) {
          console.error('Error removing directory:', err);
          return;
        }
        console.log('Directory "testDir" removed successfully!');
    });
});

fs.watch('watch.txt', (eventType, filename) => {
    if (eventType === 'change') {
      console.log(`${filename} has been modified!`);
    }
});