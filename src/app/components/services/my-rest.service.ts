import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/internal/Observable';

import { Subscription } from "rxjs";
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MyRestService {

  constructor(
    private http: HttpClient
  ) { }

  ObtenerPaisList(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };
    return this.http.get<any>(environment.urlBackend + "/api/Administracion/Pais_Sellst", httpOptions);
  }

  ObtenerDepartamentoList(value: any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };
    return this.http.get<any>(environment.urlBackend + `/api/Administracion/Departamento_Sellst?IDPais=${value}`, httpOptions);
  }

  ObtenerDistritoList(value: any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };
    return this.http.get<any>(environment.urlBackend + `/api/Administracion/Distrito_Sellst?IDDepartamento=${value}`, httpOptions);
  }

  ObtenerSectorList(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };
    return this.http.get<any>(environment.urlBackend + `/api/Administracion/Sector_Sellst`, httpOptions);
  }

  ObtenerCantTrabajadoresList(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };
    return this.http.get<any>(environment.urlBackend + `/api/Administracion/CantidadTrabajador_Sellst`, httpOptions);
  }

  EmpresaIns(data: any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };

    return this.http.post<any>(environment.urlBackend + "/api/Empresa/Empresa_Ins", data, httpOptions);
  }


  ObtenerVerificaDNI(data: any): Observable<any> {
    //let dni_temp = "78129643";
    let dni_temp = data.numeroDocumento;

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Ocp-Apim-Subscription-Key': 'c821a325cb084e54ae703944a8fde361;product=vivienda-sgv-totem',
      })
    };
    return this.http.get<any>(environment.urlBackend + `/api/v1/Caseta/VerificarDni?tipoDocumento=01&numeroDocumento=${dni_temp}`, httpOptions);
  }
}
