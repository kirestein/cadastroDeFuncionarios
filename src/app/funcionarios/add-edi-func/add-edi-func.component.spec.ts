import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEdiFuncComponent } from './add-edi-func.component';

describe('AddEdiFuncComponent', () => {
  let component: AddEdiFuncComponent;
  let fixture: ComponentFixture<AddEdiFuncComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEdiFuncComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEdiFuncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
