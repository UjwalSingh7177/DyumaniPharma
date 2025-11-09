import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Coursel3 } from './coursel3';

describe('Coursel3', () => {
  let component: Coursel3;
  let fixture: ComponentFixture<Coursel3>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Coursel3]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Coursel3);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
