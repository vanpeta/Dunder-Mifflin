import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';

import { HomeComponent } from './home.component';
import { AuthService } from '../../services/auth.service';
// import { AuthGuard } from '../../services/auth-guard.service';

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
      declarations: [HomeComponent, MockProfileComponent, MockDashboardComponent],
      providers: [{ provide: AuthService, useClass: MockAuthService }],
      imports: [RouterTestingModule.withRoutes(routes)]
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

});
