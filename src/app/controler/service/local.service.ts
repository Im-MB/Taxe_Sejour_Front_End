import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "src/environments/environment";
import {Local} from "src/app/controler/model/local.model";


@Injectable({
  providedIn: 'root'
})
export class LocalService {

   _local : Local=new Local();
  private _locals : Array<Local>=new Array<Local>();
  private url= 'http://localhost:8036/api/v1/local/';
  public save(): Observable<number>{
    return this.http.post<number>(this.url, this.local);
  }

  public findAll(): Observable<Array<Local>>{
    return this.http.get<Array<Local>>(this.url);
  }


  constructor(private http: HttpClient) { }


  get local(): Local {
    if(this._local == null){
      this._local == new Local();
    }
    return this._local;
  }

  set local(value: Local) {
    this._local = value;
  }

  get locals(): Array<Local> {
    if(this._locals == null){
      this._locals == new Array<Local>();
    }
    return this._locals;
  }

  set locals(value: Array<Local>) {
    this._locals = value;
  }
}
