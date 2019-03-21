import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { ApiGraficaService } from '../services/api-grafica.service';
var GraficaService = /** @class */ (function () {
    function GraficaService(api) {
        this.api = api;
    }
    GraficaService.prototype.getDataByDialy = function (source, target) {
        var results;
        this.api.getDataByDialy(source, target)
            .subscribe(function (data) { results = data["Time Series FX (Daily)"]; });
        console.log(results);
        return results;
    };
    GraficaService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [ApiGraficaService])
    ], GraficaService);
    return GraficaService;
}());
export { GraficaService };
//# sourceMappingURL=grafica.service.js.map