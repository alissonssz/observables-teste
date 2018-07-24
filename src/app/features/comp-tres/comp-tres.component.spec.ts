import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompTresComponent } from './comp-tres.component';

describe('CompTresComponent', () => {
  let component: CompTresComponent;
  let fixture: ComponentFixture<CompTresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompTresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompTresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
