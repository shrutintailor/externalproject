import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyapproveresumeComponent } from './companyapproveresume.component';

describe('CompanyapproveresumeComponent', () => {
  let component: CompanyapproveresumeComponent;
  let fixture: ComponentFixture<CompanyapproveresumeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyapproveresumeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyapproveresumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
