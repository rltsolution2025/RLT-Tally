import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TallySalemComponent } from './tally-salem.component';

describe('TallySalemComponent', () => {
  let component: TallySalemComponent;
  let fixture: ComponentFixture<TallySalemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TallySalemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TallySalemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
