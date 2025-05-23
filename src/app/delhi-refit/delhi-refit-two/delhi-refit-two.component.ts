import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

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
      portRemote1 : new FormControl(''),
      portLocal1 : new FormControl(''),
      stbdRemote1 : new FormControl(''),
      stbdLocal1 : new FormControl(''),
      portRemote2 : new FormControl(''),
      portLocal2 : new FormControl(''),
      stbdRemote2 : new FormControl(''),
      stbdLocal2 : new FormControl(''),
      portRemote3 : new FormControl(''),
      portLocal3 : new FormControl(''),
      stbdRemote3 : new FormControl(''),
      stbdLocal3 : new FormControl(''),
      portRemote4 : new FormControl(''),
       portLocal4 : new FormControl(''),
       stbdRemote4 : new FormControl(''),
       stbdLocal4 : new FormControl(''),
      portRemote5 : new FormControl(''),
       portLocal5 : new FormControl(''),
       stbdRemote5 : new FormControl(''),
       stbdLocal5 : new FormControl(''),
      portRemote6 : new FormControl(''),
       portLocal6 : new FormControl(''),
       stbdRemote6 : new FormControl(''),
       stbdLocal6 : new FormControl(''),
      portRemote7 : new FormControl(''),
       portLocal7 : new FormControl(''),
       stbdRemote7 : new FormControl(''),
       stbdLocal7 : new FormControl(''),
      portRemote8 : new FormControl(''),
       portLocal8 : new FormControl(''),
       stbdRemote8 : new FormControl(''),
       stbdLocal8 : new FormControl(''),
      portRemote9 : new FormControl(''),
       portLocal9 : new FormControl(''),
       stbdRemote9 : new FormControl(''),
       stbdLocal9 : new FormControl(''),
      portRemote10 : new FormControl(''), 
      portLocal10 : new FormControl(''),
       stbdRemote10 : new FormControl(''),
        stbdLocal10 : new FormControl(''),
      portRemote11 : new FormControl(''), 
      portLocal11 : new FormControl(''),
       stbdRemote11 : new FormControl(''),
        stbdLocal11 : new FormControl(''),
      portRemote12 : new FormControl(''), 
      portLocal12 : new FormControl(''),
       stbdRemote12 : new FormControl(''),
        stbdLocal12 : new FormControl(''),
      portRemote13 : new FormControl(''), 
      portLocal13 : new FormControl(''),
       stbdRemote13 : new FormControl(''),
        stbdLocal13 : new FormControl(''),
      portRemote14 : new FormControl(''), 
      portLocal14 : new FormControl(''),
       stbdRemote14 : new FormControl(''),
        stbdLocal14 : new FormControl(''),
      portRemote15 : new FormControl(''), 
      portLocal15 : new FormControl(''),
       stbdRemote15 : new FormControl(''),
        stbdLocal15 : new FormControl(''),
      portRemote16 : new FormControl(''), 
      portLocal16 : new FormControl(''),
       stbdRemote16 : new FormControl(''),
        stbdLocal16 : new FormControl(''),
      portRemote17 : new FormControl(''), 
      portLocal17 : new FormControl(''),
       stbdRemote17 : new FormControl(''),
        stbdLocal17 : new FormControl(''),
      portRemote18 : new FormControl(''), 
      portLocal18 : new FormControl(''),
       stbdRemote18 : new FormControl(''),
        stbdLocal18 : new FormControl(''),


  // MTB 1 Controls
  mtb1V_port19 : new FormControl(''),
  mtb1V_port019 : new FormControl(''),
  mtb1A_port20 : new FormControl(''),
  mtb1A_port020 : new FormControl(''),
  mtb1H_port21 : new FormControl(''),
  mtb1H_port021 : new FormControl(''),

  // MTB 2 Controls
  mtb2V_stbd22 : new FormControl(''),
  mtb2V_stbd022 : new FormControl(''),
  mtb2A_stbd23 : new FormControl(''),
  mtb2A_stbd023 : new FormControl(''),
  mtb2H_stbd24 : new FormControl(''),
  mtb2H_stbd024 : new FormControl(''),

  // PB 1 Controls
  pb1V_port25 : new FormControl(''),
  pb1V_port025 : new FormControl(''),
  pb1A_port26 : new FormControl(''),
  pb1A_port026 : new FormControl(''),
  pb1H_port27 : new FormControl(''),
  pb1H_port027 : new FormControl(''),

  // PB 2 Controls
  pb2V_port28 : new FormControl(''),
  pb2V_port028 : new FormControl(''),
  pb2A_port29 : new FormControl(''),
  pb2A_port029 : new FormControl(''),
  pb2H_port30 : new FormControl(''),
  pb2H_port030 : new FormControl(''),

  // PB 3 Controls
  pb3V_port31 : new FormControl(''),
  pb3V_port031 : new FormControl(''),
  pb3A_port32 : new FormControl(''),
  pb3A_port032 : new FormControl(''),
  pb3H_port33 : new FormControl(''),
  pb3H_port033 : new FormControl(''),

  // PB 4 Controls
  pb4V_port34 : new FormControl(''),
  pb4V_port034 : new FormControl(''),
  pb4A_port35 : new FormControl(''),
  pb4A_port035 : new FormControl(''),
  pb4H_port36 : new FormControl(''),
  pb4H_port036 : new FormControl(''),

  // PB 5 Controls
  pb5V_port37 : new FormControl(''),
  pb5V_port037 : new FormControl(''),
  pb5A_port38 : new FormControl(''),
  pb5A_port038 : new FormControl(''),
  pb5H_port39 : new FormControl(''),
  pb5H_port039 : new FormControl(''),

  // PB 6 Controls
  pb6V_stbd40 : new FormControl(''),
  pb6V_stbd040 : new FormControl(''),
  pb6A_stbd41 : new FormControl(''),
  pb6A_stbd041 : new FormControl(''),
  pb6H_stbd42 : new FormControl(''),
  pb6H_stbd042 : new FormControl(''),

  // PB 7 Controls
  pb7V_stbd43 : new FormControl(''),
  pb7V_stbd043 : new FormControl(''),
  pb7A_stbd44 : new FormControl(''),
  pb7A_stbd044 : new FormControl(''),
  pb7H_stbd45 : new FormControl(''),
  pb7H_stbd045 : new FormControl(''),

  // Stern Tube Controls
  sternTubeV_port46 : new FormControl(''),
  sternTubeV_stbd46 : new FormControl(''),
  sternTubeV_port046 : new FormControl(''),
  sternTubeV_stbd_46 : new FormControl(''),
  sternTubeA_port47 : new FormControl(''),
  sternTubeA_stbd47 : new FormControl(''),
  sternTubeA_port047 : new FormControl(''),
  sternTubeA_stbd_47 : new FormControl(''),
  sternTubeH_port48 : new FormControl(''),
  sternTubeH_stbd48 : new FormControl(''),
  sternTubeH_port048 : new FormControl(''),
  sternTubeH_stbd_48: ['']

    });
  


  }
  onSubmit() {
  console.log(this.thermalForm.value);  // { name: '...', email: '...', age: '...' }
}
}
