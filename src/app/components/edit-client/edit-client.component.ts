import { Component, OnInit } from '@angular/core';
import { ClientService } from './../../service/client.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-client',
  templateUrl: './edit-client.component.html',
  styleUrls: ['./edit-client.component.css']
})
export class EditClientComponent implements OnInit {
  id;
  client = {}
  constructor(private clientService: ClientService, private router: Router, private routes: ActivatedRoute) { }
  ngOnInit() {
    this.id = this.routes.snapshot.params['id'];
    this.clientService.getClient(this.id).subscribe((client) => {
      this.client = client;
    });
  }

  onSubmit(f) {
    this.clientService.updateClient(this.id, f.value);
    this.router.navigate(['/client/' + this.id]);
  }
}
