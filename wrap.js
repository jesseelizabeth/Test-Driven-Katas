const wrap = (line, maxLen) => {
  const lineIsString = (typeof line === 'string');
  const maxLenIsInteger = (typeof maxLen === 'number');

  if (!lineIsString || !maxLenIsInteger) {
    console.log( 'Error: Inputs are wrong types.  Expect (String,Number)')
    return 'error';
  }
  //res = "";
  let result = '';
  for (let i = 0; i < line.length; i++) {
    if ( (i+1) % maxLen === 0 && i!==line.length-1) {
      result += line[i]+'\n'
    } else {
      result += line[i]
    }
   }

  return result;
};
module.exports = wrap;
