const crypto = require('crypto').randomBytes(256).toString('hex');

module.exports = {
  uri : 'mongodb://localhost:27017/geddit',
  secret : crypto,
  db : 'geddit'
}
//mongodb://B05:shubham@ds159254.mlab.com:59254/geddit
