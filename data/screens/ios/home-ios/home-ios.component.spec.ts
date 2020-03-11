import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeIosComponent } from './home-ios.component';

describe('HomeIosComponent', () => {
  let component: HomeIosComponent;
  let fixture: ComponentFixture<HomeIosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeIosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeIosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
