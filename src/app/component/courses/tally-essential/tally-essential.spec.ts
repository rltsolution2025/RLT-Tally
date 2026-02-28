import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TallyEssential } from './tally-essential';

describe('TallyEssential', () => {
  let component: TallyEssential;
  let fixture: ComponentFixture<TallyEssential>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TallyEssential]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TallyEssential);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
