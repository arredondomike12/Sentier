import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
var routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        loadChildren: './home/home.module#HomePageModule'
    },
    {
        path: 'list',
        loadChildren: './list/list.module#ListPageModule'
    },
    { path: 'divisas', loadChildren: './pages/divisas/divisas.module#DivisasPageModule' },
    { path: 'conversor', loadChildren: './popovers/conversor/conversor.module#ConversorPageModule' },
    { path: 'contacto', loadChildren: './pages/contacto/contacto.module#ContactoPageModule' },
    { path: 'email', loadChildren: './popovers/email/email.module#EmailPageModule' },
    { path: 'cambio', loadChildren: './pages/cambio/cambio.module#CambioPageModule' },
    { path: 'grafica/:div', loadChildren: './pages/grafica/grafica.module#GraficaPageModule' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib_1.__decorate([
        NgModule({
            imports: [RouterModule.forRoot(routes)],
            exports: [RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map