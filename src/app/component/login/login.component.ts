import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
  export class LoginComponent implements OnInit {

    email: string;
    password: string;

    ngOnInit() {
    }

    constructor(public authService: AuthService) {}

    signIn() {
      this.email = '';
      this.password = '';
    }

    signOut() {
      this.authService.SignOut();
    }
}
