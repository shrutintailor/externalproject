import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumereportComponent } from './resumereport.component';

describe('ResumereportComponent', () => {
  let component: ResumereportComponent;
  let fixture: ComponentFixture<ResumereportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResumereportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumereportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
