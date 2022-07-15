import { NgModule } from '@angular/core';
import { LayoutComponent } from './component/layout.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full',
    },
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: 'dashboard',
                loadChildren: () =>
                    import('../dashboard/dashboard.module').then((m) => m.DashboardModule),
            },
            {
                path: '**',
                redirectTo: 'error/404',
            },
        ],
    },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class LayoutRoutingModule { }
