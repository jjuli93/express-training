const rp = require('request-promise');

const getWeet = () => rp.get('https://geek-jokes.sameerkumar.website/api?format=json');

module.exports = {
  getWeet
};
