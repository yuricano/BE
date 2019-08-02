import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectmComponent } from './selectm.component';

describe('SelectmComponent', () => {
  let component: SelectmComponent;
  let fixture: ComponentFixture<SelectmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
