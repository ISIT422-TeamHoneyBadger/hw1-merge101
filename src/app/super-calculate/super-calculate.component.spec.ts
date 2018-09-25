import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperCalculateComponent } from './super-calculate.component';

describe('SuperCalculateComponent', () => {
  let component: SuperCalculateComponent;
  let fixture: ComponentFixture<SuperCalculateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuperCalculateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperCalculateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
