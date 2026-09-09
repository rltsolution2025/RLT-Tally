import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TallyThiruvallurComponent } from './tally-thiruvallur.component';

describe('TallyThiruvallurComponent', () => {
  let component: TallyThiruvallurComponent;
  let fixture: ComponentFixture<TallyThiruvallurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TallyThiruvallurComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TallyThiruvallurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
