import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TallyWithGstTraining } from './tally-with-gst-training';

describe('TallyWithGstTraining', () => {
  let component: TallyWithGstTraining;
  let fixture: ComponentFixture<TallyWithGstTraining>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TallyWithGstTraining]
    })
      .compileComponents();

    fixture = TestBed.createComponent(TallyWithGstTraining);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
