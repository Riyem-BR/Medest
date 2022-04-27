import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddinterventionsComponent } from './addinterventions.component';

describe('AddinterventionsComponent', () => {
  let component: AddinterventionsComponent;
  let fixture: ComponentFixture<AddinterventionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddinterventionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddinterventionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
