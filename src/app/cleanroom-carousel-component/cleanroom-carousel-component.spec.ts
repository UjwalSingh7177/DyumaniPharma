import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CleanroomCarouselComponent } from './cleanroom-carousel-component';

describe('CleanroomCarouselComponent', () => {
  let component: CleanroomCarouselComponent;
  let fixture: ComponentFixture<CleanroomCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CleanroomCarouselComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CleanroomCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
