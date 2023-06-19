import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { EmpresaComponent } from './components/empresa/empresa.component';
import { EmpresaRegistroComponent } from './components/empresa-registro/empresa-registro.component';
import { DashboardConfigurationEmpresaComponent } from './components/dashboard-configuration-empresa/dashboard-configuration-empresa.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/' },
  { path: '', component: HomeComponent},
  { path: 'empresa', component: EmpresaComponent},
  { path: 'empresa-registro', component: EmpresaRegistroComponent},
  { path: 'dashboard-configuration-empresa', component: DashboardConfigurationEmpresaComponent},
  //{ path: 'caseta-list', component: CasetaListComponent, canActivate:[MsalGuard]},
  //{ path: '**', component: HomeComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
