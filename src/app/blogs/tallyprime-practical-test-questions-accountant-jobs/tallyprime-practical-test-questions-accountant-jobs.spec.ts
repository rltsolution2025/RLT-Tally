import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TallyprimePracticalTestQuestionsAccountantJobs } from './tallyprime-practical-test-questions-accountant-jobs';

describe('TallyprimePracticalTestQuestionsAccountantJobs', () => {
  let component: TallyprimePracticalTestQuestionsAccountantJobs;
  let fixture: ComponentFixture<TallyprimePracticalTestQuestionsAccountantJobs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TallyprimePracticalTestQuestionsAccountantJobs]
    })
      .compileComponents();

    fixture = TestBed.createComponent(TallyprimePracticalTestQuestionsAccountantJobs);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
