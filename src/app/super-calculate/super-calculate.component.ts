import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-super-calculate',
  template: `
  <h3>Write a story by entering stuff in the box and hitting ENTER.</h3>
  <input #storyPiece
    (keyup.enter)="AddStory(storyPiece.value); storyPiece.value=''"
    (blur)="AddStory(storyPiece.value); 
    storyPiece.value='' ">

    <button (click)="AddStory(storyPiece.value)">Add</button>

    <p *ngFor="let piece of story">{{piece}}</p>
  `,
  styleUrls: ['./super-calculate.component.css']
})

export class SuperCalculateComponent implements OnInit {
  story = [
    'First little piggy went to the market', 
    'Second little piggy stayed home because he was very lazy', 
    '...Was there three little piggies?'];
  AddStory(storyPiece: string) {
    if (storyPiece) {
      this.story.push(storyPiece);
    }
  }


  ngOnInit() {
  }

}
