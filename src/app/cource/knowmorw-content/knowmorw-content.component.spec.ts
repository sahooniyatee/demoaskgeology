import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KnowmorwContentComponent } from './knowmorw-content.component';

describe('KnowmorwContentComponent', () => {
  let component: KnowmorwContentComponent;
  let fixture: ComponentFixture<KnowmorwContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KnowmorwContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KnowmorwContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
