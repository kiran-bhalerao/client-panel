import { AuthenticationService } from './../../service/authentication.service';
import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  errMessage: String;
  isClear: boolean = true;
  submitText: String = 'Submit';
  constructor(private authenticationService: AuthenticationService, private router: Router) { }

  ngOnInit() {
  }

  onFocus() {
    this.submitText = 'Submit';
    this.isClear = false;
  }
  onSubmit(f) {
    this.submitText = 'Wait ...';
    if (f.value.password != f.value.confirmPassword) {
      this.submitText = 'Failed ...';
      this.isClear = true;
      this.errMessage = "Password and confirm password must be same !";
      return true;
    }
    this.authenticationService.register(f.value.email, f.value.password)
      .then((user) => {
        console.log('register',user);
        this.errMessage = null;
        this.router.navigate(['/login']);
      })
      .catch((err) => {
        this.submitText = 'Failed ...';
        this.isClear = true;
        this.errMessage = err.message;
      });
  }

}
