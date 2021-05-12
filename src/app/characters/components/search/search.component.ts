import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Output() searchEvent = new EventEmitter<string>();
  search = new FormControl('');

  constructor() { }

  ngOnInit(): void {
    this.search.valueChanges.pipe(
      debounceTime(300)
    ).subscribe(value => {
      this.searchEvent.emit(value);
    });
  }

}