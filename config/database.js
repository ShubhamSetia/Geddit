const crypto = require('crypto').randomBytes(256).toString('hex');

module.exports = {
  uri : 'mongodb://B05:shubham@ds159254.mlab.com:59254/geddit',
  secret : crypto,
  db : process.env.databaseName
}
//mongodb://B05:shubham@ds159254.mlab.com:59254/geddit
