import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproveresumeComponent } from './approveresume.component';

describe('ApproveresumeComponent', () => {
  let component: ApproveresumeComponent;
  let fixture: ComponentFixture<ApproveresumeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApproveresumeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApproveresumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
