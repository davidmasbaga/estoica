import { NgModule } from '@angular/core';

import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MenubarComponent } from './components/menubar/menubar.component';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon'




@NgModule({
  declarations: [
    SidebarComponent,
    MenubarComponent,

  ],
  imports: [
    CommonModule,
    MatIconModule
  ],

  exports:[
    SidebarComponent,
    MenubarComponent,
    MatIconModule
  ]
})
export class SharedModule { }
