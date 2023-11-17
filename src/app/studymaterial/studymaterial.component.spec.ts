import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudymaterialComponent } from './studymaterial.component';

describe('StudymaterialComponent', () => {
  let component: StudymaterialComponent;
  let fixture: ComponentFixture<StudymaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudymaterialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudymaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
