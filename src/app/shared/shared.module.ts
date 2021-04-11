import {NgModule} from '@angular/core';
import {HeaderComponent} from './components/main-layout/header/juganu-header.component';
import {MenuComponent} from './components/main-layout/menu/juganu-menu.component';
import {SankeyChartComponent} from './components/sankey-chart/sankey-chart.component';
import {MaterialModule} from './material-module';
import {AppRoutingModule} from '../app-routing.module';
import {CustomerTableComponent} from './components/customer-table/customer-table.component';
import {RouterModule} from '@angular/router';


@NgModule({
  declarations: [
    MenuComponent,
    SankeyChartComponent,
    HeaderComponent,
    CustomerTableComponent
  ],
  imports: [
    MaterialModule,
    AppRoutingModule
  ],
  exports: [RouterModule]
})
export class SharedModule {
}
