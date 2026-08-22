import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TallyAccountantSalaryInIndiaComponent } from './tally-accountant-salary-in-india.component';

describe('TallyAccountantSalaryInIndiaComponent', () => {
  let component: TallyAccountantSalaryInIndiaComponent;
  let fixture: ComponentFixture<TallyAccountantSalaryInIndiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TallyAccountantSalaryInIndiaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TallyAccountantSalaryInIndiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
