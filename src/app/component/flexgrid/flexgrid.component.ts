import { Component, OnInit } from '@angular/core';
import { GridService } from 'src/app/services/grid.service';

import * as wjcCore from '@grapecity/wijmo';

@Component({
  selector: 'app-flexgrid',
  templateUrl: './flexgrid.component.html',
  styleUrls: ['./flexgrid.component.css']
})
export class FlexgridComponent implements OnInit {
  // The various CollectionViews that are going to be consumed by the FlexGrid markup
  collectionView: wjcCore.CollectionView;
  collectionViewPaging: wjcCore.CollectionView;
  collectionViewFormatting: wjcCore.CollectionView;
  collectionViewGrouping: wjcCore.CollectionView;
  countries: string[];

  constructor(private gridService: GridService) {
    this.collectionView = new wjcCore.CollectionView(gridService.getData());
    // Sets the pageSize to 5 items per page
    this.collectionViewPaging = new wjcCore.CollectionView(gridService.getPagingData(), {
      pageSize: 5
    });
    this.collectionViewFormatting = new wjcCore.CollectionView(gridService.getFormattingData(), {});
    this.countries = gridService.getCountries();
    // Defines 'Country' and 'Product' as the properties to group by
    this.collectionViewGrouping = new wjcCore.CollectionView(gridService.getProducts(), {
      groupDescriptions: ['country', 'product'],
    });
  }

  ngOnInit(): void {
  }

}
