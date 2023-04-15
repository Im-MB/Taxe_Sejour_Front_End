import {Component, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";
import {Router} from "@angular/router";


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
    ]),

  ]
})
export class HomePageComponent implements OnInit{


  constructor(private router: Router) {}


  dashboard() {
    // @ts-ignore
    document.getElementById('bodypage').style.display = "block";
    // @ts-ignore
    document.getElementById('backhome').style.display = "block";
    // @ts-ignore
    document.getElementById('navBar').style.display = "none";
    // @ts-ignore
    document.getElementById('home-page').style.display = "none";
    // @ts-ignore
    document.getElementById('aboutUs').style.display = "none";
    // @ts-ignore
    document.getElementById('getStarted').style.display = "none";
    // @ts-ignore
    document.getElementById('head').style.display = "none";
    // @ts-ignore
    document.getElementById('mysvg').style.display = "none";
  }

  homePage(){
    // @ts-ignore
    document.getElementById('bodypage').style.display = "none";
    // @ts-ignore
    document.getElementById('backhome').style.display = "none";
    // @ts-ignore
    document.getElementById('navBar').style.display = "flex";
    // @ts-ignore
    document.getElementById('home-page').style.display = "block";
    // @ts-ignore
    document.getElementById('aboutUs').style.display = "block";
    // @ts-ignore
    document.getElementById('getStarted').style.display = "block";
    // @ts-ignore
    document.getElementById('head').style.display = "block";
    // @ts-ignore
    document.getElementById('mysvg').style.display = "block";
  }



  /*-- == Variables -Start- == --*/
  githubLink: string | undefined;


  /*-- == Variables -End- == --*/

  ngOnInit(): void {
  this.scrollText();


    /*---- Close Form Window ----*/
    // @ts-ignore
    document.querySelector('.closeIcon').addEventListener("click", function () {
      // @ts-ignore
      document.querySelector('.bg-modal').style.display = "none";
      // @ts-ignore
      document.querySelector('body').style.overflow = 'auto';
    });
  }


  text1(){
    // @ts-ignore
    document.getElementById("text2").classList.remove("active");
    // @ts-ignore
    document.getElementById("text3").classList.remove("active");
    //@ts-ignore
    document.getElementById("text1").classList.add("active");
    setTimeout(this.text2, 5000);
  }

  text2(){
    // @ts-ignore
    document.getElementById("text3").classList.remove("active");
    // @ts-ignore
    document.getElementById("text1").classList.remove("active");
    // @ts-ignore
    document.getElementById("text2").classList.add("active");
    setTimeout(this.text3, 5000);
  }

  text3(){
    // @ts-ignore
    document.getElementById("text2").classList.remove("active");
    // @ts-ignore
    document.getElementById("text1").classList.remove("active");
    // @ts-ignore
    document.getElementById("text3").classList.add("active");
    setTimeout(this.text1, 5000);
  }

  scrollText(){
    /*-- == Scroll -start- == --*/
    var activeIndex = 0;
    var textElements = document.querySelectorAll('.text'); // select all text elements with the class 'text'

    function setActive( index:any) {
      textElements[activeIndex].classList.remove('active'); // remove 'active' class from the current active element
      textElements[index].classList.add('active'); // add 'active' class to the new active element
      activeIndex = index; // update the active index
    }

    function switchText() {
      var nextIndex = (activeIndex + 1) % textElements.length; // calculate the index of the next text element to activate
      setActive(nextIndex);
    }

    setActive(0); // activate the first text element
    setInterval(switchText, 5000); // switch to the next text element every 5 seconds
    /*-- == Scroll -end- == --*/
  }

  name1(id:string,id2:string,id3:string,lastName:string,firstName:string,front1:string,back1:string,back2:string =" ",front2:string = " "){
    /*-- == Github Profiles -Start-  == --*/
    type Github = {
      [key: string]: string;
    };

    let github:Github = {
        'Benkrimi': "zeinabbnk",
        'Alahyad': "MeryemAl2",
        'Benmarzouq': "Im-MB",
        'Benismael': "ilyasBenismael",
        'Benzaouagh': "BENZAOUAGH",
        'Ait Youssef': "Nassima2020",
      };


    /*-- == Github Profiles -Start-  == --*/

    this.githubLink = github[lastName];


    // @ts-ignore
    document.getElementById(id).firstChild.innerHTML = firstName;
    // @ts-ignore
    document.getElementById(id).lastChild.innerHTML = lastName;
    // @ts-ignore
    document.getElementById(id2).childNodes[1].innerHTML = front1;
    // @ts-ignore
    document.getElementById(id2).childNodes[2].innerHTML = front2;
    // @ts-ignore
    document.getElementById(id3).childNodes[1].innerHTML = back1;
    // @ts-ignore
    document.getElementById(id3).childNodes[2].innerHTML = back2;
    // @ts-ignore
    document.getElementById('myImage').src = `../../../assets/Images/${firstName}.jpeg`;
    // @ts-ignore
    document.querySelector('.bg-modal').style.display = "flex";
    // @ts-ignore
    document.querySelector('body').style.overflow = 'hidden';

  }

  scrollToSection(sectionId:string) {
    var section = document.getElementById(sectionId);
    // @ts-ignore
    var sectionRect = section.getBoundingClientRect();
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    window.scrollTo({
      top: sectionRect.top + scrollTop - (window.innerHeight / 2),
      behavior: 'smooth'
    });
  }

  imgclick(name:string){
    console.log(name);
    // @ts-ignore
    document.getElementById('img5').src = `../../../assets/Images/${name}.png`;
  }

  goToPage() {
    this.router.navigate(['/dashboard']);
  }
}
