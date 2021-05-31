import { AsdasdComponent } from './asdasd.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        component: AsdasdComponent,
        data: { title: 'Formaszöveg' }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AsdasdRoutingModule { }
