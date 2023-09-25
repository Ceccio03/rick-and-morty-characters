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
  apiPage = 1;

  constructor(private http:HttpClient) {}

  getAllCharacters(): Observable<Character[]> {
    return this.http.get<any>(this.BASE_URL + this.apiPage).pipe(map((response: any) => response.results));
  }

  nextPage(){
    this.apiPage += 1;
    console.log(this.apiPage);
    this.getAllCharacters().subscribe();
    
  }

  prevPage(){
    this.apiPage -=1
    if (this.apiPage <=0) {
      this.apiPage =1;
    }
    console.log(this.apiPage);
    this.getAllCharacters().subscribe();
  }

  getCharacterDetail() {
    if (this.selectedCharacter === '') {
      this.selectedCharacter = 'Rick Sanchez'
    }
    return this.http.get<Character>(this.BASE_URL + this.selectedCharacter);
  }
}
