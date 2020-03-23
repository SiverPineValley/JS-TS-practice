"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var makePerson_1 = require("./utils/makePerson");
var Person_1 = require("./person/Person");
var chance_1 = __importDefault(require("chance"));
var Ramda = __importStar(require("ramda"));
var testMakeRandomAgedPerson = function () {
    var jane = Person_1.makePerson('Jane');
    var jack = Person_1.makePerson('Jack');
    console.log(jane, jack);
};
var chance = new chance_1.default();
var persons = Ramda.range(0, 2).map(function (n) { return new Person_1.Person(chance.name(), chance.age()); });
console.log("1. Fixed");
makePerson_1.testMakePerson();
console.log("2. Random age made by Math module");
testMakeRandomAgedPerson();
console.log("3. Random name and age");
persons.forEach(function (person) {
    console.log(person);
});
//# sourceMappingURL=index.js.map