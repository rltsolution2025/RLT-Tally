import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TallyMaduraiComponent } from './tally-madurai.component';

describe('TallyMaduraiComponent', () => {
  let component: TallyMaduraiComponent;
  let fixture: ComponentFixture<TallyMaduraiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TallyMaduraiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TallyMaduraiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
