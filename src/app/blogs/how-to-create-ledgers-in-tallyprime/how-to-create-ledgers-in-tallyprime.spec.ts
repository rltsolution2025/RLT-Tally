import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HowToCreateLedgersInTallyprime } from './how-to-create-ledgers-in-tallyprime';

describe('HowToCreateLedgersInTallyprime', () => {
  let component: HowToCreateLedgersInTallyprime;
  let fixture: ComponentFixture<HowToCreateLedgersInTallyprime>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HowToCreateLedgersInTallyprime]
    })
      .compileComponents();

    fixture = TestBed.createComponent(HowToCreateLedgersInTallyprime);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
