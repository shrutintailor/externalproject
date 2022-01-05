import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RejectedresumeComponent } from './rejectedresume.component';

describe('RejectedresumeComponent', () => {
  let component: RejectedresumeComponent;
  let fixture: ComponentFixture<RejectedresumeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RejectedresumeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RejectedresumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
