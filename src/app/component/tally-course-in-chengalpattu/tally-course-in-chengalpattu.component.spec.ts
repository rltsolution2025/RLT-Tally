import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TallyCourseInChengalpattuComponent } from './tally-course-in-chengalpattu.component';

describe('TallyCourseInChengalpattuComponent', () => {
  let component: TallyCourseInChengalpattuComponent;
  let fixture: ComponentFixture<TallyCourseInChengalpattuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TallyCourseInChengalpattuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TallyCourseInChengalpattuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
