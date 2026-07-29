import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DotnetFullstackComponent } from './dotnet-fullstack.component';

describe('DotnetFullstackComponent', () => {
  let component: DotnetFullstackComponent;
  let fixture: ComponentFixture<DotnetFullstackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DotnetFullstackComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DotnetFullstackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
