import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TallyprimeVoucherTypesExplainedWithExamples } from './tallyprime-voucher-types-explained-with-examples';

describe('TallyprimeVoucherTypesExplainedWithExamples', () => {
  let component: TallyprimeVoucherTypesExplainedWithExamples;
  let fixture: ComponentFixture<TallyprimeVoucherTypesExplainedWithExamples>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TallyprimeVoucherTypesExplainedWithExamples]
    })
      .compileComponents();

    fixture = TestBed.createComponent(TallyprimeVoucherTypesExplainedWithExamples);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
