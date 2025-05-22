import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-delhi-refit-three',
  templateUrl: './delhi-refit-three.component.html',
  styleUrls: ['./delhi-refit-three.component.scss']
})
export class DelhiRefitThreeComponent{
 steeringForm: FormGroup;
  bridgePortForm: FormGroup;
  bridgeStbdForm: FormGroup;
  WheelStbdForm: FormGroup;
  WheelPortForm: FormGroup;
  WheelPortNFUForm: FormGroup;
  WheelStbdNFUForm:FormGroup;
  BridgePortNFUForm: FormGroup;
  BridgeStbdNFUForm:FormGroup;
  rudderForm!: FormGroup;
  helmPositions = ['MIDSHIP', '5° PORT', '10°', '15°'];

  constructor(private fb: FormBuilder) {
    // Initialize steeringForm
    this.steeringForm = this.fb.group({
      timing1: [''],
      remark1: [''],
      timing2: [''],
      remark2: [''],
      timing3: [''],
      remark3: [''],
      timing4: [''],
      remark4: ['']
    });


    // bridgePortForm




    this.bridgePortForm = this.fb.group({
      // Position 0
  bridgeEnclosed0: [''],
  analogAsp0: [''],
  wheelHouse0: [''],
  mcr0: [''],
  mechPort0: [''],
  mechStbd0: [''],
  remarks0: [''],

  // Position 1
  bridgeEnclosed1: [''],
  analogAsp1: [''],
  wheelHouse1: [''],
  mcr1: [''],
  mechPort1: [''],
  mechStbd1: [''],
  remarks1: [''],

  // Position 2
  bridgeEnclosed2: [''],
  analogAsp2: [''],
  wheelHouse2: [''],
  mcr2: [''],
  mechPort2: [''],
  mechStbd2: [''],
  remarks2: [''],

  // Position 3
  bridgeEnclosed3: [''],
  analogAsp3: [''],
  wheelHouse3: [''],
  mcr3: [''],
  mechPort3: [''],
  mechStbd3: [''],
  remarks3: [''],

  // Position 4
  bridgeEnclosed4: [''],
  analogAsp4: [''],
  wheelHouse4: [''],
  mcr4: [''],
  mechPort4: [''],
  mechStbd4: [''],
  remarks4: [''],

  // Position 5
  bridgeEnclosed5: [''],
  analogAsp5: [''],
  wheelHouse5: [''],
  mcr5: [''],
  mechPort5: [''],
  mechStbd5: [''],
  remarks5: [''],

  // Position 6
  bridgeEnclosed6: [''],
  analogAsp6: [''],
  wheelHouse6: [''],
  mcr6: [''],
  mechPort6: [''],
  mechStbd6: [''],
  remarks6: [''],

  // Position 7
  bridgeEnclosed7: [''],
  analogAsp7: [''],
  wheelHouse7: [''],
  mcr7: [''],
  mechPort7: [''],
  mechStbd7: [''],
  remarks7: [''],

  // Position 8
  bridgeEnclosed8: [''],
  analogAsp8: [''],
  wheelHouse8: [''],
  mcr8: [''],
  mechPort8: [''],
  mechStbd8: [''],
  remarks8: [''],

  // Position 9
  bridgeEnclosed9: [''],
  analogAsp9: [''],
  wheelHouse9: [''],
  mcr9: [''],
  mechPort9: [''],
  mechStbd9: [''],
  remarks9: [''],

  // Position 10
  bridgeEnclosed10: [''],
  analogAsp10: [''],
  wheelHouse10: [''],
  mcr10: [''],
  mechPort10: [''],
  mechStbd10: [''],
  remarks10: [''],

  // Position 11
  bridgeEnclosed11: [''],
  analogAsp11: [''],
  wheelHouse11: [''],
  mcr11: [''],
  mechPort11: [''],
  mechStbd11: [''],
  remarks11: [''],

  // Position 12
  bridgeEnclosed12: [''],
  analogAsp12: [''],
  wheelHouse12: [''],
  mcr12: [''],
  mechPort12: [''],
  mechStbd12: [''],
  remarks12: [''],

  // Position 13
  bridgeEnclosed13: [''],
  analogAsp13: [''],
  wheelHouse13: [''],
  mcr13: [''],
  mechPort13: [''],
  mechStbd13: [''],
  remarks13: [''],

  // Position 14
  bridgeEnclosed14: [''],
  analogAsp14: [''],
  wheelHouse14: [''],
  mcr14: [''],
  mechPort14: [''],
  mechStbd14: [''],
  remarks14: [''],

  // Position 15
  bridgeEnclosed15: [''],
  analogAsp15: [''],
  wheelHouse15: [''],
  mcr15: [''],
  mechPort15: [''],
  mechStbd15: [''],
  remarks15: [''],

  // Position 16
  bridgeEnclosed16: [''],
  analogAsp16: [''],
  wheelHouse16: [''],
  mcr16: [''],
  mechPort16: [''],
  mechStbd16: [''],
  remarks16: [''],

  // Position 17
  bridgeEnclosed17: [''],
  analogAsp17: [''],
  wheelHouse17: [''],
  mcr17: [''],
  mechPort17: [''],
  mechStbd17: [''],
  remarks17: [''],

  // Position 18
  bridgeEnclosed18: [''],
  analogAsp18: [''],
  wheelHouse18: [''],
  mcr18: [''],
  mechPort18: [''],
  mechStbd18: [''],
  remarks18: [''],

  // Position 19
  bridgeEnclosed19: [''],
  analogAsp19: [''],
  wheelHouse19: [''],
  mcr19: [''],
  mechPort19: [''],
  mechStbd19: [''],
  remarks19: [''],

  // Position 20
  bridgeEnclosed20: [''],
  analogAsp20: [''],
  wheelHouse20: [''],
  mcr20: [''],
  mechPort20: [''],
  mechStbd20: [''],
  remarks20: [''],

  // Position 21
  bridgeEnclosed21: [''],
  analogAsp21: [''],
  wheelHouse21: [''],
  mcr21: [''],
  mechPort21: [''],
  mechStbd21: [''],
  remarks21: [''],

  // Position 22
  bridgeEnclosed22: [''],
  analogAsp22: [''],
  wheelHouse22: [''],
  mcr22: [''],
  mechPort22: [''],
  mechStbd22: [''],
  remarks22: [''],

  // Position 23
  bridgeEnclosed23: [''],
  analogAsp23: [''],
  wheelHouse23: [''],
  mcr23: [''],
  mechPort23: [''],
  mechStbd23: [''],
  remarks23: [''],

  // Position 24
  bridgeEnclosed24: [''],
  analogAsp24: [''],
  wheelHouse24: [''],
  mcr24: [''],
  mechPort24: [''],
  mechStbd24: [''],
  remarks24: [''],

  // Position 25
  bridgeEnclosed25: [''],
  analogAsp25: [''],
  wheelHouse25: [''],
  mcr25: [''],
  mechPort25: [''],
  mechStbd25: [''],
  remarks25: [''],

  // Position 26
  bridgeEnclosed26: [''],
  analogAsp26: [''],
  wheelHouse26: [''],
  mcr26: [''],
  mechPort26: [''],
  mechStbd26: [''],
  remarks26: [''],

  // Position 27
  bridgeEnclosed27: [''],
  analogAsp27: [''],
  wheelHouse27: [''],
  mcr27: [''],
  mechPort27: [''],
  mechStbd27: [''],
  remarks27: [''],

  // Position 28
  bridgeEnclosed28: [''],
  analogAsp28: [''],
  wheelHouse28: [''],
  mcr28: [''],
  mechPort28: [''],
  mechStbd28: [''],
  remarks28: ['']
    });



    // bridgeStbdForm



this.bridgeStbdForm = this.fb.group({
      // Position 0
  bridgeEnclosed0: [''],
  analogAsp0: [''],
  wheelHouse0: [''],
  mcr0: [''],
  mechPort0: [''],
  mechStbd0: [''],
  remarks0: [''],

  // Position 1
  bridgeEnclosed1: [''],
  analogAsp1: [''],
  wheelHouse1: [''],
  mcr1: [''],
  mechPort1: [''],
  mechStbd1: [''],
  remarks1: [''],

  // Position 2
  bridgeEnclosed2: [''],
  analogAsp2: [''],
  wheelHouse2: [''],
  mcr2: [''],
  mechPort2: [''],
  mechStbd2: [''],
  remarks2: [''],

  // Position 3
  bridgeEnclosed3: [''],
  analogAsp3: [''],
  wheelHouse3: [''],
  mcr3: [''],
  mechPort3: [''],
  mechStbd3: [''],
  remarks3: [''],

  // Position 4
  bridgeEnclosed4: [''],
  analogAsp4: [''],
  wheelHouse4: [''],
  mcr4: [''],
  mechPort4: [''],
  mechStbd4: [''],
  remarks4: [''],

  // Position 5
  bridgeEnclosed5: [''],
  analogAsp5: [''],
  wheelHouse5: [''],
  mcr5: [''],
  mechPort5: [''],
  mechStbd5: [''],
  remarks5: [''],

  // Position 6
  bridgeEnclosed6: [''],
  analogAsp6: [''],
  wheelHouse6: [''],
  mcr6: [''],
  mechPort6: [''],
  mechStbd6: [''],
  remarks6: [''],

  // Position 7
  bridgeEnclosed7: [''],
  analogAsp7: [''],
  wheelHouse7: [''],
  mcr7: [''],
  mechPort7: [''],
  mechStbd7: [''],
  remarks7: [''],

  // Position 8
  bridgeEnclosed8: [''],
  analogAsp8: [''],
  wheelHouse8: [''],
  mcr8: [''],
  mechPort8: [''],
  mechStbd8: [''],
  remarks8: [''],

  // Position 9
  bridgeEnclosed9: [''],
  analogAsp9: [''],
  wheelHouse9: [''],
  mcr9: [''],
  mechPort9: [''],
  mechStbd9: [''],
  remarks9: [''],

  // Position 10
  bridgeEnclosed10: [''],
  analogAsp10: [''],
  wheelHouse10: [''],
  mcr10: [''],
  mechPort10: [''],
  mechStbd10: [''],
  remarks10: [''],

  // Position 11
  bridgeEnclosed11: [''],
  analogAsp11: [''],
  wheelHouse11: [''],
  mcr11: [''],
  mechPort11: [''],
  mechStbd11: [''],
  remarks11: [''],

  // Position 12
  bridgeEnclosed12: [''],
  analogAsp12: [''],
  wheelHouse12: [''],
  mcr12: [''],
  mechPort12: [''],
  mechStbd12: [''],
  remarks12: [''],

  // Position 13
  bridgeEnclosed13: [''],
  analogAsp13: [''],
  wheelHouse13: [''],
  mcr13: [''],
  mechPort13: [''],
  mechStbd13: [''],
  remarks13: [''],

  // Position 14
  bridgeEnclosed14: [''],
  analogAsp14: [''],
  wheelHouse14: [''],
  mcr14: [''],
  mechPort14: [''],
  mechStbd14: [''],
  remarks14: [''],

  // Position 15
  bridgeEnclosed15: [''],
  analogAsp15: [''],
  wheelHouse15: [''],
  mcr15: [''],
  mechPort15: [''],
  mechStbd15: [''],
  remarks15: [''],

  // Position 16
  bridgeEnclosed16: [''],
  analogAsp16: [''],
  wheelHouse16: [''],
  mcr16: [''],
  mechPort16: [''],
  mechStbd16: [''],
  remarks16: [''],

  // Position 17
  bridgeEnclosed17: [''],
  analogAsp17: [''],
  wheelHouse17: [''],
  mcr17: [''],
  mechPort17: [''],
  mechStbd17: [''],
  remarks17: [''],

  // Position 18
  bridgeEnclosed18: [''],
  analogAsp18: [''],
  wheelHouse18: [''],
  mcr18: [''],
  mechPort18: [''],
  mechStbd18: [''],
  remarks18: [''],

  // Position 19
  bridgeEnclosed19: [''],
  analogAsp19: [''],
  wheelHouse19: [''],
  mcr19: [''],
  mechPort19: [''],
  mechStbd19: [''],
  remarks19: [''],

  // Position 20
  bridgeEnclosed20: [''],
  analogAsp20: [''],
  wheelHouse20: [''],
  mcr20: [''],
  mechPort20: [''],
  mechStbd20: [''],
  remarks20: [''],

  // Position 21
  bridgeEnclosed21: [''],
  analogAsp21: [''],
  wheelHouse21: [''],
  mcr21: [''],
  mechPort21: [''],
  mechStbd21: [''],
  remarks21: [''],

  // Position 22
  bridgeEnclosed22: [''],
  analogAsp22: [''],
  wheelHouse22: [''],
  mcr22: [''],
  mechPort22: [''],
  mechStbd22: [''],
  remarks22: [''],

  // Position 23
  bridgeEnclosed23: [''],
  analogAsp23: [''],
  wheelHouse23: [''],
  mcr23: [''],
  mechPort23: [''],
  mechStbd23: [''],
  remarks23: [''],

  // Position 24
  bridgeEnclosed24: [''],
  analogAsp24: [''],
  wheelHouse24: [''],
  mcr24: [''],
  mechPort24: [''],
  mechStbd24: [''],
  remarks24: [''],

  // Position 25
  bridgeEnclosed25: [''],
  analogAsp25: [''],
  wheelHouse25: [''],
  mcr25: [''],
  mechPort25: [''],
  mechStbd25: [''],
  remarks25: [''],

  // Position 26
  bridgeEnclosed26: [''],
  analogAsp26: [''],
  wheelHouse26: [''],
  mcr26: [''],
  mechPort26: [''],
  mechStbd26: [''],
  remarks26: [''],

  // Position 27
  bridgeEnclosed27: [''],
  analogAsp27: [''],
  wheelHouse27: [''],
  mcr27: [''],
  mechPort27: [''],
  mechStbd27: [''],
  remarks27: [''],

  // Position 28
  bridgeEnclosed28: [''],
  analogAsp28: [''],
  wheelHouse28: [''],
  mcr28: [''],
  mechPort28: [''],
  mechStbd28: [''],
  remarks28: ['']
    });


    // WheelStbdForm



     this.WheelStbdForm = this.fb.group({
      // Position 0
  bridgeEnclosed0: [''],
  analogAsp0: [''],
  wheelHouse0: [''],
  mcr0: [''],
  mechPort0: [''],
  mechStbd0: [''],
  remarks0: [''],

  // Position 1
  bridgeEnclosed1: [''],
  analogAsp1: [''],
  wheelHouse1: [''],
  mcr1: [''],
  mechPort1: [''],
  mechStbd1: [''],
  remarks1: [''],

  // Position 2
  bridgeEnclosed2: [''],
  analogAsp2: [''],
  wheelHouse2: [''],
  mcr2: [''],
  mechPort2: [''],
  mechStbd2: [''],
  remarks2: [''],

  // Position 3
  bridgeEnclosed3: [''],
  analogAsp3: [''],
  wheelHouse3: [''],
  mcr3: [''],
  mechPort3: [''],
  mechStbd3: [''],
  remarks3: [''],

  // Position 4
  bridgeEnclosed4: [''],
  analogAsp4: [''],
  wheelHouse4: [''],
  mcr4: [''],
  mechPort4: [''],
  mechStbd4: [''],
  remarks4: [''],

  // Position 5
  bridgeEnclosed5: [''],
  analogAsp5: [''],
  wheelHouse5: [''],
  mcr5: [''],
  mechPort5: [''],
  mechStbd5: [''],
  remarks5: [''],

  // Position 6
  bridgeEnclosed6: [''],
  analogAsp6: [''],
  wheelHouse6: [''],
  mcr6: [''],
  mechPort6: [''],
  mechStbd6: [''],
  remarks6: [''],

  // Position 7
  bridgeEnclosed7: [''],
  analogAsp7: [''],
  wheelHouse7: [''],
  mcr7: [''],
  mechPort7: [''],
  mechStbd7: [''],
  remarks7: [''],

  // Position 8
  bridgeEnclosed8: [''],
  analogAsp8: [''],
  wheelHouse8: [''],
  mcr8: [''],
  mechPort8: [''],
  mechStbd8: [''],
  remarks8: [''],

  // Position 9
  bridgeEnclosed9: [''],
  analogAsp9: [''],
  wheelHouse9: [''],
  mcr9: [''],
  mechPort9: [''],
  mechStbd9: [''],
  remarks9: [''],

  // Position 10
  bridgeEnclosed10: [''],
  analogAsp10: [''],
  wheelHouse10: [''],
  mcr10: [''],
  mechPort10: [''],
  mechStbd10: [''],
  remarks10: [''],

  // Position 11
  bridgeEnclosed11: [''],
  analogAsp11: [''],
  wheelHouse11: [''],
  mcr11: [''],
  mechPort11: [''],
  mechStbd11: [''],
  remarks11: [''],

  // Position 12
  bridgeEnclosed12: [''],
  analogAsp12: [''],
  wheelHouse12: [''],
  mcr12: [''],
  mechPort12: [''],
  mechStbd12: [''],
  remarks12: [''],

  // Position 13
  bridgeEnclosed13: [''],
  analogAsp13: [''],
  wheelHouse13: [''],
  mcr13: [''],
  mechPort13: [''],
  mechStbd13: [''],
  remarks13: [''],

  // Position 14
  bridgeEnclosed14: [''],
  analogAsp14: [''],
  wheelHouse14: [''],
  mcr14: [''],
  mechPort14: [''],
  mechStbd14: [''],
  remarks14: [''],

  // Position 15
  bridgeEnclosed15: [''],
  analogAsp15: [''],
  wheelHouse15: [''],
  mcr15: [''],
  mechPort15: [''],
  mechStbd15: [''],
  remarks15: [''],

  // Position 16
  bridgeEnclosed16: [''],
  analogAsp16: [''],
  wheelHouse16: [''],
  mcr16: [''],
  mechPort16: [''],
  mechStbd16: [''],
  remarks16: [''],

  // Position 17
  bridgeEnclosed17: [''],
  analogAsp17: [''],
  wheelHouse17: [''],
  mcr17: [''],
  mechPort17: [''],
  mechStbd17: [''],
  remarks17: [''],

  // Position 18
  bridgeEnclosed18: [''],
  analogAsp18: [''],
  wheelHouse18: [''],
  mcr18: [''],
  mechPort18: [''],
  mechStbd18: [''],
  remarks18: [''],

  // Position 19
  bridgeEnclosed19: [''],
  analogAsp19: [''],
  wheelHouse19: [''],
  mcr19: [''],
  mechPort19: [''],
  mechStbd19: [''],
  remarks19: [''],

  // Position 20
  bridgeEnclosed20: [''],
  analogAsp20: [''],
  wheelHouse20: [''],
  mcr20: [''],
  mechPort20: [''],
  mechStbd20: [''],
  remarks20: [''],

  // Position 21
  bridgeEnclosed21: [''],
  analogAsp21: [''],
  wheelHouse21: [''],
  mcr21: [''],
  mechPort21: [''],
  mechStbd21: [''],
  remarks21: [''],

  // Position 22
  bridgeEnclosed22: [''],
  analogAsp22: [''],
  wheelHouse22: [''],
  mcr22: [''],
  mechPort22: [''],
  mechStbd22: [''],
  remarks22: [''],

  // Position 23
  bridgeEnclosed23: [''],
  analogAsp23: [''],
  wheelHouse23: [''],
  mcr23: [''],
  mechPort23: [''],
  mechStbd23: [''],
  remarks23: [''],

  // Position 24
  bridgeEnclosed24: [''],
  analogAsp24: [''],
  wheelHouse24: [''],
  mcr24: [''],
  mechPort24: [''],
  mechStbd24: [''],
  remarks24: [''],

  // Position 25
  bridgeEnclosed25: [''],
  analogAsp25: [''],
  wheelHouse25: [''],
  mcr25: [''],
  mechPort25: [''],
  mechStbd25: [''],
  remarks25: [''],

  // Position 26
  bridgeEnclosed26: [''],
  analogAsp26: [''],
  wheelHouse26: [''],
  mcr26: [''],
  mechPort26: [''],
  mechStbd26: [''],
  remarks26: [''],

  // Position 27
  bridgeEnclosed27: [''],
  analogAsp27: [''],
  wheelHouse27: [''],
  mcr27: [''],
  mechPort27: [''],
  mechStbd27: [''],
  remarks27: [''],

  // Position 28
  bridgeEnclosed28: [''],
  analogAsp28: [''],
  wheelHouse28: [''],
  mcr28: [''],
  mechPort28: [''],
  mechStbd28: [''],
  remarks28: ['']
    });


// WheelPortForm

     this.WheelPortForm = this.fb.group({
      // Position 0
  bridgeEnclosed0: [''],
  analogAsp0: [''],
  wheelHouse0: [''],
  mcr0: [''],
  mechPort0: [''],
  mechStbd0: [''],
  remarks0: [''],

  // Position 1
  bridgeEnclosed1: [''],
  analogAsp1: [''],
  wheelHouse1: [''],
  mcr1: [''],
  mechPort1: [''],
  mechStbd1: [''],
  remarks1: [''],

  // Position 2
  bridgeEnclosed2: [''],
  analogAsp2: [''],
  wheelHouse2: [''],
  mcr2: [''],
  mechPort2: [''],
  mechStbd2: [''],
  remarks2: [''],

  // Position 3
  bridgeEnclosed3: [''],
  analogAsp3: [''],
  wheelHouse3: [''],
  mcr3: [''],
  mechPort3: [''],
  mechStbd3: [''],
  remarks3: [''],

  // Position 4
  bridgeEnclosed4: [''],
  analogAsp4: [''],
  wheelHouse4: [''],
  mcr4: [''],
  mechPort4: [''],
  mechStbd4: [''],
  remarks4: [''],

  // Position 5
  bridgeEnclosed5: [''],
  analogAsp5: [''],
  wheelHouse5: [''],
  mcr5: [''],
  mechPort5: [''],
  mechStbd5: [''],
  remarks5: [''],

  // Position 6
  bridgeEnclosed6: [''],
  analogAsp6: [''],
  wheelHouse6: [''],
  mcr6: [''],
  mechPort6: [''],
  mechStbd6: [''],
  remarks6: [''],

  // Position 7
  bridgeEnclosed7: [''],
  analogAsp7: [''],
  wheelHouse7: [''],
  mcr7: [''],
  mechPort7: [''],
  mechStbd7: [''],
  remarks7: [''],

  // Position 8
  bridgeEnclosed8: [''],
  analogAsp8: [''],
  wheelHouse8: [''],
  mcr8: [''],
  mechPort8: [''],
  mechStbd8: [''],
  remarks8: [''],

  // Position 9
  bridgeEnclosed9: [''],
  analogAsp9: [''],
  wheelHouse9: [''],
  mcr9: [''],
  mechPort9: [''],
  mechStbd9: [''],
  remarks9: [''],

  // Position 10
  bridgeEnclosed10: [''],
  analogAsp10: [''],
  wheelHouse10: [''],
  mcr10: [''],
  mechPort10: [''],
  mechStbd10: [''],
  remarks10: [''],

  // Position 11
  bridgeEnclosed11: [''],
  analogAsp11: [''],
  wheelHouse11: [''],
  mcr11: [''],
  mechPort11: [''],
  mechStbd11: [''],
  remarks11: [''],

  // Position 12
  bridgeEnclosed12: [''],
  analogAsp12: [''],
  wheelHouse12: [''],
  mcr12: [''],
  mechPort12: [''],
  mechStbd12: [''],
  remarks12: [''],

  // Position 13
  bridgeEnclosed13: [''],
  analogAsp13: [''],
  wheelHouse13: [''],
  mcr13: [''],
  mechPort13: [''],
  mechStbd13: [''],
  remarks13: [''],

  // Position 14
  bridgeEnclosed14: [''],
  analogAsp14: [''],
  wheelHouse14: [''],
  mcr14: [''],
  mechPort14: [''],
  mechStbd14: [''],
  remarks14: [''],

  // Position 15
  bridgeEnclosed15: [''],
  analogAsp15: [''],
  wheelHouse15: [''],
  mcr15: [''],
  mechPort15: [''],
  mechStbd15: [''],
  remarks15: [''],

  // Position 16
  bridgeEnclosed16: [''],
  analogAsp16: [''],
  wheelHouse16: [''],
  mcr16: [''],
  mechPort16: [''],
  mechStbd16: [''],
  remarks16: [''],

  // Position 17
  bridgeEnclosed17: [''],
  analogAsp17: [''],
  wheelHouse17: [''],
  mcr17: [''],
  mechPort17: [''],
  mechStbd17: [''],
  remarks17: [''],

  // Position 18
  bridgeEnclosed18: [''],
  analogAsp18: [''],
  wheelHouse18: [''],
  mcr18: [''],
  mechPort18: [''],
  mechStbd18: [''],
  remarks18: [''],

  // Position 19
  bridgeEnclosed19: [''],
  analogAsp19: [''],
  wheelHouse19: [''],
  mcr19: [''],
  mechPort19: [''],
  mechStbd19: [''],
  remarks19: [''],

  // Position 20
  bridgeEnclosed20: [''],
  analogAsp20: [''],
  wheelHouse20: [''],
  mcr20: [''],
  mechPort20: [''],
  mechStbd20: [''],
  remarks20: [''],

  // Position 21
  bridgeEnclosed21: [''],
  analogAsp21: [''],
  wheelHouse21: [''],
  mcr21: [''],
  mechPort21: [''],
  mechStbd21: [''],
  remarks21: [''],

  // Position 22
  bridgeEnclosed22: [''],
  analogAsp22: [''],
  wheelHouse22: [''],
  mcr22: [''],
  mechPort22: [''],
  mechStbd22: [''],
  remarks22: [''],

  // Position 23
  bridgeEnclosed23: [''],
  analogAsp23: [''],
  wheelHouse23: [''],
  mcr23: [''],
  mechPort23: [''],
  mechStbd23: [''],
  remarks23: [''],

  // Position 24
  bridgeEnclosed24: [''],
  analogAsp24: [''],
  wheelHouse24: [''],
  mcr24: [''],
  mechPort24: [''],
  mechStbd24: [''],
  remarks24: [''],

  // Position 25
  bridgeEnclosed25: [''],
  analogAsp25: [''],
  wheelHouse25: [''],
  mcr25: [''],
  mechPort25: [''],
  mechStbd25: [''],
  remarks25: [''],

  // Position 26
  bridgeEnclosed26: [''],
  analogAsp26: [''],
  wheelHouse26: [''],
  mcr26: [''],
  mechPort26: [''],
  mechStbd26: [''],
  remarks26: [''],

  // Position 27
  bridgeEnclosed27: [''],
  analogAsp27: [''],
  wheelHouse27: [''],
  mcr27: [''],
  mechPort27: [''],
  mechStbd27: [''],
  remarks27: [''],

  // Position 28
  bridgeEnclosed28: [''],
  analogAsp28: [''],
  wheelHouse28: [''],
  mcr28: [''],
  mechPort28: [''],
  mechStbd28: [''],
  remarks28: ['']
    });




// WheelPortNFUForm




    this.WheelPortNFUForm = this.fb.group({
      // Position 0
  bridgeEnclosed0: [''],
  analogAsp0: [''],
  wheelHouse0: [''],
  mcr0: [''],
  mechPort0: [''],
  mechStbd0: [''],
  

  // Position 1
  bridgeEnclosed1: [''],
  analogAsp1: [''],
  wheelHouse1: [''],
  mcr1: [''],
  mechPort1: [''],
  mechStbd1: [''],
  

  // Position 2
  bridgeEnclosed2: [''],
  analogAsp2: [''],
  wheelHouse2: [''],
  mcr2: [''],
  mechPort2: [''],
  mechStbd2: [''],
  

  // Position 3
  bridgeEnclosed3: [''],
  analogAsp3: [''],
  wheelHouse3: [''],
  mcr3: [''],
  mechPort3: [''],
  mechStbd3: [''],
  

  // Position 4
  bridgeEnclosed4: [''],
  analogAsp4: [''],
  wheelHouse4: [''],
  mcr4: [''],
  mechPort4: [''],
  mechStbd4: [''],
  

  // Position 5
  bridgeEnclosed5: [''],
  analogAsp5: [''],
  wheelHouse5: [''],
  mcr5: [''],
  mechPort5: [''],
  mechStbd5: [''],
  

  // Position 6
  bridgeEnclosed6: [''],
  analogAsp6: [''],
  wheelHouse6: [''],
  mcr6: [''],
  mechPort6: [''],
  mechStbd6: [''],
  

  // Position 7
  bridgeEnclosed7: [''],
  analogAsp7: [''],
  wheelHouse7: [''],
  mcr7: [''],
  mechPort7: [''],
  mechStbd7: [''],
  

  // Position 8
  bridgeEnclosed8: [''],
  analogAsp8: [''],
  wheelHouse8: [''],
  mcr8: [''],
  mechPort8: [''],
  mechStbd8: [''],
  

  // Position 9
  bridgeEnclosed9: [''],
  analogAsp9: [''],
  wheelHouse9: [''],
  mcr9: [''],
  mechPort9: [''],
  mechStbd9: [''],
  

  // Position 10
  bridgeEnclosed10: [''],
  analogAsp10: [''],
  wheelHouse10: [''],
  mcr10: [''],
  mechPort10: [''],
  mechStbd10: [''],
  

  // Position 11
  bridgeEnclosed11: [''],
  analogAsp11: [''],
  wheelHouse11: [''],
  mcr11: [''],
  mechPort11: [''],
  mechStbd11: [''],
  

  // Position 12
  bridgeEnclosed12: [''],
  analogAsp12: [''],
  wheelHouse12: [''],
  mcr12: [''],
  mechPort12: [''],
  mechStbd12: [''],
  

  // Position 13
  bridgeEnclosed13: [''],
  analogAsp13: [''],
  wheelHouse13: [''],
  mcr13: [''],
  mechPort13: [''],
  mechStbd13: [''],
  

  // Position 14
  bridgeEnclosed14: [''],
  analogAsp14: [''],
  wheelHouse14: [''],
  mcr14: [''],
  mechPort14: [''],
  mechStbd14: [''],
  

  // Position 15
  bridgeEnclosed15: [''],
  analogAsp15: [''],
  wheelHouse15: [''],
  mcr15: [''],
  mechPort15: [''],
  mechStbd15: [''],
  

  // Position 16
  bridgeEnclosed16: [''],
  analogAsp16: [''],
  wheelHouse16: [''],
  mcr16: [''],
  mechPort16: [''],
  mechStbd16: [''],
  

  // Position 17
  bridgeEnclosed17: [''],
  analogAsp17: [''],
  wheelHouse17: [''],
  mcr17: [''],
  mechPort17: [''],
  mechStbd17: [''],
  

  // Position 18
  bridgeEnclosed18: [''],
  analogAsp18: [''],
  wheelHouse18: [''],
  mcr18: [''],
  mechPort18: [''],
  mechStbd18: [''],
  

  // Position 19
  bridgeEnclosed19: [''],
  analogAsp19: [''],
  wheelHouse19: [''],
  mcr19: [''],
  mechPort19: [''],
  mechStbd19: [''],
  

  // Position 20
  bridgeEnclosed20: [''],
  analogAsp20: [''],
  wheelHouse20: [''],
  mcr20: [''],
  mechPort20: [''],
  mechStbd20: [''],
  

  // Position 21
  bridgeEnclosed21: [''],
  analogAsp21: [''],
  wheelHouse21: [''],
  mcr21: [''],
  mechPort21: [''],
  mechStbd21: [''],
  

  // Position 22
  bridgeEnclosed22: [''],
  analogAsp22: [''],
  wheelHouse22: [''],
  mcr22: [''],
  mechPort22: [''],
  mechStbd22: [''],
  

  // Position 23
  bridgeEnclosed23: [''],
  analogAsp23: [''],
  wheelHouse23: [''],
  mcr23: [''],
  mechPort23: [''],
  mechStbd23: [''],
  

  // Position 24
  bridgeEnclosed24: [''],
  analogAsp24: [''],
  wheelHouse24: [''],
  mcr24: [''],
  mechPort24: [''],
  mechStbd24: [''],
  

  // Position 25
  bridgeEnclosed25: [''],
  analogAsp25: [''],
  wheelHouse25: [''],
  mcr25: [''],
  mechPort25: [''],
  mechStbd25: [''],
  

  // Position 26
  bridgeEnclosed26: [''],
  analogAsp26: [''],
  wheelHouse26: [''],
  mcr26: [''],
  mechPort26: [''],
  mechStbd26: [''],
  

  // Position 27
  bridgeEnclosed27: [''],
  analogAsp27: [''],
  wheelHouse27: [''],
  mcr27: [''],
  mechPort27: [''],
  mechStbd27: [''],
  

  // Position 28
  bridgeEnclosed28: [''],
  analogAsp28: [''],
  wheelHouse28: [''],
  mcr28: [''],
  mechPort28: [''],
  mechStbd28: [''],
    });



// WheelStbdNFUForm

      this.WheelStbdNFUForm = this.fb.group({
      // Position 0
  bridgeEnclosed0: [''],
  analogAsp0: [''],
  wheelHouse0: [''],
  mcr0: [''],
  mechPort0: [''],
  mechStbd0: [''],
  

  // Position 1
  bridgeEnclosed1: [''],
  analogAsp1: [''],
  wheelHouse1: [''],
  mcr1: [''],
  mechPort1: [''],
  mechStbd1: [''],
  

  // Position 2
  bridgeEnclosed2: [''],
  analogAsp2: [''],
  wheelHouse2: [''],
  mcr2: [''],
  mechPort2: [''],
  mechStbd2: [''],
  

  // Position 3
  bridgeEnclosed3: [''],
  analogAsp3: [''],
  wheelHouse3: [''],
  mcr3: [''],
  mechPort3: [''],
  mechStbd3: [''],
  

  // Position 4
  bridgeEnclosed4: [''],
  analogAsp4: [''],
  wheelHouse4: [''],
  mcr4: [''],
  mechPort4: [''],
  mechStbd4: [''],
  

  // Position 5
  bridgeEnclosed5: [''],
  analogAsp5: [''],
  wheelHouse5: [''],
  mcr5: [''],
  mechPort5: [''],
  mechStbd5: [''],
  

  // Position 6
  bridgeEnclosed6: [''],
  analogAsp6: [''],
  wheelHouse6: [''],
  mcr6: [''],
  mechPort6: [''],
  mechStbd6: [''],
  

  // Position 7
  bridgeEnclosed7: [''],
  analogAsp7: [''],
  wheelHouse7: [''],
  mcr7: [''],
  mechPort7: [''],
  mechStbd7: [''],
  

  // Position 8
  bridgeEnclosed8: [''],
  analogAsp8: [''],
  wheelHouse8: [''],
  mcr8: [''],
  mechPort8: [''],
  mechStbd8: [''],
  

  // Position 9
  bridgeEnclosed9: [''],
  analogAsp9: [''],
  wheelHouse9: [''],
  mcr9: [''],
  mechPort9: [''],
  mechStbd9: [''],
  

  // Position 10
  bridgeEnclosed10: [''],
  analogAsp10: [''],
  wheelHouse10: [''],
  mcr10: [''],
  mechPort10: [''],
  mechStbd10: [''],
  

  // Position 11
  bridgeEnclosed11: [''],
  analogAsp11: [''],
  wheelHouse11: [''],
  mcr11: [''],
  mechPort11: [''],
  mechStbd11: [''],
  

  // Position 12
  bridgeEnclosed12: [''],
  analogAsp12: [''],
  wheelHouse12: [''],
  mcr12: [''],
  mechPort12: [''],
  mechStbd12: [''],
  

  // Position 13
  bridgeEnclosed13: [''],
  analogAsp13: [''],
  wheelHouse13: [''],
  mcr13: [''],
  mechPort13: [''],
  mechStbd13: [''],
  

  // Position 14
  bridgeEnclosed14: [''],
  analogAsp14: [''],
  wheelHouse14: [''],
  mcr14: [''],
  mechPort14: [''],
  mechStbd14: [''],
  

  // Position 15
  bridgeEnclosed15: [''],
  analogAsp15: [''],
  wheelHouse15: [''],
  mcr15: [''],
  mechPort15: [''],
  mechStbd15: [''],
  

  // Position 16
  bridgeEnclosed16: [''],
  analogAsp16: [''],
  wheelHouse16: [''],
  mcr16: [''],
  mechPort16: [''],
  mechStbd16: [''],
  

  // Position 17
  bridgeEnclosed17: [''],
  analogAsp17: [''],
  wheelHouse17: [''],
  mcr17: [''],
  mechPort17: [''],
  mechStbd17: [''],
  

  // Position 18
  bridgeEnclosed18: [''],
  analogAsp18: [''],
  wheelHouse18: [''],
  mcr18: [''],
  mechPort18: [''],
  mechStbd18: [''],
  

  // Position 19
  bridgeEnclosed19: [''],
  analogAsp19: [''],
  wheelHouse19: [''],
  mcr19: [''],
  mechPort19: [''],
  mechStbd19: [''],
  

  // Position 20
  bridgeEnclosed20: [''],
  analogAsp20: [''],
  wheelHouse20: [''],
  mcr20: [''],
  mechPort20: [''],
  mechStbd20: [''],
  

  // Position 21
  bridgeEnclosed21: [''],
  analogAsp21: [''],
  wheelHouse21: [''],
  mcr21: [''],
  mechPort21: [''],
  mechStbd21: [''],
  

  // Position 22
  bridgeEnclosed22: [''],
  analogAsp22: [''],
  wheelHouse22: [''],
  mcr22: [''],
  mechPort22: [''],
  mechStbd22: [''],
  

  // Position 23
  bridgeEnclosed23: [''],
  analogAsp23: [''],
  wheelHouse23: [''],
  mcr23: [''],
  mechPort23: [''],
  mechStbd23: [''],
  

  // Position 24
  bridgeEnclosed24: [''],
  analogAsp24: [''],
  wheelHouse24: [''],
  mcr24: [''],
  mechPort24: [''],
  mechStbd24: [''],
  

  // Position 25
  bridgeEnclosed25: [''],
  analogAsp25: [''],
  wheelHouse25: [''],
  mcr25: [''],
  mechPort25: [''],
  mechStbd25: [''],
  

  // Position 26
  bridgeEnclosed26: [''],
  analogAsp26: [''],
  wheelHouse26: [''],
  mcr26: [''],
  mechPort26: [''],
  mechStbd26: [''],
  

  // Position 27
  bridgeEnclosed27: [''],
  analogAsp27: [''],
  wheelHouse27: [''],
  mcr27: [''],
  mechPort27: [''],
  mechStbd27: [''],
  

  // Position 28
  bridgeEnclosed28: [''],
  analogAsp28: [''],
  wheelHouse28: [''],
  mcr28: [''],
  mechPort28: [''],
  mechStbd28: [''],
    });






// BridgePortNFUForm

        this.BridgePortNFUForm = this.fb.group({
      // Position 0
  bridgeEnclosed0: [''],
  analogAsp0: [''],
  wheelHouse0: [''],
  mcr0: [''],
  mechPort0: [''],
  mechStbd0: [''],
  

  // Position 1
  bridgeEnclosed1: [''],
  analogAsp1: [''],
  wheelHouse1: [''],
  mcr1: [''],
  mechPort1: [''],
  mechStbd1: [''],
  

  // Position 2
  bridgeEnclosed2: [''],
  analogAsp2: [''],
  wheelHouse2: [''],
  mcr2: [''],
  mechPort2: [''],
  mechStbd2: [''],
  

  // Position 3
  bridgeEnclosed3: [''],
  analogAsp3: [''],
  wheelHouse3: [''],
  mcr3: [''],
  mechPort3: [''],
  mechStbd3: [''],
  

  // Position 4
  bridgeEnclosed4: [''],
  analogAsp4: [''],
  wheelHouse4: [''],
  mcr4: [''],
  mechPort4: [''],
  mechStbd4: [''],
  

  // Position 5
  bridgeEnclosed5: [''],
  analogAsp5: [''],
  wheelHouse5: [''],
  mcr5: [''],
  mechPort5: [''],
  mechStbd5: [''],
  

  // Position 6
  bridgeEnclosed6: [''],
  analogAsp6: [''],
  wheelHouse6: [''],
  mcr6: [''],
  mechPort6: [''],
  mechStbd6: [''],
  

  // Position 7
  bridgeEnclosed7: [''],
  analogAsp7: [''],
  wheelHouse7: [''],
  mcr7: [''],
  mechPort7: [''],
  mechStbd7: [''],
  

  // Position 8
  bridgeEnclosed8: [''],
  analogAsp8: [''],
  wheelHouse8: [''],
  mcr8: [''],
  mechPort8: [''],
  mechStbd8: [''],
  

  // Position 9
  bridgeEnclosed9: [''],
  analogAsp9: [''],
  wheelHouse9: [''],
  mcr9: [''],
  mechPort9: [''],
  mechStbd9: [''],
  

  // Position 10
  bridgeEnclosed10: [''],
  analogAsp10: [''],
  wheelHouse10: [''],
  mcr10: [''],
  mechPort10: [''],
  mechStbd10: [''],
  

  // Position 11
  bridgeEnclosed11: [''],
  analogAsp11: [''],
  wheelHouse11: [''],
  mcr11: [''],
  mechPort11: [''],
  mechStbd11: [''],
  

  // Position 12
  bridgeEnclosed12: [''],
  analogAsp12: [''],
  wheelHouse12: [''],
  mcr12: [''],
  mechPort12: [''],
  mechStbd12: [''],
  

  // Position 13
  bridgeEnclosed13: [''],
  analogAsp13: [''],
  wheelHouse13: [''],
  mcr13: [''],
  mechPort13: [''],
  mechStbd13: [''],
  

  // Position 14
  bridgeEnclosed14: [''],
  analogAsp14: [''],
  wheelHouse14: [''],
  mcr14: [''],
  mechPort14: [''],
  mechStbd14: [''],
  

  // Position 15
  bridgeEnclosed15: [''],
  analogAsp15: [''],
  wheelHouse15: [''],
  mcr15: [''],
  mechPort15: [''],
  mechStbd15: [''],
  

  // Position 16
  bridgeEnclosed16: [''],
  analogAsp16: [''],
  wheelHouse16: [''],
  mcr16: [''],
  mechPort16: [''],
  mechStbd16: [''],
  

  // Position 17
  bridgeEnclosed17: [''],
  analogAsp17: [''],
  wheelHouse17: [''],
  mcr17: [''],
  mechPort17: [''],
  mechStbd17: [''],
  

  // Position 18
  bridgeEnclosed18: [''],
  analogAsp18: [''],
  wheelHouse18: [''],
  mcr18: [''],
  mechPort18: [''],
  mechStbd18: [''],
  

  // Position 19
  bridgeEnclosed19: [''],
  analogAsp19: [''],
  wheelHouse19: [''],
  mcr19: [''],
  mechPort19: [''],
  mechStbd19: [''],
  

  // Position 20
  bridgeEnclosed20: [''],
  analogAsp20: [''],
  wheelHouse20: [''],
  mcr20: [''],
  mechPort20: [''],
  mechStbd20: [''],
  

  // Position 21
  bridgeEnclosed21: [''],
  analogAsp21: [''],
  wheelHouse21: [''],
  mcr21: [''],
  mechPort21: [''],
  mechStbd21: [''],
  

  // Position 22
  bridgeEnclosed22: [''],
  analogAsp22: [''],
  wheelHouse22: [''],
  mcr22: [''],
  mechPort22: [''],
  mechStbd22: [''],
  

  // Position 23
  bridgeEnclosed23: [''],
  analogAsp23: [''],
  wheelHouse23: [''],
  mcr23: [''],
  mechPort23: [''],
  mechStbd23: [''],
  

  // Position 24
  bridgeEnclosed24: [''],
  analogAsp24: [''],
  wheelHouse24: [''],
  mcr24: [''],
  mechPort24: [''],
  mechStbd24: [''],
  

  // Position 25
  bridgeEnclosed25: [''],
  analogAsp25: [''],
  wheelHouse25: [''],
  mcr25: [''],
  mechPort25: [''],
  mechStbd25: [''],
  

  // Position 26
  bridgeEnclosed26: [''],
  analogAsp26: [''],
  wheelHouse26: [''],
  mcr26: [''],
  mechPort26: [''],
  mechStbd26: [''],
  

  // Position 27
  bridgeEnclosed27: [''],
  analogAsp27: [''],
  wheelHouse27: [''],
  mcr27: [''],
  mechPort27: [''],
  mechStbd27: [''],
  

  // Position 28
  bridgeEnclosed28: [''],
  analogAsp28: [''],
  wheelHouse28: [''],
  mcr28: [''],
  mechPort28: [''],
  mechStbd28: [''],
    });


// BridgeStbdNFUForm


      this.BridgeStbdNFUForm = this.fb.group({
      // Position 0
  bridgeEnclosed0: [''],
  analogAsp0: [''],
  wheelHouse0: [''],
  mcr0: [''],
  mechPort0: [''],
  mechStbd0: [''],
  

  // Position 1
  bridgeEnclosed1: [''],
  analogAsp1: [''],
  wheelHouse1: [''],
  mcr1: [''],
  mechPort1: [''],
  mechStbd1: [''],
  

  // Position 2
  bridgeEnclosed2: [''],
  analogAsp2: [''],
  wheelHouse2: [''],
  mcr2: [''],
  mechPort2: [''],
  mechStbd2: [''],
  

  // Position 3
  bridgeEnclosed3: [''],
  analogAsp3: [''],
  wheelHouse3: [''],
  mcr3: [''],
  mechPort3: [''],
  mechStbd3: [''],
  

  // Position 4
  bridgeEnclosed4: [''],
  analogAsp4: [''],
  wheelHouse4: [''],
  mcr4: [''],
  mechPort4: [''],
  mechStbd4: [''],
  

  // Position 5
  bridgeEnclosed5: [''],
  analogAsp5: [''],
  wheelHouse5: [''],
  mcr5: [''],
  mechPort5: [''],
  mechStbd5: [''],
  

  // Position 6
  bridgeEnclosed6: [''],
  analogAsp6: [''],
  wheelHouse6: [''],
  mcr6: [''],
  mechPort6: [''],
  mechStbd6: [''],
  

  // Position 7
  bridgeEnclosed7: [''],
  analogAsp7: [''],
  wheelHouse7: [''],
  mcr7: [''],
  mechPort7: [''],
  mechStbd7: [''],
  

  // Position 8
  bridgeEnclosed8: [''],
  analogAsp8: [''],
  wheelHouse8: [''],
  mcr8: [''],
  mechPort8: [''],
  mechStbd8: [''],
  

  // Position 9
  bridgeEnclosed9: [''],
  analogAsp9: [''],
  wheelHouse9: [''],
  mcr9: [''],
  mechPort9: [''],
  mechStbd9: [''],
  

  // Position 10
  bridgeEnclosed10: [''],
  analogAsp10: [''],
  wheelHouse10: [''],
  mcr10: [''],
  mechPort10: [''],
  mechStbd10: [''],
  

  // Position 11
  bridgeEnclosed11: [''],
  analogAsp11: [''],
  wheelHouse11: [''],
  mcr11: [''],
  mechPort11: [''],
  mechStbd11: [''],
  

  // Position 12
  bridgeEnclosed12: [''],
  analogAsp12: [''],
  wheelHouse12: [''],
  mcr12: [''],
  mechPort12: [''],
  mechStbd12: [''],
  

  // Position 13
  bridgeEnclosed13: [''],
  analogAsp13: [''],
  wheelHouse13: [''],
  mcr13: [''],
  mechPort13: [''],
  mechStbd13: [''],
  

  // Position 14
  bridgeEnclosed14: [''],
  analogAsp14: [''],
  wheelHouse14: [''],
  mcr14: [''],
  mechPort14: [''],
  mechStbd14: [''],
  

  // Position 15
  bridgeEnclosed15: [''],
  analogAsp15: [''],
  wheelHouse15: [''],
  mcr15: [''],
  mechPort15: [''],
  mechStbd15: [''],
  

  // Position 16
  bridgeEnclosed16: [''],
  analogAsp16: [''],
  wheelHouse16: [''],
  mcr16: [''],
  mechPort16: [''],
  mechStbd16: [''],
  

  // Position 17
  bridgeEnclosed17: [''],
  analogAsp17: [''],
  wheelHouse17: [''],
  mcr17: [''],
  mechPort17: [''],
  mechStbd17: [''],
  

  // Position 18
  bridgeEnclosed18: [''],
  analogAsp18: [''],
  wheelHouse18: [''],
  mcr18: [''],
  mechPort18: [''],
  mechStbd18: [''],
  

  // Position 19
  bridgeEnclosed19: [''],
  analogAsp19: [''],
  wheelHouse19: [''],
  mcr19: [''],
  mechPort19: [''],
  mechStbd19: [''],
  

  // Position 20
  bridgeEnclosed20: [''],
  analogAsp20: [''],
  wheelHouse20: [''],
  mcr20: [''],
  mechPort20: [''],
  mechStbd20: [''],
  

  // Position 21
  bridgeEnclosed21: [''],
  analogAsp21: [''],
  wheelHouse21: [''],
  mcr21: [''],
  mechPort21: [''],
  mechStbd21: [''],
  

  // Position 22
  bridgeEnclosed22: [''],
  analogAsp22: [''],
  wheelHouse22: [''],
  mcr22: [''],
  mechPort22: [''],
  mechStbd22: [''],
  

  // Position 23
  bridgeEnclosed23: [''],
  analogAsp23: [''],
  wheelHouse23: [''],
  mcr23: [''],
  mechPort23: [''],
  mechStbd23: [''],
  

  // Position 24
  bridgeEnclosed24: [''],
  analogAsp24: [''],
  wheelHouse24: [''],
  mcr24: [''],
  mechPort24: [''],
  mechStbd24: [''],
  

  // Position 25
  bridgeEnclosed25: [''],
  analogAsp25: [''],
  wheelHouse25: [''],
  mcr25: [''],
  mechPort25: [''],
  mechStbd25: [''],
  

  // Position 26
  bridgeEnclosed26: [''],
  analogAsp26: [''],
  wheelHouse26: [''],
  mcr26: [''],
  mechPort26: [''],
  mechStbd26: [''],
  

  // Position 27
  bridgeEnclosed27: [''],
  analogAsp27: [''],
  wheelHouse27: [''],
  mcr27: [''],
  mechPort27: [''],
  mechStbd27: [''],
  

  // Position 28
  bridgeEnclosed28: [''],
  analogAsp28: [''],
  wheelHouse28: [''],
  mcr28: [''],
  mechPort28: [''],
  mechStbd28: [''],
    });

    this.rudderForm = this.fb.group({
  bridge_35P_30S_port: [''],
  bridge_35P_30S_stbd: [''],
  bridge_35P_30S_both: [''],
  bridge_35P_30S_remarks: [''],
  bridge_35S_30P_port: [''],
  bridge_35S_30P_stbd: [''],
  bridge_35S_30P_both: [''],
  bridge_35S_30P_remarks: [''],
  wheel_35P_30S_port: [''],
  wheel_35P_30S_stbd: [''],
  wheel_35P_30S_both: [''],
  wheel_35P_30S_remarks: [''],
  wheel_35S_30P_port: [''],
  wheel_35S_30P_stbd: [''],
  wheel_35S_30P_both: [''],
  wheel_35S_30P_remarks: ['']
});

  }
}
