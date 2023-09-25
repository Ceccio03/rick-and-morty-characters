import { Injectable } from '@angular/core';
import { Observable, map, BehaviorSubject } from 'rxjs';
import { CharacterDetail } from '../model/character';
import { HttpClient } from '@angular/common/http';
import { LocationDetail } from '../model/location';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  allCharacters = new BehaviorSubject<CharacterDetail[]>([]);
  readonly BASE_URL = 'https://rickandmortyapi.com/api/';
  pageNumber = 1;

  constructor(private http: HttpClient) {
    this.getAllCharacters();
  }

  // getAllCharacters(): Observable<CharacterDetail[]> {
  //   return this.http.get<any>(this.BASE_URL + 'character?page=' + this.pageNumber).pipe(map(data => data.results));
  // }

  getAllCharacters(): void {
    this.http.get<any>(this.BASE_URL + 'character?page=' + this.pageNumber).pipe(map(data => data.results)).subscribe(characters => this.allCharacters.next(characters));
  }

  previousPage() {
    if (this.pageNumber > 1) {
      this.pageNumber--;
      this.getAllCharacters();
    }
  }

  nextPage() {
    this.pageNumber++;
    this.getAllCharacters();
  }

  getSingleCharacter(id: string): Observable<CharacterDetail> {
    return this.http.get<CharacterDetail>(this.BASE_URL + 'character/' + id);
  }

  getLocation(id: string) {
    return this.http.get<LocationDetail>(this.BASE_URL + 'location/' + id);
  }
}