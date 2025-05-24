import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelhiRefitTwooComponent } from './delhi-refit-twoo.component';

describe('DelhiRefitTwooComponent', () => {
  let component: DelhiRefitTwooComponent;
  let fixture: ComponentFixture<DelhiRefitTwooComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DelhiRefitTwooComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DelhiRefitTwooComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
