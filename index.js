fs = require('fs');
var name = 'fileName.json';
var m = JSON.parse(fs.readFileSync(name).toString());
m.forEach(function(p){
    p.name= m.name;
});
fs.writeFileSync(name, JSON.stringify(m));