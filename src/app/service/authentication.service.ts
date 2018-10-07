import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private auth: AngularFireAuth) { 
  }

  register(email,password){
    return this.auth.auth.createUserWithEmailAndPassword(email,password);
  }
  login(email, password) {
    return this.auth.auth.signInWithEmailAndPassword(email, password);
  }
  logout() {
    return this.auth.auth.signOut();
  }
  getAuth(){
    return this.auth.user;
  }
}
