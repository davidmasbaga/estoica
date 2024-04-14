import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-main-layout-page',
  templateUrl:"./main-layout-page.component.html",
  styleUrl: './main-layout-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainLayoutPageComponent { }
