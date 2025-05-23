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
  ngOnInit(): void {


    this.thermalForm = this.fb.group({
      portRemote1: [''], portLocal1: [''], stbdRemote1: [''], stbdLocal1: [''],
      portRemote2: [''], portLocal2: [''], stbdRemote2: [''], stbdLocal2: [''],
      portRemote3: [''], portLocal3: [''], stbdRemote3: [''], stbdLocal3: [''],
      portRemote4: [''], portLocal4: [''], stbdRemote4: [''], stbdLocal4: [''],
      portRemote5: [''], portLocal5: [''], stbdRemote5: [''], stbdLocal5: [''],
      portRemote6: [''], portLocal6: [''], stbdRemote6: [''], stbdLocal6: [''],
      portRemote7: [''], portLocal7: [''], stbdRemote7: [''], stbdLocal7: [''],
      portRemote8: [''], portLocal8: [''], stbdRemote8: [''], stbdLocal8: [''],
      portRemote9: [''], portLocal9: [''], stbdRemote9: [''], stbdLocal9: [''],

      portRemote10: [''], portLocal10: [''], stbdRemote10: [''], stbdLocal10: [''],
      portRemote11: [''], portLocal11: [''], stbdRemote11: [''], stbdLocal11: [''],
      portRemote12: [''], portLocal12: [''], stbdRemote12: [''], stbdLocal12: [''],
      portRemote13: [''], portLocal13: [''], stbdRemote13: [''], stbdLocal13: [''],
      portRemote14: [''], portLocal14: [''], stbdRemote14: [''], stbdLocal14: [''],
      portRemote15: [''], portLocal15: [''], stbdRemote15: [''], stbdLocal15: [''],
      portRemote16: [''], portLocal16: [''], stbdRemote16: [''], stbdLocal16: [''],
      portRemote17: [''], portLocal17: [''], stbdRemote17: [''], stbdLocal17: [''],
      portRemote18: [''], portLocal18: [''], stbdRemote18: [''], stbdLocal18: [''],


  // MTB 1 Controls
  mtb1V_port19: [''],
  mtb1V_port019: [''],
  mtb1A_port20: [''],
  mtb1A_port020: [''],
  mtb1H_port21: [''],
  mtb1H_port021: [''],

  // MTB 2 Controls
  mtb2V_stbd22: [''],
  mtb2V_stbd022: [''],
  mtb2A_stbd23: [''],
  mtb2A_stbd023: [''],
  mtb2H_stbd24: [''],
  mtb2H_stbd024: [''],

  // PB 1 Controls
  pb1V_port25: [''],
  pb1V_port025: [''],
  pb1A_port26: [''],
  pb1A_port026: [''],
  pb1H_port27: [''],
  pb1H_port027: [''],

  // PB 2 Controls
  pb2V_port28: [''],
  pb2V_port028: [''],
  pb2A_port29: [''],
  pb2A_port029: [''],
  pb2H_port30: [''],
  pb2H_port030: [''],

  // PB 3 Controls
  pb3V_port31: [''],
  pb3V_port031: [''],
  pb3A_port32: [''],
  pb3A_port032: [''],
  pb3H_port33: [''],
  pb3H_port033: [''],

  // PB 4 Controls
  pb4V_port34: [''],
  pb4V_port034: [''],
  pb4A_port35: [''],
  pb4A_port035: [''],
  pb4H_port36: [''],
  pb4H_port036: [''],

  // PB 5 Controls
  pb5V_port37: [''],
  pb5V_port037: [''],
  pb5A_port38: [''],
  pb5A_port038: [''],
  pb5H_port39: [''],
  pb5H_port039: [''],

  // PB 6 Controls
  pb6V_stbd40: [''],
  pb6V_stbd040: [''],
  pb6A_stbd41: [''],
  pb6A_stbd041: [''],
  pb6H_stbd42: [''],
  pb6H_stbd042: [''],

  // PB 7 Controls
  pb7V_stbd43: [''],
  pb7V_stbd043: [''],
  pb7A_stbd44: [''],
  pb7A_stbd044: [''],
  pb7H_stbd45: [''],
  pb7H_stbd045: [''],

  // Stern Tube Controls
  sternTubeV_port46: [''],
  sternTubeV_stbd46: [''],
  sternTubeV_port046: [''],
  sternTubeV_stbd_46: [''],
  sternTubeA_port47: [''],
  sternTubeA_stbd47: [''],
  sternTubeA_port047: [''],
  sternTubeA_stbd_47: [''],
  sternTubeH_port48: [''],
  sternTubeH_stbd48: [''],
  sternTubeH_port048: [''],
  sternTubeH_stbd_48: ['']

    });
  


  }
  onSubmit() {
  console.log(this.thermalForm.value);  // { name: '...', email: '...', age: '...' }
}
}
