import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HowToUseFiltersInTallyprimeReports } from './how-to-use-filters-in-tallyprime-reports';

describe('HowToUseFiltersInTallyprimeReports', () => {
  let component: HowToUseFiltersInTallyprimeReports;
  let fixture: ComponentFixture<HowToUseFiltersInTallyprimeReports>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HowToUseFiltersInTallyprimeReports]
    })
      .compileComponents();

    fixture = TestBed.createComponent(HowToUseFiltersInTallyprimeReports);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
