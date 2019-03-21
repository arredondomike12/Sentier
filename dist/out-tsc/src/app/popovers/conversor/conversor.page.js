import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
var ConversorPage = /** @class */ (function () {
    function ConversorPage(api) {
        this.api = api;
        this.quantity = '';
        this.source = '';
        this.targett = '';
        this.result = [];
        this.target = ['USD', 'CAD', 'JPY', 'AUD', 'EUR', 'MXN'];
    }
    ConversorPage.prototype.ngOnInit = function () {
    };
    ConversorPage.prototype.Conversor = function () {
        var _this = this;
        this.api.getConversor(this.source, this.targett, this.quantity)
            .subscribe(function (data) { _this.result = data; }, function (error) { console.log(error); });
    };
    ConversorPage.prototype.setQuantity = function (value) {
        this.quantity = value;
    };
    ConversorPage.prototype.optionsFn1 = function (value) {
        this.source = value;
        console.log(this.source);
    };
    ConversorPage.prototype.optionsFn2 = function (value) {
        this.targett = value;
        console.log(this.targett);
    };
    ConversorPage = tslib_1.__decorate([
        Component({
            selector: 'app-conversor',
            templateUrl: './conversor.page.html',
            styleUrls: ['./conversor.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [ApiService])
    ], ConversorPage);
    return ConversorPage;
}());
export { ConversorPage };
//# sourceMappingURL=conversor.page.js.map