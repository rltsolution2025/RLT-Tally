import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TallyprimeBankingFeaturesForAccountants } from './tallyprime-banking-features-for-accountants';

describe('TallyprimeBankingFeaturesForAccountants', () => {
  let component: TallyprimeBankingFeaturesForAccountants;
  let fixture: ComponentFixture<TallyprimeBankingFeaturesForAccountants>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TallyprimeBankingFeaturesForAccountants]
    })
      .compileComponents();

    fixture = TestBed.createComponent(TallyprimeBankingFeaturesForAccountants);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
