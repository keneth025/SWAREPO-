import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCurriculumDialogComponent } from './edit-curriculum-dialog.component';

describe('EditCurriculumDialogComponent', () => {
  let component: EditCurriculumDialogComponent;
  let fixture: ComponentFixture<EditCurriculumDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditCurriculumDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCurriculumDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
