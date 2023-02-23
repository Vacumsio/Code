const express = require("express");

const Discriminant = require("./src/utils/maths/discriminant");

const mathsEquation = new Discriminant(1, 15, 22);

console.log(mathsEquation.calculateDiscriminant());
