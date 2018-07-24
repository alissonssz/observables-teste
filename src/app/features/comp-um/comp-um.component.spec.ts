import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompUmComponent } from './comp-um.component';

describe('CompUmComponent', () => {
  let component: CompUmComponent;
  let fixture: ComponentFixture<CompUmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompUmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompUmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
