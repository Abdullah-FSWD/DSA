let n = 5;
let m = 9;
for (let i = 0; i < n; i++) {
  let str = "";
  for (let j = 0; j <= m; j++) {
    if (i == n - 1) {
      str += "*";
    } else if (i == 0 && j == (m - 1) / 2) {
      str += "*";
    } else if (j == (m - 1) / 2 + i || j == (m - 1) / 2 - i) {
      str += "*";
    } else {
      str += " ";
    }
  }
  console.log(str);
}
