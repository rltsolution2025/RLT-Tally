import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TrackReceivablesAndPayablesInTallyprime } from './track-receivables-and-payables-in-tallyprime';

describe('TrackReceivablesAndPayablesInTallyprime', () => {
  let component: TrackReceivablesAndPayablesInTallyprime;
  let fixture: ComponentFixture<TrackReceivablesAndPayablesInTallyprime>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrackReceivablesAndPayablesInTallyprime]
    })
      .compileComponents();

    fixture = TestBed.createComponent(TrackReceivablesAndPayablesInTallyprime);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
