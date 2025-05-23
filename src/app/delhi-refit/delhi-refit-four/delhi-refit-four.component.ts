import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

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
// 29 to 57


      // 29
      bridgeEnclosed29: [''],
      analogAsp29: [''],
      wheelHouse29: [''],
      mcr29: [''],
      mechPort29: [''],
      mechStbd29: [''],

      // 30
      bridgeEnclosed30: [''],
      analogAsp30: [''],
      wheelHouse30: [''],
      mcr30: [''],
      mechPort30: [''],
      mechStbd30: [''],

      // 31
      bridgeEnclosed31: [''],
      analogAsp31: [''],
      wheelHouse31: [''],
      mcr31: [''],
      mechPort31: [''],
      mechStbd31: [''],

      // 32
      bridgeEnclosed32: [''],
      analogAsp32: [''],
      wheelHouse32: [''],
      mcr32: [''],
      mechPort32: [''],
      mechStbd32: [''],

      // 33
      bridgeEnclosed33: [''],
      analogAsp33: [''],
      wheelHouse33: [''],
      mcr33: [''],
      mechPort33: [''],
      mechStbd33: [''],

      // 34
      bridgeEnclosed34: [''],
      analogAsp34: [''],
      wheelHouse34: [''],
      mcr34: [''],
      mechPort34: [''],
      mechStbd34: [''],

      // 35
      bridgeEnclosed35: [''],
      analogAsp35: [''],
      wheelHouse35: [''],
      mcr35: [''],
      mechPort35: [''],
      mechStbd35: [''],

      // 36
      bridgeEnclosed36: [''],
      analogAsp36: [''],
      wheelHouse36: [''],
      mcr36: [''],
      mechPort36: [''],
      mechStbd36: [''],

      // 37
      bridgeEnclosed37: [''],
      analogAsp37: [''],
      wheelHouse37: [''],
      mcr37: [''],
      mechPort37: [''],
      mechStbd37: [''],

      // 38
      bridgeEnclosed38: [''],
      analogAsp38: [''],
      wheelHouse38: [''],
      mcr38: [''],
      mechPort38: [''],
      mechStbd38: [''],

      // 39
      bridgeEnclosed39: [''],
      analogAsp39: [''],
      wheelHouse39: [''],
      mcr39: [''],
      mechPort39: [''],
      mechStbd39: [''],

      // 40
      bridgeEnclosed40: [''],
      analogAsp40: [''],
      wheelHouse40: [''],
      mcr40: [''],
      mechPort40: [''],
      mechStbd40: [''],

      // 41
      bridgeEnclosed41: [''],
      analogAsp41: [''],
      wheelHouse41: [''],
      mcr41: [''],
      mechPort41: [''],
      mechStbd41: [''],

      // 42
      bridgeEnclosed42: [''],
      analogAsp42: [''],
      wheelHouse42: [''],
      mcr42: [''],
      mechPort42: [''],
      mechStbd42: [''],

      // 43
      bridgeEnclosed43: [''],
      analogAsp43: [''],
      wheelHouse43: [''],
      mcr43: [''],
      mechPort43: [''],
      mechStbd43: [''],

      // 44
      bridgeEnclosed44: [''],
      analogAsp44: [''],
      wheelHouse44: [''],
      mcr44: [''],
      mechPort44: [''],
      mechStbd44: [''],

      // 45
      bridgeEnclosed45: [''],
      analogAsp45: [''],
      wheelHouse45: [''],
      mcr45: [''],
      mechPort45: [''],
      mechStbd45: [''],

      // 46
      bridgeEnclosed46: [''],
      analogAsp46: [''],
      wheelHouse46: [''],
      mcr46: [''],
      mechPort46: [''],
      mechStbd46: [''],

      // 47
      bridgeEnclosed47: [''],
      analogAsp47: [''],
      wheelHouse47: [''],
      mcr47: [''],
      mechPort47: [''],
      mechStbd47: [''],

      // 48
      bridgeEnclosed48: [''],
      analogAsp48: [''],
      wheelHouse48: [''],
      mcr48: [''],
      mechPort48: [''],
      mechStbd48: [''],

      // 49
      bridgeEnclosed49: [''],
      analogAsp49: [''],
      wheelHouse49: [''],
      mcr49: [''],
      mechPort49: [''],
      mechStbd49: [''],

      // 50
      bridgeEnclosed50: [''],
      analogAsp50: [''],
      wheelHouse50: [''],
      mcr50: [''],
      mechPort50: [''],
      mechStbd50: [''],

      // 51
      bridgeEnclosed51: [''],
      analogAsp51: [''],
      wheelHouse51: [''],
      mcr51: [''],
      mechPort51: [''],
      mechStbd51: [''],

      // 52
      bridgeEnclosed52: [''],
      analogAsp52: [''],
      wheelHouse52: [''],
      mcr52: [''],
      mechPort52: [''],
      mechStbd52: [''],

      // 53
      bridgeEnclosed53: [''],
      analogAsp53: [''],
      wheelHouse53: [''],
      mcr53: [''],
      mechPort53: [''],
      mechStbd53: [''],

      // 54
      bridgeEnclosed54: [''],
      analogAsp54: [''],
      wheelHouse54: [''],
      mcr54: [''],
      mechPort54: [''],
      mechStbd54: [''],

      // 55
      bridgeEnclosed55: [''],
      analogAsp55: [''],
      wheelHouse55: [''],
      mcr55: [''],
      mechPort55: [''],
      mechStbd55: [''],

      // 56
      bridgeEnclosed56: [''],
      analogAsp56: [''],
      wheelHouse56: [''],
      mcr56: [''],
      mechPort56: [''],
      mechStbd56: [''],

      // 57
      bridgeEnclosed57: [''],
      analogAsp57: [''],
      wheelHouse57: [''],
      mcr57: [''],
      mechPort57: [''],
      mechStbd57: [''],



   // row 58 - MIDSHIP
      bridgeEnclosed58: [''],
      analogAsp58: [''],
      wheelHouse58: [''],
      mcr58: [''],
      mechPort58: [''],
      mechStbd58: [''],

      // row 59 - 5° PORT
      bridgeEnclosed59: [''],
      analogAsp59: [''],
      wheelHouse59: [''],
      mcr59: [''],
      mechPort59: [''],
      mechStbd59: [''],

      // row 60 - 10°
      bridgeEnclosed60: [''],
      analogAsp60: [''],
      wheelHouse60: [''],
      mcr60: [''],
      mechPort60: [''],
      mechStbd60: [''],

      // row 61 - 15°
      bridgeEnclosed61: [''],
      analogAsp61: [''],
      wheelHouse61: [''],
      mcr61: [''],
      mechPort61: [''],
      mechStbd61: [''],

      // row 62 - 20°
      bridgeEnclosed62: [''],
      analogAsp62: [''],
      wheelHouse62: [''],
      mcr62: [''],
      mechPort62: [''],
      mechStbd62: [''],

      // row 63 - 25°
      bridgeEnclosed63: [''],
      analogAsp63: [''],
      wheelHouse63: [''],
      mcr63: [''],
      mechPort63: [''],
      mechStbd63: [''],

      // row 64 - 30°
      bridgeEnclosed64: [''],
      analogAsp64: [''],
      wheelHouse64: [''],
      mcr64: [''],
      mechPort64: [''],
      mechStbd64: [''],

      // row 65 - 35°
      bridgeEnclosed65: [''],
      analogAsp65: [''],
      wheelHouse65: [''],
      mcr65: [''],
      mechPort65: [''],
      mechStbd65: [''],

      // row 66 - 30° (second 30° row)
      bridgeEnclosed66: [''],
      analogAsp66: [''],
      wheelHouse66: [''],
      mcr66: [''],
      mechPort66: [''],
      mechStbd66: [''],

      // row 67 - 25° (second 25° row)
      bridgeEnclosed67: [''],
      analogAsp67: [''],
      wheelHouse67: [''],
      mcr67: [''],
      mechPort67: [''],
      mechStbd67: [''],

      // row 68 - 20° (second 20° row)
      bridgeEnclosed68: [''],
      analogAsp68: [''],
      wheelHouse68: [''],
      mcr68: [''],
      mechPort68: [''],
      mechStbd68: [''],

      // row 69 - 15° (second 15° row)
      bridgeEnclosed69: [''],
      analogAsp69: [''],
      wheelHouse69: [''],
      mcr69: [''],
      mechPort69: [''],
      mechStbd69: [''],

      // row 70 - 10° (second 10° row)
      bridgeEnclosed70: [''],
      analogAsp70: [''],
      wheelHouse70: [''],
      mcr70: [''],
      mechPort70: [''],
      mechStbd70: [''],

      // row 71 - 5° (second 5° row)
      bridgeEnclosed71: [''],
      analogAsp71: [''],
      wheelHouse71: [''],
      mcr71: [''],
      mechPort71: [''],
      mechStbd71: [''],

      // row 72 - MIDSHIP (second MIDSHIP row)
      bridgeEnclosed72: [''],
      analogAsp72: [''],
      wheelHouse72: [''],
      mcr72: [''],
      mechPort72: [''],
      mechStbd72: [''],

      // row 73 - 5° STBD
      bridgeEnclosed73: [''],
      analogAsp73: [''],
      wheelHouse73: [''],
      mcr73: [''],
      mechPort73: [''],
      mechStbd73: [''],

      // row 74 - 10° (third 10° row)
      bridgeEnclosed74: [''],
      analogAsp74: [''],
      wheelHouse74: [''],
      mcr74: [''],
      mechPort74: [''],
      mechStbd74: [''],

      // row 75 - 15° (third 15° row)
      bridgeEnclosed75: [''],
      analogAsp75: [''],
      wheelHouse75: [''],
      mcr75: [''],
      mechPort75: [''],
      mechStbd75: [''],

      // row 76 - 20° (third 20° row)
      bridgeEnclosed76: [''],
      analogAsp76: [''],
      wheelHouse76: [''],
      mcr76: [''],
      mechPort76: [''],
      mechStbd76: [''],

      // row 77 - 25° (third 25° row)
      bridgeEnclosed77: [''],
      analogAsp77: [''],
      wheelHouse77: [''],
      mcr77: [''],
      mechPort77: [''],
      mechStbd77: [''],

      // row 78 - 30° (third 30° row)
      bridgeEnclosed78: [''],
      analogAsp78: [''],
      wheelHouse78: [''],
      mcr78: [''],
      mechPort78: [''],
      mechStbd78: [''],

      // row 79 - 35° (second 35° row)
      bridgeEnclosed79: [''],
      analogAsp79: [''],
      wheelHouse79: [''],
      mcr79: [''],
      mechPort79: [''],
      mechStbd79: [''],


      bridgeEnclosed80: [''],
      analogAsp80: [''],
      wheelHouse80: [''],
      mcr80: [''],
      mechPort80: [''],
      mechStbd80: [''],

      bridgeEnclosed81: [''],
      analogAsp81: [''],
      wheelHouse81: [''],
      mcr81: [''],
      mechPort81: [''],
      mechStbd81: [''],

      bridgeEnclosed82: [''],
      analogAsp82: [''],
      wheelHouse82: [''],
      mcr82: [''],
      mechPort82: [''],
      mechStbd82: [''],

      bridgeEnclosed83: [''],
      analogAsp83: [''],
      wheelHouse83: [''],
      mcr83: [''],
      mechPort83: [''],
      mechStbd83: [''],

      bridgeEnclosed84: [''],
      analogAsp84: [''],
      wheelHouse84: [''],
      mcr84: [''],
      mechPort84: [''],
      mechStbd84: [''],

      bridgeEnclosed85: [''],
      analogAsp85: [''],
      wheelHouse85: [''],
      mcr85: [''],
      mechPort85: [''],
      mechStbd85: [''],

      bridgeEnclosed86: [''],
      analogAsp86: [''],
      wheelHouse86: [''],
      mcr86: [''],
      mechPort86: [''],
      mechStbd86: [''],



      bridgeEnclosed87: [''],
      analogAsp87: [''],
      wheelHouse87: [''],
      mcr87: [''],
      mechPort87: [''],
      mechStbd87: [''],

      bridgeEnclosed88: [''],
      analogAsp88: [''],
      wheelHouse88: [''],
      mcr88: [''],
      mechPort88: [''],
      mechStbd88: [''],

      bridgeEnclosed89: [''],
      analogAsp89: [''],
      wheelHouse89: [''],
      mcr89: [''],
      mechPort89: [''],
      mechStbd89: [''],

      bridgeEnclosed90: [''],
      analogAsp90: [''],
      wheelHouse90: [''],
      mcr90: [''],
      mechPort90: [''],
      mechStbd90: [''],

      bridgeEnclosed91: [''],
      analogAsp91: [''],
      wheelHouse91: [''],
      mcr91: [''],
      mechPort91: [''],
      mechStbd91: [''],

      bridgeEnclosed92: [''],
      analogAsp92: [''],
      wheelHouse92: [''],
      mcr92: [''],
      mechPort92: [''],
      mechStbd92: [''],

      bridgeEnclosed93: [''],
      analogAsp93: [''],
      wheelHouse93: [''],
      mcr93: [''],
      mechPort93: [''],
      mechStbd93: [''],

      bridgeEnclosed94: [''],
      analogAsp94: [''],
      wheelHouse94: [''],
      mcr94: [''],
      mechPort94: [''],
      mechStbd94: [''],

      bridgeEnclosed95: [''],
      analogAsp95: [''],
      wheelHouse95: [''],
      mcr95: [''],
      mechPort95: [''],
      mechStbd95: [''],

      bridgeEnclosed96: [''],
      analogAsp96: [''],
      wheelHouse96: [''],
      mcr96: [''],
      mechPort96: [''],
      mechStbd96: [''],

      bridgeEnclosed97: [''],
      analogAsp97: [''],
      wheelHouse97: [''],
      mcr97: [''],
      mechPort97: [''],
      mechStbd97: [''],

      bridgeEnclosed98: [''],
      analogAsp98: [''],
      wheelHouse98: [''],
      mcr98: [''],
      mechPort98: [''],
      mechStbd98: [''],

      bridgeEnclosed99: [''],
      analogAsp99: [''],
      wheelHouse99: [''],
      mcr99: [''],
      mechPort99: [''],
      mechStbd99: [''],

      bridgeEnclosed100: [''],
      analogAsp100: [''],
      wheelHouse100: [''],
      mcr100: [''],
      mechPort100: [''],
      mechStbd100: [''],

      bridgeEnclosed101: [''],
      analogAsp101: [''],
      wheelHouse101: [''],
      mcr101: [''],
      mechPort101: [''],
      mechStbd101: [''],

      bridgeEnclosed102: [''],
      analogAsp102: [''],
      wheelHouse102: [''],
      mcr102: [''],
      mechPort102: [''],
      mechStbd102: [''],

      bridgeEnclosed103: [''],
      analogAsp103: [''],
      wheelHouse103: [''],
      mcr103: [''],
      mechPort103: [''],
      mechStbd103: [''],

      bridgeEnclosed104: [''],
      analogAsp104: [''],
      wheelHouse104: [''],
      mcr104: [''],
      mechPort104: [''],
      mechStbd104: [''],

      bridgeEnclosed105: [''],
      analogAsp105: [''],
      wheelHouse105: [''],
      mcr105: [''],
      mechPort105: [''],
      mechStbd105: [''],

      bridgeEnclosed106: [''],
      analogAsp106: [''],
      wheelHouse106: [''],
      mcr106: [''],
      mechPort106: [''],
      mechStbd106: [''],

      bridgeEnclosed107: [''],
      analogAsp107: [''],
      wheelHouse107: [''],
      mcr107: [''],
      mechPort107: [''],
      mechStbd107: [''],

      bridgeEnclosed108: [''],
      analogAsp108: [''],
      wheelHouse108: [''],
      mcr108: [''],
      mechPort108: [''],
      mechStbd108: [''],

      bridgeEnclosed109: [''],
      analogAsp109: [''],
      wheelHouse109: [''],
      mcr109: [''],
      mechPort109: [''],
      mechStbd109: [''],

      bridgeEnclosed110: [''],
      analogAsp110: [''],
      wheelHouse110: [''],
      mcr110: [''],
      mechPort110: [''],
      mechStbd110: [''],

      bridgeEnclosed111: [''],
      analogAsp111: [''],
      wheelHouse111: [''],
      mcr111: [''],
      mechPort111: [''],
      mechStbd111: [''],

      bridgeEnclosed112: [''],
      analogAsp112: [''],
      wheelHouse112: [''],
      mcr112: [''],
      mechPort112: [''],
      mechStbd112: [''],

      bridgeEnclosed113: [''],
      analogAsp113: [''],
      wheelHouse113: [''],
      mcr113: [''],
      mechPort113: [''],
      mechStbd113: [''],

      bridgeEnclosed114: [''],
      analogAsp114: [''],
      wheelHouse114: [''],
      mcr114: [''],
      mechPort114: [''],
      mechStbd114: [''],

      bridgeEnclosed115: [''],
      analogAsp115: [''],
      wheelHouse115: [''],
      mcr115: [''],
      mechPort115: [''],
      mechStbd115: [''],

      zeroToTenPort116: [''],
      tenPortToTenStbd116: [''],
      tenStbdToZero116: [''],


  channel1_port_117: [''],
  channel1_stbd_117: [''],
  channel1_both_117: [''],

  channel1_port_118: [''],
  channel1_stbd_118: [''],
  channel1_both_118: [''],

  channel2_port_119: [''],
  channel2_stbd_119: [''],
  channel2_both_119: [''],

  channel2_port_120: [''],
  channel2_stbd_120: [''],
  channel2_both_120: [''],

  channel1_port_121: [''],
  channel1_stbd_121: [''],
  channel1_both_121: [''],

  channel1_port_122: [''],
  channel1_stbd_122: [''],
  channel1_both_122: [''],

  channel2_port_123: [''],
  channel2_stbd_123: [''],
  channel2_both_123: [''],

  channel2_port_124: [''],
  channel2_stbd_124: [''],
  channel2_both_124: [''],

  channel1_port_125: [''],
  channel1_stbd_125: [''],
  channel1_both_125: [''],

  channel1_port_126: [''],
  channel1_stbd_126: [''],
  channel1_both_126: [''],

  channel1_port_127: [''],
  channel1_stbd_127: [''],
  channel1_both_127: [''],

  channel1_port_128: [''],
  channel1_stbd_128: [''],
  channel1_both_128: [''],

  channel2_port_129: [''],
  channel2_stbd_129: [''],
  channel2_both_129: [''],

  channel2_port_130: [''],
  channel2_stbd_130: [''],
  channel2_both_130: [''],

  channel1_port_131: [''],
  channel1_stbd_131: [''],
  channel1_both_131: [''],

  channel1_port_132: [''],
  channel1_stbd_132: [''],
  channel1_both_132: [''],

  channel2_port_133: [''],
  channel2_stbd_133: [''],
  channel2_both_133: [''],

  channel2_port_134: [''],
  channel2_stbd_134: [''],
  channel2_both_134: [''],

  channel1_port_135: [''],
  channel1_stbd_135: [''],
  channel1_both_135: [''],

  channel1_port_136: [''],
  channel1_stbd_136: [''],
  channel1_both_136: [''],

  channel2_port_137: [''],
  channel2_stbd_137: [''],
  channel2_both_137: [''],

  channel2_port_138: [''],
  channel2_stbd_138: [''],
  channel2_both_138: ['']
    });

  }
  onSubmit() {
  console.log(this.WheelPortNFUForm.value);  // { name: '...', email: '...', age: '...' }
}
}
