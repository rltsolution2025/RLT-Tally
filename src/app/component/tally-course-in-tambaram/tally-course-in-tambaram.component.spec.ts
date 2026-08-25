import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TallyCourseInTambaramComponent } from './tally-course-in-tambaram.component';

describe('TallyCourseInTambaramComponent', () => {
  let component: TallyCourseInTambaramComponent;
  let fixture: ComponentFixture<TallyCourseInTambaramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TallyCourseInTambaramComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TallyCourseInTambaramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
