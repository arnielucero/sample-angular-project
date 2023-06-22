import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectSourceObject } from './select-source-object';

describe('CsvUploadComponent', () => {
  let component: SelectSourceObject;
  let fixture: ComponentFixture<SelectSourceObject>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectSourceObject ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectSourceObject);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
