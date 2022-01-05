import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovecompanyComponent } from './approvecompany.component';

describe('ApprovecompanyComponent', () => {
  let component: ApprovecompanyComponent;
  let fixture: ComponentFixture<ApprovecompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApprovecompanyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprovecompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
