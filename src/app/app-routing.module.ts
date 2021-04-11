import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerTableComponent } from './shared/components/customer-table/customer-table.component';
import { OverviewComponent } from './pages/overview/overview.component';
import { SankeyChartComponent } from './shared/components/sankey-chart/sankey-chart.component';
import {HeaderComponent} from './shared/components/main-layout/header/juganu-header.component';

const routes: Routes = [

   {
    path: '', component: HeaderComponent, children: [
      {path: 'flowchart', component: SankeyChartComponent},
      {path: 'overview', component: OverviewComponent},
      {path: 'customerTable', component: CustomerTableComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

