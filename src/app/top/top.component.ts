import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.scss']
})
export class TopComponent implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder) { }

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
    console.log(this.form.value);
    }else {
    alert("ルーム名を入力してください。");
    }
  }
}
