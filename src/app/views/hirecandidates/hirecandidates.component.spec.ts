import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HirecandidatesComponent } from './hirecandidates.component';

describe('HirecandidatesComponent', () => {
  let component: HirecandidatesComponent;
  let fixture: ComponentFixture<HirecandidatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HirecandidatesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HirecandidatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
