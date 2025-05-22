import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DelhiRefitOneComponent } from './delhi-refit-one/delhi-refit-one.component';


const routes: Routes = [
  { path: '', redirectTo: 'delhi-refit-one', pathMatch: 'full' },
  { path: 'delhi-refit-one', component: DelhiRefitOneComponent },
  // { path: 'component-b', component: ComponentB }
];

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class DelhiRefitModule { }
