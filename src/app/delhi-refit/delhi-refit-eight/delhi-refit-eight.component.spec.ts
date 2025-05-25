import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelhiRefitEightComponent } from './delhi-refit-eight.component';

describe('DelhiRefitEightComponent', () => {
  let component: DelhiRefitEightComponent;
  let fixture: ComponentFixture<DelhiRefitEightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DelhiRefitEightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DelhiRefitEightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
