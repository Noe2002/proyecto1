import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComocomprarComponent } from './comocomprar.component';

describe('ComocomprarComponent', () => {
  let component: ComocomprarComponent;
  let fixture: ComponentFixture<ComocomprarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComocomprarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComocomprarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
