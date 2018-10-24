function sumItems(arr) {
  if (!Array.isArray(arr)) return NaN;
  for (var value, total=0, x=0, iLen=arr.length; x<iLen; x++) {
    value = arr[x];
    total += Array.isArray(value)? sumItems(value) : value;
  }
  return total;
}
module.exports = sumItems;
