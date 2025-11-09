import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CleanroomComponent } from './cleanroom-component';

describe('CleanroomComponent', () => {
  let component: CleanroomComponent;
  let fixture: ComponentFixture<CleanroomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CleanroomComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CleanroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
