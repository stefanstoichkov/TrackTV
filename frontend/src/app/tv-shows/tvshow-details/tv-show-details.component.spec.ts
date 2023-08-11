import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvShowDetailsComponent } from './tv-show-details.component';

describe('TvshowDetailsComponent', () => {
  let component: TvShowDetailsComponent;
  let fixture: ComponentFixture<TvShowDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TvShowDetailsComponent]
    });
    fixture = TestBed.createComponent(TvShowDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});