import { Component } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent {
  takeCardAnimation = false;
  
  constructor(){}

  ngOnInit(): void {

  }

  takeCard(){
    this.takeCardAnimation = true;
  }
}
