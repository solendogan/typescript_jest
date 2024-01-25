"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Person_1 = require("./Person");
let studentNameList = ["solen", "eren"];
var SYSTEM;
(function (SYSTEM) {
    SYSTEM[SYSTEM["DEV"] = 0] = "DEV";
    SYSTEM[SYSTEM["QUALITY"] = 1] = "QUALITY";
    SYSTEM[SYSTEM["PROD"] = 2] = "PROD";
})(SYSTEM || (SYSTEM = {}));
function greeter(name) {
    return "hello world";
}
let isSystemProd = (systemType) => {
    return systemType == SYSTEM.DEV ? "Development" : "Production";
};
let solen = new Person_1.Person();
console.log(solen.Name);
