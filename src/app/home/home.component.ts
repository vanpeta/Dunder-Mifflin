import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  email = 'Email Address';
  invalidEmail = true;
  emailNotFound = false;

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }
  handleChange(e) {
    this.email = e.target.value;
    if (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(this.email)) {
      this.invalidEmail = false;
    } else {
      this.invalidEmail = true;
      this.emailNotFound = false;
    }
  }
  handleSubmit() {
    this.authService.authenticate(this.email).subscribe(data => {
      if (!data) {
        this.emailNotFound = true;
      } else {
        console.log(data);
      }
    });
  }
}
