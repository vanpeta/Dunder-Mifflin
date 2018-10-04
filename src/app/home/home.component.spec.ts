import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';

import { HomeComponent } from './home.component';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-profile',
  template: ''
})
class MockProfileComponent {
  user;
}

@Component({
  selector: 'app-dashboard',
  template: ''
})
class MockDashboardComponent {
}

class MockAuthService {
  authenticate() {
    return null;
  }
}

class MockAuthGuard {
}
const routes = [
  { path: '', component: HomeComponent },
  { path: 'profile/:id', canActivate: [MockAuthGuard], component: MockDashboardComponent },
  { path: '**', redirectTo: '' }
  ];

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HomeComponent,
        MockProfileComponent,
        MockDashboardComponent
      ],
      providers: [{ provide: AuthService, useClass: MockAuthService }],
      imports: [FormsModule, RouterTestingModule.withRoutes(routes)]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create home', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
  it('should render title with value "Welcome to Dunder-Mifflin"', () => {
    const title = 'Welcome to Dunder-Mifflin';
    const compiled = fixture.debugElement.nativeElement.querySelector('h1').textContent;
    expect(compiled).toBe(title);
  });
  it('should render subtitle with the value provided in specs', () => {
    const subtitle = 'Welcome to dunder-mifflin internal network. Please enter a username to view your post and comments';
    const compiled = fixture.debugElement.nativeElement.querySelector('.subtitle').textContent;
    expect(compiled).toContain(subtitle);
  });
});


