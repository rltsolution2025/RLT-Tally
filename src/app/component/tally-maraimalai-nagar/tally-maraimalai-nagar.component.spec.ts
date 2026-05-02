import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TallyMaraimalaiNagarComponent } from './tally-maraimalai-nagar.component';

describe('TallyMaraimalaiNagarComponent', () => {
  let component: TallyMaraimalaiNagarComponent;
  let fixture: ComponentFixture<TallyMaraimalaiNagarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TallyMaraimalaiNagarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TallyMaraimalaiNagarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
