import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-delhi-refit-three',
  templateUrl: './delhi-refit-three.component.html',
  styleUrls: ['./delhi-refit-three.component.scss']
})
export class DelhiRefitThreeComponent{
 steeringForm: FormGroup;
  // bridgePortForm: FormGroup;
  // bridgeStbdForm: FormGroup;
  // WheelStbdForm: FormGroup;
  // WheelPortForm: FormGroup;
  // rudderForm!: FormGroup;
  helmPositions = ['MIDSHIP', '5° PORT', '10°', '15°'];

  constructor(private fb: FormBuilder) {

this.steeringForm = this.fb.group({
  // Local Control Panel - Port Motor
  portTime1: [''],
  portRemark1: [''],
  portTime2: [''],
  portRemark2: [''],

  // Local Control Panel - Stbd Motor
  stbdTime3: [''],
  stbdRemark3: [''],
  stbdTime4: [''],
  stbdRemark4: [''],

  // Bridge - Port Motor
  bridgePortTime5: [''],
  bridgePortRemark5: [''],
  bridgePortTime6: [''],
  bridgePortRemark6: [''],

  // Bridge - Stbd Motor
  bridgeStbdTime7: [''],
  bridgeStbdRemark7: [''],
  bridgeStbdTime8: [''],
  bridgeStbdRemark8: [''],

  // Bridge - Both Pumps
  bridgeBothTime9: [''],
  bridgeBothRemark9: [''],
  bridgeBothTime10: [''],
  bridgeBothRemark10: [''],

  // Wheel House - Port Motor
  bridgePortTime11: [''],
  bridgePortRemark11: [''],
  bridgePortTime12: [''],
  bridgePortRemark12: [''],

  // Wheel House - Stbd Motor
  bridgeStbdTime13: [''],
  bridgeStbdRemark13: [''],
  bridgeStbdTime14: [''],
  bridgeStbdRemark14: [''],

  // Wheel House - Both Pumps
  bridgeBothTime15: [''],
  bridgeBothRemark15: [''],
  bridgeBothTime16: [''],
  bridgeBothRemark16: [''],

  // Positional Checks (17-45)
  bridgeEnclosed17: [''],
  analogAsp17: [''],
  wheelHouse17: [''],
  mcr17: [''],
  mechPort17: [''],
  mechStbd17: [''],
  remarks17: [''],

  bridgeEnclosed18: [''],
  analogAsp18: [''],
  wheelHouse18: [''],
  mcr18: [''],
  mechPort18: [''],
  mechStbd18: [''],
  remarks18: [''],

  // Continue this pattern up to 45...
  bridgeEnclosed19: [''],
  analogAsp19: [''],
  wheelHouse19: [''],
  mcr19: [''],
  mechPort19: [''],
  mechStbd19: [''],
  remarks19: [''],


  bridgeEnclosed20: [''],
  analogAsp20: [''],
  wheelHouse20: [''],
  mcr20: [''],
  mechPort20: [''],
  mechStbd20: [''],
  remarks20: [''],

  // ... (continuing the same pattern for 21-44)
    // Positional Checks (21-44)
  bridgeEnclosed21: [''],
  analogAsp21: [''],
  wheelHouse21: [''],
  mcr21: [''],
  mechPort21: [''],
  mechStbd21: [''],
  remarks21: [''],

  bridgeEnclosed22: [''],
  analogAsp22: [''],
  wheelHouse22: [''],
  mcr22: [''],
  mechPort22: [''],
  mechStbd22: [''],
  remarks22: [''],

  bridgeEnclosed23: [''],
  analogAsp23: [''],
  wheelHouse23: [''],
  mcr23: [''],
  mechPort23: [''],
  mechStbd23: [''],
  remarks23: [''],

  bridgeEnclosed24: [''],
  analogAsp24: [''],
  wheelHouse24: [''],
  mcr24: [''],
  mechPort24: [''],
  mechStbd24: [''],
  remarks24: [''],

  bridgeEnclosed25: [''],
  analogAsp25: [''],
  wheelHouse25: [''],
  mcr25: [''],
  mechPort25: [''],
  mechStbd25: [''],
  remarks25: [''],

  bridgeEnclosed26: [''],
  analogAsp26: [''],
  wheelHouse26: [''],
  mcr26: [''],
  mechPort26: [''],
  mechStbd26: [''],
  remarks26: [''],

  bridgeEnclosed27: [''],
  analogAsp27: [''],
  wheelHouse27: [''],
  mcr27: [''],
  mechPort27: [''],
  mechStbd27: [''],
  remarks27: [''],

  bridgeEnclosed28: [''],
  analogAsp28: [''],
  wheelHouse28: [''],
  mcr28: [''],
  mechPort28: [''],
  mechStbd28: [''],
  remarks28: [''],

  bridgeEnclosed29: [''],
  analogAsp29: [''],
  wheelHouse29: [''],
  mcr29: [''],
  mechPort29: [''],
  mechStbd29: [''],
  remarks29: [''],

  bridgeEnclosed30: [''],
  analogAsp30: [''],
  wheelHouse30: [''],
  mcr30: [''],
  mechPort30: [''],
  mechStbd30: [''],
  remarks30: [''],

  bridgeEnclosed31: [''],
  analogAsp31: [''],
  wheelHouse31: [''],
  mcr31: [''],
  mechPort31: [''],
  mechStbd31: [''],
  remarks31: [''],

  bridgeEnclosed32: [''],
  analogAsp32: [''],
  wheelHouse32: [''],
  mcr32: [''],
  mechPort32: [''],
  mechStbd32: [''],
  remarks32: [''],

  bridgeEnclosed33: [''],
  analogAsp33: [''],
  wheelHouse33: [''],
  mcr33: [''],
  mechPort33: [''],
  mechStbd33: [''],
  remarks33: [''],

  bridgeEnclosed34: [''],
  analogAsp34: [''],
  wheelHouse34: [''],
  mcr34: [''],
  mechPort34: [''],
  mechStbd34: [''],
  remarks34: [''],

  bridgeEnclosed35: [''],
  analogAsp35: [''],
  wheelHouse35: [''],
  mcr35: [''],
  mechPort35: [''],
  mechStbd35: [''],
  remarks35: [''],

  bridgeEnclosed36: [''],
  analogAsp36: [''],
  wheelHouse36: [''],
  mcr36: [''],
  mechPort36: [''],
  mechStbd36: [''],
  remarks36: [''],

  bridgeEnclosed37: [''],
  analogAsp37: [''],
  wheelHouse37: [''],
  mcr37: [''],
  mechPort37: [''],
  mechStbd37: [''],
  remarks37: [''],

  bridgeEnclosed38: [''],
  analogAsp38: [''],
  wheelHouse38: [''],
  mcr38: [''],
  mechPort38: [''],
  mechStbd38: [''],
  remarks38: [''],

  bridgeEnclosed39: [''],
  analogAsp39: [''],
  wheelHouse39: [''],
  mcr39: [''],
  mechPort39: [''],
  mechStbd39: [''],
  remarks39: [''],

  bridgeEnclosed40: [''],
  analogAsp40: [''],
  wheelHouse40: [''],
  mcr40: [''],
  mechPort40: [''],
  mechStbd40: [''],
  remarks40: [''],

  bridgeEnclosed41: [''],
  analogAsp41: [''],
  wheelHouse41: [''],
  mcr41: [''],
  mechPort41: [''],
  mechStbd41: [''],
  remarks41: [''],

  bridgeEnclosed42: [''],
  analogAsp42: [''],
  wheelHouse42: [''],
  mcr42: [''],
  mechPort42: [''],
  mechStbd42: [''],
  remarks42: [''],

  bridgeEnclosed43: [''],
  analogAsp43: [''],
  wheelHouse43: [''],
  mcr43: [''],
  mechPort43: [''],
  mechStbd43: [''],
  remarks43: [''],

  bridgeEnclosed44: [''],
  analogAsp44: [''],
  wheelHouse44: [''],
  mcr44: [''],
  mechPort44: [''],
  mechStbd44: [''],
  remarks44: [''],

  bridgeEnclosed45: [''],
  analogAsp45: [''],
  wheelHouse45: [''],
  mcr45: [''],
  mechPort45: [''],
  mechStbd45: [''],
  remarks45: [''],

    // === 46 ===
  bridgeEnclosed46: [''],
  analogAsp46: [''],
  wheelHouse46: [''],
  mcr46: [''],
  mechPort46: [''],
  mechStbd46: [''],
  remarks46: [''],

  // === 47 ===
  bridgeEnclosed47: [''],
  analogAsp47: [''],
  wheelHouse47: [''],
  mcr47: [''],
  mechPort47: [''],
  mechStbd47: [''],
  remarks47: [''],

  // === 48 ===
  bridgeEnclosed48: [''],
  analogAsp48: [''],
  wheelHouse48: [''],
  mcr48: [''],
  mechPort48: [''],
  mechStbd48: [''],
  remarks48: [''],

  // === 49 ===
  bridgeEnclosed49: [''],
  analogAsp49: [''],
  wheelHouse49: [''],
  mcr49: [''],
  mechPort49: [''],
  mechStbd49: [''],
  remarks49: [''],

  // === 50 ===
  bridgeEnclosed50: [''],
  analogAsp50: [''],
  wheelHouse50: [''],
  mcr50: [''],
  mechPort50: [''],
  mechStbd50: [''],
  remarks50: [''],

  // === 51 ===
  bridgeEnclosed51: [''],
  analogAsp51: [''],
  wheelHouse51: [''],
  mcr51: [''],
  mechPort51: [''],
  mechStbd51: [''],
  remarks51: [''],

  // === 52 ===
  bridgeEnclosed52: [''],
  analogAsp52: [''],
  wheelHouse52: [''],
  mcr52: [''],
  mechPort52: [''],
  mechStbd52: [''],
  remarks52: [''],

  // === 53 ===
  bridgeEnclosed53: [''],
  analogAsp53: [''],
  wheelHouse53: [''],
  mcr53: [''],
  mechPort53: [''],
  mechStbd53: [''],
  remarks53: [''],

  // === 54 ===
  bridgeEnclosed54: [''],
  analogAsp54: [''],
  wheelHouse54: [''],
  mcr54: [''],
  mechPort54: [''],
  mechStbd54: [''],
  remarks54: [''],

  // === 55 ===
  bridgeEnclosed55: [''],
  analogAsp55: [''],
  wheelHouse55: [''],
  mcr55: [''],
  mechPort55: [''],
  mechStbd55: [''],
  remarks55: [''],

  // === 56 ===
  bridgeEnclosed56: [''],
  analogAsp56: [''],
  wheelHouse56: [''],
  mcr56: [''],
  mechPort56: [''],
  mechStbd56: [''],
  remarks56: [''],

  // === 57 ===
  bridgeEnclosed57: [''],
  analogAsp57: [''],
  wheelHouse57: [''],
  mcr57: [''],
  mechPort57: [''],
  mechStbd57: [''],
  remarks57: [''],

  // === 58 ===
  bridgeEnclosed58: [''],
  analogAsp58: [''],
  wheelHouse58: [''],
  mcr58: [''],
  mechPort58: [''],
  mechStbd58: [''],
  remarks58: [''],

  // === 59 ===
  bridgeEnclosed59: [''],
  analogAsp59: [''],
  wheelHouse59: [''],
  mcr59: [''],
  mechPort59: [''],
  mechStbd59: [''],
  remarks59: [''],

  // === 60 ===
  bridgeEnclosed60: [''],
  analogAsp60: [''],
  wheelHouse60: [''],
  mcr60: [''],
  mechPort60: [''],
  mechStbd60: [''],
  remarks60: [''],

  // === 61 ===
  bridgeEnclosed61: [''],
  analogAsp61: [''],
  wheelHouse61: [''],
  mcr61: [''],
  mechPort61: [''],
  mechStbd61: [''],
  remarks61: [''],

  // === 62 ===
  bridgeEnclosed62: [''],
  analogAsp62: [''],
  wheelHouse62: [''],
  mcr62: [''],
  mechPort62: [''],
  mechStbd62: [''],
  remarks62: [''],

  // === 63 ===
  bridgeEnclosed63: [''],
  analogAsp63: [''],
  wheelHouse63: [''],
  mcr63: [''],
  mechPort63: [''],
  mechStbd63: [''],
  remarks63: [''],

  // === 64 ===
  bridgeEnclosed64: [''],
  analogAsp64: [''],
  wheelHouse64: [''],
  mcr64: [''],
  mechPort64: [''],
  mechStbd64: [''],
  remarks64: [''],

  // === 65 ===
  bridgeEnclosed65: [''],
  analogAsp65: [''],
  wheelHouse65: [''],
  mcr65: [''],
  mechPort65: [''],
  mechStbd65: [''],
  remarks65: [''],

  // === 66 ===
  bridgeEnclosed66: [''],
  analogAsp66: [''],
  wheelHouse66: [''],
  mcr66: [''],
  mechPort66: [''],
  mechStbd66: [''],
  remarks66: [''],

  // === 67 ===
  bridgeEnclosed67: [''],
  analogAsp67: [''],
  wheelHouse67: [''],
  mcr67: [''],
  mechPort67: [''],
  mechStbd67: [''],
  remarks67: [''],

  // === 68 ===
  bridgeEnclosed68: [''],
  analogAsp68: [''],
  wheelHouse68: [''],
  mcr68: [''],
  mechPort68: [''],
  mechStbd68: [''],
  remarks68: [''],

  // === 69 ===
  bridgeEnclosed69: [''],
  analogAsp69: [''],
  wheelHouse69: [''],
  mcr69: [''],
  mechPort69: [''],
  mechStbd69: [''],
  remarks69: [''],

  // === 70 ===
  bridgeEnclosed70: [''],
  analogAsp70: [''],
  wheelHouse70: [''],
  mcr70: [''],
  mechPort70: [''],
  mechStbd70: [''],
  remarks70: [''],

  // === 71 ===
  bridgeEnclosed71: [''],
  analogAsp71: [''],
  wheelHouse71: [''],
  mcr71: [''],
  mechPort71: [''],
  mechStbd71: [''],
  remarks71: [''],

  // === 72 ===
  bridgeEnclosed72: [''],
  analogAsp72: [''],
  wheelHouse72: [''],
  mcr72: [''],
  mechPort72: [''],
  mechStbd72: [''],
  remarks72: [''],

  // === 73 ===
  bridgeEnclosed73: [''],
  analogAsp73: [''],
  wheelHouse73: [''],
  mcr73: [''],
  mechPort73: [''],
  mechStbd73: [''],
  remarks73: [''],

  // === 74 ===
  bridgeEnclosed74: [''],
  analogAsp74: [''],
  wheelHouse74: [''],
  mcr74: [''],
  mechPort74: [''],
  mechStbd74: [''],
  remarks74: [''],



   // Row 75
  bridgeEnclosed75: [''],
  analogAsp75: [''],
  wheelHouse75: [''],
  mcr75: [''],
  mechanicalIndicatorPort75: [''],
  mechanicalIndicatorStbd75: [''],
  remarks75: [''],

  // Row 76
  bridgeEnclosed76: [''],
  analogAsp76: [''],
  wheelHouse76: [''],
  mcr76: [''],
  mechanicalIndicatorPort76: [''],
  mechanicalIndicatorStbd76: [''],
  remarks76: [''],

  // Row 77
  bridgeEnclosed77: [''],
  analogAsp77: [''],
  wheelHouse77: [''],
  mcr77: [''],
  mechanicalIndicatorPort77: [''],
  mechanicalIndicatorStbd77: [''],
  remarks77: [''],

  // Row 78
  bridgeEnclosed78: [''],
  analogAsp78: [''],
  wheelHouse78: [''],
  mcr78: [''],
  mechanicalIndicatorPort78: [''],
  mechanicalIndicatorStbd78: [''],
  remarks78: [''],

  // Row 79
  bridgeEnclosed79: [''],
  analogAsp79: [''],
  wheelHouse79: [''],
  mcr79: [''],
  mechanicalIndicatorPort79: [''],
  mechanicalIndicatorStbd79: [''],
  remarks79: [''],

  // Row 80
  bridgeEnclosed80: [''],
  analogAsp80: [''],
  wheelHouse80: [''],
  mcr80: [''],
  mechanicalIndicatorPort80: [''],
  mechanicalIndicatorStbd80: [''],
  remarks80: [''],

  // Row 81
  bridgeEnclosed81: [''],
  analogAsp81: [''],
  wheelHouse81: [''],
  mcr81: [''],
  mechanicalIndicatorPort81: [''],
  mechanicalIndicatorStbd81: [''],
  remarks81: [''],

  // Row 82
  bridgeEnclosed82: [''],
  analogAsp82: [''],
  wheelHouse82: [''],
  mcr82: [''],
  mechanicalIndicatorPort82: [''],
  mechanicalIndicatorStbd82: [''],
  remarks82: [''],

  // Row 83
  bridgeEnclosed83: [''],
  analogAsp83: [''],
  wheelHouse83: [''],
  mcr83: [''],
  mechanicalIndicatorPort83: [''],
  mechanicalIndicatorStbd83: [''],
  remarks83: [''],

  // Row 84
  bridgeEnclosed84: [''],
  analogAsp84: [''],
  wheelHouse84: [''],
  mcr84: [''],
  mechanicalIndicatorPort84: [''],
  mechanicalIndicatorStbd84: [''],
  remarks84: [''],

  // Row 85
  bridgeEnclosed85: [''],
  analogAsp85: [''],
  wheelHouse85: [''],
  mcr85: [''],
  mechanicalIndicatorPort85: [''],
  mechanicalIndicatorStbd85: [''],
  remarks85: [''],

  // Row 86
  bridgeEnclosed86: [''],
  analogAsp86: [''],
  wheelHouse86: [''],
  mcr86: [''],
  mechanicalIndicatorPort86: [''],
  mechanicalIndicatorStbd86: [''],
  remarks86: [''],

  // Row 87
  bridgeEnclosed87: [''],
  analogAsp87: [''],
  wheelHouse87: [''],
  mcr87: [''],
  mechanicalIndicatorPort87: [''],
  mechanicalIndicatorStbd87: [''],
  remarks87: [''],

  // Row 88
  bridgeEnclosed88: [''],
  analogAsp88: [''],
  wheelHouse88: [''],
  mcr88: [''],
  mechanicalIndicatorPort88: [''],
  mechanicalIndicatorStbd88: [''],
  remarks88: [''],

  // Row 89
  bridgeEnclosed89: [''],
  analogAsp89: [''],
  wheelHouse89: [''],
  mcr89: [''],
  mechanicalIndicatorPort89: [''],
  mechanicalIndicatorStbd89: [''],
  remarks89: [''],

  // Row 90
  bridgeEnclosed90: [''],
  analogAsp90: [''],
  wheelHouse90: [''],
  mcr90: [''],
  mechanicalIndicatorPort90: [''],
  mechanicalIndicatorStbd90: [''],
  remarks90: [''],

  // Row 91
  bridgeEnclosed91: [''],
  analogAsp91: [''],
  wheelHouse91: [''],
  mcr91: [''],
  mechanicalIndicatorPort91: [''],
  mechanicalIndicatorStbd91: [''],
  remarks91: [''],

  // Row 92
  bridgeEnclosed92: [''],
  analogAsp92: [''],
  wheelHouse92: [''],
  mcr92: [''],
  mechanicalIndicatorPort92: [''],
  mechanicalIndicatorStbd92: [''],
  remarks92: [''],

  // Row 93
  bridgeEnclosed93: [''],
  analogAsp93: [''],
  wheelHouse93: [''],
  mcr93: [''],
  mechanicalIndicatorPort93: [''],
  mechanicalIndicatorStbd93: [''],
  remarks93: [''],

  // Row 94
  bridgeEnclosed94: [''],
  analogAsp94: [''],
  wheelHouse94: [''],
  mcr94: [''],
  mechanicalIndicatorPort94: [''],
  mechanicalIndicatorStbd94: [''],
  remarks94: [''],

  // Row 95
  bridgeEnclosed95: [''],
  analogAsp95: [''],
  wheelHouse95: [''],
  mcr95: [''],
  mechanicalIndicatorPort95: [''],
  mechanicalIndicatorStbd95: [''],
  remarks95: [''],

  // Row 96
  bridgeEnclosed96: [''],
  analogAsp96: [''],
  wheelHouse96: [''],
  mcr96: [''],
  mechanicalIndicatorPort96: [''],
  mechanicalIndicatorStbd96: [''],
  remarks96: [''],

  // Row 97
  bridgeEnclosed97: [''],
  analogAsp97: [''],
  wheelHouse97: [''],
  mcr97: [''],
  mechanicalIndicatorPort97: [''],
  mechanicalIndicatorStbd97: [''],
  remarks97: [''],

  // Row 98
  bridgeEnclosed98: [''],
  analogAsp98: [''],
  wheelHouse98: [''],
  mcr98: [''],
  mechanicalIndicatorPort98: [''],
  mechanicalIndicatorStbd98: [''],
  remarks98: [''],

  // Row 99
  bridgeEnclosed99: [''],
  analogAsp99: [''],
  wheelHouse99: [''],
  mcr99: [''],
  mechanicalIndicatorPort99: [''],
  mechanicalIndicatorStbd99: [''],
  remarks99: [''],

  // Row 100
  bridgeEnclosed100: [''],
  analogAsp100: [''],
  wheelHouse100: [''],
  mcr100: [''],
  mechanicalIndicatorPort100: [''],
  mechanicalIndicatorStbd100: [''],
  remarks100: [''],

  // Row 101
  bridgeEnclosed101: [''],
  analogAsp101: [''],
  wheelHouse101: [''],
  mcr101: [''],
  mechanicalIndicatorPort101: [''],
  mechanicalIndicatorStbd101: [''],
  remarks101: [''],

  // Row 102
  bridgeEnclosed102: [''],
  analogAsp102: [''],
  wheelHouse102: [''],
  mcr102: [''],
  mechanicalIndicatorPort102: [''],
  mechanicalIndicatorStbd102: [''],
  remarks102: [''],

  // Row 103
  bridgeEnclosed103: [''],
  analogAsp103: [''],
  wheelHouse103: [''],
  mcr103: [''],
  mechanicalIndicatorPort103: [''],
  mechanicalIndicatorStbd103: [''],
  remarks103: [''],


    // Row 104
  bridgeEnclosed104: [''],
  analogAsp104: [''],
  wheelHouse104: [''],
  mcr104: [''],
  mechanicalIndicatorPort104: [''],
  mechanicalIndicatorStbd104: [''],
  remarks104: [''],

  // Row 105
  bridgeEnclosed105: [''],
  analogAsp105: [''],
  wheelHouse105: [''],
  mcr105: [''],
  mechanicalIndicatorPort105: [''],
  mechanicalIndicatorStbd105: [''],
  remarks105: [''],

  // Row 106
  bridgeEnclosed106: [''],
  analogAsp106: [''],
  wheelHouse106: [''],
  mcr106: [''],
  mechanicalIndicatorPort106: [''],
  mechanicalIndicatorStbd106: [''],
  remarks106: [''],

  // Row 107
  bridgeEnclosed107: [''],
  analogAsp107: [''],
  wheelHouse107: [''],
  mcr107: [''],
  mechanicalIndicatorPort107: [''],
  mechanicalIndicatorStbd107: [''],
  remarks107: [''],

  // Row 108
  bridgeEnclosed108: [''],
  analogAsp108: [''],
  wheelHouse108: [''],
  mcr108: [''],
  mechanicalIndicatorPort108: [''],
  mechanicalIndicatorStbd108: [''],
  remarks108: [''],

  // Row 109
  bridgeEnclosed109: [''],
  analogAsp109: [''],
  wheelHouse109: [''],
  mcr109: [''],
  mechanicalIndicatorPort109: [''],
  mechanicalIndicatorStbd109: [''],
  remarks109: [''],

  // Row 110
  bridgeEnclosed110: [''],
  analogAsp110: [''],
  wheelHouse110: [''],
  mcr110: [''],
  mechanicalIndicatorPort110: [''],
  mechanicalIndicatorStbd110: [''],
  remarks110: [''],

  // Row 111
  bridgeEnclosed111: [''],
  analogAsp111: [''],
  wheelHouse111: [''],
  mcr111: [''],
  mechanicalIndicatorPort111: [''],
  mechanicalIndicatorStbd111: [''],
  remarks111: [''],

  // Row 112
  bridgeEnclosed112: [''],
  analogAsp112: [''],
  wheelHouse112: [''],
  mcr112: [''],
  mechanicalIndicatorPort112: [''],
  mechanicalIndicatorStbd112: [''],
  remarks112: [''],

  // Row 113
  bridgeEnclosed113: [''],
  analogAsp113: [''],
  wheelHouse113: [''],
  mcr113: [''],
  mechanicalIndicatorPort113: [''],
  mechanicalIndicatorStbd113: [''],
  remarks113: [''],

  // Row 114
  bridgeEnclosed114: [''],
  analogAsp114: [''],
  wheelHouse114: [''],
  mcr114: [''],
  mechanicalIndicatorPort114: [''],
  mechanicalIndicatorStbd114: [''],
  remarks114: [''],

  // Row 115
  bridgeEnclosed115: [''],
  analogAsp115: [''],
  wheelHouse115: [''],
  mcr115: [''],
  mechanicalIndicatorPort115: [''],
  mechanicalIndicatorStbd115: [''],
  remarks115: [''],

  // Row 116
  bridgeEnclosed116: [''],
  analogAsp116: [''],
  wheelHouse116: [''],
  mcr116: [''],
  mechanicalIndicatorPort116: [''],
  mechanicalIndicatorStbd116: [''],
  remarks116: [''],

  // Row 117
  bridgeEnclosed117: [''],
  analogAsp117: [''],
  wheelHouse117: [''],
  mcr117: [''],
  mechanicalIndicatorPort117: [''],
  mechanicalIndicatorStbd117: [''],
  remarks117: [''],

  // Row 118
  bridgeEnclosed118: [''],
  analogAsp118: [''],
  wheelHouse118: [''],
  mcr118: [''],
  mechanicalIndicatorPort118: [''],
  mechanicalIndicatorStbd118: [''],
  remarks118: [''],

  // Row 119
  bridgeEnclosed119: [''],
  analogAsp119: [''],
  wheelHouse119: [''],
  mcr119: [''],
  mechanicalIndicatorPort119: [''],
  mechanicalIndicatorStbd119: [''],
  remarks119: [''],

  // Row 120
  bridgeEnclosed120: [''],
  analogAsp120: [''],
  wheelHouse120: [''],
  mcr120: [''],
  mechanicalIndicatorPort120: [''],
  mechanicalIndicatorStbd120: [''],
  remarks120: [''],

  // Row 121
  bridgeEnclosed121: [''],
  analogAsp121: [''],
  wheelHouse121: [''],
  mcr121: [''],
  mechanicalIndicatorPort121: [''],
  mechanicalIndicatorStbd121: [''],
  remarks121: [''],

  // Row 122
  bridgeEnclosed122: [''],
  analogAsp122: [''],
  wheelHouse122: [''],
  mcr122: [''],
  mechanicalIndicatorPort122: [''],
  mechanicalIndicatorStbd122: [''],
  remarks122: [''],

  // Row 123
  bridgeEnclosed123: [''],
  analogAsp123: [''],
  wheelHouse123: [''],
  mcr123: [''],
  mechanicalIndicatorPort123: [''],
  mechanicalIndicatorStbd123: [''],
  remarks123: [''],

  // Row 124
  bridgeEnclosed124: [''],
  analogAsp124: [''],
  wheelHouse124: [''],
  mcr124: [''],
  mechanicalIndicatorPort124: [''],
  mechanicalIndicatorStbd124: [''],
  remarks124: [''],

  // Row 125
  bridgeEnclosed125: [''],
  analogAsp125: [''],
  wheelHouse125: [''],
  mcr125: [''],
  mechanicalIndicatorPort125: [''],
  mechanicalIndicatorStbd125: [''],
  remarks125: [''],

  // Row 126
  bridgeEnclosed126: [''],
  analogAsp126: [''],
  wheelHouse126: [''],
  mcr126: [''],
  mechanicalIndicatorPort126: [''],
  mechanicalIndicatorStbd126: [''],
  remarks126: [''],

  // Row 127
  bridgeEnclosed127: [''],
  analogAsp127: [''],
  wheelHouse127: [''],
  mcr127: [''],
  mechanicalIndicatorPort127: [''],
  mechanicalIndicatorStbd127: [''],
  remarks127: [''],

  // Row 128
  bridgeEnclosed128: [''],
  analogAsp128: [''],
  wheelHouse128: [''],
  mcr128: [''],
  mechanicalIndicatorPort128: [''],
  mechanicalIndicatorStbd128: [''],
  remarks128: [''],

  // Row 129
  bridgeEnclosed129: [''],
  analogAsp129: [''],
  wheelHouse129: [''],
  mcr129: [''],
  mechanicalIndicatorPort129: [''],
  mechanicalIndicatorStbd129: [''],
  remarks129: [''],

  // Row 130
  bridgeEnclosed130: [''],
  analogAsp130: [''],
  wheelHouse130: [''],
  mcr130: [''],
  mechanicalIndicatorPort130: [''],
  mechanicalIndicatorStbd130: [''],
  remarks130: [''],

  // Row 131
  bridgeEnclosed131: [''],
  analogAsp131: [''],
  wheelHouse131: [''],
  mcr131: [''],
  mechanicalIndicatorPort131: [''],
  mechanicalIndicatorStbd131: [''],
  remarks131: [''],

  // Row 132
  bridgeEnclosed132: [''],
  analogAsp132: [''],
  wheelHouse132: [''],
  mcr132: [''],
  mechanicalIndicatorPort132: [''],
  mechanicalIndicatorStbd132: [''],
  remarks132: [''],



   // Bridge 35P-0-30S
   bridge_35P_30S_port133: [''],
  bridge_35P_30S_stbd133: [''],
  bridge_35P_30S_both133: [''],
  bridge_35P_30S_remarks133: [''],

  bridge_35S_30P_port134: [''],
  bridge_35S_30P_stbd134: [''],
  bridge_35S_30P_both134: [''],
  bridge_35S_30P_remarks134: [''],

  wheel_35P_30S_port135: [''],
  wheel_35P_30S_stbd135: [''],
  wheel_35P_30S_both135: [''],
  wheel_35P_30S_remarks135: [''],

  wheel_35S_30P_port136: [''],
  wheel_35S_30P_stbd136: [''],
  wheel_35S_30P_both136: [''],
  wheel_35S_30P_remarks136: ['']
});

  }
}
