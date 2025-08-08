import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadRegistrationDialogComponent } from './upload-registration-dialog.component';

describe('UploadRegistrationDialogComponent', () => {
  let component: UploadRegistrationDialogComponent;
  let fixture: ComponentFixture<UploadRegistrationDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadRegistrationDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadRegistrationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
