import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JavaFullstackComponent } from './java-fullstack.component';

describe('JavaFullstackComponent', () => {
  let component: JavaFullstackComponent;
  let fixture: ComponentFixture<JavaFullstackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JavaFullstackComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JavaFullstackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
