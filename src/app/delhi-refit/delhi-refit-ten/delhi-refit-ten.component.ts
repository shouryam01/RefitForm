import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-delhi-refit-ten',
  templateUrl: './delhi-refit-ten.component.html',
  styleUrls: ['./delhi-refit-ten.component.scss']
})
export class DelhiRefitTenComponent implements OnInit {
DelhiRefit_ten: any
  delhiRefitTenData: any;
    apiUrl = environment.apiUrl + 'delhi-refit-ten';
  
  constructor(private fb: FormBuilder, private http:HttpClient) {
this.DelhiRefit_ten = this.fb.group({
    Eng_room_Sprink1 : new FormControl(""),
    Eng_room_Sprink2 : new FormControl(""),
    Eng_room_Sprink3 : new FormControl(""),
    Eng_room_Sprink4 : new FormControl(""),
    Eng_room_system_compre : new FormControl(""),
    Eng_room_Sufficient_light : new FormControl(""),
    Eng_room_test_area_clean : new FormControl(""),
    Eng_room_pipes_clamps : new FormControl(""),
    Eng_room_talley_plats_gauge : new FormControl(""),
    Eng_room_nozzle_bag : new FormControl(""),
    Eng_room_inlet_QOV : new FormControl(""),
    Eng_Spr_Piping_pipelines : new FormControl(""),
    Eng_Spr_Piping_Flange : new FormControl(""),
    Eng_Spr_Piping_Gaskets : new FormControl(""),
    Eng_Spr_Piping_Adapters : new FormControl(""),
    Eng_Spr_Piping_System_Integrity : new FormControl(""),
    Eng_Spr_Piping_Leakage_checks : new FormControl(""),
    Eng_spr_valve01 : new FormControl(""),
    Eng_spr_valve02 : new FormControl(""),
    Eng_spr_valve03 : new FormControl(""),
    Eng_spr_valve04 : new FormControl(""),
    Eng_spr_valve05 : new FormControl(""),
    Eng_spr_valve06 : new FormControl(""),
    Eng_spr_valve07 : new FormControl(""),
    Eng_spr_Instru_01 : new FormControl(""),
    Eng_spr_Instru_02 : new FormControl(""),
    Eng_spr_Instru_03 : new FormControl(""),
    Eng_spr_Instru_04 : new FormControl(""),
    Eng_spr_Instru_05 : new FormControl(""),
    Eng_spr_Instru_06 : new FormControl(""),
    Eng_spr_Instru_07 : new FormControl(""),
    Eng_spr_Instru_08 : new FormControl(""),
    Sea_water_pump1 : new FormControl(""),
    Sea_water_pump2 : new FormControl(""),
    Sea_water_pump3 : new FormControl(""),
    Sea_water_pump4 : new FormControl(""),
    Sea_water_pump5 : new FormControl(""),
    Sea_water_pump6 : new FormControl(""),
    Sea_water_pump7 : new FormControl(""),
    Sea_water_pump_suction1 : new FormControl(""),
    Sea_water_pump_discharge1 : new FormControl(""),
    Sea_water_sys_install : new FormControl(""),
    Sea_water_conn1 : new FormControl(""),
    Sea_water_pipes : new FormControl(""),
    Sea_water_pipes_clamps : new FormControl(""),
    Sea_water_Sufficient_light : new FormControl(""),
    Sea_water_talley_plats_gauge : new FormControl(""),
    Sea_water_cooling_pump1 : new FormControl(""),
    Sea_water_cooling_pump2 : new FormControl(""),
    Sea_water_cooling_pump3 : new FormControl(""),
    Sea_water_cooling_pump4 : new FormControl(""),
    Sea_water_cooling_pump5 : new FormControl(""),
    Sea_water_cooling_pump6 : new FormControl(""),
    Sea_water_piping_Compen : new FormControl(""),
    Sea_water_piping_Flange : new FormControl(""),
    Sea_water_piping_Gaskets : new FormControl(""),
    Sea_water_piping_Adapters : new FormControl(""),
    Sea_water_piping_Suction_HPAC1 : new FormControl(""),
    Sea_water_piping_System_Integrity : new FormControl(""),
    Piping_lub_oil_Supporting_clamps : new FormControl(""),
    Sea_water_valve01 : new FormControl(""),
    Sea_water_valve02 : new FormControl(""),
    Sea_water_valve03 : new FormControl(""),
    Sea_water_valve04 : new FormControl(""),
    Sea_water_valve05 : new FormControl(""),
    Sea_water_valve06 : new FormControl(""),
    Sea_water_valve07 : new FormControl(""),
    Sea_water_valve_suction01 : new FormControl(""),
    Sea_water_valve_suction02 : new FormControl(""),
    Sea_water_valve_suction03 : new FormControl(""),
    Sea_water_valve_suction04 : new FormControl(""),
    Sea_water_valve_suction05 : new FormControl(""),
    Sea_water_valve_suction06 : new FormControl(""),
    Sea_water_valve_suction07 : new FormControl(""),
    Sea_water_valve_disc01 : new FormControl(""),
    Sea_water_valve_disc02 : new FormControl(""),
    Sea_water_valve_disc03 : new FormControl(""),
    Sea_water_valve_disc04 : new FormControl(""),
    Sea_water_valve_disc05 : new FormControl(""),
    Sea_water_valve_disc06 : new FormControl(""),
    Sea_water_valve_disc07 : new FormControl(""),
    Sea_water_cooling_iso_valv : new FormControl(""),
    Sea_water_stern_valv : new FormControl(""),
    Sea_water_instrumentation_01 : new FormControl(""),
    Sea_water_instrumentation_02 : new FormControl(""),
    Sea_water_foundation_remark_01 : new FormControl(""),
    Sea_water_foundation_remark_02 : new FormControl(""),
    Sea_water_foundation_remark_03 : new FormControl(""),
    Sea_water_foundation_remark_04 : new FormControl(""),
    Sea_water_foundation_remark_05 : new FormControl(""),
    Sea_water_foundation_remark_06 : new FormControl(""),
    Sea_water_foundation_remark_07 : new FormControl(""),
    Sea_water_mounting_remark_01 : new FormControl(""),
    Sea_water_mounting_remark_02 : new FormControl(""),
    Sea_water_mounting_remark_03 : new FormControl(""),
    Halon_system1 : new FormControl(""),
    Halon_system2 : new FormControl(""),
    Halon_system3 : new FormControl(""),
    Halon_system4 : new FormControl(""),
    Halon_system5 : new FormControl(""),
    Halon_system6 : new FormControl(""),
    Halon_system7 : new FormControl(""),
    Halon_system8 : new FormControl(""),
    Halon_system9 : new FormControl(""),
    Halon_system10 : new FormControl(""),
    Halon_system11 : new FormControl(""),
    Halon_system12 : new FormControl(""),
    Halon_system13 : new FormControl(""),
    Halon_system14 : new FormControl(""),
    Halon_system15 : new FormControl(""),
    Halon_system16 : new FormControl(""),
    Halon_system17 : new FormControl(""),
    Halon_system18 : new FormControl(""),
    Halon_system19 : new FormControl(""),
    Halon_system20 : new FormControl(""),
    Halon_system21 : new FormControl(""),
    Halon_system22 : new FormControl(""),
    Halon_system23 : new FormControl(""),
    Halon_system24 : new FormControl(""),
    Halon_system25 : new FormControl(""),
    Halon_system26 : new FormControl(""),
    Halon_system27 : new FormControl(""),
    Halon_system28 : new FormControl(""),
    Halon_system29 : new FormControl(""),
    Halon_system30 : new FormControl(""),
    Halon_system_31 : new FormControl(""),
    Halon_system_32 : new FormControl(""),
    Halon_system_33 : new FormControl(""),
    Halon_system_34 : new FormControl(""),
    Halon_system_35 : new FormControl(""),
    Halon_system_36 : new FormControl(""),
    Halon_system_37 : new FormControl(""),
    Halon_system_38 : new FormControl(""),
    Halon_system39 : new FormControl(""),
    Halon_system40 : new FormControl(""),
    Halon_system41 : new FormControl(""),
    Halon_system42 : new FormControl(""),
    Halon_system43 : new FormControl(""),
    Halon_system44 : new FormControl(""),
    Halon_system45 : new FormControl(""),
    Halon_system46 : new FormControl(""),
    Halon_system47 : new FormControl(""),
    Halon_system48 : new FormControl(""),
    Halon_system49 : new FormControl(""),
    Halon_system50 : new FormControl(""),
    Halon_system51 : new FormControl(""),
    Halon_system_51 : new FormControl(""),
    Halon_system_52 : new FormControl(""),
    Halon_system_53 : new FormControl(""),
    Halon_system_54 : new FormControl(""),
    Halon_system_55 : new FormControl(""),
    Halon_system_56 : new FormControl(""),
    Halon_system_57 : new FormControl(""),
    Halon_system_58 : new FormControl(""),
    Halon_system_59 : new FormControl(""),
    Halon_system_61 : new FormControl(""),
    Halon_system_62 : new FormControl(""),
    Halon_system_63 : new FormControl(""),
    Halon_system_64 : new FormControl(""),
    Halon_system_65 : new FormControl(""),
    Halon_system_66 : new FormControl(""),
    Halon_system_67 : new FormControl(""),
    Halon_system_68 : new FormControl(""),
    Halon_system_69 : new FormControl(""),
    Halon_system_70 : new FormControl(""),
    Halon_system_71 : new FormControl(""),
    Halon_system_72 : new FormControl(""),
    Halon_system_73 : new FormControl(""),
    Halon_system_74 : new FormControl(""),
    Halon_system_75 : new FormControl(""),
    Halon_system_76 : new FormControl(""),
    Halon_system_77 : new FormControl(""),
    Halon_system_78 : new FormControl(""),
    Halon_system_79 : new FormControl(""),
    Halon_system_80 : new FormControl(""),
    Halon_system_81 : new FormControl(""),
    Halon_system_82 : new FormControl(""),
    Halon_system_83 : new FormControl(""),
    Halon_system_84 : new FormControl(""),
    Halon_system_85 : new FormControl(""),
    Halon_system_86 : new FormControl(""),
    Halon_system_87 : new FormControl(""),
    Halon_system_88 : new FormControl(""),
    Halon_system_89 : new FormControl(""),
    Halon_system_90 : new FormControl(""),
    Halon_system_91 : new FormControl(""),
    Halon_system_92 : new FormControl(""),
    Halon_system_93 : new FormControl(""),
    Halon_system_94 : new FormControl(""),
    Halon_system_95 : new FormControl(""),
    Halon_system_96 : new FormControl(""),
    Halon_system_97 : new FormControl(""),
    Halon_system_98 : new FormControl(""),
    Halon_system_99 : new FormControl(""),
    Halon_system_100 : new FormControl(""),
    Halon_system_101 : new FormControl(""),
    Halon_system_102 : new FormControl(""),
    Halon_system_103 : new FormControl(""),
    Halon_system_104 : new FormControl(""),
    Halon_system_105 : new FormControl(""),
    Halon_system_106 : new FormControl(""),
    Halon_system_107 : new FormControl(""),
    Halon_system_108 : new FormControl(""),
    Halon_system_109 : new FormControl(""),
    Halon_system_110 : new FormControl(""),
    Halon_system_111 : new FormControl(""),
    Halon_system_112 : new FormControl(""),
    Halon_system_113 : new FormControl(""),
    Halon_system_114 : new FormControl(""),
    Halon_system_115 : new FormControl(""),
    Halon_system_116 : new FormControl(""),
    Halon_system_117 : new FormControl(""),
    Halon_system_118 : new FormControl(""),
    Halon_system_119 : new FormControl(""),
    Halon_system_120 : new FormControl(""),
    Halon_system_121 : new FormControl(""),
    Halon_system_122 : new FormControl(""),
    Halon_system_123 : new FormControl(""),
    Halon_system_124 : new FormControl(""),
    Halon_system_125 : new FormControl(""),
    Halon_system_126 : new FormControl(""),
    Halon_system_127 : new FormControl(""),
    Halon_system_128 : new FormControl(""),
    Halon_system_129 : new FormControl(""),
    Halon_system_130 : new FormControl(""),
    Halon_system_131 : new FormControl(""),
    Halon_system_132 : new FormControl(""),
    Halon_system_133 : new FormControl(""),
    Halon_system_134 : new FormControl(""),
    Halon_system_135 : new FormControl(""),
    Halon_system_136 : new FormControl(""),
    Halon_system_137 : new FormControl(""),
    Halon_system_138 : new FormControl(""),
    Halon_system_139 : new FormControl(""),
    Halon_system_140 : new FormControl(""),
    Halon_system_141 : new FormControl(""),
    Halon_system_142 : new FormControl(""),
    Halon_system_143 : new FormControl(""),

});
   }

  ngOnInit(): void {
    this.getDelhiRefitNine()
  }

    getDelhiRefitNine(): void {
    this.http.get(this.apiUrl+ "/trial-id=1").subscribe(data => {
      console.log(data);
      this.delhiRefitTenData = data;
      this.DelhiRefit_ten.patchValue(this.delhiRefitTenData);

    });
  }

  onSubmit() {
    const formData = this.DelhiRefit_ten.value;
    this.http.post(this.apiUrl, formData).subscribe(() => {
      this.getDelhiRefitNine(); // Refresh list
  console.log(this.DelhiRefit_ten.value);  // { name: '...', email: '...', age: '...' }
});

}
}
