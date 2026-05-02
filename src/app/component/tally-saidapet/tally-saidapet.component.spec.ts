import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TallySaidapetComponent } from './tally-saidapet.component';

describe('TallySaidapetComponent', () => {
  let component: TallySaidapetComponent;
  let fixture: ComponentFixture<TallySaidapetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TallySaidapetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TallySaidapetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
