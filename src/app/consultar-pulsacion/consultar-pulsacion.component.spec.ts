import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarPulsacionComponent } from './consultar-pulsacion.component';

describe('ConsultarPulsacionComponent', () => {
  let component: ConsultarPulsacionComponent;
  let fixture: ComponentFixture<ConsultarPulsacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultarPulsacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultarPulsacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
