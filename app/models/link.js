var db = require('../config');
var crypto = require('crypto');
var mongoose = require('mongoose');

var linkSchema = mongoose.Schema({
      url: string,
      baseUrl: string,
      code: string,
      title: string,
      visits: Number
});
var Link = mongoose.model('Link', linkSchema);

linkSchema.pre('save', function(next) {
      var shasum = crypto.createHash('sha1');
      shasum.update(this.url);
      this.code = shasum.digest('hex').slice(0, 5);
      next();
});

module.exports = Link;

// var User = db.Model.extend({
//   tableName: 'users',
//   hasTimestamps: true,
//   initialize: function() {
//     this.on('creating', this.hashPassword);
//   },

//   hashPassword:
// });
