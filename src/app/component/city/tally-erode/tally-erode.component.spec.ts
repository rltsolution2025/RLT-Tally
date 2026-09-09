import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TallyErodeComponent } from './tally-erode.component';

describe('TallyErodeComponent', () => {
  let component: TallyErodeComponent;
  let fixture: ComponentFixture<TallyErodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TallyErodeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TallyErodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
