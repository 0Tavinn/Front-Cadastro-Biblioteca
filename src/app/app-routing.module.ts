import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { AdmComponent } from './adm/adm.component';
import { RegistroComponent } from './registro/registro.component';
import { OrcamentoComponent } from './orcamento/orcamento.component';

const routes: Routes = [
  {path: 'login',
  component:LoginComponent
 },
  {path:'adm',
    component:AdmComponent
  },
  {path:'registro',
    component:RegistroComponent
  },
  {
   path:'orcamento',
   component:OrcamentoComponent
  },
  {path:'**',
  redirectTo:'/registro'
 },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
