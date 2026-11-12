import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HowToCreateProformaInvoiceInTallyprime } from './how-to-create-proforma-invoice-in-tallyprime';

describe('HowToCreateProformaInvoiceInTallyprime', () => {
  let component: HowToCreateProformaInvoiceInTallyprime;
  let fixture: ComponentFixture<HowToCreateProformaInvoiceInTallyprime>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HowToCreateProformaInvoiceInTallyprime]
    })
      .compileComponents();

    fixture = TestBed.createComponent(HowToCreateProformaInvoiceInTallyprime);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
