// https://www.codewars.com/kata/5274e122fc75c0943d000148

function groupByCommas(n) {
    return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }