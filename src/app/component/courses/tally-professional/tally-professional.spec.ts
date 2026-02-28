import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TallyProfessional } from './tally-professional';

describe('TallyProfessional', () => {
  let component: TallyProfessional;
  let fixture: ComponentFixture<TallyProfessional>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TallyProfessional]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TallyProfessional);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
