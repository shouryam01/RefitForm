import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,FormsModule } from '@angular/forms';

@Component({
  selector: 'app-delhi-refit-two',
  templateUrl: './delhi-refit-two.component.html',
  styleUrls: ['./delhi-refit-two.component.scss']
})
export class DelhiRefitTwoComponent implements OnInit {

   constructor(private fb: FormBuilder) {}
thermalForm!: FormGroup;
thermalForm2!: FormGroup;
vibrationForm!: FormGroup;
  ngOnInit(): void {
    this.thermalForm = this.fb.group({
      portRemote0_1: [''], portLocal0_1: [''], stbdRemote0_1: [''], stbdLocal0_1: [''],
      portRemote0_2: [''], portLocal0_2: [''], stbdRemote0_2: [''], stbdLocal0_2: [''],
      portRemote0_3: [''], portLocal0_3: [''], stbdRemote0_3: [''], stbdLocal0_3: [''],
      portRemote0_4: [''], portLocal0_4: [''], stbdRemote0_4: [''], stbdLocal0_4: [''],
      portRemote0_5: [''], portLocal0_5: [''], stbdRemote0_5: [''], stbdLocal0_5: [''],
      portRemote0_6: [''], portLocal0_6: [''], stbdRemote0_6: [''], stbdLocal0_6: [''],
      portRemote0_7: [''], portLocal0_7: [''], stbdRemote0_7: [''], stbdLocal0_7: [''],
      portRemote0_8: [''], portLocal0_8: [''], stbdRemote0_8: [''], stbdLocal0_8: [''],
      portRemote0_9: [''], portLocal0_9: [''], stbdRemote0_9: [''], stbdLocal0_9: [''],
    });


    this.thermalForm2 = this.fb.group({
      portRemote1: [''], portLocal1: [''], stbdRemote1: [''], stbdLocal1: [''],
      portRemote2: [''], portLocal2: [''], stbdRemote2: [''], stbdLocal2: [''],
      portRemote3: [''], portLocal3: [''], stbdRemote3: [''], stbdLocal3: [''],
      portRemote4: [''], portLocal4: [''], stbdRemote4: [''], stbdLocal4: [''],
      portRemote5: [''], portLocal5: [''], stbdRemote5: [''], stbdLocal5: [''],
      portRemote6: [''], portLocal6: [''], stbdRemote6: [''], stbdLocal6: [''],
      portRemote7: [''], portLocal7: [''], stbdRemote7: [''], stbdLocal7: [''],
      portRemote8: [''], portLocal8: [''], stbdRemote8: [''], stbdLocal8: [''],
      portRemote9: [''], portLocal9: [''], stbdRemote9: [''], stbdLocal9: [''],
    });
  




   
    this.vibrationForm = this.fb.group({
      rowA: this.createRowFormGroup(),
      rowB: this.createRowFormGroup(),
      rowC: this.createRowFormGroup(),
      rowD: this.createRowFormGroup(),
      rowE: this.createRowFormGroup(),
      rowF: this.createRowFormGroup(),
      rowG: this.createRowFormGroup(),
      rowH: this.createRowFormGroup(),
      rowJ: this.createRowFormGroup(),
      rowK: this.createRowFormGroup()
    });
  }

  createRowFormGroup(): FormGroup {
    return this.fb.group({
      port1: [null],
      stbd1: [null],
      port2: [null],
      stbd2: [null]
    });
  }

  getFormData() {
    return this.vibrationForm.value;
  }
}
