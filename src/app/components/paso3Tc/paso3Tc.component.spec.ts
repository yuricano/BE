import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Paso3TcComponent } from './paso3Tc.component';

describe('Paso3TcComponent', () => {
  let component: Paso3TcComponent;
  let fixture: ComponentFixture<Paso3TcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Paso3TcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Paso3TcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
