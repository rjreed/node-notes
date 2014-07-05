var path = require('path');
var config = module.exports = {};

config.fileName = 'notes.txt';
config.filePath = path.resolve(__dirname, '../../', config.fileName);
config.formatDate = function(d) {
  return d.getMonth() + '.' + d.getDate() + '.' + d.getFullYear() + ' ' + d.toTimeString().substr(0, 5);
}