import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelhiRefitFiveeComponent } from './delhi-refit-fivee.component';

describe('DelhiRefitFiveeComponent', () => {
  let component: DelhiRefitFiveeComponent;
  let fixture: ComponentFixture<DelhiRefitFiveeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DelhiRefitFiveeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DelhiRefitFiveeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
