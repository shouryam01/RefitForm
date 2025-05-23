import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelhiRefitFourComponent } from './delhi-refit-four.component';

describe('DelhiRefitFourComponent', () => {
  let component: DelhiRefitFourComponent;
  let fixture: ComponentFixture<DelhiRefitFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DelhiRefitFourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DelhiRefitFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
