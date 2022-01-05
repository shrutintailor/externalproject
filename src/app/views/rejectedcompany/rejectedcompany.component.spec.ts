import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RejectedcompanyComponent } from './rejectedcompany.component';

describe('RejectedcompanyComponent', () => {
  let component: RejectedcompanyComponent;
  let fixture: ComponentFixture<RejectedcompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RejectedcompanyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RejectedcompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
