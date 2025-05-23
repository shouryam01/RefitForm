import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DelhiRefitOneComponent } from './delhi-refit-one/delhi-refit-one.component';
import { DelhiRefitTwooComponent } from './delhi-refit-twoo/delhi-refit-twoo.component';


const routes: Routes = [
  { path: '', redirectTo: 'delhi-refit-one', pathMatch: 'full' },
  { path: 'delhi-refit-one', component: DelhiRefitOneComponent },
  { path: 'delhi-refit-twoo', component: DelhiRefitTwooComponent },

  // { path: 'component-b', component: ComponentB }
];





@NgModule({
  declarations: [
  
    
  
    DelhiRefitTwooComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class DelhiRefitModule { }
