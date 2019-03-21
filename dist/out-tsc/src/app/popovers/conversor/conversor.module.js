import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ConversorPage } from './conversor.page';
var routes = [
    {
        path: '',
        component: ConversorPage
    }
];
var ConversorPageModule = /** @class */ (function () {
    function ConversorPageModule() {
    }
    ConversorPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [ConversorPage]
        })
    ], ConversorPageModule);
    return ConversorPageModule;
}());
export { ConversorPageModule };
//# sourceMappingURL=conversor.module.js.map