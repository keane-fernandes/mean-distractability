import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsApiComponent } from './news-api/news-api.component';

describe('NewsItemComponent', () => {
  let component: NewsApiComponent;
  let fixture: ComponentFixture<NewsApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsApiComponent ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
