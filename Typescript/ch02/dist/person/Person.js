"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var U = __importStar(require("./../utils/makeRandomNumber"));
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    return Person;
}());
exports.Person = Person;
exports.makePerson = function (name, age) {
    if (age === void 0) { age = U.makeRandomNumber(); }
    return ({ name: name, age: age });
};
//# sourceMappingURL=Person.js.map