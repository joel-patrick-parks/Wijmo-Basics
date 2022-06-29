import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChartService {
  data = [
    { country: 'United States', '2015': Math.random() * 100000, '2016': Math.random() * 100000, '2017': Math.random() * 100000, '2018': Math.random() * 100000, '2019': Math.random() * 100000, '2020': Math.random() * 100000 },
    { country: 'China', '2015': Math.random() * 100000, '2016': Math.random() * 100000, '2017': Math.random() * 100000, '2018': Math.random() * 100000, '2019': Math.random() * 100000, '2020': Math.random() * 100000 },
    { country: 'Japan', '2015': Math.random() * 100000, '2016': Math.random() * 100000, '2017': Math.random() * 100000, '2018': Math.random() * 100000, '2019': Math.random() * 100000, '2020': Math.random() * 100000 },
    { country: 'Germany', '2015': Math.random() * 100000, '2016': Math.random() * 100000, '2017': Math.random() * 100000, '2018': Math.random() * 100000, '2019': Math.random() * 100000, '2020': Math.random() * 100000 },
    { country: 'United Kingdom', '2015': Math.random() * 100000, '2016': Math.random() * 100000, '2017': Math.random() * 100000, '2018': Math.random() * 100000, '2019': Math.random() * 100000, '2020': Math.random() * 100000 },
    { country: 'France', '2015': Math.random() * 100000, '2016': Math.random() * 100000, '2017': Math.random() * 100000, '2018': Math.random() * 100000, '2019': Math.random() * 100000, '2020': Math.random() * 100000 },
    { country: 'India', '2015': Math.random() * 100000, '2016': Math.random() * 100000, '2017': Math.random() * 100000, '2018': Math.random() * 100000, '2019': Math.random() * 100000, '2020': Math.random() * 100000 },
    { country: 'Italy', '2015': Math.random() * 100000, '2016': Math.random() * 100000, '2017': Math.random() * 100000, '2018': Math.random() * 100000, '2019': Math.random() * 100000, '2020': Math.random() * 100000 }
  ];

  countrySaleData = [
    { year: '2015', sales: Math.floor(Math.random() * (225000 - 200000 + 1) + 200000), expenses: Math.floor(Math.random() * (175000 - 150000 + 1) + 150000), orders:  Math.floor(Math.random() * (2500 - 1000 + 1) + 1000) },
    { year: '2016', sales: Math.floor(Math.random() * (250000 - 225000 + 1) + 225000), expenses: Math.floor(Math.random() * (200000 - 175000 + 1) + 175000), orders:  Math.floor(Math.random() * (2500 - 1000 + 1) + 1000) },
    { year: '2017', sales: Math.floor(Math.random() * (275000 - 250000 + 1) + 250000), expenses: Math.floor(Math.random() * (225000 - 200000 + 1) + 200000), orders:  Math.floor(Math.random() * (2500 - 1000 + 1) + 1000) },
    { year: '2018', sales: Math.floor(Math.random() * (300000 - 275000 + 1) + 275000), expenses: Math.floor(Math.random() * (250000 - 225000 + 1) + 225000), orders:  Math.floor(Math.random() * (2500 - 1000 + 1) + 1000) },
    { year: '2019', sales: Math.floor(Math.random() * (325000 - 300000 + 1) + 300000), expenses: Math.floor(Math.random() * (275000 - 250000 + 1) + 250000), orders:  Math.floor(Math.random() * (2500 - 1000 + 1) + 1000) },
    { year: '2020', sales: Math.floor(Math.random() * (350000 - 325000 + 1) + 325000), expenses: Math.floor(Math.random() * (300000 - 275000 + 1) + 275000), orders:  Math.floor(Math.random() * (2500 - 1000 + 1) + 1000) },
  ];

  constructor() { }

  getData() {
    return this.data;
  }

  getCountrySaleData() {
    return this.countrySaleData;
  }

  getSalesScatterData() {
    var data = [];
    for(var i = 0; i < 30; i++) {
      data.push({
        sale: Math.floor(Math.random() * (5000 - 3000 + 1) + 3000),
        expense: Math.floor(Math.random() * (500 - 750 + 1) + 750),
      });
    }
    return data;
  }
}
