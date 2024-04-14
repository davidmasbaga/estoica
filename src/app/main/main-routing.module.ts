import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutPageComponent } from './pages/main-layout-page/main-layout-page.component';
import { MediaComponent } from './pages/media/media.component';
import { SingleMediaComponent } from './pages/single-media/single-media.component';

const routes: Routes = [
  {
    path:'',
    component:MainLayoutPageComponent,
    children:[
      {path:'media', component:MediaComponent},
      {path:'media/:id', component:SingleMediaComponent}
    ]
  },



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
