import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepiceListComponent } from './repice-list.component';

describe('RepiceListComponent', () => {
  let component: RepiceListComponent;
  let fixture: ComponentFixture<RepiceListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepiceListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepiceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
