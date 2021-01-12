import {Component} from '@angular/core';


@Component({
  selector: 'app-game-list',
  templateUrl: './gameList.component.html',
  styleUrls: ['./gameList.component.css']
})
export class GameListComponent{
  title = 'List of Games';
  games: string[] = ['Warcry', 'AgeOfSigmar', 'Warhammer40,000', 'Twilight Imperium'];
}
