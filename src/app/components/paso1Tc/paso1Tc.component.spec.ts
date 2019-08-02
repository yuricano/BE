import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Paso1TcComponent } from './paso1Tc.component';

describe('Paso1TcComponent', () => {
  let component: Paso1TcComponent;
  let fixture: ComponentFixture<Paso1TcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Paso1TcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Paso1TcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
