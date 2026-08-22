import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobsAfterLearningTallyComponent } from './jobs-after-learning-tally.component';

describe('JobsAfterLearningTallyComponent', () => {
  let component: JobsAfterLearningTallyComponent;
  let fixture: ComponentFixture<JobsAfterLearningTallyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobsAfterLearningTallyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JobsAfterLearningTallyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
