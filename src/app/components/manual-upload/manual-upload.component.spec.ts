import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManualUploadComponent } from './manual-upload.component';

describe('ManualUploadComponent', () => {
  let component: ManualUploadComponent;
  let fixture: ComponentFixture<ManualUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManualUploadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManualUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
