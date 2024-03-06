let n = 5;
let m = 9;
for (let i = 0; i < n; i++) {
  let str = "";
  for (let j = 0; j <= m; j++) {
    if (j <= i - 1 || j >= m - i) {
      str += " ";
    } else {
      str += "*";
    }
  }
  console.log(str);
}
