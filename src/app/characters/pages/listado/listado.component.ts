import { Component, OnInit } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Character } from '../../interfaces/character.interface';
import { CharacterService } from '../../services/character.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  characters: Character[] = [];
  filterPage: string[] = [];
  info: any = {};

  currentPage = 1;
  qname = '';

  constructor(private characterService: CharacterService) { }

  ngOnInit(): void {
    this.getCharacters();
  }

  getCharacters() {
    this.characterService.getAllCharacters(this.currentPage)
      .subscribe((resp: any) => {
        if (resp?.results?.length) {
          const { results, info } = resp;
          this.characters = results;
          this.info = info;
        } else {
          this.characters = [];
        }
      });
  }

  handleSearchCharacter(value: string) {
    this.qname = value;
    this.currentPage = 1;
    this.characterService.searchCharacter(this.qname, this.currentPage)
      .pipe(
        catchError(err => {
          this.characters = [];
          return throwError(err);
        })
      )
      .subscribe((resp: any) => {
        this.currentPage = 1;
        if (resp.results.length) {
          this.characters = resp.results;
          this.info = resp.info;
        } else {
          this.characters = [];
        }
      });
  }

  characterDataPerPage(page: number) {
    this.characterService.searchCharacter(this.qname, page)
      .subscribe((resp: any) => {
        if (resp.results.length) {
          this.characters = resp.results;
        } else {
          this.characters = [];
        }
      });
  }

  nextPage() {
    if (this.currentPage < this.info.pages) {
      this.currentPage += 1;
      this.characterDataPerPage(this.currentPage);
    }
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage -= 1;
    }
    this.characterDataPerPage(this.currentPage);
  }

}
