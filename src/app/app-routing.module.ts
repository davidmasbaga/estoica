import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/components/login/login.component';

const routes: Routes = [
  {
    path:'auth',
    component:LoginComponent
  },
  {
    path:'inicio', loadChildren:()=>import('./main/main.module').then(module=>module.MainModule)
  },
  {
    path:'**', redirectTo:'inicio'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
