//Import core libraries
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";

//imports components
import { AppComponent } from './app.component';
import { HomeComponent } from './modules/home/home.component';
import { ChartComponent } from './modules/chart/chart.component';
import { ChartQuarterly } from './modules/chart/chart-quarterly.component';
import { AnnualPipelineChart } from './modules/chart/annual-pipeline/annual-pipeline.component';
import { AnnualTimespentChart } from './modules/chart/annual-timespent/annual-timespent.component';
import { QuarterlyPipelineChart } from './modules/chart/quarterly-pipeline/quarterly-pipeline.component';
import { QuarterlyTimespentChart } from './modules/chart/quarterly-timespent/quarterly-timespent.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'chart', component: ChartComponent },
  { path: 'annual-pipeline', component: AnnualPipelineChart },
  { path: 'annual-timespent', component: AnnualTimespentChart },
  { path: 'quarterly-pipeline', component: QuarterlyPipelineChart },
  { path: 'quarterly-timespent', component: QuarterlyTimespentChart }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ChartComponent,
    ChartQuarterly,
    AnnualPipelineChart,
    AnnualTimespentChart,
    QuarterlyPipelineChart,
    QuarterlyTimespentChart
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, { useHash: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
