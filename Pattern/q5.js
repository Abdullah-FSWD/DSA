let n = 5;
for (let i = 0; i < n; i++) {
  let str = "";
  for (let j = 0; j < n; j++) {
    if (j >= n - i) {
      str += " ";
    } else {
      str += "*";
    }
  }
  console.log(str);
}
