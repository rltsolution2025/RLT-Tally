import { ComponentFixture, TestBed } from '@angular/core/testing';
import { KidsProgram } from './kids-program';

describe('KidsProgram', () => {
  let component: KidsProgram;
  let fixture: ComponentFixture<KidsProgram>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KidsProgram]
    })
      .compileComponents();

    fixture = TestBed.createComponent(KidsProgram);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
