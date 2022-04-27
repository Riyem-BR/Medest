import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SterilityComponent } from './sterility.component';

describe('SterilityComponent', () => {
  let component: SterilityComponent;
  let fixture: ComponentFixture<SterilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SterilityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SterilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
