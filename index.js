var cfg = require('./config');
var fs = require('fs');
var eol = require('os').EOL;
var date = cfg.formatDate(new Date());
var writer = fs.createWriteStream(cfg.filePath, { flags: 'a' });
var rli = require('readline').createInterface(process.stdin, process.stdout);

console.log('Enter note:');
writer.write('> ' + date + eol);
rli.prompt();

rli.on('line', function(line) {
  writer.write(line + eol);
  rli.prompt();
}).on('close', function() {
  writer.write(eol);
  console.log('Note saved: [' + date + ']');
  process.exit(0);
});
