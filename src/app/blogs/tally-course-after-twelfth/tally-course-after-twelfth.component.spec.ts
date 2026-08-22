import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TallyCourseAfterTwelfthComponent } from './tally-course-after-twelfth.component';

describe('TallyCourseAfterTwelfthComponent', () => {
  let component: TallyCourseAfterTwelfthComponent;
  let fixture: ComponentFixture<TallyCourseAfterTwelfthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TallyCourseAfterTwelfthComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TallyCourseAfterTwelfthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
