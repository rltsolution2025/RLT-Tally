import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HowToCustomizeReportsInTallyprime } from './how-to-customize-reports-in-tallyprime';

describe('HowToCustomizeReportsInTallyprime', () => {
  let component: HowToCustomizeReportsInTallyprime;
  let fixture: ComponentFixture<HowToCustomizeReportsInTallyprime>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HowToCustomizeReportsInTallyprime]
    })
      .compileComponents();

    fixture = TestBed.createComponent(HowToCustomizeReportsInTallyprime);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
