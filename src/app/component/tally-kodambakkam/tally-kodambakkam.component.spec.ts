import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TallyKodambakkamComponent } from './tally-kodambakkam.component';

describe('TallyKodambakkamComponent', () => {
  let component: TallyKodambakkamComponent;
  let fixture: ComponentFixture<TallyKodambakkamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TallyKodambakkamComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TallyKodambakkamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
