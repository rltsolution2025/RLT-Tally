import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowLongDoesItTakeToLearnTallyprimeComponent } from './how-long-does-it-take-to-learn-tallyprime.component';

describe('HowLongDoesItTakeToLearnTallyprimeComponent', () => {
  let component: HowLongDoesItTakeToLearnTallyprimeComponent;
  let fixture: ComponentFixture<HowLongDoesItTakeToLearnTallyprimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HowLongDoesItTakeToLearnTallyprimeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HowLongDoesItTakeToLearnTallyprimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
