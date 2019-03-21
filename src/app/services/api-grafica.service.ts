import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class ApiGraficaService {
  private url = 'https://api.exchangeratesapi.io/';
  private key = '96PPJ7ZNV2D6FA26';

  private url2 = 'https://www.alphavantage.co/';
  private key2 = 'IwcMuaDBLAbv8WfkDPBMtqLcODGcvjMs'

  constructor(public http: HttpClient) { }

  GgetData(source:string, target:string){
    let fullYearEnd;
    let fullYearStart;
    let dateStart = new Date();
    let dayStart = dateStart.getDate();
    let monthStart = dateStart.getMonth() + 1;
    let yearStart = dateStart.getFullYear();
    fullYearStart = yearStart + '-' + monthStart + '-' + dayStart;
    
    if(dayStart < 30){
      let monthEnd = dateStart.getMonth();
      let dif = 30 - dateStart.getDate(); let dayEnd = 30 - dif;
      let yearEnd =  dateStart.getFullYear();
      fullYearEnd =  yearEnd + '-' + monthEnd + '-' + dayEnd;
    }
    else if(dayStart > 30){
      let monthEnd = dateStart.getMonth() + 1;
      let dayEnd =  dateStart.getDate() - 30;
      let yearEnd = dateStart.getFullYear();
      fullYearEnd = yearEnd + '-' + monthEnd + '-' + dayEnd;
    }
    else if(dayStart == 30){
      let monthEnd = dateStart.getMonth() + 1;
      let dayEnd =  dateStart.getDate() - 30;
      let yearEnd = dateStart.getFullYear();
      fullYearEnd = yearEnd + '-' + monthEnd + '-' + dayEnd;
    }
    return this.http.get(`${this.url}history?start_at=${fullYearEnd}&end_at=${fullYearStart}&symbols=${source},${target}`);
  }
 getDataByDialy(source:string, target:string){
   return this.http.get(`${this.url2}query?function=FX_DAILY&from_symbol=${source}&to_symbol=${target}&apikey=${this.key2}`);
 }

}
