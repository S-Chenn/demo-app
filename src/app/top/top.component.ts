import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ChatService } from '../services/chat.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.scss']
})
export class TopComponent implements OnInit {

  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private chatService: ChatService
    ) { }

  ngOnInit() {
    this.form = this.fb.group({
      name: ['', [
        Validators.required,
        Validators.maxLength(16),
        Validators.minLength(4),
        Validators.pattern('^(?![ 　]+).*$')
      ]]
    })
  }

  createRoom() {
    if(this.form.valid) {
    this.chatService.createRoom(this.form.value.name);
    }else {
    alert("ルーム名を入力してください。");
    }
  }
}
