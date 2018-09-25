import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-my-button',
  templateUrl: './my-button.component.html',
  styleUrls: ['./my-button.component.css']
})
export class MyButtonComponent implements OnInit {

  constructor() { }

  buttonFunction1() {
    document.getElementById("myParagraph").innerHTML = "You did it!";

  }
  timerFunction1() {
    document.getElementById("myParagraph").innerHTML = "Or did you?";

  }

  timerVar = setInterval(this.timerFunction1, 5000);
  
  //buttonVar = document.getElementById("myButton").addEventListener("click", this.buttonFunction1);

  ngOnInit() {

  }

}
