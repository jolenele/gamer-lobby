import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
  export class LoginComponent implements OnInit {

    email: string;
    password: string;
    loginForm: FormGroup;

    ngOnInit() {
    }

    constructor(public fb: FormBuilder,public authService: AuthService) {}

    signIn() {
      this.email = 'admin@gbc.ca';
      this.password = 'admin123';
      this.authService.SignIn(this.email, this.password);
    }

    signOut() {
      this.authService.SignOut();
    }

    // login() {
    //     this.authService.SignIn(this.email, this.password);
    //     this.email = '';
    //     this.password = '';
    //   }
}
