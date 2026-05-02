import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TallyMambalamComponent } from './tally-mambalam.component';

describe('TallyMambalamComponent', () => {
  let component: TallyMambalamComponent;
  let fixture: ComponentFixture<TallyMambalamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TallyMambalamComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TallyMambalamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
