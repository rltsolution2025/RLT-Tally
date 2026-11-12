import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HowToMakeCreditNoteInTallyprime } from './how-to-make-credit-note-in-tallyprime';

describe('HowToMakeCreditNoteInTallyprime', () => {
  let component: HowToMakeCreditNoteInTallyprime;
  let fixture: ComponentFixture<HowToMakeCreditNoteInTallyprime>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HowToMakeCreditNoteInTallyprime]
    })
      .compileComponents();

    fixture = TestBed.createComponent(HowToMakeCreditNoteInTallyprime);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
