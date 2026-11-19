import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateStockItemsInTallyprime } from './create-stock-items-in-tallyprime';

describe('CreateStockItemsInTallyprime', () => {
  let component: CreateStockItemsInTallyprime;
  let fixture: ComponentFixture<CreateStockItemsInTallyprime>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateStockItemsInTallyprime]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CreateStockItemsInTallyprime);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
