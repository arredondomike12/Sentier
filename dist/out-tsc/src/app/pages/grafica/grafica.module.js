import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { GraficaPage } from './grafica.page';
var routes = [
    {
        path: '',
        component: GraficaPage
    }
];
var GraficaPageModule = /** @class */ (function () {
    function GraficaPageModule() {
    }
    GraficaPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [GraficaPage]
        })
    ], GraficaPageModule);
    return GraficaPageModule;
}());
export { GraficaPageModule };
//# sourceMappingURL=grafica.module.js.map