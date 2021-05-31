import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsumosnailsComponent } from './insumosnails.component';

describe('InsumosnailsComponent', () => {
  let component: InsumosnailsComponent;
  let fixture: ComponentFixture<InsumosnailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsumosnailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsumosnailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
