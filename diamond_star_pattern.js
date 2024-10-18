function diamondPattern(rows) {
  for (let i = 1; i <= rows; i++) {
    console.log(' '.repeat(rows - i) + '*'.repeat(2 * i - 1));
  }
  for (let i = rows - 1; i >= 1; i--) {
    console.log(' '.repeat(rows - i) + '*'.repeat(2 * i - 1));
  }
}


diamondPattern(5);
