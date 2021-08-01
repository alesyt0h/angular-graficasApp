import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map,delay } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class GraficasService {

  constructor(private _http: HttpClient) { }

  getUsuariosRedesSociales(){
    return this._http.get('http://localhost:3000/grafica')
  }

  getUsuariosRedesSocialesDonutData(){
    return this.getUsuariosRedesSociales()
        .pipe(
          // delay(400),
          map( data => {
            const labels = Object.keys(data);
            const values = Object.values(data);
            return { labels, values }
          }) 
        )
  }
}
