import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelhiRefitNineComponent } from './delhi-refit-nine.component';

describe('DelhiRefitNineComponent', () => {
  let component: DelhiRefitNineComponent;
  let fixture: ComponentFixture<DelhiRefitNineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DelhiRefitNineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DelhiRefitNineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
