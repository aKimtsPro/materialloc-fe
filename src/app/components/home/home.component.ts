import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  form: FormGroup;

  constructor(builder: FormBuilder, private readonly _authService: AuthService) {
    this.form = builder.group({
      username: [],
      password: []
    })
  }

  ngOnInit(): void {
  }

  connect(){
    this._authService.login( this.form.value ).subscribe();
  }

}
