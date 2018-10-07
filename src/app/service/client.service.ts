import { Injectable } from '@angular/core';
import { AngularFirestore } from "@angular/fire/firestore";
import { Observable } from "rxjs";
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  clients: Observable<any[]>;
  db: AngularFirestore;
  constructor(db: AngularFirestore) {
    this.db = db;
  }
  getclientsObs() {
    this.clients = this.db.collection('clients').snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
    return this.clients;
  }
  addClient(client) {
    this.db.collection('clients').add(client);
  }
  getClient(id) {
    return this.db.collection('clients').doc(id).valueChanges();
  }
  updateClient(id, client) {
    this.db.collection('clients').doc(id).update(client);
  }
  deleteClient(id) {
    return this.db.collection("clients").doc(id).delete();
  }
}


