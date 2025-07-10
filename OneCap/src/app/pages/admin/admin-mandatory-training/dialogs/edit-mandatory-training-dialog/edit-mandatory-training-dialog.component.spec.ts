import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMandatoryTrainingDialogComponent } from './edit-mandatory-training-dialog.component';

describe('EditMandatoryTrainingDialogComponent', () => {
  let component: EditMandatoryTrainingDialogComponent;
  let fixture: ComponentFixture<EditMandatoryTrainingDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditMandatoryTrainingDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditMandatoryTrainingDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
