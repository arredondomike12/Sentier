import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CambioPage } from './cambio.page';
var routes = [
    {
        path: '',
        component: CambioPage
    }
];
var CambioPageModule = /** @class */ (function () {
    function CambioPageModule() {
    }
    CambioPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [CambioPage]
        })
    ], CambioPageModule);
    return CambioPageModule;
}());
export { CambioPageModule };
//# sourceMappingURL=cambio.module.js.map