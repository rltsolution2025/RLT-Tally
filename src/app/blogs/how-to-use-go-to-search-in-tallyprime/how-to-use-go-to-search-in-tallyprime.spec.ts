import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HowToUseGoToSearchInTallyprime } from './how-to-use-go-to-search-in-tallyprime';

describe('HowToUseGoToSearchInTallyprime', () => {
  let component: HowToUseGoToSearchInTallyprime;
  let fixture: ComponentFixture<HowToUseGoToSearchInTallyprime>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HowToUseGoToSearchInTallyprime]
    })
      .compileComponents();

    fixture = TestBed.createComponent(HowToUseGoToSearchInTallyprime);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
