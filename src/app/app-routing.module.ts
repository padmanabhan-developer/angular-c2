import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HompageComponent } from './hompage/hompage.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'profiles'
  },
  {
    path: '#',
    pathMatch: 'full',
    redirectTo: 'profiles'
  },
  {
    path: 'profiles',
    pathMatch: 'full',
    component: HompageComponent

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
