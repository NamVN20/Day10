import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AuthService } from 'src/app/services/auth.service';
import { AuthState } from 'src/states/auth.state';
import * as AuthActions from '../../../../../actions/auth.action';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {

  user$ = this.store.select('auth');

  constructor(
    public authService: AuthService,
    private store: Store<{ auth: AuthState}>
  ) {}

  signOut() {
    console.log('alo')
    this.authService.logout();
  }
}
