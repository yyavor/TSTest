var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var SweetSweetClass = (function () {
    function SweetSweetClass(name) {
        console.log("You're " + name);
    }
    SweetSweetClass.prototype.setColor = function (color) {
        console.log(color);
        this.color = color;
    };
    return SweetSweetClass;
}());
var basil = new SweetSweetClass("Yura");
basil.setColor("Black");
console.log("--------------");
console.log(basil.color);
var Basil = (function (_super) {
    __extends(Basil, _super);
    function Basil() {
        return _super.call(this, "Basil") || this;
    }
    return Basil;
}(SweetSweetClass));
var bas = new Basil();
bas.setColor("Blue");
console.log("=========");
console.log(bas.color);
