import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HowToTrackStockMovementInTallyprime } from './how-to-track-stock-movement-in-tallyprime';

describe('HowToTrackStockMovementInTallyprime', () => {
  let component: HowToTrackStockMovementInTallyprime;
  let fixture: ComponentFixture<HowToTrackStockMovementInTallyprime>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HowToTrackStockMovementInTallyprime]
    })
      .compileComponents();

    fixture = TestBed.createComponent(HowToTrackStockMovementInTallyprime);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
