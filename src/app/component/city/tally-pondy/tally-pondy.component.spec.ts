import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TallyPondyComponent } from './tally-pondy.component';

describe('TallyPondyComponent', () => {
  let component: TallyPondyComponent;
  let fixture: ComponentFixture<TallyPondyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TallyPondyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TallyPondyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
