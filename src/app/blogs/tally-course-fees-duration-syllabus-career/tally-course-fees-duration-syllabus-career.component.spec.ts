import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TallyCourseFeesDurationSyllabusCareerComponent } from './tally-course-fees-duration-syllabus-career.component';

describe('TallyCourseFeesDurationSyllabusCareerComponent', () => {
  let component: TallyCourseFeesDurationSyllabusCareerComponent;
  let fixture: ComponentFixture<TallyCourseFeesDurationSyllabusCareerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TallyCourseFeesDurationSyllabusCareerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TallyCourseFeesDurationSyllabusCareerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
