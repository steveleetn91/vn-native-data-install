var fs = require('fs');
fs.readFile('./platforms/android/app/src/main/assets/www/index.html', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  var result = data.replace('type="module"', 'type="text/javascript"');
  for(i=0;i < 10;i++) {
    result = result.replace('type="module"', 'type="text/javascript"');
  }
  fs.writeFile('./platforms/android/app/src/main/assets/www/index.html', result, 'utf8', function (err) {
     if (err) return console.log(err);
  });
});