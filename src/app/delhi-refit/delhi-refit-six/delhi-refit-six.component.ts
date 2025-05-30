import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-delhi-refit-six',
  templateUrl: './delhi-refit-six.component.html',
  styleUrls: ['./delhi-refit-six.component.scss']
})
export class DelhiRefitSixComponent implements OnInit {
DelhiRefit_six: any;
  delhiRefitSixData: any;
  apiUrl = environment.apiUrl + 'delhi-refit-six';

  constructor(private fb: FormBuilder, private http: HttpClient) { 
this.DelhiRefit_six = this.fb.group({
    
no1aAER_263_330_1: new FormControl(''),
  no2aFER_263_330_1: new FormControl(''),
  no1bAER_264_331_2: new FormControl(''),
  no2bFER_264_331_2: new FormControl(''),
  no1cAER_265_332_3: new FormControl(''),
  no2cFER_265_332_3: new FormControl(''),
  no1dAER_266_333_4: new FormControl(''),
  no2dFER_266_333_4: new FormControl(''),
  no1eAER_267_334_5: new FormControl(''),
  no2eFER_267_334_5: new FormControl(''),
  no1fAER_268_335_6: new FormControl(''),
  no2fFER_268_335_6: new FormControl(''),
  no1gAER_269_336_7: new FormControl(''),
  no2gFER_269_336_7: new FormControl(''),
  no1hAER_270_337_8: new FormControl(''),
  no2hFER_270_337_8: new FormControl(''),
  no1fAER_271_338_9: new FormControl(''),
  no2fFER_271_338_9: new FormControl(''),
  no1gAER_272_339_10: new FormControl(''),
  no2gFER_272_339_10: new FormControl(''),
  no1hAER_273_340_11: new FormControl(''),
  no2hFER_273_340_11: new FormControl(''),
  no1hAER_274_341_12: new FormControl(''),
  no2hFER_274_341_12: new FormControl(''),
  no1iAER_275_342_13: new FormControl(''),
  no2fFER_275_342_13: new FormControl(''),
  no1jAER_276_343_14: new FormControl(''),
  no2gFER_276_343_14: new FormControl(''),
  no1kAER_277_344_15: new FormControl(''),
  no2hFER_277_344_15: new FormControl(''),

  // SPM Levels (16-17)
  fe1_278_345_16: new FormControl(''),
  fe2_278_345_16: new FormControl(''),
  de1_279_346_17: new FormControl(''),
  de2_279_346_17: new FormControl(''),

  // Overall Vibration (18-21)
  motor1_280_347_18FEV1: new FormControl(''),
  motor2_280_347_18FEA1: new FormControl(''),
  motor3_280_347_18FEH1: new FormControl(''),
  motor4_280_347_18FEV2: new FormControl(''),
  motor5_280_347_18FEA2: new FormControl(''),
  motor6_280_347_18FEH2: new FormControl(''),
  motor1_281_348_19DEV1: new FormControl(''),
  motor2_281_348_19DEA1: new FormControl(''),
  motor3_281_348_19DEH1: new FormControl(''),
  motor4_281_348_19DEV2: new FormControl(''),
  motor5_281_348_19DEA2: new FormControl(''),
  motor6_281_348_19DEH2: new FormControl(''),
  comp1_282_349_20DEV1: new FormControl(''),
  comp2_282_349_20DEA1: new FormControl(''),
  comp3_282_349_20DEH1: new FormControl(''),
  comp4_282_349_20DEV2: new FormControl(''),
  comp5_282_349_20DEA2: new FormControl(''),
  comp6_282_349_20DEH2: new FormControl(''),
  comp1_283_350_21FEV1: new FormControl(''),
  comp2_283_350_21FEA1: new FormControl(''),
  comp3_283_350_21FEH1: new FormControl(''),
  comp4_283_350_21FEV2: new FormControl(''),
  comp5_283_350_21FEA2: new FormControl(''),
  comp6_283_350_21FEH2: new FormControl(''),

  // Attenuation across SV mounts (22-27)
  top_1_1_284_351_22: new FormControl(''),
  top_1_2_284_351_22: new FormControl(''),
  top_1_3_284_351_22: new FormControl(''),
  top_1_4_284_351_22: new FormControl(''),
  bot_1_1_285_352_23: new FormControl(''),
  bot_1_2_285_352_23: new FormControl(''),
  bot_1_3_285_352_23: new FormControl(''),
  bot_1_4_285_352_23: new FormControl(''),
  att_1_1_286_353_24: new FormControl(''),
  att_1_2_286_353_24: new FormControl(''),
  att_1_3_286_353_24: new FormControl(''),
  att_1_4_286_353_24: new FormControl(''),
  top_2_1_287_354_25: new FormControl(''),
  top_2_2_287_354_25: new FormControl(''),
  top_2_3_287_354_25: new FormControl(''),
  top_2_4_287_354_25: new FormControl(''),
  bot_2_1_288_355_26: new FormControl(''),
  bot_2_2_288_355_26: new FormControl(''),
  bot_2_3_288_355_26: new FormControl(''),
  bot_2_4_288_355_26: new FormControl(''),
  att_3_1_289_356_27: new FormControl(''),
  att_3_2_289_356_27: new FormControl(''),
  att_3_3_289_356_27: new FormControl(''),
  att_3_4_289_356_27: new FormControl(''),

  // Capacity trials (28-37)
  fer_storage_initial_357_28: new FormControl(''),
  fer_storage_final_357_28: new FormControl(''),
  fer_ru_initial_358_29: new FormControl(''),
  fer_ru_final_358_29: new FormControl(''),
  fer_fuel_initial_359_30: new FormControl(''),
  fer_time_initial_360_31: new FormControl(''),
  fer_capacity_initial_361_32: new FormControl(''),
  aer_storage_initial_362_33: new FormControl(''),
  aer_storage_final_362_33: new FormControl(''),
  aer_ru_initial_363_34: new FormControl(''),
  aer_ru_final_363_34: new FormControl(''),
  aer_fuel_initial_364_35: new FormControl(''),
  aer_time_initial_365_36: new FormControl(''),
  aer_capacity_initial_366_37: new FormControl(''),

  // RG LUB OIL CENTRIFUGE - SPM Levels (38-39)
  fe1_278_345_38: new FormControl(''),
  fe2_278_345_38: new FormControl(''),
  de1_279_346_39: new FormControl(''),
  de2_279_346_39: new FormControl(''),

  // RG LUB OIL CENTRIFUGE - Capacity trials (40-49)
  fer_storage_initial_357_40: new FormControl(''),
  fer_storage_final_357_40: new FormControl(''),
  fer_ru_initial_358_41: new FormControl(''),
  fer_ru_final_358_41: new FormControl(''),
  fer_fuel_initial_359_42: new FormControl(''),
  fer_time_initial_360_43: new FormControl(''),
  fer_capacity_initial_361_44: new FormControl(''),
  aer_storage_initial_362_45: new FormControl(''),
  aer_storage_final_362_45: new FormControl(''),
  aer_ru_initial_363_46: new FormControl(''),
  aer_ru_final_363_46: new FormControl(''),
  aer_fuels_initial_364_35_47: new FormControl(''),
  aer_time_initial_365_48: new FormControl(''),
  aer_capacity_initial_366_49: new FormControl(''),

    fe1_278_345_50: new FormControl(''),
  fe2_278_345_50: new FormControl(''),
  de1_279_346_51: new FormControl(''),
  de2_279_346_51: new FormControl(''),

  // GT LUB OIL CENTRIFUGE - Capacity trials (52-61)
  fer_storage_initial_357_52: new FormControl(''),
  fer_storage_final_357_52: new FormControl(''),
  fer_ru_initial_358_53: new FormControl(''),
  fer_ru_final_358_53: new FormControl(''),
  fer_fuel_initial_359_54: new FormControl(''),
  fer_time_initial_360_55: new FormControl(''),
  fer_capacity_initial_361_56: new FormControl(''),
  aer_storage_initial_362_57: new FormControl(''),
  aer_storage_final_362_57: new FormControl(''),
  aer_ru_initial_363_58: new FormControl(''),
  aer_ru_final_363_58: new FormControl(''),
  aer_fuel_initial_364_59: new FormControl(''),
  aer_time_initial_365_60: new FormControl(''),
  aer_capacity_initial_366_61: new FormControl(''),

  // DA FUEL TRANSFER PUMP - Performance Parameters (62-76)
  no1aAER_263_330_62: new FormControl(''),
  no1bAER_264_331_63: new FormControl(''),
  no1cAER_265_332_64: new FormControl(''),
  no1dAER_266_333_65: new FormControl(''),
  no1eAER_267_334_66: new FormControl(''),
  no1fAER_268_335_67: new FormControl(''),
  no1gAER_269_336_68: new FormControl(''),
  no1hAER_270_337_69: new FormControl(''),
  no1fAER_271_338_70: new FormControl(''),
  no1gAER_272_339_71: new FormControl(''),
  no1hAER_273_340_72: new FormControl(''),
  no1hAER_274_341_73: new FormControl(''),
  no1iAER_275_342_74: new FormControl(''),
  no1jAER_276_343_75: new FormControl(''),
  no1kAER_277_344_76: new FormControl(''),

  // DA FUEL TRANSFER PUMP - SPM Levels (77-78)
  fe1_278_345_77: new FormControl(''),
  de1_279_346_78: new FormControl(''),

  // DA FUEL TRANSFER PUMP - Overall Vibration (79-82)
  motor1_280_347_79FEV1: new FormControl(''),
  motor2_280_347_79FEA1: new FormControl(''),
  motor1_281_348_80DEV1: new FormControl(''),
  motor2_281_348_80DEA1: new FormControl(''),
  comp1_282_349_81DEV1: new FormControl(''),
  comp2_282_349_81DEA1: new FormControl(''),
  comp1_283_350_82FEV1: new FormControl(''),
  comp2_283_350_82FEA1: new FormControl(''),

  // DA FUEL TRANSFER PUMP - Attenuation across SV mounts (83-85)
  top_1_1_284_351_83: new FormControl(''),
  top_1_2_284_351_83: new FormControl(''),
  top_1_3_284_351_83: new FormControl(''),
  top_1_4_284_351_83: new FormControl(''),
  bot_1_1_285_352_84: new FormControl(''),
  bot_1_2_285_352_84: new FormControl(''),
  bot_1_3_285_352_84: new FormControl(''),
  bot_1_4_285_352_84: new FormControl(''),
  att_1_1_286_353_85: new FormControl(''),
  att_1_2_286_353_85: new FormControl(''),
  att_1_3_286_353_85: new FormControl(''),
  att_1_4_286_353_85: new FormControl(''),

  // DA LO PRIMMING PUMP - Performance Parameters (86-100)
  no1aAER_263_330_86: new FormControl(''),
  no1bAER_264_331_87: new FormControl(''),
  no1cAER_265_332_88: new FormControl(''),
  no1dAER_266_333_89: new FormControl(''),
  no1eAER_267_334_90: new FormControl(''),
  no1fAER_268_335_91: new FormControl(''),
  no1gAER_269_336_92: new FormControl(''),
  no1hAER_270_337_93: new FormControl(''),
  no1fAER_271_338_94: new FormControl(''),
  no1gAER_272_339_95: new FormControl(''),
  no1hAER_273_340_96: new FormControl(''),
  no1hAER_274_341_97: new FormControl(''),
  no1iAER_275_342_98: new FormControl(''),
  no1jAER_276_343_99: new FormControl(''),
  no1kAER_277_344_100: new FormControl(''),

  // DA LO PRIMMING PUMP - SPM Levels (101-102)
  fe1_278_345_101: new FormControl(''),
  de1_279_346_102: new FormControl(''),

  // DA LO PRIMMING PUMP - Overall Vibration (103-106)
  motor1_280_347_103FEV1: new FormControl(''),
  motor2_280_347_103FEA1: new FormControl(''),
  motor3_280_347_103FEH1: new FormControl(''),
  motor1_281_348_104DEV1: new FormControl(''),
  motor2_281_348_104DEA1: new FormControl(''),
  motor3_281_348_104DEH1: new FormControl(''),
  comp1_282_349_105DEV1: new FormControl(''),
  comp2_282_349_105DEA1: new FormControl(''),
  comp3_282_349_105DEH1: new FormControl(''),
  comp1_283_350_106FEV1: new FormControl(''),
  comp2_283_350_106FEA1: new FormControl(''),
  comp3_283_350_106FEH1: new FormControl(''),

  // DA LO PRIMMING PUMP - Attenuation across SV mounts (107-109)
  top_1_1_284_351_107: new FormControl(''),
  top_1_2_284_351_107: new FormControl(''),
  top_1_3_284_351_107: new FormControl(''),
  top_1_4_284_351_107: new FormControl(''),
  bot_1_1_285_352_108: new FormControl(''),
  bot_1_2_285_352_108: new FormControl(''),
  bot_1_3_285_352_108: new FormControl(''),
  bot_1_4_285_352_108: new FormControl(''),
  att_1_1_286_353_109: new FormControl(''),
  att_1_2_286_353_109: new FormControl(''),
  att_1_3_286_353_109: new FormControl(''),
  att_1_4_286_353_109: new FormControl(''),
    // FUEL CENTRIFUGE - Performance Parameters
  fer_storage_initial_357_110: new FormControl(''),
  fer_storage_final_357_110: new FormControl(''),
  fer_ru_initial_358_111: new FormControl(''),
  fer_ru_final_358_111: new FormControl(''),
  fer_fuel_initial_359_112: new FormControl(''),

  // FUEL CENTRIFUGE - Capacity trials (FER)
  fer_storage_initial_357_113: new FormControl(''),
  fer_storage_final_357_113: new FormControl(''),
  fer_ru_initial_358_114: new FormControl(''),
  fer_ru_final_358_114: new FormControl(''),
  fer_fuel_initial_359_115: new FormControl(''),
  fer_time_initial_360_116: new FormControl(''),
  fer_capacity_initial_361_117: new FormControl(''),

  // FUEL CENTRIFUGE - Capacity trials (AER)
  aer_storage_initial_362_118: new FormControl(''),
  aer_storage_final_362_118: new FormControl(''),
  aer_ru_initial_363_119: new FormControl(''),
  aer_ru_final_363_119: new FormControl(''),
  aer_fuel_initial_364_120: new FormControl(''),
  aer_time_initial_365_121: new FormControl(''),
  aer_capacity_initial_366_122: new FormControl(''),

  // BILGE PUMP - Performance Parameters
  no1aAER_263_330_123: new FormControl(''),
  no1bAER_264_331_124: new FormControl(''),
  no1cAER_265_332_125: new FormControl(''),
  no1dAER_266_333_126: new FormControl(''),
  no1eAER_267_334_127: new FormControl(''),
  no1fAER_268_335_128: new FormControl(''),
  no1gAER_269_336_129: new FormControl(''),
  no1hAER_270_337_130: new FormControl(''),
  no1fAER_271_338_131: new FormControl(''),
  no1gAER_272_339_132: new FormControl(''),
  no1hAER_273_340_133: new FormControl(''),
  no1hAER_274_341_134: new FormControl(''),
  no1iAER_275_342_135: new FormControl(''),
  no1jAER_276_343_136: new FormControl(''),
  no1kAER_277_344_137: new FormControl(''),

  // BILGE PUMP - SPM Levels
  fe1_278_345_138: new FormControl(''),
  de1_279_346_139: new FormControl(''),

  // BILGE PUMP - Overall Vibration
  motor1_280_347_140FEV1: new FormControl(''),
  motor2_280_347_140FEA1: new FormControl(''),
  motor3_280_347_140FEH1: new FormControl(''),
  motor1_281_348_141DEV1: new FormControl(''),
  motor2_281_348_141DEA1: new FormControl(''),
  motor3_281_348_141DEH1: new FormControl(''),
  comp1_282_349_142DEV1: new FormControl(''),
  comp2_282_349_142DEA1: new FormControl(''),
  comp3_282_349_142DEH1: new FormControl(''),
  comp1_283_350_143FEV1: new FormControl(''),
  comp2_283_350_143FEA1: new FormControl(''),
  comp3_283_350_143FEH1: new FormControl(''),

  // BILGE PUMP - Attenuation across SV mounts (Top)
  top_1_1_284_351_144: new FormControl(''),
  top_1_2_284_351_144: new FormControl(''),
  top_1_3_284_351_144: new FormControl(''),
  top_1_4_284_351_144: new FormControl(''),
  top_1_5_284_351_144: new FormControl(''),
  top_1_6_284_351_144: new FormControl(''),
  top_1_7_284_351_144: new FormControl(''),
  top_1_8_284_351_144: new FormControl(''),

  // BILGE PUMP - Attenuation across SV mounts (Bot)
  bot_1_1_285_352_145: new FormControl(''),
  bot_1_2_285_352_145: new FormControl(''),
  bot_1_3_285_352_145: new FormControl(''),
  bot_1_4_285_352_145: new FormControl(''),
  bot_1_5_285_352_145: new FormControl(''),
  bot_1_6_285_352_145: new FormControl(''),
  bot_1_7_285_352_145: new FormControl(''),
  bot_1_8_285_352_145: new FormControl(''),

  // BILGE PUMP - Attenuation across SV mounts (Att.)
  att_1_1_286_353_146: new FormControl(''),
  att_1_2_286_353_146: new FormControl(''),
  att_1_3_286_353_146: new FormControl(''),
  att_1_4_286_353_146: new FormControl(''),
  att_1_5_286_353_146: new FormControl(''),
  att_1_6_286_353_146: new FormControl(''),
  att_1_7_286_353_146: new FormControl(''),
  att_1_8_286_353_146: new FormControl(''),

    // AVCAT RECIRCULATING PUMP - Performance Parameters
  no1aAER_263_330_147: new FormControl(''),
  no1bAER_264_331_148: new FormControl(''),
  no1cAER_265_332_149: new FormControl(''),
  no1dAER_266_333_150: new FormControl(''),
  no1eAER_267_334_151: new FormControl(''),
  no1fAER_268_335_152: new FormControl(''),
  no1gAER_269_336_153: new FormControl(''),
  no1hAER_270_337_154: new FormControl(''),
  no1fAER_271_338_155: new FormControl(''),
  no1gAER_272_339_156: new FormControl(''),
  no1hAER_273_340_157: new FormControl(''),
  no1hAER_274_341_158: new FormControl(''),
  no1iAER_275_342_159: new FormControl(''),
  no1jAER_276_343_160: new FormControl(''),
  no1kAER_277_344_161: new FormControl(''),

  // AVCAT RECIRCULATING PUMP - SPM Levels
  fe1_278_345_162: new FormControl(''),
  de1_279_346_163: new FormControl(''),

  // AVCAT RECIRCULATING PUMP - Overall Vibration
  motor1_280_347_164FEV1: new FormControl(''),
  motor2_280_347_164FEA1: new FormControl(''),
  motor3_280_347_164FEH1: new FormControl(''),
  motor1_281_348_165DEV1: new FormControl(''),
  motor2_281_348_165DEA1: new FormControl(''),
  motor3_281_348_165DEH1: new FormControl(''),
  comp1_282_349_166DEV1: new FormControl(''),
  comp2_282_349_166DEA1: new FormControl(''),
  comp3_282_349_166DEH1: new FormControl(''),
  comp1_283_350_167FEV1: new FormControl(''),
  comp2_283_350_167FEA1: new FormControl(''),
  comp3_283_350_167FEH1: new FormControl(''),

  // AVCAT RECIRCULATING PUMP - Attenuation across SV mounts
  top_1_5_284_351_168: new FormControl(''),
  top_1_6_284_351_168: new FormControl(''),
  top_1_7_284_351_168: new FormControl(''),
  top_1_8_284_351_168: new FormControl(''),
  bot_1_5_285_352_169: new FormControl(''),
  bot_1_6_285_352_169: new FormControl(''),
  bot_1_7_285_352_169: new FormControl(''),
  bot_1_8_285_352_169: new FormControl(''),
  att_1_5_286_353_170: new FormControl(''),
  att_1_6_286_353_170: new FormControl(''),
  att_1_7_286_353_170: new FormControl(''),
  att_1_8_286_353_170: new FormControl(''),

  // OIL WATER SEPERATOR - Safety devices checks
  no1aAER_263_330_171: new FormControl(''),
  no2aFER_263_330_171: new FormControl(''),
  no1bAER_264_331_172: new FormControl(''),
  no2bFER_264_331_172: new FormControl(''),

  // OIL WATER SEPERATOR - Performance Parameters
  no1aAER_263_330_173: new FormControl(''),
  no2aFER_263_330_173: new FormControl(''),
  no1bAER_264_331_174: new FormControl(''),
  no2bFER_264_331_174: new FormControl(''),
  no1cAER_265_332_175: new FormControl(''),
  no2cFER_265_332_175: new FormControl(''),
  no1dAER_266_333_176: new FormControl(''),
  no2dFER_266_333_176: new FormControl(''),

  // OIL WATER SEPERATOR - SPM Levels
  fe1_278_345_177: new FormControl(''),
  fe2_278_345_177: new FormControl(''),
  de1_279_346_178: new FormControl(''),
  de2_279_346_178: new FormControl('')

});
  }

  ngOnInit(): void {
    this.getDelhiRefitSix();
  }

    getDelhiRefitSix(): void {
    this.http.get(this.apiUrl + "/trial-id=1").subscribe(data => {
      console.log(data);
      this.delhiRefitSixData = data;
      this.DelhiRefit_six.patchValue(this.delhiRefitSixData);

    });
  }

  onSubmit() {
    const formData = this.DelhiRefit_six.value;
    this.http.post(this.apiUrl, formData).subscribe(() => {
      this.getDelhiRefitSix(); // Refresh list
      console.log(this.DelhiRefit_six.value);  // { name: '...', email: '...', age: '...' }
    });

  }


}
