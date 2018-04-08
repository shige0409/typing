var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.alertName = function (name) {
        alert(name);
    };
    return Person;
}());
var person = new Person();
person.alertName('shige');
