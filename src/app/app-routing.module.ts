import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { DashboardGuard } from './guards/dashboard.guard';

const routes: Routes = [
  {
    path: 'auth',
    // canActivateChild: [AuthGuard],
    loadChildren: () => import('./modules/auth/auth.module').then((m) => m.AuthModule)
  },
  {
    path: '',
    canActivateChild: [DashboardGuard],
    loadChildren: () =>
      import('../app/modules/layout/layout.module').then((m) => m.LayoutModule),
  },
  // { path: '**', redirectTo: 'error/404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
