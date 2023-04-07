import {Component, OnInit} from '@angular/core';
import {Local} from "../../../controler/model/local.model";
import {LocalService} from "../../../controler/service/local.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-local-list',
  templateUrl: './local-list.component.html',
  styleUrls: ['./local-list.component.css']
})
export class LocalListComponent implements OnInit{
  searchText:any;


    constructor(private localService : LocalService ) {}

     ngOnInit():void {
      this.findAll();
     }

  public findAll(): void{
      this.localService.findAll().subscribe(data => this.locals = data);
  }
  get local(): Local {
    return this.localService.local;
  }

  set local(value){
    this.localService.local=value;
  }

  get locals(): Array<Local> {
    return this.localService.locals;
  }

  set locals(value: Array<Local>) {
    this.localService.locals = value;
  }
}
