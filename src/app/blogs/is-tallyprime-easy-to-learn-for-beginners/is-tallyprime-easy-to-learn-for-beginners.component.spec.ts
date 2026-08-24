import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IsTallyprimeEasyToLearnForBeginnersComponent } from './is-tallyprime-easy-to-learn-for-beginners.component';

describe('IsTallyprimeEasyToLearnForBeginnersComponent', () => {
  let component: IsTallyprimeEasyToLearnForBeginnersComponent;
  let fixture: ComponentFixture<IsTallyprimeEasyToLearnForBeginnersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IsTallyprimeEasyToLearnForBeginnersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IsTallyprimeEasyToLearnForBeginnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
