import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../services/api.service';
import { PopoverController } from '@ionic/angular';
import {ConversorPage} from '../../popovers/conversor/conversor.page';
import {ApiGraficaService} from '../../services/api-grafica.service';

@Component({
  selector: 'app-divisas',
  templateUrl: './divisas.page.html',
  styleUrls: ['./divisas.page.scss'],
})
export class DivisasPage implements OnInit {

  Tuplas;

  constructor(public api:ApiService,
    public popover:PopoverController,
    public apiGrafica:ApiGraficaService) { 
    this.api.getDivisas()
    .subscribe(
      (data) => {this.Tuplas = data;},
      (error) => {console.log(error);}
    );
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

  ngOnInit() {
  }

}
