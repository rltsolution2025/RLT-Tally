import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HowToCreateStockGroupsAndCategoriesInTallyprime } from './how-to-create-stock-groups-and-categories-in-tallyprime';

describe('HowToCreateStockGroupsAndCategoriesInTallyprime', () => {
  let component: HowToCreateStockGroupsAndCategoriesInTallyprime;
  let fixture: ComponentFixture<HowToCreateStockGroupsAndCategoriesInTallyprime>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HowToCreateStockGroupsAndCategoriesInTallyprime]
    })
      .compileComponents();

    fixture = TestBed.createComponent(HowToCreateStockGroupsAndCategoriesInTallyprime);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
