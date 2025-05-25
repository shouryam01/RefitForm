import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelhiRefitSixComponent } from './delhi-refit-six.component';

describe('DelhiRefitSixComponent', () => {
  let component: DelhiRefitSixComponent;
  let fixture: ComponentFixture<DelhiRefitSixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DelhiRefitSixComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DelhiRefitSixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
