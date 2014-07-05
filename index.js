// imports
var fs = require('fs');
var readline = require('readline');
var eol = require('os').EOL;
var cfg = require('./config');

// formatted date string
var date = cfg.formatDate(new Date());

// readline interface
var rli = readline.createInterface({
	input: process.stdin, 
	output: fs.createWriteStream(cfg.filePath, { flags: 'a' })
});

// event listeners
rli.on('line', function(line) {
  rli.output.write(String(line) + eol);
});
process.on('SIGINT', function() {
  rli.output.write(eol);
  process.stdin.write(eol + 'Note saved!' + eol);
  process.exit(0);
});

// initial writes
process.stdin.write('Enter note:' + eol);
rli.output.write('> ' + date + eol);