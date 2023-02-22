// regexFormat +-ax**2+-bx+-c
const regex2 =
  "[+-]?(?<MainSquare>[\\w+][\\a-zA-Z]{2}[\\x2A][\\d])[+-](?<MainSquare>[\\w+][\\a-zA-Z])[+-](?<MainSquare>[\\w+][\\a-zA-Z])";

// regexFormat +-2x**2+14x+-24
const regex1 =
  "[+-]?(?<MainSquare>[\\d+?][\\a-zA-Z]{2}[\\x2A][\\d])[+-]?(?<MainSquare>[\\d+?][\\a-zA-Z])[+-]?(?<MainSquare>[\\d+?])";

/*
    Descriminant of 2nd degree
*/
const quadraticEquation = (a, b, c) => {
  if (a === 0) return false;
  const res = {};
  const D = b * b - 4 * a * c;
  console.log(`D = ${D}`);
  if (D < 0) return false;
  res.discriminant = D;
  if (D === 0) res["quadratic roots"] = (-b + Math.sqrt(D)) / (2 * a);
  else if (D > 0) {
    const tmp = [];
    tmp.push((-b + Math.sqrt(D)) / (2 * a));
    tmp.push((-b - Math.sqrt(D)) / (2 * a));
    res["quadratic roots"] = tmp;
  }
  return res;
};
console.log(quadraticEquation(1, 12, 36));
