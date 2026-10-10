import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IoT } from './io-t';

describe('IoT', () => {
  let component: IoT;
  let fixture: ComponentFixture<IoT>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IoT]
    })
      .compileComponents();

    fixture = TestBed.createComponent(IoT);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
