import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageStartComponent } from './manage-start.component';

describe('ManageStartComponent', () => {
  let component: ManageStartComponent;
  let fixture: ComponentFixture<ManageStartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageStartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
