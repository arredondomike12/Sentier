import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { DivisasPage } from './divisas.page';
var routes = [
    {
        path: '',
        component: DivisasPage
    }
];
var DivisasPageModule = /** @class */ (function () {
    function DivisasPageModule() {
    }
    DivisasPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [DivisasPage]
        })
    ], DivisasPageModule);
    return DivisasPageModule;
}());
export { DivisasPageModule };
//# sourceMappingURL=divisas.module.js.map