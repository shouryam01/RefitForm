import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelhiRefitTwoComponent } from './delhi-refit-two.component';

describe('DelhiRefitTwoComponent', () => {
  let component: DelhiRefitTwoComponent;
  let fixture: ComponentFixture<DelhiRefitTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DelhiRefitTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DelhiRefitTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
