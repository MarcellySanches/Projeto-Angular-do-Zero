import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutRoutes } from './pages/about';
import { DocsRoutes } from './pages/docs';
import { HomeRoutes } from './pages/home';


export const routes: Routes = [

  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  ...HomeRoutes,
  ...AboutRoutes,
  ...DocsRoutes
]


@NgModule({
  exports: [
    RouterModule
  ],
  imports: [
    RouterModule.forRoot(routes)
  ]
})

export class AppRoutingModule { }
