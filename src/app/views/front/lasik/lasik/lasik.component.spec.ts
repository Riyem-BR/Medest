import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LasikComponent } from './lasik.component';

describe('LasikComponent', () => {
  let component: LasikComponent;
  let fixture: ComponentFixture<LasikComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LasikComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LasikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
