import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectionManagerComponent } from './connection-manager.component';

describe('ConnectionManagerComponent', () => {
  let component: ConnectionManagerComponent;
  let fixture: ComponentFixture<ConnectionManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConnectionManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnectionManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
