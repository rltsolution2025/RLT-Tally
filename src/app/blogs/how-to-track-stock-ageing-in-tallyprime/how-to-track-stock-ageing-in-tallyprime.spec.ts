import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HowToTrackStockAgeingInTallyprime } from './how-to-track-stock-ageing-in-tallyprime';

describe('HowToTrackStockAgeingInTallyprime', () => {
  let component: HowToTrackStockAgeingInTallyprime;
  let fixture: ComponentFixture<HowToTrackStockAgeingInTallyprime>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HowToTrackStockAgeingInTallyprime]
    })
      .compileComponents();

    fixture = TestBed.createComponent(HowToTrackStockAgeingInTallyprime);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
