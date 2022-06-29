import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlexchartComponent } from './component/flexchart/flexchart.component';
import { FlexgridComponent } from './component/flexgrid/flexgrid.component';
import { InputComponent } from './component/input/input.component';
import { NavigationComponent } from './component/navigation/navigation.component';

// The Routes array, with a redirect to the /flexgrid page
const routes: Routes = [
  { path: '', redirectTo: '/flexgrid', pathMatch: 'full' },
  { path: 'flexgrid', component: FlexgridComponent },
  { path: 'flexchart', component: FlexchartComponent },
  { path: 'input', component: InputComponent },
  { path: 'navigation', component: NavigationComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
