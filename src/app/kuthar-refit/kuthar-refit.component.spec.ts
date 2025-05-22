import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KutharRefitComponent } from './kuthar-refit.component';

describe('KutharRefitComponent', () => {
  let component: KutharRefitComponent;
  let fixture: ComponentFixture<KutharRefitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KutharRefitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KutharRefitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
