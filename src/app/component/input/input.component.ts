import { Component, OnInit, ViewChild } from '@angular/core';
import * as wjcInput from '@grapecity/wijmo.input';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  @ViewChild('filterAutoComplete', { static: true }) filterAutoComplete: wjcInput.AutoComplete;
  countries = ['US', 'Germany', 'Mexico', 'Greece', 'Spain', 'China', 'Japan', 'Russia', 'UK', 'Finland', 'Norway'];
  filteredCountries = ['US', 'Germany', 'Mexico', 'Greece', 'Spain'];
  expandedCountries = [
    { id: 0, country: 'US' },
    { id: 1, country: 'Germany' },
    { id: 2, country: 'Mexico' },
    { id: 3, country: 'Greece' },
    { id: 4, country: 'Spain' },
  ]

  constructor() { }

  ngOnInit(): void {
  }

  filterCheckboxChange(e: Event) {
    if((<HTMLInputElement>e.target).checked) {
      this.filterAutoComplete.itemsSource = this.filteredCountries;
    } else {
      this.filterAutoComplete.itemsSource = this.countries;
    }
  }

}
