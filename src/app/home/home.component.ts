import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  email = 'Email Address';
  invalidEmail = true;
  emailNotFound = false;

  constructor() { }

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
    console.log(this.email);
  }
}
