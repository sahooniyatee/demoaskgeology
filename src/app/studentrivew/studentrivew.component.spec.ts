import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentrivewComponent } from './studentrivew.component';

describe('StudentrivewComponent', () => {
  let component: StudentrivewComponent;
  let fixture: ComponentFixture<StudentrivewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentrivewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentrivewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
