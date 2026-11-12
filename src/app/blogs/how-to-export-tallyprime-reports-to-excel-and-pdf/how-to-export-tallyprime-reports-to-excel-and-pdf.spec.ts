import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HowToExportTallyprimeReportsToExcelAndPdf } from './how-to-export-tallyprime-reports-to-excel-and-pdf';

describe('HowToExportTallyprimeReportsToExcelAndPdf', () => {
  let component: HowToExportTallyprimeReportsToExcelAndPdf;
  let fixture: ComponentFixture<HowToExportTallyprimeReportsToExcelAndPdf>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HowToExportTallyprimeReportsToExcelAndPdf]
    })
      .compileComponents();

    fixture = TestBed.createComponent(HowToExportTallyprimeReportsToExcelAndPdf);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
