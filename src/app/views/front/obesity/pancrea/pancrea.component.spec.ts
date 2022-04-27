import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PancreaComponent } from './pancrea.component';

describe('PancreaComponent', () => {
  let component: PancreaComponent;
  let fixture: ComponentFixture<PancreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PancreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PancreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
