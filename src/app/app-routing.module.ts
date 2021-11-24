import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: ``, loadChildren: () =>
      import('./pages/home/home.module').then(m => m.HomeModule),
      canActivate:[]
  },
  {
    path: `contact`, loadChildren: () =>
      import('./pages/contact/contact.module').then(m => m.ContactModule),
      canActivate:[]
  },
  {
    path: `about`, loadChildren: () =>
      import('./pages/about/about.module').then(m => m.AboutModule),
      canActivate:[]
  },
  {
    path: `blog`, loadChildren: () =>
      import('./pages/blog/blog.module').then(m => m.BlogModule),
      canActivate:[]
  },
  {
    path: `services`, loadChildren: () =>
      import('./pages/services/services.module').then(m => m.ServicesModule),
      canActivate:[]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
