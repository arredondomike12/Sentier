import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { PopoverController } from '@ionic/angular';
import { ApiGraficaService } from '../../services/api-grafica.service';
var DivisasPage = /** @class */ (function () {
    function DivisasPage(api, popover, apiGrafica) {
        var _this = this;
        this.api = api;
        this.popover = popover;
        this.apiGrafica = apiGrafica;
        this.api.getDivisas()
            .subscribe(function (data) { _this.Tuplas = data; }, function (error) { console.log(error); });
        console.log(this.Tuplas);
    }
    /*
    async setConversor(){
      const popover = await this.popover.create({
        component: ConversorPage,
        translucent: true,
      });
      return await popover.present();
    }
    */
    DivisasPage.prototype.ngOnInit = function () {
    };
    DivisasPage = tslib_1.__decorate([
        Component({
            selector: 'app-divisas',
            templateUrl: './divisas.page.html',
            styleUrls: ['./divisas.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [ApiService,
            PopoverController,
            ApiGraficaService])
    ], DivisasPage);
    return DivisasPage;
}());
export { DivisasPage };
//# sourceMappingURL=divisas.page.js.map