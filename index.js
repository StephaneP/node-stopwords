var fs = require('fs'),
    path = require('path');
    Dictionaries = {};

fs.readdirSync(__dirname + '/dictionaries').forEach(function (file) {
  if (file.match(/.+\.js/g) !== null) {
    var name = path.basename(file, '.js');
    Dictionaries[name] = require(__dirname + '/dictionaries/' + file);    
  }
});

module.exports = Dictionaries;
