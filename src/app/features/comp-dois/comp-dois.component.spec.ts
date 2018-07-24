import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompDoisComponent } from './comp-dois.component';

describe('CompDoisComponent', () => {
  let component: CompDoisComponent;
  let fixture: ComponentFixture<CompDoisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompDoisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompDoisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
