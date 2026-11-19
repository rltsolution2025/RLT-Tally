import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HowToSetReorderLevelsInTallyprime } from './how-to-set-reorder-levels-in-tallyprime';

describe('HowToSetReorderLevelsInTallyprime', () => {
  let component: HowToSetReorderLevelsInTallyprime;
  let fixture: ComponentFixture<HowToSetReorderLevelsInTallyprime>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HowToSetReorderLevelsInTallyprime]
    })
      .compileComponents();

    fixture = TestBed.createComponent(HowToSetReorderLevelsInTallyprime);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
