import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-delhi-refit-three',
  templateUrl: './delhi-refit-three.component.html',
  styleUrls: ['./delhi-refit-three.component.scss']
})
export class DelhiRefitThreeComponent{
  constructor(private fb: FormBuilder) {}
  delhiRefit_Three!: FormGroup;
  helmPositions = ['MIDSHIP', '5° PORT', '10°', '15°'];
  ngOnInit(): void {
    this.delhiRefit_Three = this.fb.group({

      






      helmPosition: [''],
      rudderAngle: [''],
      speed: [''],
      distance: [''],
      time: [''],
      windSpeed: [''],
      windDirection: [''],
      seaState: [''],
      currentSpeed: [''],
      currentDirection: ['']
    });
  }


  onSubmit() {
    console.log(this.delhiRefit_Three.value); 
  }


}

