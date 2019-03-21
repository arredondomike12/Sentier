import { Component, OnInit, ViewChild, ɵConsole } from '@angular/core';
import { Chart } from 'chart.js';
import {ApiGraficaService} from '../../services/api-grafica.service';
import {GraficaModel} from '../../models/grafica-model';
import {GraficaService} from '../../services/grafica.service';
import {ActivatedRoute} from '@angular/router';




@Component({
  selector: 'app-grafica',
  templateUrl: './grafica.page.html',
  styleUrls: ['./grafica.page.scss'],
})
export class GraficaPage implements OnInit {
  lineChart: any;
  @ViewChild('lineCanvas') lineCanvas;

  results;
  Data:GraficaModel[];
  dataHeader:string[] = [];
  horario: string;
  divisa = null;
  target:string;
  source:string;
  data:string;

  constructor(public api: ApiGraficaService, public model: GraficaService, public activateRouter:ActivatedRoute) {
    let date = new Date();
    this.horario = date.getHours().toString() +":"+ date.getMinutes().toString() +":"+ date.getSeconds().toString();
    this.divisa = this.activateRouter.snapshot.paramMap.get('div');
    this.data = this.divisa;
    this.source = this.data.substring(0,3);
    this.target = this.data.substring(3,6);
    console.log(this.data);
    if(this.data =='USDMXN'){
      this.target = this.data.substring(0,3);
      this.source = this.data.substring(3,6);
    }
    this.api.GgetData(this.target, this.source)
    .subscribe(
      (data) => {this.results = data;}
    );
    setTimeout(() => this.forData(), 1500);
    setTimeout(() => console.log(this.dataHeader), 2500);
    setTimeout(() => this.yourCustomFunctionName(), 2500);
  }
  ngOnInit() {
  }
  public yourCustomFunctionName() {
    this.lineChart = new Chart(this.lineCanvas.nativeElement, {

        type: 'line',
        data: {
            labels: [this.dataHeader[20].substring(5,10), this.dataHeader[10].substring(5,10), this.dataHeader[15].substring(5,10), this.dataHeader[19].substring(5,10), this.dataHeader[6].substring(5,10),this.dataHeader[8].substring(5,10)],
            datasets: [
                {
                    label: this.source,
                    fill: true,
                    lineTension: 0.1,
                    backgroundColor: 'rgba(40,192,192,0.4)',
                    borderColor: 'rgba(80,192,192,1)',
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: 'rgba(75,192,192,1)',
                    pointBackgroundColor: '#fff',
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: 'rgba(80,192,192,1)',
                    pointHoverBorderColor: 'rgba(220,220,220,1)',
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: [this.results.rates[this.dataHeader[20]][this.source],this.results.rates[this.dataHeader[10]][this.source],this.results.rates[this.dataHeader[15]][this.source],this.results.rates[this.dataHeader[19]][this.source],this.results.rates[this.dataHeader[6]][this.source],this.results.rates[this.dataHeader[8]][this.source]],
                    spanGaps: false,
                }
            ]
        }
    });
  }
  forData(){
    let dates: string[] = [];
    let indice = 0;
    for(let i in this.results.rates){
      dates[indice] = i.toString();
      indice++;
    }  
    this.dataHeader = dates;
  }

}
