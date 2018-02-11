const secrets = {
  'db_uri': 'mongodb://hassantauqeer:hassankhokhar786@ds231658.mlab.com:31658/solution',
};

module.exports = {
  requestSecret: function(s) {
    return secrets[s];
  },
};
