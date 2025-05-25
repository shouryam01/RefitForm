import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelhiRefitSevenComponent } from './delhi-refit-seven.component';

describe('DelhiRefitSevenComponent', () => {
  let component: DelhiRefitSevenComponent;
  let fixture: ComponentFixture<DelhiRefitSevenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DelhiRefitSevenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DelhiRefitSevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
