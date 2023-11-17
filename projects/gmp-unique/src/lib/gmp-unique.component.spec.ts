import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GmpUniqueComponent } from './gmp-unique.component';

describe('GmpUniqueComponent', () => {
  let component: GmpUniqueComponent;
  let fixture: ComponentFixture<GmpUniqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GmpUniqueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GmpUniqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
