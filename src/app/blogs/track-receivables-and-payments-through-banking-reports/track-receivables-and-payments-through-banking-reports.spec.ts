import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TrackReceivablesAndPaymentsThroughBankingReports } from './track-receivables-and-payments-through-banking-reports';

describe('TrackReceivablesAndPaymentsThroughBankingReports', () => {
  let component: TrackReceivablesAndPaymentsThroughBankingReports;
  let fixture: ComponentFixture<TrackReceivablesAndPaymentsThroughBankingReports>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrackReceivablesAndPaymentsThroughBankingReports]
    })
      .compileComponents();

    fixture = TestBed.createComponent(TrackReceivablesAndPaymentsThroughBankingReports);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
