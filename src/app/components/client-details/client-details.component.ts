import { ClientService } from './../../service/client.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.css']
})
export class ClientDetailsComponent implements OnInit {
  id;
  client;
  hasBalance: boolean = false;
  showUpdateBalance: boolean = false;
  constructor(private route: ActivatedRoute, private clientService: ClientService, private router: Router) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.clientService.getClient(this.id).subscribe((client) => {
      this.client = client;
    });
  }

  onDelete(id) {
    if(confirm("Are you sure to delete ?")){
      this.clientService.deleteClient(id);
    this.router.navigate(['/']);
    }
  }
  updateBalnce(id) {
    this.clientService.updateClient(id, this.client);
    this.showUpdateBalance = !this.showUpdateBalance;
  }
}