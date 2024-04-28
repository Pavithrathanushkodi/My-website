import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { SubmitComponent } from './submit/submit.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { AboutComponent } from './about/about.component';
import { NatalChartComponent } from './natal-chart/natal-chart.component';
import { CarreerGuidanceComponent } from './carreer-guidance/carreer-guidance.component';
import { CompatabilityAnalysisComponent } from './compatability-analysis/compatability-analysis.component';
import { TimeEventsComponent } from './time-events/time-events.component';


const routes: Routes = [{path:'',component:HomeComponent},{path:'register',component:RegisterComponent},
{path:'submit',component:SubmitComponent},
{path:'services',component:ServicesComponent},
{path:'about',component:AboutComponent},
{path:'natal-chart', component:NatalChartComponent},
{path:'carreer-guidance',component:CarreerGuidanceComponent},
{path:'compatability-analysis',component:CompatabilityAnalysisComponent},
{path:'time-events',component:TimeEventsComponent}];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
