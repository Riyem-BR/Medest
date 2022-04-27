import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObesityComponent } from './obesity.component';

describe('ObesityComponent', () => {
  let component: ObesityComponent;
  let fixture: ComponentFixture<ObesityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObesityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ObesityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
