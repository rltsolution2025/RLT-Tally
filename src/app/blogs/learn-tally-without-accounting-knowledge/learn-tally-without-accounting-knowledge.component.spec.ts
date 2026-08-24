import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnTallyWithoutAccountingKnowledgeComponent } from './learn-tally-without-accounting-knowledge.component';

describe('LearnTallyWithoutAccountingKnowledgeComponent', () => {
  let component: LearnTallyWithoutAccountingKnowledgeComponent;
  let fixture: ComponentFixture<LearnTallyWithoutAccountingKnowledgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LearnTallyWithoutAccountingKnowledgeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LearnTallyWithoutAccountingKnowledgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
