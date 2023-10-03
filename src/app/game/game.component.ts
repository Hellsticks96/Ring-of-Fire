import { Component, OnInit } from '@angular/core';
import { Game } from 'src/models/game';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  takeCardAnimation = false;
  currentCard: any = '';
  game!: Game;
  
  constructor(){}

  ngOnInit(): void {
    this.newGame();
  }

  newGame(){
    this.game = new Game;
  }

  takeCard(){
    if (!this.takeCardAnimation) {
      this.currentCard = this.game.stack.pop();
      this.takeCardAnimation = true;
      console.log(this.game.playedCards);
    }

    setTimeout(() => {
      this.game.playedCards.push(this.currentCard);
      this.takeCardAnimation = false;
    }, 1000)
  }
}
