import {Component, OnInit} from '@angular/core';
import {LocalService} from "src/app/controler/service/local.service";
import {Local} from "src/app/controler/model/local.model";

@Component({
  selector: 'app-local-create',
  templateUrl: './local-create.component.html',
  styleUrls: ['./local-create.component.css']
})
export class LocalCreateComponent implements OnInit {
  localInfos:any;
  constructor(private localService : LocalService ) {}

  ngOnInit() :void{
    this.findAll();
  }

  public findAll():void{
    this.localService.findAll().subscribe(data => this.localInfos= data);
  }


  public save():void{
    this.localService.save().subscribe(data => {
      if(data == 1){
        alert('SAVE SUCCESS');
      }else {
        alert('SAVE ERROR ::: REF EXIST ')
      }
    });
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
