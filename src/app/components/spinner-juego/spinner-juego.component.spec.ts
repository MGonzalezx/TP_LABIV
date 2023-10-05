import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpinnerJuegoComponent } from './spinner-juego.component';

describe('SpinnerJuegoComponent', () => {
  let component: SpinnerJuegoComponent;
  let fixture: ComponentFixture<SpinnerJuegoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpinnerJuegoComponent]
    });
    fixture = TestBed.createComponent(SpinnerJuegoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
