import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertChangeFormComponent } from './insert-change-form.component';

describe('InsertChangeFormComponent', () => {
  let component: InsertChangeFormComponent;
  let fixture: ComponentFixture<InsertChangeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertChangeFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsertChangeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
