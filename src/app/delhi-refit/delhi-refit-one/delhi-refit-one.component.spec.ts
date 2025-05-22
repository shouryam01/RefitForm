import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelhiRefitOneComponent } from './delhi-refit-one.component';

describe('DelhiRefitOneComponent', () => {
  let component: DelhiRefitOneComponent;
  let fixture: ComponentFixture<DelhiRefitOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DelhiRefitOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DelhiRefitOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
