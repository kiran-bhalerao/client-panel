import { AuthenticationService } from './../../service/authentication.service';
import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  errMessage: String;
  submitText: String = 'Login';
  isClear: boolean = true;
  constructor(private authenticationService: AuthenticationService, private router: Router) { }

  ngOnInit() {
  }
  onFocus() {
    this.submitText = 'Login';
    this.isClear = false;
  }
  onSubmit(f) {
    this.submitText = 'Wait ...';
    this.authenticationService.login(f.value.email, f.value.password)
      .then((user) => {
        this.errMessage = null;
        this.router.navigate(['/']);
      })
      .catch((err) => {
        this.isClear = true;
        this.submitText = 'Failed ...';
        this.errMessage = err.message;
      });
  }
}
