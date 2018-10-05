import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, Input } from '@angular/core';
import { of } from 'rxjs';

import { PostComponent } from './post.component';
import { DataStorageService } from '../../../../services/data-storage.service';

@Component({
  selector: 'app-comment',
  template: ''
})
class MockCommentComponent {
  @Input() comment;
}

class MockDataStorage {
  commentsUpdated() {
    return of(null);
  }
}

describe('PostComponent', () => {
  let component: PostComponent;
  let fixture: ComponentFixture<PostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PostComponent, MockCommentComponent],
      providers: [{ provide: DataStorageService, useClass: MockDataStorage }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostComponent);
    component = fixture.componentInstance;
  });

  it('should create a post', () => {
    component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  // it('should grab data from service and set it to comments', () => {
  //   // make sure commentsUpdated will return comments
  //   const dataStorageService = fixture.debugElement.injector.get(DataStorageService);
  //   console.log('111', dataStorageService);
  //   console.log('000', component);
  //   const comments = [];
  //   spyOn(dataStorageService, 'commentsUpdated').and.returnValue(of(comments));
  //   // run ngOnInit
  //   fixture.detectChanges();
  //   expect(component.comments).toBe(comments);
  // });
});
