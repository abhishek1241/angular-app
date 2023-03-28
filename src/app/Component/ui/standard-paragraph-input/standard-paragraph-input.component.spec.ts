import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StandardParagraphInputComponent } from './standard-paragraph-input.component';

describe('StandardParagraphInputComponent', () => {
  let component: StandardParagraphInputComponent;
  let fixture: ComponentFixture<StandardParagraphInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StandardParagraphInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StandardParagraphInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
