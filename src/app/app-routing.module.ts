import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CidadesComponent } from './pages/cidades/cidades.component';
import { ForecastComponent } from './pages/forecast/forecast.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { UnespectedErrorComponent } from './pages/unespected-error/unespected-error.component';

const routes: Routes = [
  {path:'forecast', component: ForecastComponent},
  {path:'', component: HomeComponent},
  {path:'cities/:cityName', component: CidadesComponent},
  {path:'not-found', component:NotFoundComponent},
  {path:'error', component:UnespectedErrorComponent},
  {path:'**', redirectTo:'not-found', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
