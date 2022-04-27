import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlicatureComponent } from './plicature.component';

describe('PlicatureComponent', () => {
  let component: PlicatureComponent;
  let fixture: ComponentFixture<PlicatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlicatureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlicatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
