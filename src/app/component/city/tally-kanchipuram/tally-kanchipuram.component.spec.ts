import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TallyKanchipuramComponent } from './tally-kanchipuram.component';

describe('TallyKanchipuramComponent', () => {
  let component: TallyKanchipuramComponent;
  let fixture: ComponentFixture<TallyKanchipuramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TallyKanchipuramComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TallyKanchipuramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
