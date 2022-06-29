import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GridService {
  data = [
    { id: 0, country: 'US', population: '329.5 million', flag: 'https://www.grapecity.com/wijmo/demos/en/sample/Grid/CustomCells/CellTemplates/Overview/angular/resources/US.png' },
    { id: 1, country: 'Germany', population: '83.24 million', flag: 'https://www.grapecity.com/wijmo/demos/en/sample/Grid/CustomCells/CellTemplates/Overview/angular/resources/Germany.png' },
    { id: 2, country: 'UK', population: '67.22 million', flag: 'https://www.grapecity.com/wijmo/demos/en/sample/Grid/CustomCells/CellTemplates/Overview/angular/resources/UK.png' },
    { id: 3, country: 'Japan', population: '125.8 million', flag: 'https://www.grapecity.com/wijmo/demos/en/sample/Grid/CustomCells/CellTemplates/Overview/angular/resources/Japan.png' },
    { id: 4, country: 'Italy', population: '59.55 million', flag: 'https://www.grapecity.com/wijmo/demos/en/sample/Grid/CustomCells/CellTemplates/Overview/angular/resources/Italy.png' },
  ];

  pagingData = [
    { id: 0, country: 'US', population: '329.5 million' },
    { id: 1, country: 'Germany', population: '83.24 million' },
    { id: 2, country: 'UK', population: '67.22 million' },
    { id: 3, country: 'Japan', population: '125.8 million' },
    { id: 4, country: 'Italy', population: '59.55 million' },
    { id: 5, country: 'China', population: '1.402 billion' },
    { id: 6, country: 'India', population: '1.38 billion' },
    { id: 7, country: 'Mexico', population: '128.9 million' },
    { id: 8, country: 'Russia', population: '144.1 million' },
    { id: 9, country: 'Brazil', population: '212.6 million' },
  ];

  formattingData = [
    {id: 0, date: new Date(), amount: Math.random() * 1000 },
    {id: 1, date: new Date(), amount: Math.random() * 1000 },
    {id: 2, date: new Date(), amount: Math.random() * 1000 },
    {id: 3, date: new Date(), amount: Math.random() * 1000 },
    {id: 4, date: new Date(), amount: Math.random() * 1000 }
  ]

  countries = ['US', 'Germany', 'UK', 'Japan', 'Italy'];

  products = ['Computers', 'Phones', 'Tablets', 'Cameras'];

  constructor() { }

  getData() {
    return this.data;
  }

  getPagingData() {
    return this.pagingData;
  }

  getFormattingData() {
    return this.formattingData;
  }

  getCountries() {
    return this.countries;
  }

  getProducts() {
    var data = [];
    for(var i = 0; i < 50; i++) {
      data.push({
        id: i,
        country: this.countries[i % this.countries.length],
        product: this.products[Math.floor(Math.random() * this.products.length)],
        sale: Math.random() * 2500
      });
    }
    return data;
  }
}
