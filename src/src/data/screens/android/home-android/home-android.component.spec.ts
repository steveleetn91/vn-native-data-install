import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAndroidComponent } from './home-android.component';

describe('HomeAndroidComponent', () => {
  let component: HomeAndroidComponent;
  let fixture: ComponentFixture<HomeAndroidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeAndroidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeAndroidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
