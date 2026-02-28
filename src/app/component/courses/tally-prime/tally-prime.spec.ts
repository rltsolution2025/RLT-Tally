import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TallyPrime } from './tally-prime';

describe('TallyPrime', () => {
  let component: TallyPrime;
  let fixture: ComponentFixture<TallyPrime>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TallyPrime]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TallyPrime);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
