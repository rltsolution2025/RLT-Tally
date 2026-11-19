import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HowToManageBatchWiseInventoryInTallyprime } from './how-to-manage-batch-wise-inventory-in-tallyprime';

describe('HowToManageBatchWiseInventoryInTallyprime', () => {
  let component: HowToManageBatchWiseInventoryInTallyprime;
  let fixture: ComponentFixture<HowToManageBatchWiseInventoryInTallyprime>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HowToManageBatchWiseInventoryInTallyprime]
    })
      .compileComponents();

    fixture = TestBed.createComponent(HowToManageBatchWiseInventoryInTallyprime);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
