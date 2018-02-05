import { Component, OnInit } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AngularFireAuth } from "angularfire2/auth";
import * as firebase from "firebase/app";
import { Observable } from "rxjs/Observable";

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  navbarCollapsed = true;

  user: Observable<firebase.User>;
  authenticated: boolean = false;

  constructor(public af: AngularFireAuth) {
    this.af.authState.subscribe (
      (auth) => {
        if(auth !=null){
          this.user = af.authState;
          this.authenticated=true;
        }
      }
    )
  }

  ngOnInit() {
  }

  login(){
    this.af.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    // this.authenticated=true;
  }

  logout() {
    this.af.auth.signOut();
    this.authenticated = false;
  }

}
