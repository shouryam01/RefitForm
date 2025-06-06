import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DelhiRefitOneComponent } from './delhi-refit-one/delhi-refit-one.component';
import { DelhiRefitTwoComponent } from './delhi-refit-two/delhi-refit-two.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DelhiRefitThreeComponent } from './delhi-refit-three/delhi-refit-three.component';
import { DelhiRefitFourComponent } from './delhi-refit-four/delhi-refit-four.component';
import { DelhiRefitFiveComponent } from './delhi-refit-five/delhi-refit-five.component';
import { DelhiRefitEightComponent } from './delhi-refit-eight/delhi-refit-eight.component';
import { DelhiRefitSixComponent } from './delhi-refit-six/delhi-refit-six.component';
import { DelhiRefitTenComponent } from './delhi-refit-ten/delhi-refit-ten.component';
import { DelhiRefitSevenComponent } from './delhi-refit-seven/delhi-refit-seven.component';
import { DelhiRefitNineComponent } from './delhi-refit-nine/delhi-refit-nine.component';


const routes: Routes = [
  { path: '', redirectTo: 'delhi-refit-one', pathMatch: 'full' },
  { path: 'delhi-refit-one', component: DelhiRefitOneComponent },
  { path: 'delhi-refit-two', component: DelhiRefitTwoComponent },
  { path: 'delhi-refit-three', component: DelhiRefitThreeComponent },
  { path: 'delhi-refit-four', component: DelhiRefitFourComponent },
  { path: 'delhi-refit-five', component: DelhiRefitFiveComponent },
  { path: 'delhi-refit-six', component: DelhiRefitSixComponent },
  { path: 'delhi-refit-seven', component: DelhiRefitSevenComponent },
  { path: 'delhi-refit-eight', component: DelhiRefitEightComponent },
  { path: 'delhi-refit-nine', component: DelhiRefitNineComponent },
  { path: 'delhi-refit-ten', component: DelhiRefitTenComponent },



];

@NgModule({
  declarations: [
  
    DelhiRefitTwoComponent,
        DelhiRefitThreeComponent,
        DelhiRefitFourComponent,
        DelhiRefitFiveComponent,
        DelhiRefitSevenComponent,
        DelhiRefitEightComponent,
        DelhiRefitNineComponent,
        DelhiRefitSixComponent,
        DelhiRefitTenComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class DelhiRefitModule { }
