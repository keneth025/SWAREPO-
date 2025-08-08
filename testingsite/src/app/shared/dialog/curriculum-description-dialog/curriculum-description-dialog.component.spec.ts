import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurriculumDescriptionDialogComponent } from './curriculum-description-dialog.component';

describe('CurriculumDescriptionDialogComponent', () => {
  let component: CurriculumDescriptionDialogComponent;
  let fixture: ComponentFixture<CurriculumDescriptionDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurriculumDescriptionDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurriculumDescriptionDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
