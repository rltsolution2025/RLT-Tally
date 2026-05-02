import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TallyNungambakkamComponent } from './tally-nungambakkam.component';

describe('TallyNungambakkamComponent', () => {
  let component: TallyNungambakkamComponent;
  let fixture: ComponentFixture<TallyNungambakkamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TallyNungambakkamComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TallyNungambakkamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
