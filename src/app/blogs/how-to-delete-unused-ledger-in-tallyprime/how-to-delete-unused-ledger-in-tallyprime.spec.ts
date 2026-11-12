import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HowToDeleteUnusedLedgerInTallyprime } from './how-to-delete-unused-ledger-in-tallyprime';

describe('HowToDeleteUnusedLedgerInTallyprime', () => {
  let component: HowToDeleteUnusedLedgerInTallyprime;
  let fixture: ComponentFixture<HowToDeleteUnusedLedgerInTallyprime>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HowToDeleteUnusedLedgerInTallyprime]
    })
      .compileComponents();

    fixture = TestBed.createComponent(HowToDeleteUnusedLedgerInTallyprime);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
