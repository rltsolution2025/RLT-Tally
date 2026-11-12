import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PaidInternships } from './paid-internships';

describe('PaidInternships', () => {
  let component: PaidInternships;
  let fixture: ComponentFixture<PaidInternships>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaidInternships]
    })
      .compileComponents();

    fixture = TestBed.createComponent(PaidInternships);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
