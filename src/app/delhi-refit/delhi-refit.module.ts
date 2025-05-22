import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DelhiRefitOneComponent } from './delhi-refit-one/delhi-refit-one.component';
import { DelhiRefitTwoComponent } from './delhi-refit-two/delhi-refit-two.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DelhiRefitThreeComponent } from './delhi-refit-three/delhi-refit-three.component';
import { DelhiRefitFourComponent } from './delhi-refit-four/delhi-refit-four.component';


const routes: Routes = [
  { path: '', redirectTo: 'delhi-refit-one', pathMatch: 'full' },
  { path: 'delhi-refit-one', component: DelhiRefitOneComponent },
  { path: 'delhi-refit-two', component: DelhiRefitTwoComponent },
  { path: 'delhi-refit-three', component: DelhiRefitThreeComponent },
  { path: 'delhi-refit-four', component: DelhiRefitFourComponent },
];

@NgModule({
  declarations: [
  
    DelhiRefitTwoComponent,
        DelhiRefitThreeComponent,
        DelhiRefitFourComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class DelhiRefitModule { }
