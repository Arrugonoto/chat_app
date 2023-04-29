const Filter = require('bad-words');
const polishProfanityList = require('../data/polishProfanities');
// create variable with list of Polish swear words
const listOfProfanities = polishProfanityList.swearingPolish;

// create new filter with matching pattern
const filter = new Filter({ replaceRegex: /[A-Za-z0-9_]/gu });
// join list of swearing in polish
filter.addWords(...listOfProfanities);

// filtering function
const filterText = text => {
   try {
      const filtered = filter.clean(text);

      return filtered;
   } catch (error) {
      console.error(error.message);
   }
};

module.exports = { filterText };
