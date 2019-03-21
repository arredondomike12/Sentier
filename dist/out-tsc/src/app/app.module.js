import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ApiService } from '../app/services/api.service';
import { HttpClientModule } from '@angular/common/http';
import { ConversorPage } from '../app/popovers/conversor/conversor.page';
import { EmailPage } from '../app/popovers/email/email.page';
import { ApiGraficaService } from '../app/services/api-grafica.service';
import { GraficaService } from '../app/services/grafica.service';
//import { Chart } from 'chart.js';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib_1.__decorate([
        NgModule({
            declarations: [AppComponent,
                ConversorPage,
                EmailPage
            ],
            entryComponents: [ConversorPage,
                EmailPage],
            imports: [
                BrowserModule,
                IonicModule.forRoot(),
                AppRoutingModule,
                HttpClientModule
                //Chart
            ],
            providers: [
                StatusBar,
                SplashScreen,
                ApiService,
                ApiGraficaService,
                GraficaService,
                { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
            ],
            bootstrap: [AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map