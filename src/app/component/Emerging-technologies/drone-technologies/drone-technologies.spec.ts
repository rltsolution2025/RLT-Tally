import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DroneTechnologies } from './drone-technologies';

describe('DroneTechnologies', () => {
  let component: DroneTechnologies;
  let fixture: ComponentFixture<DroneTechnologies>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DroneTechnologies]
    })
      .compileComponents();

    fixture = TestBed.createComponent(DroneTechnologies);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
