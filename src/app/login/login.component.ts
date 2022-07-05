import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  username = '';
  password = '';
  errorMessage = '';
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  login() {
     if(this.username.trim().length===0)
     {
      this.errorMessage="username is required";
     }
     else if(this.password.trim().length===0){
      this.errorMessage="password is required";
     }
     else
     {
      this.errorMessage="";
      let res = this.authService.login(this.username, this.password);
    if (res === 200) {
      this.router.navigate(['Home']);
    }
    if (res === 403) {
      this.errorMessage = 'Inavalid Credentials';
    }
     }
    
  }
}
