import { Injectable } from '@angular/core';
import { Auth, GoogleAuthProvider, signInWithPopup, signOut } from '@angular/fire/auth';
import { from } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private auth: Auth) { }

  login() {
    return from(new Promise<User>(async (resolve, reject) => {
      try {
        console.log('alo')
        let credential = await signInWithPopup(this.auth, new GoogleAuthProvider());
        // await this.SetUserData(credential.user);
        let user: User = {
          uid: credential.user.uid,
          email: credential.user.email,
          displayName: credential.user.displayName,
          photoURL: credential.user.photoURL,
        }
        resolve(user);
      } catch {
        reject('Cannot login with google');
      }
    }));
  }


  async logout() {
    return from(new Promise<any>(async (resolve, reject) => {
      try {
        await signOut(this.auth);
        // this.isUserLoggedIn.next(false);
        // this.router.navigateByUrl("/");
        // console.log("out")
        resolve("log out");
      }
      catch {
        reject("logout fail");
      }
    }))
  }
}
