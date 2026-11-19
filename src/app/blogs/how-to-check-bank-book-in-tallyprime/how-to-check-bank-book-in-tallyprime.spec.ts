import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HowToCheckBankBookInTallyprime } from './how-to-check-bank-book-in-tallyprime';

describe('HowToCheckBankBookInTallyprime', () => {
  let component: HowToCheckBankBookInTallyprime;
  let fixture: ComponentFixture<HowToCheckBankBookInTallyprime>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HowToCheckBankBookInTallyprime]
    })
      .compileComponents();

    fixture = TestBed.createComponent(HowToCheckBankBookInTallyprime);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
