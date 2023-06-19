import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpresaRegistroComponent } from './empresa-registro.component';

describe('EmpresaRegistroComponent', () => {
  let component: EmpresaRegistroComponent;
  let fixture: ComponentFixture<EmpresaRegistroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpresaRegistroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpresaRegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
