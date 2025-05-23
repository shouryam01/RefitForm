import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-delhi-refit-five',
  templateUrl: './delhi-refit-five.component.html',
  styleUrls: ['./delhi-refit-five.component.scss']
})
export class DelhiRefitFiveComponent implements OnInit {
  safetyForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.safetyForm = this.fb.group({
      simulation0: [''],
      tripping0: [''],
      simulation1: [''],
      tripping1: [''],
      simulation2: [''],
      tripping2: [''],
      simulation3: [''],
      tripping3: ['']
    });
  }

  ngOnInit(): void {}
}
