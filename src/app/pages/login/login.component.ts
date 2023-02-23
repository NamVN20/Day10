import { Store } from '@ngrx/store';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import * as AuthActions from '../../actions/auth.action';
import { AuthState } from 'src/app/states/auth.state';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private authService: AuthService, private store: Store<{ auth: AuthState }>) {

  }
  ngOnInit(): void {
    this.store.subscribe((value) => {
      console.log(value);
    })
  }


  signInWithGG() {
    this.store.dispatch(AuthActions.signInWithGG());
  }

}
