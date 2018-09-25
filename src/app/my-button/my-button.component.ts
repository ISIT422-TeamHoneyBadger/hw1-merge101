import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-my-button',
  templateUrl: './my-button.component.html',
  styleUrls: ['./my-button.component.css']
})
export class MyButtonComponent implements OnInit {

  constructor() { }

  timerFunction1() {
    document.getElementById("myParagraph").innerHTML = "I'm not null...";

  }
  timerFunction2() {
    document.getElementById("myParagraph").innerHTML = "Or am I?";
    clearInterval(this.timerVar1);

  }  
  timerFunction3() {
    document.getElementById("myParagraph").innerHTML = "Really I'm not.";
    clearInterval(this.timerVar2);
  }

  timerVar1 = setInterval(this.timerFunction1, 3000);
  timerVar2 = setInterval(this.timerFunction2, 5000);
  timerVar3 = setInterval(this.timerFunction3, 7000);

  ngOnInit() {

  }

}
