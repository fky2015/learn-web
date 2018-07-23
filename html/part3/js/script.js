var message = "in global";
console.log("global: message = " + message);

var a = function () {
    var message = "inside a";
    console.log("a:message = " + message);

    b();
}
var b = function () {
    console.log("b:message = " + message);
}

a();