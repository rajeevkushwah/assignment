import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ThemeComponent } from './theme.component';

const routes: Routes = [
  {
    path: '',
    component: ThemeComponent,
    children: [
      {
        path: '',
        loadChildren: 'app/dashboard/dashboard.module#DashboardModule'
      }
      

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ThemeRoutingModule { }
