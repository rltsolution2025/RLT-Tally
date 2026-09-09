import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TallyCuddaloreComponent } from './tally-cuddalore.component';

describe('TallyCuddaloreComponent', () => {
  let component: TallyCuddaloreComponent;
  let fixture: ComponentFixture<TallyCuddaloreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TallyCuddaloreComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TallyCuddaloreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
