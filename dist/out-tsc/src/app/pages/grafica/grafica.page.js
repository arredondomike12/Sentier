import * as tslib_1 from "tslib";
import { Component, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';
import { ApiGraficaService } from '../../services/api-grafica.service';
import { GraficaService } from '../../services/grafica.service';
import { ActivatedRoute } from '@angular/router';
var GraficaPage = /** @class */ (function () {
    function GraficaPage(api, model, activateRouter) {
        var _this = this;
        this.api = api;
        this.model = model;
        this.activateRouter = activateRouter;
        this.dataHeader = [];
        this.divisa = null;
        this.Data = this.model.getDataByDialy('USD', 'MXN');
        setTimeout(function () { return console.log(_this.Data); }, 3000);
        /*
        let date = new Date();
        this.horario = date.getHours().toString() +":"+ date.getMinutes().toString() +":"+ date.getSeconds().toString();
        this.divisa = this.activateRouter.snapshot.paramMap.get('div');
        this.data = this.divisa;
        this.source = this.data.substring(0,3);
        this.target = this.data.substring(3,6);
        console.log(this.data);
        if(this.data =='USDMXN'){
          this.target = this.data.substring(0,3);
          this.source = this.data.substring(3,6);
        }
        this.api.GgetData(this.target, this.source)
        .subscribe(
          (data) => {this.results = data;}
        );
        setTimeout(() => this.forData(), 1500);
        setTimeout(() => this.yourCustomFunctionName(), 1500);
        */
    }
    GraficaPage.prototype.ngOnInit = function () {
    };
    /*
    forData(){
      let dates: string[] = [];
      let indice = 0;
      for(let i in this.results.rates){
        dates[indice] = i.toString();
        indice++;
      }
      this.dataHeader = dates;
    }
    */
    GraficaPage.prototype.yourCustomFunctionName = function () {
        this.lineChart = new Chart(this.lineCanvas.nativeElement, {
            type: 'line',
            data: {
                labels: [this.dataHeader[0], this.dataHeader[7], this.dataHeader[10], this.dataHeader[17], this.dataHeader[20]],
                datasets: [
                    {
                        label: this.source,
                        fill: true,
                        lineTension: 0.1,
                        backgroundColor: 'rgba(40,192,192,0.4)',
                        borderColor: 'rgba(80,192,192,1)',
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        pointBorderColor: 'rgba(75,192,192,1)',
                        pointBackgroundColor: '#fff',
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: 'rgba(80,192,192,1)',
                        pointHoverBorderColor: 'rgba(220,220,220,1)',
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: [this.results.rates[this.dataHeader[0]][this.source], this.results.rates[this.dataHeader[7]][this.source], this.results.rates[this.dataHeader[10]][this.source], this.results.rates[this.dataHeader[17]][this.source], this.results.rates[this.dataHeader[20]][this.source]],
                        spanGaps: false,
                    }
                ]
            }
        });
    };
    tslib_1.__decorate([
        ViewChild('lineCanvas'),
        tslib_1.__metadata("design:type", Object)
    ], GraficaPage.prototype, "lineCanvas", void 0);
    GraficaPage = tslib_1.__decorate([
        Component({
            selector: 'app-grafica',
            templateUrl: './grafica.page.html',
            styleUrls: ['./grafica.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [ApiGraficaService, GraficaService, ActivatedRoute])
    ], GraficaPage);
    return GraficaPage;
}());
export { GraficaPage };
//# sourceMappingURL=grafica.page.js.map