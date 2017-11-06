/**
 * Sort objects by sellingPrice
 * 
 * @param arr Array of objects containing a sellingPrice attribute 
 */
function sortArrayBySellingPrice(arr) {
  return new Promise ((resolve, reject) => {
    arr.sort((a, b) => a["sellingPrice"] - b["sellingPrice"]);
    resolve(arr);
  });
};

module.exports = {
  sortArrayBySellingPrice: sortArrayBySellingPrice,
};