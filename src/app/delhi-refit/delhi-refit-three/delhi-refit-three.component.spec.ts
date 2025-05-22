import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelhiRefitThreeComponent } from './delhi-refit-three.component';

describe('DelhiRefitThreeComponent', () => {
  let component: DelhiRefitThreeComponent;
  let fixture: ComponentFixture<DelhiRefitThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DelhiRefitThreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DelhiRefitThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
