// angular imports
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
// services
import { AuthService } from '../../services/auth.service';
// models
import { User } from '../../models/user.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @ViewChild('f') form: NgForm;
  emailNotFound = false;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    this.authService
      .authenticate(this.form.value.email)
      .subscribe((data: User | boolean) => {
        if (!data) {
          this.emailNotFound = true;
        } else {
          this.router.navigate([`/profile/${data[0].id}`]);
        }
      });
  }
}
