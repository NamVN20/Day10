import { AuthService } from './services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Auth, onAuthStateChanged } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AuthState } from 'src/states/auth.state';
import * as AuthActions from '../actions/auth.action';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(
    private auth: Auth,
    private router: Router,
    private authService: AuthService,
    private store: Store<{ auth: AuthState }>
  ) {

  }
  ngOnInit(): void {

  }
  title = 'Angular';
}
