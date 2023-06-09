// easy

/**
 * Reverse an array
 *
 * @param {array} array the array to be reversed
 * @returns {array} a new reversed copy of the array
 */
const reverse = (array) => {
  const reversed = [];

  for (let index = array.length - 1; index >= 0; index--) {
    reversed.push(array[index]);
  }

  return reversed;
};


const fill = (array, value, start = 0, end = array.length) => {
  // TODO
};

/**
 * Converts all elements in array into a string separated by separator.
 *
 * @param {Array} array The array to convert.
 * @param {String} separator The element separator. Default is ','.
 * @returns {String} Returns the joined string.
 * @example 
 * join(['apple', 'banana', 'orange'],'+') ==> 'apple+banana+orange'
 * 
 * @author Gergana Dragoeva Quievy
 */
 const join = (array, separator = ',') => {
  let result = '';
  for (let index = 0; index < array.length; index++) {
    result += array[index];
    if (index < array.length - 1) {
      result += separator;
    }
  }

  return result;
}; 

const indexOf = (array, element) => {
  // TODO
};

// hard

const filter = (array, predicate) => {
  let outputArray = [];
  for (let i = 0; i < array.length; i++) {
    if (predicate(array[i], i, array)) {
      outputArray.push(array[i]);
    }
  }
  return outputArray;
  //DONE
};

const zip = (...arrays) => {
  // TODO
};

export { reverse, fill, join, indexOf, filter, zip };
