import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GSTSimulation } from './gst-simulation';

describe('GSTSimulation', () => {
  let component: GSTSimulation;
  let fixture: ComponentFixture<GSTSimulation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GSTSimulation]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GSTSimulation);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
