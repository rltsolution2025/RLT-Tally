import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TallyTrichyComponent } from './tally-trichy.component';

describe('TallyTrichyComponent', () => {
  let component: TallyTrichyComponent;
  let fixture: ComponentFixture<TallyTrichyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TallyTrichyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TallyTrichyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
