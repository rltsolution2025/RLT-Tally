import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TallyprimeVsExcelComponent } from './tallyprime-vs-excel.component';

describe('TallyprimeVsExcelComponent', () => {
  let component: TallyprimeVsExcelComponent;
  let fixture: ComponentFixture<TallyprimeVsExcelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TallyprimeVsExcelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TallyprimeVsExcelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
