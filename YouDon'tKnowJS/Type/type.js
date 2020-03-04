const { title, printPretty } = require("../print");

// NULL에 대한 팁
title("\n1. NULL에 대한 팁");
var a = null;
printPretty(`typeof a`, typeof a);
printPretty(`!a && typeof a === "object"`, !a && typeof a === "object");

// 함수의 길이와 타입
title("\n2. 함수의 길이와 타입");
printPretty(`[title.length, printPretty.length]`, [title.length, printPretty.length]);
printPretty(`[typeof title, typeof Array]`, [typeof title, typeof new Array()]);

// Typeof 안전가드를 이용한 선언하지 않은 변수 분기
title("\n3. typeof 안전가드를 이용한 선언하지 않은 변수 분기");
printPretty("typeof undefinedVariable", typeof undefinedVariable);
doSomethingCool();
printPretty(`var DEBUG`, true);
var DEBUG = true
doSomethingCool();

// 이런식으로 undefined로 인한 RefferenceError를 회피할 수 있다.
function doSomethingCool(featureVeryCool) {
    var helper = (typeof DEBUG !== "undefined") ? featureVeryCool : function () {
        console.log("DEBUG is not declared. So I just do something no cool...");
    };
    helper();

    function featureVeryCool() {
        console.log("This do something very cool.");
    }
}