import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TallyTNagarComponent } from './tally-t-nagar.component';

describe('TallyTNagarComponent', () => {
  let component: TallyTNagarComponent;
  let fixture: ComponentFixture<TallyTNagarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TallyTNagarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TallyTNagarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
