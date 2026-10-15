import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TallyprimeForEveryBeginners } from './tallyprime-for-every-beginners';

describe('TallyprimeForEveryBeginners', () => {
  let component: TallyprimeForEveryBeginners;
  let fixture: ComponentFixture<TallyprimeForEveryBeginners>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TallyprimeForEveryBeginners]
    })
      .compileComponents();

    fixture = TestBed.createComponent(TallyprimeForEveryBeginners);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
