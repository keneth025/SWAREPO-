import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningMapsDialogComponent } from './learning-maps-dialog.component';

describe('LearningMapsDialogComponent', () => {
  let component: LearningMapsDialogComponent;
  let fixture: ComponentFixture<LearningMapsDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearningMapsDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearningMapsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
