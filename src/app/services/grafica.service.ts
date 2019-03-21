import { Injectable } from '@angular/core';
import {ApiGraficaService} from '../services/api-grafica.service';
import {GraficaModel} from '../models/grafica-model';



@Injectable({
  providedIn: 'root'
})
export class GraficaService {
  constructor(public api: ApiGraficaService) { }
  getDataByDialy(source: string, target:string){
    let results:GraficaModel[];
    this.api.getDataByDialy(source, target)
    .subscribe(
      (data) => {results = data["Time Series FX (Daily)"]}
    );
    console.log(results);
    return results;
  }

}
