import { HomeComponent } from './home.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: '', redirectTo:'index', pathMatch:'full' },
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'index',
        loadChildren: () => import('./../index/index.module').then(m => m.IndexModule)
      },
      {
        path: 'duty',
        loadChildren: () => import('./../duty/duty.module').then(m => m.DutyModule)
      },
      {
        path: 'asdasd',
        loadChildren: () => import('./../asdasd/asdasd.module').then(m => m.AsdasdModule)
      },
      {
        path: 'asdasdControl',
        loadChildren: () => import('./../asdasd-control/asdasd-control.module').then(m => m.AsdasdControlModule)
      }
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
