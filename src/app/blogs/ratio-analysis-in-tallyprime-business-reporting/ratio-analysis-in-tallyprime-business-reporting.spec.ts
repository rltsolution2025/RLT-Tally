import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RatioAnalysisInTallyprimeBusinessReporting } from './ratio-analysis-in-tallyprime-business-reporting';

describe('RatioAnalysisInTallyprimeBusinessReporting', () => {
  let component: RatioAnalysisInTallyprimeBusinessReporting;
  let fixture: ComponentFixture<RatioAnalysisInTallyprimeBusinessReporting>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RatioAnalysisInTallyprimeBusinessReporting]
    })
      .compileComponents();

    fixture = TestBed.createComponent(RatioAnalysisInTallyprimeBusinessReporting);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
