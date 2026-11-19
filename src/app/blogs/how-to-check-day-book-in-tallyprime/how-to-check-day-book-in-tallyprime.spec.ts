import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HowToCheckDayBookInTallyprime } from './how-to-check-day-book-in-tallyprime';

describe('HowToCheckDayBookInTallyprime', () => {
  let component: HowToCheckDayBookInTallyprime;
  let fixture: ComponentFixture<HowToCheckDayBookInTallyprime>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HowToCheckDayBookInTallyprime]
    })
      .compileComponents();

    fixture = TestBed.createComponent(HowToCheckDayBookInTallyprime);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
