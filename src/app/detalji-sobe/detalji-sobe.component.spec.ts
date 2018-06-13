import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetaljiSobeComponent } from './detalji-sobe.component';

describe('DetaljiSobeComponent', () => {
  let component: DetaljiSobeComponent;
  let fixture: ComponentFixture<DetaljiSobeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetaljiSobeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetaljiSobeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
