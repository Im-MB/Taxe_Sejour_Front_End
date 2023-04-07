import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit{

  ngOnInit() {
    const sidebar = document.querySelector<HTMLElement>(".sidebar");
    const closeBtn = document.querySelector<HTMLElement>("#btn");

    // @ts-ignore
    closeBtn.addEventListener("click",function (){
      // @ts-ignore
      sidebar.classList.toggle("open");
      menuBtnChange();
    });

    function menuBtnChange(){
      // @ts-ignore
      if(sidebar.classList.contains("open")){
        // @ts-ignore
        closeBtn.classList.replace("bx-menu","bx-menu-alt-right");
      }else{
        // @ts-ignore
        closeBtn.classList.replace("bx-menu-alt-right","bx-menu");
      }
    }
  }
}
