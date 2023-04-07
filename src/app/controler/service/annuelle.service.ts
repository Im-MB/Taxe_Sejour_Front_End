import {createEnvironmentInjector, Injectable} from '@angular/core';
import {Annuelle} from "../model/annuelle.model";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "src/environments/environment";


@Injectable({
  providedIn: 'root'
})
export class AnnuelleService {
  private _annuelle: Annuelle | undefined ;
  private _annuelleAr: Array<Annuelle> | undefined;
  private url = environment.baseUrl + 'InfoAnnuelle/' ;//http://localhost:8036/api/v1/InfoAnnuelle/
  private url2 = environment.baseUrl + 'redevable/cin/EE001';
  private url3 = environment.baseUrl + 'taxeAnnuelle/';
  constructor(private http: HttpClient) { }

  public save(): Observable<number>{
    return this.http.post<number>(this.url,this.annuelle);
  }
  //-------------
  public redevableInfo(){
    return this.http.get(this.url2);
  }
  //-------------
  public taxeAnnuelleInfo(){
    return this.http.get(this.url3);
  }
  //-------------
  public infoAnnuelle(){
    return this.http.get(this.url3)
  }
  //-------------
  public payement(infoAnnuelle : Annuelle): Observable<number>{
    return this.http.post<number>(this.url3,infoAnnuelle);
  }

  //--------Getters And Setters-----
  get annuelle(): Annuelle {
    if(this._annuelle == null){
      this._annuelle = new Annuelle();
    }
    return this._annuelle;
  }

  set annuelle(value: Annuelle) {
    this._annuelle = value;
  }

  get annuelleAr(): Array<Annuelle> {
    if(this._annuelleAr == null){
      this._annuelleAr = new Array<Annuelle>();
    }
    return this._annuelleAr;
  }

  set annuelleAr(value: Array<Annuelle>) {
    this._annuelleAr = value;
  }
  //--------Getters And Setters-----
}
