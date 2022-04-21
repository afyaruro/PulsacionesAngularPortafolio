import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PulsacionesComponent } from './pulsaciones.component';

describe('PulsacionesComponent', () => {
  let component: PulsacionesComponent;
  let fixture: ComponentFixture<PulsacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PulsacionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PulsacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
