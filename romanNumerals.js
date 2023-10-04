function toRomanLazy(num) {
  const numerals = {
    1: "I",
    5: "V",
    10: "X",
    50: "L",
    100: "C",
    500: "D",
    1000: "M"
  }
  let result = ""
  while (num > 0) {

    if (num >= 1000) {
      result += numerals[1000]
      num -= 1000
    } else if (num >= 500) {
      result += numerals[500]
      num -= 500
    } else if (num >= 100) {
      result += numerals[100]
      num -= 100
    } else if (num >= 50) {
      result += numerals[50]
      num -= 50
    } else if (num >= 10) {
      result += numerals[10]
      num -= 10
    } else if (num >= 5) {
      result += numerals[5]
      num -= 5
    } else if (num >= 1) {
      result += numerals[1]
      num -= 1
    }
  }

  return result;
}

function toRoman(num) {
  const numerals = {
    1: "I",
    4: "IV",
    5: "V",
    9: "IX",
    10: "X",
    40: "XL",
    50: "L",
    100: "C",
    400: "CD",
    500: "D",
    900: "CM",
    1000: "M"
  }
  result = ""
  while (num > 0) {

    if (num >= 1000) {
      result += numerals[1000]
      num -= 1000
    } else if (num >= 900) {
      result += numerals[900]
      num -= 900
    } else if (num >= 500) {
      result += numerals[500]
      num -= 500
    } else if (num >= 400) {
      result += numerals[400]
      num -= 400
    } else if (num >= 100) {
      result += numerals[100]
      num -= 100
    } else if (num >= 50) {
      result += numerals[50]
      num -= 50
    } else if (num >= 40) {
      result += numerals[40]
      num -= 40
    } else if (num >= 10) {
      result += numerals[10]
      num -= 10
    } else if (num >= 9) {
      result += numerals[9]
      num -= 9
    } else if (num >= 5) {
      result += numerals[5]
      num -= 5
    } else if (num >= 4) {
      result += numerals[4]
      num -= 4
    } else if (num >= 1) {
      result += numerals[1]
      num -= 1
    }
  }
  return result;
}

module.exports = { toRoman, toRomanLazy };
