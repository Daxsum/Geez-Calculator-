var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var GeezEngine = /** @class */ (function () {
    function GeezEngine() {
        this.geezMap = {
            0: "0",
            1: "፩",
            2: "፪",
            3: "፫",
            4: "፬",
            5: "፭",
            6: "፮",
            7: "፯",
            8: "፰",
            9: "፱",
            10: "፲",
            20: "፳",
            30: "፴",
            40: "፵",
            50: "፶",
            60: "፷",
            70: "፸",
            80: "፹",
            90: "፺"
        };
    }
    GeezEngine.prototype.convertToGeez = function (num) {
        var _this = this;
        // step 1
        var asciiNumber = "".concat(String(num).length % 2 === 0 ? "" : "0").concat(num);
        // step 2, 3
        var asciiNumberGrouped = asciiNumber.match(/[\d]{2}/g);
        // step 4
        var asciiNumberExpanded = asciiNumberGrouped.map(function (group) { return [
            group[0] === "0" ? "0" : "".concat(Number(group[0]) * 10),
            "".concat(group[1]),
        ]; });
        var ethiopic = asciiNumberExpanded.map(
        // @ts-ignore
        function (group) { return [
            // @ts-ignore
            _this.geezMap[Number(group[0])],
            // @ts-ignore
            _this.geezMap[Number(group[1])],
        ]; });
        // step 6
        var ethiopicPrefixed = asciiNumberExpanded.map(function (group, index) {
            var reverseIndex = asciiNumberExpanded.length - (index + 1);
            if (reverseIndex > 0) {
                return ethiopic[index]
                    .concat(reverseIndex % 2 === 1 ? "፻" : "፼")
                    .join("");
            }
            return ethiopic[index].join("");
        });
        // step 6.1 & 6.2
        return ethiopicPrefixed
            .join("")
            .replace(/00፻|0/g, "")
            .replace(/^፩(፻|፼)/, "$1");
    };
    return GeezEngine;
}());


var GeezNumber = /** @class */ (function (_super) {
    __extends(GeezNumber, _super);
    function GeezNumber(_number) {
        var _this = _super.call(this) || this;
        _this._arabic = _number;
        _this._geez = _this.convertToGeez(_number);
        return _this;
    }
    GeezNumber.prototype.toArabic = function () {
        return this._arabic;
    };
    GeezNumber.prototype.toGeez = function () {
        return this._geez;
    };
    return GeezNumber;
}(GeezEngine));
var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    Calculator.add = function (_num1, _num2) {
        return new GeezNumber(_num1.toArabic() + _num2.toArabic());
    };
    Calculator.subtract = function (_num1, _num2) {
        if (_num1.toArabic() < _num2.toArabic()) {
            throw new Error("NOT_SUPPORTED_ERROR: Subtraction is not supported in GeezNumber");
        }
        return new GeezNumber(_num1.toArabic() - _num2.toArabic());
    };
    Calculator.multiply = function (_num1, _num2) {
        return new GeezNumber(_num1.toArabic() * _num2.toArabic());
    };
    Calculator.divide = function (_num1, _num2) {
        if (_num2.toArabic() === 0) {
            throw new Error("NOT_SUPPORTED_ERROR: Division by zero is not supported in GeezNumber");
        }
        var __result = new GeezNumber(_num1.toArabic() / _num2.toArabic());
        if (__result.toArabic() % 1 !== 0) {
            throw new Error("NOT_SUPPORTED_ERROR: Decimal numbers are not supported in GeezNumber");
        }
        return __result;
    };
    return Calculator;
}());

export {Calculator,GeezNumber,GeezEngine} ;
