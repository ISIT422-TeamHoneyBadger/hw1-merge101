import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-random-color',
  templateUrl: './random-color.component.html',
  styleUrls: ['./random-color.component.css']
})
export class RandomColorComponent implements OnInit {

  colorOne = 0;
  colorTwo = 0;
  colorThree = 0;

  constructor() { }

  ngOnInit() { }

  genColor() {
    this.colorOne = Math.floor(Math.random() * 256);
    this.colorTwo = Math.floor(Math.random() * 256);
    this.colorThree = Math.floor(Math.random() * 256);

    document.getElementById('color-box').setAttribute('style', 'background-color: rgb(' +
      this.colorOne + ', ' +
      this.colorTwo + ', ' +
      this.colorThree + ');');
  }
}
