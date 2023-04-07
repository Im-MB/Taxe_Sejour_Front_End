import {Component, OnInit} from '@angular/core';
import {AnnuelleService} from "../../../controler/service/annuelle.service";

@Component({
  selector: 'app-taxe-annuelle-info',
  templateUrl: './taxe-annuelle-info.component.html',
  styleUrls: ['./taxe-annuelle-info.component.css']
})
export class TaxeAnnuelleInfoComponent implements OnInit{

  taxeAnnuelleInfos:any;

  constructor(private annuelleService: AnnuelleService) {

  }

  ngOnInit(): void {
    this.taxeAnnuelleInfo();


  }

  public taxeAnnuelleInfo(){
    this.annuelleService.taxeAnnuelleInfo().subscribe((data) => this.taxeAnnuelleInfos = data);
  }


}
