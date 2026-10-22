import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TallyprimeTipsToReduceManualAccountingWork } from './tallyprime-tips-to-reduce-manual-accounting-work';

describe('TallyprimeTipsToReduceManualAccountingWork', () => {
  let component: TallyprimeTipsToReduceManualAccountingWork;
  let fixture: ComponentFixture<TallyprimeTipsToReduceManualAccountingWork>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TallyprimeTipsToReduceManualAccountingWork]
    })
      .compileComponents();

    fixture = TestBed.createComponent(TallyprimeTipsToReduceManualAccountingWork);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
