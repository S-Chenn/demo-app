import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chatroom',
  templateUrl: './chatroom.component.html',
  styleUrls: ['./chatroom.component.scss']
})
export class ChatroomComponent implements OnInit {

  afUser$ = this.afAuth.authState;

  constructor(public afAuth: AngularFireAuth,
    private router: Router) { }

  ngOnInit() {
  }

}
