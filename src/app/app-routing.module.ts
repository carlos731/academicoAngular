import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';
import { UcComponent } from './pages/aprendizado/uc/uc.component';
import { ArquivoComponent } from './pages/arquivo/arquivo.component';

/*IMPORT PAGES*/
import { BadgeComponent } from './pages/badge/badge.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { TemplateComponent } from './pages/template/template.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  {
    path: '', component: TemplateComponent, canActivate: [AuthGuard], children: [
      
      {path: 'badges', component: BadgeComponent},

      {path: 'home', component: HomeComponent},

      {path: 'dashboard', component: DashboardComponent},

      {path: 'arquivos', component: ArquivoComponent},

      {path: 'uc', component: UcComponent},
      
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
