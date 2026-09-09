import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TallyVelloreComponent } from './tally-vellore.component';

describe('TallyVelloreComponent', () => {
  let component: TallyVelloreComponent;
  let fixture: ComponentFixture<TallyVelloreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TallyVelloreComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TallyVelloreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
