import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TallyprimeSalesPurchaseShortcutKeys } from './tallyprime-sales-purchase-shortcut-keys';

describe('TallyprimeSalesPurchaseShortcutKeys', () => {
  let component: TallyprimeSalesPurchaseShortcutKeys;
  let fixture: ComponentFixture<TallyprimeSalesPurchaseShortcutKeys>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TallyprimeSalesPurchaseShortcutKeys]
    })
      .compileComponents();

    fixture = TestBed.createComponent(TallyprimeSalesPurchaseShortcutKeys);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
