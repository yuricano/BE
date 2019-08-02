import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Paso2TcComponent } from './paso2Tc.component';

describe('Paso2TcComponent', () => {
  let component: Paso2TcComponent;
  let fixture: ComponentFixture<Paso2TcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Paso2TcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Paso2TcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
