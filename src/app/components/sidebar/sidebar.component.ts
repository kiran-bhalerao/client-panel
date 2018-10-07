import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../service/authentication.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  isAuthen: boolean = false;
  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit() {
    this.authenticationService.getAuth()
      .subscribe((user) => {
        this.isAuthen = user ? true : false;
      });
  }

}
