import { RegisztComponent } from './regiszt.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        component: RegisztComponent,
        data: { title: 'Regisztráció - Ügyelet' }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class RegisztRoutingModule { }
