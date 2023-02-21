import { AuthState } from './../../../states/auth.state';
import { Store } from '@ngrx/store';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import * as AuthActions from '../../../actions/auth.action';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent{
  constructor(private authService: AuthService,private store: Store<{auth:AuthState}>){

  }


  signInWithGG(){
    this.authService.login();
  }

}
