import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppJsonEditorComponent } from './app-json-editor.component';

describe('JsonEditorComponent', () => {
  let component: AppJsonEditorComponent;
  let fixture: ComponentFixture<AppJsonEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppJsonEditorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppJsonEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
