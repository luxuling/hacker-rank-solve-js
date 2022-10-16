const string = "aba";

function repeatedString(s, n) {
  let a = (s.match(/a/g) || "").length;
  a = Math.floor(n / s.length) * a;
  return a + (s.substring(0, n % s.length).match(/a/g) || "").length;
}
console.log(repeatedString(string, 10));
