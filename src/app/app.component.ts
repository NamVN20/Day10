import { AuthService } from './services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Auth, onAuthStateChanged } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as AuthActions from './actions/auth.action';
import { AuthState } from './states/auth.state';
import { User } from './models/user.model';
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
    onAuthStateChanged(this.auth, (ggUser) => {
      if (ggUser) {
        let user: User = {
          uid: ggUser.uid,
          email: ggUser.email,
          displayName: ggUser.displayName,
          photoURL: ggUser.photoURL,
        }
        this.store.dispatch(AuthActions.getUserInfoWhenAlreadySignedIn({ user: user }));
        this.router.navigateByUrl('home');
      } else {
        this.router.navigateByUrl('');
      }
    });
  }
  ngOnInit(): void {

  }
  title = 'Angular';
}
