import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../services/api.service';

@Component({
  selector: 'app-conversor',
  templateUrl: './conversor.page.html',
  styleUrls: ['./conversor.page.scss'],
})
export class ConversorPage implements OnInit {

  quantity = '';
  source= '';
  targett = '';

  result: any = [];

  private target = ['USD', 'CAD', 'JPY', 'AUD', 'EUR', 'MXN'];

  constructor(public api:ApiService) {
   }

  ngOnInit() {
  }
  Conversor(){
    this.api.getConversor(this.source, this.targett, this.quantity)
    .subscribe(
      (data) => {this.result = data;},
      (error) => {console.log(error);}
    );

  }
  setQuantity(value) {
    this.quantity = value;
  }
  optionsFn1(value){
    this.source = value;
    console.log(this.source);
  }
  optionsFn2(value){
    this.targett = value;
    console.log(this.targett);
  }
}
