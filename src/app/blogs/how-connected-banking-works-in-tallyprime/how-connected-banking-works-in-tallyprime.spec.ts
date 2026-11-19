import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HowConnectedBankingWorksInTallyprime } from './how-connected-banking-works-in-tallyprime';

describe('HowConnectedBankingWorksInTallyprime', () => {
  let component: HowConnectedBankingWorksInTallyprime;
  let fixture: ComponentFixture<HowConnectedBankingWorksInTallyprime>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HowConnectedBankingWorksInTallyprime]
    })
      .compileComponents();

    fixture = TestBed.createComponent(HowConnectedBankingWorksInTallyprime);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
