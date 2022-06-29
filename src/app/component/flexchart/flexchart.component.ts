import { Component, OnInit, ViewChild } from '@angular/core';
import { HitTestInfo } from '@grapecity/wijmo.chart';
import { ChartService } from 'src/app/services/chart.service';

import * as wjcCore from '@grapecity/wijmo';
import { ListBox } from '@grapecity/wijmo.input';
import { FlexChart, Series, SeriesVisibility } from '@grapecity/wijmo.chart';

@Component({
  selector: 'app-flexchart',
  templateUrl: './flexchart.component.html',
  styleUrls: ['./flexchart.component.css']
})
export class FlexchartComponent implements OnInit {
  // References to the Series Chart and Series Picker elements
  @ViewChild('seriesChart', { static: true }) seriesChart: FlexChart;
  @ViewChild('seriesPicker', { static: true }) seriesPicker: ListBox;
  // CollectionViews to be consumed by the FlexChart markup
  collectionView = new wjcCore.CollectionView();
  collectionViewSales = new wjcCore.CollectionView();
  // CollectionViews to be used for ScatterPlot series
  usSales: any;
  germanySales: any;
  japanSales: any;
  // Palette array used to color FlexChart series
  palette = ['#3a63ad', '#39b58f', '#3aa5d1', '#a86bd1', '#e65f8e', '#d8d8d8'];
  isPopupVisable = false;

  constructor(private chartService: ChartService) {
    this.collectionView.sourceCollection = chartService.getData();
    this.collectionViewSales.sourceCollection = chartService.getCountrySaleData();
    this.usSales = chartService.getSalesScatterData();
    this.germanySales = chartService.getSalesScatterData();
    this.japanSales = chartService.getSalesScatterData();
  }

  ngOnInit(): void {
  }

  // Used to generate the tooltip that displays when the user hover a FlexChart series
  tooltipContent(hti: HitTestInfo) {
    let bindingValue = '0';
    // Formats the number based on the series that the user is hovering
    if(hti.series.binding == 'sales') {
      bindingValue = wjcCore.Globalize.formatNumber(hti.item.sales, 'c0');
    } else if(hti.series.binding == 'expenses') {
      bindingValue = wjcCore.Globalize.formatNumber(hti.item.expenses, 'c0');
    } else {
      bindingValue = wjcCore.Globalize.formatNumber(hti.item.orders, 'n0');
    }
    // Returns an HTML string generated using the series name, year, and formatted value
    return `<b style="font-size: 18px">${hti.series.name}</b></br><b>Year: </b>${hti.item.year}</br><b>Total: </b>${bindingValue}`;
  }

  // The event tied to the series picker icon click event to show/hide the popup element
  pickerClick(e: Event) {
    if(!this.isPopupVisable) {
      wjcCore.showPopup(this.seriesPicker.hostElement, e.target, false, true, false);
      this.seriesPicker.focus();
      this.isPopupVisable = !this.isPopupVisable;
    } else {
      wjcCore.hidePopup(this.seriesPicker.hostElement);
      this.isPopupVisable = !this.isPopupVisable;
    }
    e.preventDefault();
  }

  // Hides series picker when it loses focus
  lostFocus() {
    wjcCore.hidePopup(this.seriesPicker.hostElement);
  }

  // Event fired when a user clicks a checkbox in the series picker
  checkedItemsChanged(s: ListBox) {
    this.seriesChart.series.forEach((series: Series) => {
      series.visibility = s.checkedItems.indexOf(series) > -1 ? SeriesVisibility.Visible : SeriesVisibility.Hidden;
    });
  }

}
