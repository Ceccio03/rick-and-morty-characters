import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from 'src/app/model/character';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() characterData?: Character;
  @Output() characterSelected = new EventEmitter<Character>();

  selectCharacter(){
    this.characterSelected.emit(this.characterData);
  }
}
