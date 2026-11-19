import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HowToViewLedgerReportsInTallyprime } from './how-to-view-ledger-reports-in-tallyprime';

describe('HowToViewLedgerReportsInTallyprime', () => {
  let component: HowToViewLedgerReportsInTallyprime;
  let fixture: ComponentFixture<HowToViewLedgerReportsInTallyprime>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HowToViewLedgerReportsInTallyprime]
    })
      .compileComponents();

    fixture = TestBed.createComponent(HowToViewLedgerReportsInTallyprime);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
