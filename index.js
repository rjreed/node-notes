var fs = require('fs');
var path = require('path');
var chalk = require('chalk');
var eol = require('os').EOL;
var fileName = 'jsNotes.txt';
var filePath = path.resolve(process.env[(process.platform == 'win32') ? 'USERPROFILE' : 'HOME'], fileName);
var date = require('moment')().format('lll');
var writer = fs.createWriteStream(filePath, { flags: 'a' });
var rli = require('readline').createInterface(process.stdin, process.stdout);

console.log(chalk.cyan('Enter new note:'));
writer.write('> ' + date + eol);
rli.prompt();

rli.on('line', function(line) {
  writer.write(line + eol);
  rli.prompt();
}).on('close', function() {
  writer.write(eol);
  console.log(chalk.cyan('Note saved: ') + chalk.cyan.bold('[' + date + ']'));
  process.exit(0);
});
