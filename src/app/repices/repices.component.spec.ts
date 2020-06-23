import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepicesComponent } from './repices.component';

describe('RepicesComponent', () => {
  let component: RepicesComponent;
  let fixture: ComponentFixture<RepicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
