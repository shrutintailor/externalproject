import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyreportComponent } from './companyreport.component';

describe('CompanyreportComponent', () => {
  let component: CompanyreportComponent;
  let fixture: ComponentFixture<CompanyreportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyreportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
