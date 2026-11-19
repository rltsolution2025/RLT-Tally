import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HowToImportBankStatementsInTallyprime } from './how-to-import-bank-statements-in-tallyprime';

describe('HowToImportBankStatementsInTallyprime', () => {
  let component: HowToImportBankStatementsInTallyprime;
  let fixture: ComponentFixture<HowToImportBankStatementsInTallyprime>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HowToImportBankStatementsInTallyprime]
    })
      .compileComponents();

    fixture = TestBed.createComponent(HowToImportBankStatementsInTallyprime);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
