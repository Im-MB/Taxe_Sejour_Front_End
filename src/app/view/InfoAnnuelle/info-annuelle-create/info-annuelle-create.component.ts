import {Component, OnInit} from '@angular/core';
import {AnnuelleService} from "src/app/controler/service/annuelle.service";
import {Annuelle} from "src/app/controler/model/annuelle.model";
//import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-info-annuelle-create',
  templateUrl: './info-annuelle-create.component.html',
  styleUrls: ['./info-annuelle-create.component.css']
})
export class InfoAnnuelleCreateComponent implements OnInit {

  //----Variables that contains data -Start- ----
  total:any;
  selectedInfo:any;

  searchText: any;
  annuelleInfos: any;
  taxeInfos: any;

  //----Variables that contains data -End- ----
  constructor(private annuelleService: AnnuelleService) {
  }


  ngOnInit(): void {
    this.infoAnnuelle();
    this.taxeAnnuelleInfo();




    /*---- Close Form Window ----*/
    // @ts-ignore
    document.querySelector('.closeIcon').addEventListener("click", function () {
      // @ts-ignore
      document.querySelector('.bg-modal').style.display = "none";
    });
  }

  public add_Payment_btn():void{
      // @ts-ignore
      document.getElementById('upOrNew').innerHTML = "New Payment";
      // @ts-ignore
      document.querySelector('.bg-modal').style.display = "flex";

  }

  //---------container-allInfos------
  public displayInfo(){
    //@ts-ignore
    document.getElementById('container-allInfos').style.display = "block";
  }
  public removeInfo(){
    //@ts-ignore
    document.getElementById('container-allInfos').style.display = "none";
  }
//---------------

  showDetails(info: any) {
    this.selectedInfo = info;
  }


  public save(): void {
    this.annuelleService.save().subscribe((data : number ) => {
      if (data == 1) {
        // @ts-ignore
        this.annuelleService.annuelle = null;
        //ALERT

        alert('SAVE SUCCESS');
        console.log('SAVE SUCCESS');
      } if(data == -1){
        alert('LOCAL N\'EXISTE PAS ');
        console.log('LOCAL N\'EXISTE PAS');
      } if(data == -2){
        alert('REDEVABLE N\'EXISTE PAS');
        console.log('REDEVABLE N\'EXISTE PAS');
      } if(data == -3){
        alert('CATEGORIE LOCAL N\'EXISTE PAS');
        console.log('CATEGORIE LOCAL N\'EXISTE PAS');
      } if(data == -5){
        alert('DATE PROBLEM');
        console.log('DATE PROBLEM');
      } if(data == -6){
        alert('PAYMENT PROBLEM');
        console.log('PAYMENT PROBLEM');
      } if(data == -7){
        alert('INFO RECU PROBLEM');
        console.log('INFO RECU PROBLEM');
      }
    });
  }
//---------------

  public payement(annuelle:any){
    this.annuelleService.payement(annuelle).subscribe((total)=> {
      this.total = total})
  }

//---------------
  public infoAnnuelle() {
    this.annuelleService.infoAnnuelle().subscribe((data) => this.annuelleInfos = data);
  }


//---------------
  public taxeAnnuelleInfo() {
    this.annuelleService.taxeAnnuelleInfo().subscribe((data) => this.taxeInfos = data);
  }


//---------------
  get annuelle(): Annuelle {
    return this.annuelleService.annuelle;
  }

  set annuelle(value: Annuelle) {
    this.annuelleService.annuelle = value;
  }

  get annuelleAr(): Array<Annuelle> {
    return this.annuelleService.annuelleAr;
  }

  set annuelleAr(value: Array<Annuelle>) {
    this.annuelleService.annuelleAr = value;
  }




}
