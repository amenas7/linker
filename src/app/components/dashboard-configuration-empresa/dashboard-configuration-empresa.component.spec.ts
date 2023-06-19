import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardConfigurationEmpresaComponent } from './dashboard-configuration-empresa.component';

describe('DashboardConfigurationEmpresaComponent', () => {
  let component: DashboardConfigurationEmpresaComponent;
  let fixture: ComponentFixture<DashboardConfigurationEmpresaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardConfigurationEmpresaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardConfigurationEmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
