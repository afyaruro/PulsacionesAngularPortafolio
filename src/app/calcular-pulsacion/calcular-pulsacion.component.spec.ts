import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcularPulsacionComponent } from './calcular-pulsacion.component';

describe('CalcularPulsacionComponent', () => {
  let component: CalcularPulsacionComponent;
  let fixture: ComponentFixture<CalcularPulsacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalcularPulsacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalcularPulsacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
