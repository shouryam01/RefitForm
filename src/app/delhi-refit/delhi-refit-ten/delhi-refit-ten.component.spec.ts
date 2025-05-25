import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelhiRefitTenComponent } from './delhi-refit-ten.component';

describe('DelhiRefitTenComponent', () => {
  let component: DelhiRefitTenComponent;
  let fixture: ComponentFixture<DelhiRefitTenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DelhiRefitTenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DelhiRefitTenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
