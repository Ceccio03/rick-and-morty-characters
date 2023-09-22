import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Character } from 'src/app/model/character';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  characters: Character[] = [];

  constructor(private characterService: DataService, private router: Router) {}

  ngOnInit(): void {
    this.characterService.getAllCharacters().subscribe(data => this.characters = data);
  }

  openDetail(character: Character) {
    this.router.navigateByUrl('/detail/' + character.id);
  }
}