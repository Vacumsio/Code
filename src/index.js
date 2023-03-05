// const express = require("express");

// Get 1st part 'ax**2'
const regex1 = /\d+x\*\*2/;

// Get 2nd part 'bx'
const regex2 = /\d+x(?=[\s$])/;

// Get 3rd part 'c'
const regex3 = /(?<=[\s$])\d+(?=[\s$])/;

const Discriminant = require("./utils/maths/quadraticEquation");

const mathsEquation = new Discriminant(1, -1, -75);

console.log(mathsEquation.calculateDiscriminant());

const commingRequestTest = "-15x**2 + 6x - 32";

/**
 * Delete all arifmetic symbols and whitespaces but leave scpecial symbols '*'
 */
const offNumbers = commingRequestTest.replace(/[^\w\s\\\x2A]/gi, "");

/**
 * Replace all numbers on character 'a'
 */
const numbersToCharacters = offNumbers.replaceAll(/(\d+|\\d+)/gi, "a");

console.log(offNumbers);

console.log(numbersToCharacters);

const fromRegex1 = offNumbers.replace(regex1, "");

console.log(fromRegex1);
