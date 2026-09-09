import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TallyCoimbatoreComponent } from './tally-coimbatore.component';

describe('TallyCoimbatoreComponent', () => {
  let component: TallyCoimbatoreComponent;
  let fixture: ComponentFixture<TallyCoimbatoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TallyCoimbatoreComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TallyCoimbatoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
