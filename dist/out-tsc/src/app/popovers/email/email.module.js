import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { EmailPage } from './email.page';
var routes = [
    {
        path: '',
        component: EmailPage
    }
];
var EmailPageModule = /** @class */ (function () {
    function EmailPageModule() {
    }
    EmailPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [EmailPage]
        })
    ], EmailPageModule);
    return EmailPageModule;
}());
export { EmailPageModule };
//# sourceMappingURL=email.module.js.map