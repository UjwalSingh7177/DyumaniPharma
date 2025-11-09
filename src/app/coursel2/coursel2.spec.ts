import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Coursel2 } from './coursel2';

describe('Coursel2', () => {
  let component: Coursel2;
  let fixture: ComponentFixture<Coursel2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Coursel2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Coursel2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
