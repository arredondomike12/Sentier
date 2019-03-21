import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
var ApiService = /** @class */ (function () {
    function ApiService(http) {
        this.http = http;
        this.key = 'IwcMuaDBLAbv8WfkDPBMtqLcODGcvjMs';
        this.url = 'https://forex.1forge.com/1.0.3/';
        this.typeQuery = ['quotes?pairs=', 'symbols?', 'convert?from='];
        this.source = ['USD', 'MXN', 'EUR'];
        this.target = ['USD', 'CAD', 'JPY', 'AUD', 'EUR'];
    }
    ApiService.prototype.getDivisas = function () {
        return this.http.get(this.url + "quotes?pairs=" + this.target[0] + this.source[1] + "," + this.target[1] + this.source[0] + "," + this.target[2] + this.source[0] + "," + this.target[3] + this.source[0] + "," + this.target[4] + this.source[0] + "," + this.target[4] + this.source[1] + "&api_key=" + this.key);
    };
    ApiService.prototype.getConversor = function (source, target, quantity) {
        return this.http.get("" + this.url + this.typeQuery[2] + source + "&to=" + target + "&quantity=" + quantity + "\n    &api_key=" + this.key);
    };
    ApiService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], ApiService);
    return ApiService;
}());
export { ApiService };
//# sourceMappingURL=api.service.js.map