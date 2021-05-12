import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Character } from '../../interfaces/character.interface';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  character!: Character;
  loading!: boolean;

  constructor(private activatedRoute: ActivatedRoute, private http: HttpClient) { }

  ngOnInit(): void {
    const characterId = this.activatedRoute.snapshot.paramMap.get('id');
    this.http.get(`${environment.BASE_URL}${characterId}`)
      .subscribe(resp => {
        this.character = resp;
        console.log(this.character)
      });
  }

}
