import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMandatoryTrainingComponent } from './admin-mandatory-training.component';

describe('AdminMandatoryTrainingComponent', () => {
  let component: AdminMandatoryTrainingComponent;
  let fixture: ComponentFixture<AdminMandatoryTrainingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminMandatoryTrainingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminMandatoryTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
