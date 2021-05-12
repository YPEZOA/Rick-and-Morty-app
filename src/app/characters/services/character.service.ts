import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Character } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(private http: HttpClient) { }

  getAllCharacters(q_page: number): Observable<Character[]> {
   return this.http.get<Character[]>(`${environment.BASE_URL}?page=${q_page}`);
  }

  getCharacterById(id: string): Observable<Character> {
    return this.http.get<Character>(`${environment.BASE_URL}${id}`);
  }

  searchCharacter(name: string, q_page: number): Observable<Character[]> {
    return this.http.get<Character[]>(`${environment.BASE_URL}?name=${name}&page=${q_page}`);
  }
}
