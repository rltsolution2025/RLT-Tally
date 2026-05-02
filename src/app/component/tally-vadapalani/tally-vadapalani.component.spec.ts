import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TallyVadapalaniComponent } from './tally-vadapalani.component';

describe('TallyVadapalaniComponent', () => {
  let component: TallyVadapalaniComponent;
  let fixture: ComponentFixture<TallyVadapalaniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TallyVadapalaniComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TallyVadapalaniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
