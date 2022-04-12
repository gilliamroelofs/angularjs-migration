import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneSnippetComponent } from './phone-snippet.component';

describe('PhoneSnippetComponent', () => {
  let component: PhoneSnippetComponent;
  let fixture: ComponentFixture<PhoneSnippetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhoneSnippetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhoneSnippetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
