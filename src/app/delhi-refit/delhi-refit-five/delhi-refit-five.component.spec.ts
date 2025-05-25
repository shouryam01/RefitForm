import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelhiRefitFiveComponent } from './delhi-refit-five.component';

describe('DelhiRefitFiveComponent', () => {
  let component: DelhiRefitFiveComponent;
  let fixture: ComponentFixture<DelhiRefitFiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DelhiRefitFiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DelhiRefitFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
