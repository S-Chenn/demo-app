import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormGroupDirective } from '@angular/forms';
import { ChatService } from '../services/chat.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.scss']
})
export class TopComponent implements OnInit {

  @ViewChild(FormGroupDirective, null) myForm;
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private chatService: ChatService,
    private snackBar: MatSnackBar
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
      this.chatService.createRoom(this.form.value.name).then(() => {
        this.form.reset();
        this.myForm.resetForm();
        this.snackBar.open('ルームの作成が完了しました！', null, {
          duration: 3000
        });
      });
    }else {
      this.snackBar.open('正しいルーム名を入力してください。', null, {
        duration: 3000
      });
    }
  }
}
