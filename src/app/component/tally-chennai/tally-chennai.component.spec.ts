import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TallyChennaiComponent } from './tally-chennai.component';

describe('TallyChennaiComponent', () => {
  let component: TallyChennaiComponent;
  let fixture: ComponentFixture<TallyChennaiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TallyChennaiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TallyChennaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
