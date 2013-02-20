/*
 * removes databases starting with test
 * use with care
 */
var http = require('http');
var localhost = 'http://127.0.0.1:5984';

var request = require('request');
request(localhost + '/_all_dbs', function(err, res, body) {
  JSON.parse(body).forEach(function(db){
    if(/^test/.test(db)){
      console.log(db);
      request.del(localhost + '/' + db);
    }
  });
});
