import {Component, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
  animations: [
    trigger('sejour',[
       state('void',style({opacity:0})),
      transition('void => *',[
        style({color: ' blue'}),//no timing
        animate(6000)//timing exist
      ]),
    ])
  ]
})
export class HomePageComponent implements OnInit{
  ngOnInit(): void {

  this.scrollNavbar()
  }


  public scrollNavbar(){
    // @ts-ignore
    $(window).scroll(() => {
      // @ts-ignore
      if ($(window).scrollTo() > 10) {
        // @ts-ignore
        $('#navBar').addClass('floatingNav');
      } else {
        // @ts-ignore
        $('#navBar').removeClass('floatingNav');
      }
    });
  }
}
