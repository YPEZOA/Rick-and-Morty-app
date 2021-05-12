import { Component, Input, OnInit } from '@angular/core';
import {Character} from '../../interfaces/character.interface';

@Component({
  selector: 'app-card-character',
  templateUrl: './card-character.component.html',
  styleUrls: ['./card-character.component.css']
})
export class CardCharacterComponent implements OnInit {

  @Input() character!: Character;

  constructor() { }
  ngOnInit(): void {

  }

}
