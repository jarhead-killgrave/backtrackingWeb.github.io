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
var AdditionState = (function (_super) {
    __extends(AdditionState, _super);
    function AdditionState(entree, etat, solution) {
        var _this = _super.call(this, entree, etat) || this;
        _this.clone = function () { return new AdditionState(_this._entree, _this._etatPere, _this._solution.slice()); };
        _this._solution = solution !== null && solution !== void 0 ? solution : new Int32Array(_this._dimension);
        return _this;
    }
    AdditionState.prototype.generateStates = function () {
        var result = [];
        for (var i = 0; i < this._dimension; i++) {
            if (this._solution[i] == 0) {
                var state_1 = this.clone();
                state_1._solution[i] = 1;
                state_1._etatPere = this;
                result.push(state_1);
            }
        }
        return result;
    };
    AdditionState.prototype.evaluate = function () {
        var result = 0;
        for (var i = 0; i < this._dimension; i++) {
            result += this._entree[i] * this._solution[i];
        }
        return result;
    };
    AdditionState.prototype.equal = function (state) {
        return _super.prototype.equal.call(this, state) && this._solution.every(function (value, index) { return value === index; });
    };
    return AdditionState;
}(AbstractState));
//# sourceMappingURL=AdditionState.js.map