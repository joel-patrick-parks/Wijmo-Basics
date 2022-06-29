import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { WjGridModule } from '@grapecity/wijmo.angular2.grid';
import { WjGridFilterModule } from '@grapecity/wijmo.angular2.grid.filter';
import { WjInputModule } from '@grapecity/wijmo.angular2.input';
import { WjChartModule } from '@grapecity/wijmo.angular2.chart';

import { FlexgridComponent } from './component/flexgrid/flexgrid.component';
import { FlexchartComponent } from './component/flexchart/flexchart.component';
import { InputComponent } from './component/input/input.component';
import { NavigationComponent } from './component/navigation/navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    FlexgridComponent,
    FlexchartComponent,
    InputComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    WjGridModule,
    WjGridFilterModule,
    WjInputModule,
    WjChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
