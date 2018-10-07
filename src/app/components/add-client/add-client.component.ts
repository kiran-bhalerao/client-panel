import { ClientService } from './../../service/client.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {
  clientBalance: number = 0;
  disabledBalanceOnAdd: boolean = true;
  mytext;
  constructor(private clientService:ClientService,private router:Router) { }
  ngOnInit() {
  }

  onSubmit(f){
    this.clientService.addClient(f.value);
    this.router.navigate(['/']);
  }

}
