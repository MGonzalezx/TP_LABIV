import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdivinarNumeroComponent } from './adivinar-numero.component';

describe('AdivinarNumeroComponent', () => {
  let component: AdivinarNumeroComponent;
  let fixture: ComponentFixture<AdivinarNumeroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdivinarNumeroComponent]
    });
    fixture = TestBed.createComponent(AdivinarNumeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
