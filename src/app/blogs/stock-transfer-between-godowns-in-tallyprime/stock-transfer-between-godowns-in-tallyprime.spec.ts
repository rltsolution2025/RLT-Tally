import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StockTransferBetweenGodownsInTallyprime } from './stock-transfer-between-godowns-in-tallyprime';

describe('StockTransferBetweenGodownsInTallyprime', () => {
  let component: StockTransferBetweenGodownsInTallyprime;
  let fixture: ComponentFixture<StockTransferBetweenGodownsInTallyprime>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StockTransferBetweenGodownsInTallyprime]
    })
      .compileComponents();

    fixture = TestBed.createComponent(StockTransferBetweenGodownsInTallyprime);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
