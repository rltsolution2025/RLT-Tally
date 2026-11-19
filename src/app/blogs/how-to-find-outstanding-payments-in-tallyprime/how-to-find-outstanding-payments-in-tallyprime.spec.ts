import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HowToFindOutstandingPaymentsInTallyprime } from './how-to-find-outstanding-payments-in-tallyprime';

describe('HowToFindOutstandingPaymentsInTallyprime', () => {
  let component: HowToFindOutstandingPaymentsInTallyprime;
  let fixture: ComponentFixture<HowToFindOutstandingPaymentsInTallyprime>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HowToFindOutstandingPaymentsInTallyprime]
    })
      .compileComponents();

    fixture = TestBed.createComponent(HowToFindOutstandingPaymentsInTallyprime);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
