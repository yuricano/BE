import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecurrentesComponent } from './recurrentes.component';

describe('RecurrentesComponent', () => {
  let component: RecurrentesComponent;
  let fixture: ComponentFixture<RecurrentesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecurrentesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecurrentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
