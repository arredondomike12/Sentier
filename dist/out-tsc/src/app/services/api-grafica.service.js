import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
var ApiGraficaService = /** @class */ (function () {
    function ApiGraficaService(http) {
        this.http = http;
        this.url = 'https://api.exchangeratesapi.io/';
        this.key = '96PPJ7ZNV2D6FA26';
        this.url2 = 'https://www.alphavantage.co/';
        this.key2 = 'IwcMuaDBLAbv8WfkDPBMtqLcODGcvjMs';
    }
    /*
      GgetData(source:string, target:string){
        let fullYearEnd;
        let fullYearStart;
        let dateStart = new Date();
        let dayStart = dateStart.getDate();
        let monthStart = dateStart.getMonth() + 1;
        let yearStart = dateStart.getFullYear();
        fullYearStart = yearStart + '-' + monthStart + '-' + dayStart;
        
        if(dayStart < 30){
          let monthEnd = dateStart.getMonth();
          let dif = 30 - dateStart.getDate(); let dayEnd = 30 - dif;
          let yearEnd =  dateStart.getFullYear();
          fullYearEnd =  yearEnd + '-' + monthEnd + '-' + dayEnd;
        }
        else if(dayStart > 30){
          let monthEnd = dateStart.getMonth() + 1;
          let dayEnd =  dateStart.getDate() - 30;
          let yearEnd = dateStart.getFullYear();
          fullYearEnd = yearEnd + '-' + monthEnd + '-' + dayEnd;
        }
        else if(dayStart == 30){
          let monthEnd = dateStart.getMonth() + 1;
          let dayEnd =  dateStart.getDate() - 30;
          let yearEnd = dateStart.getFullYear();
          fullYearEnd = yearEnd + '-' + monthEnd + '-' + dayEnd;
        }
        return this.http.get(`${this.url}history?start_at=${fullYearEnd}&end_at=${fullYearStart}&symbols=${source},${target}`);
      }
      */
    ApiGraficaService.prototype.getDataByDialy = function (source, target) {
        return this.http.get(this.url2 + "query?function=FX_DAILY&from_symbol=" + source + "&to_symbol=" + target + "&apikey=" + this.key2);
    };
    ApiGraficaService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], ApiGraficaService);
    return ApiGraficaService;
}());
export { ApiGraficaService };
//# sourceMappingURL=api-grafica.service.js.map