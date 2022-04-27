import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HemodialysisComponent } from './hemodialysis.component';

describe('HemodialysisComponent', () => {
  let component: HemodialysisComponent;
  let fixture: ComponentFixture<HemodialysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HemodialysisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HemodialysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
