import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarroquineriaComponent } from './marroquineria.component';

describe('MarroquineriaComponent', () => {
  let component: MarroquineriaComponent;
  let fixture: ComponentFixture<MarroquineriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarroquineriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarroquineriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
