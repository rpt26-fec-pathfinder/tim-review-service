module.exports = {
  generateInBetweenSync: (max) => {
    return Math.ceil(Math.random() * max);
  },
  threeValProb: (num1, num2) => {
    var random = Math.random();
    if (random <= num1) {
      return 0;
    } else if (random <= num2) {
      return 1;
    } else {
      return 2;
    }
  },
  twoValProb: (num1) => {
    var random = Math.random();
    if (random <= num1) {
      return 0;
    } else {
      return 1;
    }
  }
}

// generateInBetweenSync = (max) => {
//   return Math.ceil(Math.random() * max);
// };

// module.exports.threeValProb = (num1, num2) => {
//   var random = Math.random();
//   if (random <= num1) {
//     return 0;
//   } else if (random <= num2) {
//     return 1;
//   } else {
//     return 2;
//   }
// };

// module.exports.twoValProb = (num1) => {
//   var random = Math.random();
//   if (random <= num1) {
//     return 0;
//   } else {
//     return 1;
//   }
// };