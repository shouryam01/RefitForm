import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelhiRefitNewComponent } from './delhi-refit-new.component';

describe('DelhiRefitNewComponent', () => {
  let component: DelhiRefitNewComponent;
  let fixture: ComponentFixture<DelhiRefitNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DelhiRefitNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DelhiRefitNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
