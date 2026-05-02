import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TallyKkNagarComponent } from './tally-kk-nagar.component';

describe('TallyKkNagarComponent', () => {
  let component: TallyKkNagarComponent;
  let fixture: ComponentFixture<TallyKkNagarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TallyKkNagarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TallyKkNagarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
