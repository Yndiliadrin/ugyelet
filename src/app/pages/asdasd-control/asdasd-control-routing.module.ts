import { AsdasdControlComponent } from './asdasd-control.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        component: AsdasdControlComponent,
        data: { title: 'Formaszöveg konzol' }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AsdasdControlRoutingModule { }
