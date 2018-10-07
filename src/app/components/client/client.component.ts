import { AuthenticationService } from './../../service/authentication.service';
import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../service/client.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  totalBalance: number;
  clients: any[];
  isAuthen:boolean = false;
  constructor(private clientService: ClientService,private authenticationService:AuthenticationService) { }

  ngOnInit() {
    this.authenticationService.getAuth()
      .subscribe((user) => {
        this.isAuthen = user ? true : false;
      });

    this.clientService.getclientsObs().subscribe((clients) => {
      this.clients = clients;
      this.totalBalance = this.getTotalBalance()
    });
  }
  getTotalBalance() {
    let total = 0;
    for (let client of this.clients) {
      total += parseInt(client.balance);
    }
    return total;
  }
}
