import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TallyAshokNagarComponent } from './tally-ashok-nagar.component';

describe('TallyAshokNagarComponent', () => {
  let component: TallyAshokNagarComponent;
  let fixture: ComponentFixture<TallyAshokNagarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TallyAshokNagarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TallyAshokNagarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
