const utils = require('./utils.js');

/**
 * Return two objects with the nearest sum to the target
 * 
 * Ex: If the target is 90, and the objects have the following selling prices (10, 18, 72),
 * return the objects 18 and 72
 * 
 * @param DATA Array of objects containing an id and a sellingPrice attribute
 * @param TARGET Number that we want to be the closest to
 */
function getMatchingNumbers(DATA, TARGET) {
  return new Promise ((resolve, reject) => {
    utils.sortArrayBySellingPrice(DATA)
      .then(DATA => {
        // Get the indexes of 2 elements in the center of the filtered Array (median)
        let half = Math.floor(DATA.length / 2); // Down to nearest integer
        let s1 = half;
        let s2 = half + 1;

        // Initialize
        let sum = DATA[s1]["sellingPrice"] + DATA[s2]["sellingPrice"]
        let dist = Math.abs(TARGET - sum);
        let distLast = Infinity;

        while (dist < distLast) {
          // If the computed sum is higher than the TARGET, then decrease the lowest value
          if (Math.abs(sum > TARGET) && DATA[s1 - 1]) s1--;
          // Else, increase the highest value
          else if (DATA[s2 + 1]) s2++;

          // Update values
          distLast = dist;
          sum = DATA[s1]["sellingPrice"] + DATA[s2]["sellingPrice"];
          dist = Math.abs(TARGET - sum);
        }
        
        resolve({"s1": DATA[s1], "s2": DATA[s2]});
      }).catch(e => reject(e));
    });
}

module.exports = {
  getMatchingNumbers: getMatchingNumbers,
};