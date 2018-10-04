import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, Input } from '@angular/core';
import { of } from 'rxjs';

import { PostsListComponent } from './posts-list.component';
import { DataStorageService } from '../../../services/data-storage.service';

@Component({
  selector: 'app-post',
  template: ''
})
class MockPostComponent {
  @Input() post;
}

class MockDataStorage {
  user = { id: 1 };
  fetchPosts(userId) {
    return of(null);
  }
}

describe('PostsListComponent', () => {
  let component: PostsListComponent;
  let fixture: ComponentFixture<PostsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PostsListComponent, MockPostComponent],
      providers: [{provide: DataStorageService, useClass: MockDataStorage}]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsListComponent);
    component = fixture.componentInstance;
  });

  it('should create post-list', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should grab data from service and set it to posts', () => {
    // make sure fetchposts will return data
    const dataStorageService = fixture.debugElement.injector.get(DataStorageService);
    const data = [];
    spyOn(dataStorageService, 'fetchPosts').and.returnValue(of(data));
    // run ngOnInit
    fixture.detectChanges();
    expect(component.posts).toBe(data);
  });

  it('should grab user id from service and set it to userId', () => {
    // make sure user will return id
    const dataStorageService = fixture.debugElement.injector.get(DataStorageService);
    const userId = 1;
    spyOn(dataStorageService, 'user').and.returnValue(of(userId));
    expect(component.userId).toBe(userId);
  });
});
