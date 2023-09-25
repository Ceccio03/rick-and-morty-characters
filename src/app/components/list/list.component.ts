import { Component, OnInit } from '@angular/core';
import { CharacterDetail } from 'src/app/model/character';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  characters: CharacterDetail[] = [];

  constructor(private dataServ: DataService) {}

  ngOnInit(): void {
    // this.dataServ.getAllCharacters().subscribe(characters => this.characters = characters);
    this.dataServ.allCharacters.subscribe(chars => this.characters = chars)
  }
}