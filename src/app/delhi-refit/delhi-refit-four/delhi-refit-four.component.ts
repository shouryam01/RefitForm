import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-delhi-refit-four',
  templateUrl: './delhi-refit-four.component.html',
  styleUrls: ['./delhi-refit-four.component.scss']
})
export class DelhiRefitFourComponent implements OnInit {

  WheelPortNFUForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

 ngOnInit() : void {
  this.WheelPortNFUForm = this.fb.group({
      // Position 0
  bridgeEnclosed0: new FormControl(''),
  analogAsp0: new FormControl(''),
  wheelHouse0: new FormControl(''),
  mcr0: new FormControl(''),
  mechPort0: new FormControl(''),
  mechStbd0: new FormControl(''),
  

  // Position 1
  bridgeEnclosed1: new FormControl(''),
  analogAsp1: new FormControl(''),
  wheelHouse1: new FormControl(''),
  mcr1: new FormControl(''),
  mechPort1: new FormControl(''),
  mechStbd1: new FormControl(''),
  

  // Position 2
  bridgeEnclosed2: new FormControl(''),
  analogAsp2: new FormControl(''),
  wheelHouse2: new FormControl(''),
  mcr2: new FormControl(''),
  mechPort2: new FormControl(''),
  mechStbd2: new FormControl(''),
  

  // Position 3
  bridgeEnclosed3: new FormControl(''),
  analogAsp3: new FormControl(''),
  wheelHouse3: new FormControl(''),
  mcr3: new FormControl(''),
  mechPort3: new FormControl(''),
  mechStbd3: new FormControl(''),
  

  // Position 4
  bridgeEnclosed4: new FormControl(''),
  analogAsp4: new FormControl(''),
  wheelHouse4: new FormControl(''),
  mcr4: new FormControl(''),
  mechPort4: new FormControl(''),
  mechStbd4: new FormControl(''),
  

  // Position 5
  bridgeEnclosed5: new FormControl(''),
  analogAsp5: new FormControl(''),
  wheelHouse5: new FormControl(''),
  mcr5: new FormControl(''),
  mechPort5: new FormControl(''),
  mechStbd5: new FormControl(''),
  

  // Position 6
  bridgeEnclosed6: new FormControl(''),
  analogAsp6: new FormControl(''),
  wheelHouse6: new FormControl(''),
  mcr6: new FormControl(''),
  mechPort6: new FormControl(''),
  mechStbd6: new FormControl(''),
  

  // Position 7
  bridgeEnclosed7: new FormControl(''),
  analogAsp7: new FormControl(''),
  wheelHouse7: new FormControl(''),
  mcr7: new FormControl(''),
  mechPort7: new FormControl(''),
  mechStbd7: new FormControl(''),
  

  // Position 8
  bridgeEnclosed8: new FormControl(''),
  analogAsp8: new FormControl(''),
  wheelHouse8: new FormControl(''),
  mcr8: new FormControl(''),
  mechPort8: new FormControl(''),
  mechStbd8: new FormControl(''),
  

  // Position 9
  bridgeEnclosed9: new FormControl(''),
  analogAsp9: new FormControl(''),
  wheelHouse9: new FormControl(''),
  mcr9: new FormControl(''),
  mechPort9: new FormControl(''),
  mechStbd9: new FormControl(''),
  

  // Position 10
  bridgeEnclosed10: new FormControl(''),
  analogAsp10: new FormControl(''),
  wheelHouse10: new FormControl(''),
  mcr10: new FormControl(''),
  mechPort10: new FormControl(''),
  mechStbd10: new FormControl(''),
  

  // Position 11
  bridgeEnclosed11: new FormControl(''),
  analogAsp11: new FormControl(''),
  wheelHouse11: new FormControl(''),
  mcr11: new FormControl(''),
  mechPort11: new FormControl(''),
  mechStbd11: new FormControl(''),
  

  // Position 12
  bridgeEnclosed12: new FormControl(''),
  analogAsp12: new FormControl(''),
  wheelHouse12: new FormControl(''),
  mcr12: new FormControl(''),
  mechPort12: new FormControl(''),
  mechStbd12: new FormControl(''),
  

  // Position 13
  bridgeEnclosed13: new FormControl(''),
  analogAsp13: new FormControl(''),
  wheelHouse13: new FormControl(''),
  mcr13: new FormControl(''),
  mechPort13: new FormControl(''),
  mechStbd13: new FormControl(''),
  

  // Position 14
  bridgeEnclosed14: new FormControl(''),
  analogAsp14: new FormControl(''),
  wheelHouse14: new FormControl(''),
  mcr14: new FormControl(''),
  mechPort14: new FormControl(''),
  mechStbd14: new FormControl(''),
  

  // Position 15
  bridgeEnclosed15: new FormControl(''),
  analogAsp15: new FormControl(''),
  wheelHouse15: new FormControl(''),
  mcr15: new FormControl(''),
  mechPort15: new FormControl(''),
  mechStbd15: new FormControl(''),
  

  // Position 16
  bridgeEnclosed16: new FormControl(''),
  analogAsp16: new FormControl(''),
  wheelHouse16: new FormControl(''),
  mcr16: new FormControl(''),
  mechPort16: new FormControl(''),
  mechStbd16: new FormControl(''),
  

  // Position 17
  bridgeEnclosed17: new FormControl(''),
  analogAsp17: new FormControl(''),
  wheelHouse17: new FormControl(''),
  mcr17: new FormControl(''),
  mechPort17: new FormControl(''),
  mechStbd17: new FormControl(''),
  

  // Position 18
  bridgeEnclosed18: new FormControl(''),
  analogAsp18: new FormControl(''),
  wheelHouse18: new FormControl(''),
  mcr18: new FormControl(''),
  mechPort18: new FormControl(''),
  mechStbd18: new FormControl(''),
  

  // Position 19
  bridgeEnclosed19: new FormControl(''),
  analogAsp19: new FormControl(''),
  wheelHouse19: new FormControl(''),
  mcr19: new FormControl(''),
  mechPort19: new FormControl(''),
  mechStbd19: new FormControl(''),
  

  // Position 20
  bridgeEnclosed20: new FormControl(''),
  analogAsp20: new FormControl(''),
  wheelHouse20: new FormControl(''),
  mcr20: new FormControl(''),
  mechPort20: new FormControl(''),
  mechStbd20: new FormControl(''),
  

  // Position 21
  bridgeEnclosed21: new FormControl(''),
  analogAsp21: new FormControl(''),
  wheelHouse21: new FormControl(''),
  mcr21: new FormControl(''),
  mechPort21: new FormControl(''),
  mechStbd21: new FormControl(''),
  

  // Position 22
  bridgeEnclosed22: new FormControl(''),
  analogAsp22: new FormControl(''),
  wheelHouse22: new FormControl(''),
  mcr22: new FormControl(''),
  mechPort22: new FormControl(''),
  mechStbd22: new FormControl(''),
  

  // Position 23
  bridgeEnclosed23: new FormControl(''),
  analogAsp23: new FormControl(''),
  wheelHouse23: new FormControl(''),
  mcr23: new FormControl(''),
  mechPort23: new FormControl(''),
  mechStbd23: new FormControl(''),
  

  // Position 24
  bridgeEnclosed24: new FormControl(''),
  analogAsp24: new FormControl(''),
  wheelHouse24: new FormControl(''),
  mcr24: new FormControl(''),
  mechPort24: new FormControl(''),
  mechStbd24: new FormControl(''),
  

  // Position 25
  bridgeEnclosed25: new FormControl(''),
  analogAsp25: new FormControl(''),
  wheelHouse25: new FormControl(''),
  mcr25: new FormControl(''),
  mechPort25: new FormControl(''),
  mechStbd25: new FormControl(''),
  

  // Position 26
  bridgeEnclosed26: new FormControl(''),
  analogAsp26: new FormControl(''),
  wheelHouse26: new FormControl(''),
  mcr26: new FormControl(''),
  mechPort26: new FormControl(''),
  mechStbd26: new FormControl(''),
  

  // Position 27
  bridgeEnclosed27: new FormControl(''),
  analogAsp27: new FormControl(''),
  wheelHouse27: new FormControl(''),
  mcr27: new FormControl(''),
  mechPort27: new FormControl(''),
  mechStbd27: new FormControl(''),
  

  // Position 28
  bridgeEnclosed28: new FormControl(''),
  analogAsp28: new FormControl(''),
  wheelHouse28: new FormControl(''),
  mcr28: new FormControl(''),
  mechPort28: new FormControl(''),
  mechStbd28: new FormControl(''),
// 29 to 57


      // 29
      bridgeEnclosed29: new FormControl(''),
      analogAsp29: new FormControl(''),
      wheelHouse29: new FormControl(''),
      mcr29: new FormControl(''),
      mechPort29: new FormControl(''),
      mechStbd29: new FormControl(''),

      // 30
      bridgeEnclosed30: new FormControl(''),
      analogAsp30: new FormControl(''),
      wheelHouse30: new FormControl(''),
      mcr30: new FormControl(''),
      mechPort30: new FormControl(''),
      mechStbd30: new FormControl(''),

      // 31
      bridgeEnclosed31: new FormControl(''),
      analogAsp31: new FormControl(''),
      wheelHouse31: new FormControl(''),
      mcr31: new FormControl(''),
      mechPort31: new FormControl(''),
      mechStbd31: new FormControl(''),

      // 32
      bridgeEnclosed32: new FormControl(''),
      analogAsp32: new FormControl(''),
      wheelHouse32: new FormControl(''),
      mcr32: new FormControl(''),
      mechPort32: new FormControl(''),
      mechStbd32: new FormControl(''),

      // 33
      bridgeEnclosed33: new FormControl(''),
      analogAsp33: new FormControl(''),
      wheelHouse33: new FormControl(''),
      mcr33: new FormControl(''),
      mechPort33: new FormControl(''),
      mechStbd33: new FormControl(''),

      // 34
      bridgeEnclosed34: new FormControl(''),
      analogAsp34: new FormControl(''),
      wheelHouse34: new FormControl(''),
      mcr34: new FormControl(''),
      mechPort34: new FormControl(''),
      mechStbd34: new FormControl(''),

      // 35
      bridgeEnclosed35: new FormControl(''),
      analogAsp35: new FormControl(''),
      wheelHouse35: new FormControl(''),
      mcr35: new FormControl(''),
      mechPort35: new FormControl(''),
      mechStbd35: new FormControl(''),

      // 36
      bridgeEnclosed36: new FormControl(''),
      analogAsp36: new FormControl(''),
      wheelHouse36: new FormControl(''),
      mcr36: new FormControl(''),
      mechPort36: new FormControl(''),
      mechStbd36: new FormControl(''),

      // 37
      bridgeEnclosed37: new FormControl(''),
      analogAsp37: new FormControl(''),
      wheelHouse37: new FormControl(''),
      mcr37: new FormControl(''),
      mechPort37: new FormControl(''),
      mechStbd37: new FormControl(''),

      // 38
      bridgeEnclosed38: new FormControl(''),
      analogAsp38: new FormControl(''),
      wheelHouse38: new FormControl(''),
      mcr38: new FormControl(''),
      mechPort38: new FormControl(''),
      mechStbd38: new FormControl(''),

      // 39
      bridgeEnclosed39: new FormControl(''),
      analogAsp39: new FormControl(''),
      wheelHouse39: new FormControl(''),
      mcr39: new FormControl(''),
      mechPort39: new FormControl(''),
      mechStbd39: new FormControl(''),

      // 40
      bridgeEnclosed40: new FormControl(''),
      analogAsp40: new FormControl(''),
      wheelHouse40: new FormControl(''),
      mcr40: new FormControl(''),
      mechPort40: new FormControl(''),
      mechStbd40: new FormControl(''),

      // 41
      bridgeEnclosed41: new FormControl(''),
      analogAsp41: new FormControl(''),
      wheelHouse41: new FormControl(''),
      mcr41: new FormControl(''),
      mechPort41: new FormControl(''),
      mechStbd41: new FormControl(''),

      // 42
      bridgeEnclosed42: new FormControl(''),
      analogAsp42: new FormControl(''),
      wheelHouse42: new FormControl(''),
      mcr42: new FormControl(''),
      mechPort42: new FormControl(''),
      mechStbd42: new FormControl(''),

      // 43
      bridgeEnclosed43: new FormControl(''),
      analogAsp43: new FormControl(''),
      wheelHouse43: new FormControl(''),
      mcr43: new FormControl(''),
      mechPort43: new FormControl(''),
      mechStbd43: new FormControl(''),

      // 44
      bridgeEnclosed44: new FormControl(''),
      analogAsp44: new FormControl(''),
      wheelHouse44: new FormControl(''),
      mcr44: new FormControl(''),
      mechPort44: new FormControl(''),
      mechStbd44: new FormControl(''),

      // 45
      bridgeEnclosed45: new FormControl(''),
      analogAsp45: new FormControl(''),
      wheelHouse45: new FormControl(''),
      mcr45: new FormControl(''),
      mechPort45: new FormControl(''),
      mechStbd45: new FormControl(''),

      // 46
      bridgeEnclosed46: new FormControl(''),
      analogAsp46: new FormControl(''),
      wheelHouse46: new FormControl(''),
      mcr46: new FormControl(''),
      mechPort46: new FormControl(''),
      mechStbd46: new FormControl(''),

      // 47
      bridgeEnclosed47: new FormControl(''),
      analogAsp47: new FormControl(''),
      wheelHouse47: new FormControl(''),
      mcr47: new FormControl(''),
      mechPort47: new FormControl(''),
      mechStbd47: new FormControl(''),

      // 48
      bridgeEnclosed48: new FormControl(''),
      analogAsp48: new FormControl(''),
      wheelHouse48: new FormControl(''),
      mcr48: new FormControl(''),
      mechPort48: new FormControl(''),
      mechStbd48: new FormControl(''),

      // 49
      bridgeEnclosed49: new FormControl(''),
      analogAsp49: new FormControl(''),
      wheelHouse49: new FormControl(''),
      mcr49: new FormControl(''),
      mechPort49: new FormControl(''),
      mechStbd49: new FormControl(''),

      // 50
      bridgeEnclosed50: new FormControl(''),
      analogAsp50: new FormControl(''),
      wheelHouse50: new FormControl(''),
      mcr50: new FormControl(''),
      mechPort50: new FormControl(''),
      mechStbd50: new FormControl(''),

      // 51
      bridgeEnclosed51: new FormControl(''),
      analogAsp51: new FormControl(''),
      wheelHouse51: new FormControl(''),
      mcr51: new FormControl(''),
      mechPort51: new FormControl(''),
      mechStbd51: new FormControl(''),

      // 52
      bridgeEnclosed52: new FormControl(''),
      analogAsp52: new FormControl(''),
      wheelHouse52: new FormControl(''),
      mcr52: new FormControl(''),
      mechPort52: new FormControl(''),
      mechStbd52: new FormControl(''),

      // 53
      bridgeEnclosed53: new FormControl(''),
      analogAsp53: new FormControl(''),
      wheelHouse53: new FormControl(''),
      mcr53: new FormControl(''),
      mechPort53: new FormControl(''),
      mechStbd53: new FormControl(''),

      // 54
      bridgeEnclosed54: new FormControl(''),
      analogAsp54: new FormControl(''),
      wheelHouse54: new FormControl(''),
      mcr54: new FormControl(''),
      mechPort54: new FormControl(''),
      mechStbd54: new FormControl(''),

      // 55
      bridgeEnclosed55: new FormControl(''),
      analogAsp55: new FormControl(''),
      wheelHouse55: new FormControl(''),
      mcr55: new FormControl(''),
      mechPort55: new FormControl(''),
      mechStbd55: new FormControl(''),

      // 56
      bridgeEnclosed56: new FormControl(''),
      analogAsp56: new FormControl(''),
      wheelHouse56: new FormControl(''),
      mcr56: new FormControl(''),
      mechPort56: new FormControl(''),
      mechStbd56: new FormControl(''),

      // 57
      bridgeEnclosed57: new FormControl(''),
      analogAsp57: new FormControl(''),
      wheelHouse57: new FormControl(''),
      mcr57: new FormControl(''),
      mechPort57: new FormControl(''),
      mechStbd57: new FormControl(''),



   // row 58 - MIDSHIP
      bridgeEnclosed58: new FormControl(''),
      analogAsp58: new FormControl(''),
      wheelHouse58: new FormControl(''),
      mcr58: new FormControl(''),
      mechPort58: new FormControl(''),
      mechStbd58: new FormControl(''),

      // row 59 - 5° PORT
      bridgeEnclosed59: new FormControl(''),
      analogAsp59: new FormControl(''),
      wheelHouse59: new FormControl(''),
      mcr59: new FormControl(''),
      mechPort59: new FormControl(''),
      mechStbd59: new FormControl(''),

      // row 60 - 10°
      bridgeEnclosed60: new FormControl(''),
      analogAsp60: new FormControl(''),
      wheelHouse60: new FormControl(''),
      mcr60: new FormControl(''),
      mechPort60: new FormControl(''),
      mechStbd60: new FormControl(''),

      // row 61 - 15°
      bridgeEnclosed61: new FormControl(''),
      analogAsp61: new FormControl(''),
      wheelHouse61: new FormControl(''),
      mcr61: new FormControl(''),
      mechPort61: new FormControl(''),
      mechStbd61: new FormControl(''),

      // row 62 - 20°
      bridgeEnclosed62: new FormControl(''),
      analogAsp62: new FormControl(''),
      wheelHouse62: new FormControl(''),
      mcr62: new FormControl(''),
      mechPort62: new FormControl(''),
      mechStbd62: new FormControl(''),

      // row 63 - 25°
      bridgeEnclosed63: new FormControl(''),
      analogAsp63: new FormControl(''),
      wheelHouse63: new FormControl(''),
      mcr63: new FormControl(''),
      mechPort63: new FormControl(''),
      mechStbd63: new FormControl(''),

      // row 64 - 30°
      bridgeEnclosed64: new FormControl(''),
      analogAsp64: new FormControl(''),
      wheelHouse64: new FormControl(''),
      mcr64: new FormControl(''),
      mechPort64: new FormControl(''),
      mechStbd64: new FormControl(''),

      // row 65 - 35°
      bridgeEnclosed65: new FormControl(''),
      analogAsp65: new FormControl(''),
      wheelHouse65: new FormControl(''),
      mcr65: new FormControl(''),
      mechPort65: new FormControl(''),
      mechStbd65: new FormControl(''),

      // row 66 - 30° (second 30° row)
      bridgeEnclosed66: new FormControl(''),
      analogAsp66: new FormControl(''),
      wheelHouse66: new FormControl(''),
      mcr66: new FormControl(''),
      mechPort66: new FormControl(''),
      mechStbd66: new FormControl(''),

      // row 67 - 25° (second 25° row)
      bridgeEnclosed67: new FormControl(''),
      analogAsp67: new FormControl(''),
      wheelHouse67: new FormControl(''),
      mcr67: new FormControl(''),
      mechPort67: new FormControl(''),
      mechStbd67: new FormControl(''),

      // row 68 - 20° (second 20° row)
      bridgeEnclosed68: new FormControl(''),
      analogAsp68: new FormControl(''),
      wheelHouse68: new FormControl(''),
      mcr68: new FormControl(''),
      mechPort68: new FormControl(''),
      mechStbd68: new FormControl(''),

      // row 69 - 15° (second 15° row)
      bridgeEnclosed69: new FormControl(''),
      analogAsp69: new FormControl(''),
      wheelHouse69: new FormControl(''),
      mcr69: new FormControl(''),
      mechPort69: new FormControl(''),
      mechStbd69: new FormControl(''),

      // row 70 - 10° (second 10° row)
      bridgeEnclosed70: new FormControl(''),
      analogAsp70: new FormControl(''),
      wheelHouse70: new FormControl(''),
      mcr70: new FormControl(''),
      mechPort70: new FormControl(''),
      mechStbd70: new FormControl(''),

      // row 71 - 5° (second 5° row)
      bridgeEnclosed71: new FormControl(''),
      analogAsp71: new FormControl(''),
      wheelHouse71: new FormControl(''),
      mcr71: new FormControl(''),
      mechPort71: new FormControl(''),
      mechStbd71: new FormControl(''),

      // row 72 - MIDSHIP (second MIDSHIP row)
      bridgeEnclosed72: new FormControl(''),
      analogAsp72: new FormControl(''),
      wheelHouse72: new FormControl(''),
      mcr72: new FormControl(''),
      mechPort72: new FormControl(''),
      mechStbd72: new FormControl(''),

      // row 73 - 5° STBD
      bridgeEnclosed73: new FormControl(''),
      analogAsp73: new FormControl(''),
      wheelHouse73: new FormControl(''),
      mcr73: new FormControl(''),
      mechPort73: new FormControl(''),
      mechStbd73: new FormControl(''),

      // row 74 - 10° (third 10° row)
      bridgeEnclosed74: new FormControl(''),
      analogAsp74: new FormControl(''),
      wheelHouse74: new FormControl(''),
      mcr74: new FormControl(''),
      mechPort74: new FormControl(''),
      mechStbd74: new FormControl(''),

      // row 75 - 15° (third 15° row)
      bridgeEnclosed75: new FormControl(''),
      analogAsp75: new FormControl(''),
      wheelHouse75: new FormControl(''),
      mcr75: new FormControl(''),
      mechPort75: new FormControl(''),
      mechStbd75: new FormControl(''),

      // row 76 - 20° (third 20° row)
      bridgeEnclosed76: new FormControl(''),
      analogAsp76: new FormControl(''),
      wheelHouse76: new FormControl(''),
      mcr76: new FormControl(''),
      mechPort76: new FormControl(''),
      mechStbd76: new FormControl(''),

      // row 77 - 25° (third 25° row)
      bridgeEnclosed77: new FormControl(''),
      analogAsp77: new FormControl(''),
      wheelHouse77: new FormControl(''),
      mcr77: new FormControl(''),
      mechPort77: new FormControl(''),
      mechStbd77: new FormControl(''),

      // row 78 - 30° (third 30° row)
      bridgeEnclosed78: new FormControl(''),
      analogAsp78: new FormControl(''),
      wheelHouse78: new FormControl(''),
      mcr78: new FormControl(''),
      mechPort78: new FormControl(''),
      mechStbd78: new FormControl(''),

      // row 79 - 35° (second 35° row)
      bridgeEnclosed79: new FormControl(''),
      analogAsp79: new FormControl(''),
      wheelHouse79: new FormControl(''),
      mcr79: new FormControl(''),
      mechPort79: new FormControl(''),
      mechStbd79: new FormControl(''),


      bridgeEnclosed80: new FormControl(''),
      analogAsp80: new FormControl(''),
      wheelHouse80: new FormControl(''),
      mcr80: new FormControl(''),
      mechPort80: new FormControl(''),
      mechStbd80: new FormControl(''),

      bridgeEnclosed81: new FormControl(''),
      analogAsp81: new FormControl(''),
      wheelHouse81: new FormControl(''),
      mcr81: new FormControl(''),
      mechPort81: new FormControl(''),
      mechStbd81: new FormControl(''),

      bridgeEnclosed82: new FormControl(''),
      analogAsp82: new FormControl(''),
      wheelHouse82: new FormControl(''),
      mcr82: new FormControl(''),
      mechPort82: new FormControl(''),
      mechStbd82: new FormControl(''),

      bridgeEnclosed83: new FormControl(''),
      analogAsp83: new FormControl(''),
      wheelHouse83: new FormControl(''),
      mcr83: new FormControl(''),
      mechPort83: new FormControl(''),
      mechStbd83: new FormControl(''),

      bridgeEnclosed84: new FormControl(''),
      analogAsp84: new FormControl(''),
      wheelHouse84: new FormControl(''),
      mcr84: new FormControl(''),
      mechPort84: new FormControl(''),
      mechStbd84: new FormControl(''),

      bridgeEnclosed85: new FormControl(''),
      analogAsp85: new FormControl(''),
      wheelHouse85: new FormControl(''),
      mcr85: new FormControl(''),
      mechPort85: new FormControl(''),
      mechStbd85: new FormControl(''),

      bridgeEnclosed86: new FormControl(''),
      analogAsp86: new FormControl(''),
      wheelHouse86: new FormControl(''),
      mcr86: new FormControl(''),
      mechPort86: new FormControl(''),
      mechStbd86: new FormControl(''),



      bridgeEnclosed87: new FormControl(''),
      analogAsp87: new FormControl(''),
      wheelHouse87: new FormControl(''),
      mcr87: new FormControl(''),
      mechPort87: new FormControl(''),
      mechStbd87: new FormControl(''),

      bridgeEnclosed88: new FormControl(''),
      analogAsp88: new FormControl(''),
      wheelHouse88: new FormControl(''),
      mcr88: new FormControl(''),
      mechPort88: new FormControl(''),
      mechStbd88: new FormControl(''),

      bridgeEnclosed89: new FormControl(''),
      analogAsp89: new FormControl(''),
      wheelHouse89: new FormControl(''),
      mcr89: new FormControl(''),
      mechPort89: new FormControl(''),
      mechStbd89: new FormControl(''),

      bridgeEnclosed90: new FormControl(''),
      analogAsp90: new FormControl(''),
      wheelHouse90: new FormControl(''),
      mcr90: new FormControl(''),
      mechPort90: new FormControl(''),
      mechStbd90: new FormControl(''),

      bridgeEnclosed91: new FormControl(''),
      analogAsp91: new FormControl(''),
      wheelHouse91: new FormControl(''),
      mcr91: new FormControl(''),
      mechPort91: new FormControl(''),
      mechStbd91: new FormControl(''),

      bridgeEnclosed92: new FormControl(''),
      analogAsp92: new FormControl(''),
      wheelHouse92: new FormControl(''),
      mcr92: new FormControl(''),
      mechPort92: new FormControl(''),
      mechStbd92: new FormControl(''),

      bridgeEnclosed93: new FormControl(''),
      analogAsp93: new FormControl(''),
      wheelHouse93: new FormControl(''),
      mcr93: new FormControl(''),
      mechPort93: new FormControl(''),
      mechStbd93: new FormControl(''),

      bridgeEnclosed94: new FormControl(''),
      analogAsp94: new FormControl(''),
      wheelHouse94: new FormControl(''),
      mcr94: new FormControl(''),
      mechPort94: new FormControl(''),
      mechStbd94: new FormControl(''),

      bridgeEnclosed95: new FormControl(''),
      analogAsp95: new FormControl(''),
      wheelHouse95: new FormControl(''),
      mcr95: new FormControl(''),
      mechPort95: new FormControl(''),
      mechStbd95: new FormControl(''),

      bridgeEnclosed96: new FormControl(''),
      analogAsp96: new FormControl(''),
      wheelHouse96: new FormControl(''),
      mcr96: new FormControl(''),
      mechPort96: new FormControl(''),
      mechStbd96: new FormControl(''),

      bridgeEnclosed97: new FormControl(''),
      analogAsp97: new FormControl(''),
      wheelHouse97: new FormControl(''),
      mcr97: new FormControl(''),
      mechPort97: new FormControl(''),
      mechStbd97: new FormControl(''),

      bridgeEnclosed98: new FormControl(''),
      analogAsp98: new FormControl(''),
      wheelHouse98: new FormControl(''),
      mcr98: new FormControl(''),
      mechPort98: new FormControl(''),
      mechStbd98: new FormControl(''),

      bridgeEnclosed99: new FormControl(''),
      analogAsp99: new FormControl(''),
      wheelHouse99: new FormControl(''),
      mcr99: new FormControl(''),
      mechPort99: new FormControl(''),
      mechStbd99: new FormControl(''),

      bridgeEnclosed100: new FormControl(''),
      analogAsp100: new FormControl(''),
      wheelHouse100: new FormControl(''),
      mcr100: new FormControl(''),
      mechPort100: new FormControl(''),
      mechStbd100: new FormControl(''),

      bridgeEnclosed101: new FormControl(''),
      analogAsp101: new FormControl(''),
      wheelHouse101: new FormControl(''),
      mcr101: new FormControl(''),
      mechPort101: new FormControl(''),
      mechStbd101: new FormControl(''),

      bridgeEnclosed102: new FormControl(''),
      analogAsp102: new FormControl(''),
      wheelHouse102: new FormControl(''),
      mcr102: new FormControl(''),
      mechPort102: new FormControl(''),
      mechStbd102: new FormControl(''),

      bridgeEnclosed103: new FormControl(''),
      analogAsp103: new FormControl(''),
      wheelHouse103: new FormControl(''),
      mcr103: new FormControl(''),
      mechPort103: new FormControl(''),
      mechStbd103: new FormControl(''),

      bridgeEnclosed104: new FormControl(''),
      analogAsp104: new FormControl(''),
      wheelHouse104: new FormControl(''),
      mcr104: new FormControl(''),
      mechPort104: new FormControl(''),
      mechStbd104: new FormControl(''),

      bridgeEnclosed105: new FormControl(''),
      analogAsp105: new FormControl(''),
      wheelHouse105: new FormControl(''),
      mcr105: new FormControl(''),
      mechPort105: new FormControl(''),
      mechStbd105: new FormControl(''),

      bridgeEnclosed106: new FormControl(''),
      analogAsp106: new FormControl(''),
      wheelHouse106: new FormControl(''),
      mcr106: new FormControl(''),
      mechPort106: new FormControl(''),
      mechStbd106: new FormControl(''),

      bridgeEnclosed107: new FormControl(''),
      analogAsp107: new FormControl(''),
      wheelHouse107: new FormControl(''),
      mcr107: new FormControl(''),
      mechPort107: new FormControl(''),
      mechStbd107: new FormControl(''),

      bridgeEnclosed108: new FormControl(''),
      analogAsp108: new FormControl(''),
      wheelHouse108: new FormControl(''),
      mcr108: new FormControl(''),
      mechPort108: new FormControl(''),
      mechStbd108: new FormControl(''),

      bridgeEnclosed109: new FormControl(''),
      analogAsp109: new FormControl(''),
      wheelHouse109: new FormControl(''),
      mcr109: new FormControl(''),
      mechPort109: new FormControl(''),
      mechStbd109: new FormControl(''),

      bridgeEnclosed110: new FormControl(''),
      analogAsp110: new FormControl(''),
      wheelHouse110: new FormControl(''),
      mcr110: new FormControl(''),
      mechPort110: new FormControl(''),
      mechStbd110: new FormControl(''),

      bridgeEnclosed111: new FormControl(''),
      analogAsp111: new FormControl(''),
      wheelHouse111: new FormControl(''),
      mcr111: new FormControl(''),
      mechPort111: new FormControl(''),
      mechStbd111: new FormControl(''),

      bridgeEnclosed112: new FormControl(''),
      analogAsp112: new FormControl(''),
      wheelHouse112: new FormControl(''),
      mcr112: new FormControl(''),
      mechPort112: new FormControl(''),
      mechStbd112: new FormControl(''),

      bridgeEnclosed113: new FormControl(''),
      analogAsp113: new FormControl(''),
      wheelHouse113: new FormControl(''),
      mcr113: new FormControl(''),
      mechPort113: new FormControl(''),
      mechStbd113: new FormControl(''),

      bridgeEnclosed114: new FormControl(''),
      analogAsp114: new FormControl(''),
      wheelHouse114: new FormControl(''),
      mcr114: new FormControl(''),
      mechPort114: new FormControl(''),
      mechStbd114: new FormControl(''),

      bridgeEnclosed115: new FormControl(''),
      analogAsp115: new FormControl(''),
      wheelHouse115: new FormControl(''),
      mcr115: new FormControl(''),
      mechPort115: new FormControl(''),
      mechStbd115: new FormControl(''),

      zeroToTenPort116: new FormControl(''),
      tenPortToTenStbd116: new FormControl(''),
      tenStbdToZero116: new FormControl(''),
    });

  }
  onSubmit() {
  console.log(this.WheelPortNFUForm.value);  // { name: '...', email: '...', age: '...' }
}
}
