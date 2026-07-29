import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AIMLLearningComponent } from './ai-ml-learning.component';

describe('AIMLLearningComponent', () => {
  let component: AIMLLearningComponent;
  let fixture: ComponentFixture<AIMLLearningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AIMLLearningComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AIMLLearningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
