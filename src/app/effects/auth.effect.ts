import { signOut } from '@angular/fire/auth';
import { signInWithGG, signInWithGGFailure } from './../../actions/auth.action';
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, switchMap, of } from "rxjs";
import { AuthService } from "../services/auth.service";
import * as AuthActions from "../../actions/auth.action";
import { Router } from '@angular/router';


@Injectable()
export class AuthEffects {
    constructor(private action$: Actions, private authService: AuthService,private router: Router) { }

    // loginEffect = createEffect(() => this.action$.pipe(
    //     ofType(AuthActions.signInWithGG),
    //     switchMap(() => this.authService.login()),

    //     //truong hop thanh cong
    //     map((user) => {
    //       console.log(user)
    //       // this.router.navigateByUrl('home')
    //       return AuthActions.signInWithGGSuccess({ user: user })}
    //     ),

    //     //truong hop fail
    //     catchError(error => of(AuthActions.signInWithGGFailure({ error: error }))),
    // ))

    // logoutEffect = createEffect(() => this.action$.pipe(
    //     ofType(AuthActions.signOut),
    //     switchMap(() => this.authService.logout()),

    //     map(() => {
    //       console.log('test');
    //       // this.router.navigateByUrl('');
    //       return AuthActions.signOutSuccess();
    //     }),
    //     catchError(error => of(AuthActions.signOutFailure({ error: error }))),
    // ))


}
