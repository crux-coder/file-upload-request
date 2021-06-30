const axios = require('axios');
var FormData = require('form-data');
const fs = require('fs');
/**
 * Now this is just a simple request that will post a file.
 * You can build from here whatever you need.
 * Run this code: node index.js from the terminal and that will send the request.
 */
var data = new FormData();
data.append('file', fs.createReadStream('/abas2zeus014.txt'));

var config = {
  method: 'post',
  url: 'http://dev.leanfocus.de:5000/api/orders/ascii-import',
  headers: { 
    'Authorization': `Bearer ${token}`, 
    ...data.getHeaders()
  },
  data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});