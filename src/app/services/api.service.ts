import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {HttpClientModule} from '@angular/common/http';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private key = 'IwcMuaDBLAbv8WfkDPBMtqLcODGcvjMs';
  private url = 'https://forex.1forge.com/1.0.3/';

  private typeQuery= ['quotes?pairs=', 'symbols?', 'convert?from='];

  private source = ['USD', 'MXN', 'EUR'];
  private target = ['USD', 'CAD', 'JPY', 'AUD', 'EUR'];

  constructor(public http: HttpClient) { }

  getDivisas(){
    return this.http.get(`${this.url}quotes?pairs=${this.target[0]}${this.source[1]},${this.target[1]}${this.source[0]},${this.target[2]}${this.source[0]},${this.target[3]}${this.source[0]}&api_key=${this.key}`);
  }
  getConversor(source:string, target:string, quantity: string){
    return this.http.get(`${this.url}${this.typeQuery[2]}${source}&to=${target}&quantity=${quantity}
    &api_key=${this.key}`);
  }
}
