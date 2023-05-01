"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Employee = void 0;
var Person_1 = require("./Person");
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(name_, age_, id_, salary_) {
        var _this = _super.call(this, name_, age_) || this;
        _this.id = id_;
        _this.salary = salary_;
        return _this;
    }
    Employee.prototype.work = function () {
        console.log("Hello, my name is ".concat(this.name, " and my id is ").concat(this.id, " I am ").concat(this.age, " years old ."));
    };
    Employee.prototype.getSalary = function () {
        return this.salary;
    };
    return Employee;
}(Person_1.Person));
exports.Employee = Employee;
