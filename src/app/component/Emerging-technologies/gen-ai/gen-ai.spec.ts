import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GenAI } from './gen-ai';

describe('GenAI', () => {
  let component: GenAI;
  let fixture: ComponentFixture<GenAI>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GenAI]
    })
      .compileComponents();

    fixture = TestBed.createComponent(GenAI);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
