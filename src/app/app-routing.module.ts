import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CidadesComponent } from './pages/cidades/cidades.component';
import { ForecastComponent } from './pages/forecast/forecast.component';
import { MessageComponent } from './pages/message/message.component';

const routes: Routes = [
  {path:'forecast', component: ForecastComponent},
  {path:'message', component: MessageComponent},
  {path:'cities', component: CidadesComponent},
  {path:'', redirectTo:'/message', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
