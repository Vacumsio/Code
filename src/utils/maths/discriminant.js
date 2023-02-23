// regexFormat +-2x**2+14x+-24
const regex1 =
  "[+-]?(?<MainSquare>[\\d+?][\\a-zA-Z]{2}[\\x2A][\\d])[+-]?(?<MainSquare>[\\d+?][\\a-zA-Z])[+-]?(?<MainSquare>[\\d+?])";

// regexFormat +-ax**2+-bx+-c
const regex2 =
  "[+-]?(?<MainSquare>[\\w+][\\a-zA-Z]{2}[\\x2A][\\d])[+-](?<MainSquare>[\\w+][\\a-zA-Z])[+-](?<MainSquare>[\\w+][\\a-zA-Z])";

/**
 *
 * @param {number} elderCoefficient
 * @param {number} xCoefficient
 * @param {number} freeMember
 */
function Discriminant(elderCoefficient, xCoefficient, freeCoefficient) {
  this.a = elderCoefficient;
  this.b = xCoefficient;
  this.c = freeCoefficient;

  this.calculateDiscriminant = function () {
    if (this.a === 0) return false;
    const result = {};
    const D = this.b * this.b - 4 * this.a * this.c;
    // console.log(`D = ${D}`);
    if (D < 0) return false;
    result.discriminant = D;
    if (D === 0)
      result["quadratic roots"] = (-this.b + Math.sqrt(D)) / (2 * this.a);
    else if (D > 0) {
      const tmp = [];
      tmp.push((-this.b + Math.sqrt(D)) / (2 * this.a));
      tmp.push((-this.b - Math.sqrt(D)) / (2 * this.a));
      result["quadratic roots"] = tmp;
    }
    return result;
  };
}

module.exports = Discriminant;
