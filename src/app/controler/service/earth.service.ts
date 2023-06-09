import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Redevable} from "src/app/controler/model/redevable.model";
import {Local} from "src/app/controler/model/local.model";

@Injectable({
  providedIn: 'root'
})
export class EarthService {

  private _url = 'http://localhost:8036/api/v1/';
  constructor(private _http: HttpClient) { }

public findBySecteur(code: String): Observable<Array<Local>>{
  return this._http.get<Array<Local>>(this._url+'local/rue/quartier/secteur/code/'+code.toString().trim());
}

//
  public findByQuartier(code: String): Observable<Array<Local>>{
    return this._http.get<Array<Local>>(this._url+'local/rue/quartier/code/'+code.toString().trim());
  }

  public findByRue(code: String): Observable<Array<Local>>{
    return this._http.get<Array<Local>>(this._url+'local/rue/code/'+code.toString().trim());
  }


  public findByCinAndSecteur(cin:String, code: String): Observable<Array<Local>>{
    return this._http.get<Array<Local>>(this._url+'local/redevable/cin/'+cin.toString().trim()+'/rue/quartier/secteur/code/'+code.toString().trim());
  }

  public findByCinAndQuartier(cin:String, code: String): Observable<Array<Local>>{
    return this._http.get<Array<Local>>(this._url+'local/redevable/cin/'+cin.toString().trim()+'/rue/quartier/code/'+code.toString().trim());
  }

  public findByCinAndRue(cin:String, code: String): Observable<Array<Local>>{
    return this._http.get<Array<Local>>(this._url+'local/redevable/cin/'+cin.toString().trim()+'/rue/code/'+code.toString().trim());
  }



  public findRedevablebyCin(cin: any): Observable<Redevable>{
    return this._http.get<Redevable>(this._url+'redevable/cin/'+cin.toString().trim());
  }

  public findLocalbyCin(cin: any): Observable<Array<Local>>{
    return this._http.get<Array<Local>>(this._url+'local/redevable/cin/'+cin.toString().trim());
  }

  public findAllLocals(): Observable<Array<Local>>{
    return this._http.get<Array<Local>>(this._url+'local/');
  }

  public findAllRedevable(): Observable<Array<Redevable>>{
    return this._http.get<Array<Redevable>>(this._url+'redevable/');
  }




}
