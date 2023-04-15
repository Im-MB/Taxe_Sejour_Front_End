import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit{
//--------------------------

  constructor() { }

//--------------------------

  ngOnInit() {

    const sidebar = document.querySelector<HTMLElement>(".sidebar");
    const closeBtn = document.querySelector<HTMLElement>("#btn");
//--------------------------
    // @ts-ignore
    document.addEventListener('mousemove', (event) => {
      // @ts-ignore
      if (event.clientX <= 50 && !sidebar.classList.contains('open')) {
        // @ts-ignore
        document.getElementById('sidebar').style.left = '0';
        // @ts-ignore
        document.getElementById('profile').style.left = '0';
      } else { // @ts-ignore
        if(!sidebar.classList.contains('open')) {
                // @ts-ignore
                document.getElementById('profile').style.left = '-250px';
                // @ts-ignore
                document.getElementById('sidebar').style.left = '-250px';
              }
      }
    });
//--------------------------


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

//--------------------------


//--------------------------

}
