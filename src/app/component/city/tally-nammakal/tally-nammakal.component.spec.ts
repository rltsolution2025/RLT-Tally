import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TallyNammakalComponent } from './tally-nammakal.component';

describe('TallyNammakalComponent', () => {
  let component: TallyNammakalComponent;
  let fixture: ComponentFixture<TallyNammakalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TallyNammakalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TallyNammakalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
