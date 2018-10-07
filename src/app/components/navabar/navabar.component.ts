import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../service/authentication.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-navabar',
  templateUrl: './navabar.component.html',
  styleUrls: ['./navabar.component.css']
})
export class NavabarComponent implements OnInit {
  isAuthen: boolean = false;
  user:String;
  constructor(private authenticationService: AuthenticationService, private router: Router) { }

  ngOnInit() {
    this.authenticationService.getAuth()
      .subscribe((user) => {
        this.user = user.email;
        this.isAuthen = user ? true : false;
      });
  }
  logOut() {
    this.authenticationService.logout()
      .then(() => {
        this.router.navigate(['/login']);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

}
