import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {KutharRefitComponent } from './kuthar-refit/kuthar-refit.component';

const routes: Routes = [
  { path: 'delhi-refit', loadChildren: () => import('./delhi-refit/delhi-refit.module').then(m => m.DelhiRefitModule) },
  { path: 'kuthar-refit', component: KutharRefitComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
