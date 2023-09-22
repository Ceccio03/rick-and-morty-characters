import { Injectable } from '@angular/core';
import { Observable, map, catchError } from 'rxjs';
import { Character } from '../model/character';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  BASE_URL = 'https://rickandmortyapi.com/api/character/';
  selectedCharacter = '';

  constructor(private http:HttpClient) {}

  getAllCharacters(): Observable<Character[]> {

    return this.http.get<any>(this.BASE_URL).pipe(
      map(dataObj => dataObj.results),
      catchError(err => {
        console.log(err);
        return []
      })
    )
  }

  getCharacterDetail() {
    if (this.selectedCharacter === '') {
      this.selectedCharacter = 'Rick Sanchez'
    }
    return this.http.get<Character>(this.BASE_URL + this.selectedCharacter);
  }

  getCharacterDetailWithIndex(characterIndex:string) {
    return this.http.get<Character>(this.BASE_URL + characterIndex);
  }
}
