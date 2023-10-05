import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonResetearComponent } from './button-resetear.component';

describe('ButtonResetearComponent', () => {
  let component: ButtonResetearComponent;
  let fixture: ComponentFixture<ButtonResetearComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonResetearComponent]
    });
    fixture = TestBed.createComponent(ButtonResetearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
