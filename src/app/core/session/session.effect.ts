import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import {
    Actions,
    Effect,
    ofType,
} from "@ngrx/effects"
import {
    Action,
    Store,
    select,
} from "@ngrx/store";
import {
    Observable,
    of,
} from "rxjs";
import {
    catchError,
    map,
    switchMap,
    tap,
} from "rxjs/operators";

import {
    AuthenticationTicketService,
    UserRoleEnum,
} from "../authentication-ticket";

import * as sessionActions from "./session.actions";
import * as authenticationTicketReducer from "../authentication-ticket/authentication-ticket.reducer";

@Injectable()
export class SessionEffect {

    constructor(
        private actions$: Actions,
        private authenticationTicketService: AuthenticationTicketService,
        private store: Store<authenticationTicketReducer.State>,
        private router: Router,
    ) { }

    @Effect({ dispatch: false })
    public onSignInSuccess(): Observable<void> {
        return this.actions$.pipe(
            ofType(
                sessionActions.SIGN_IN_USER_SUCCESS,
            ),
            map((action: sessionActions.SignInUserSuccessAction) => action.payload),
            map((payload) => {
                switch (payload.role) {
                    case UserRoleEnum.User:
                        this.router.navigate(["/user/welcome"]);
                        break;
                    default:
                        break;
                }
                // return this.store.pipe(select(authenticationTicketReducer.getAuthenticationTicketEntity),
                //     map((authTicket) => {
                //         console.log("Test");
                //         // switch (authTicket.role) {
                //         //     case UserRoleEnum.User:
                //         //         this.router.navigate([""]);
                //         //         break;
                //         //     default:
                //         //         break;
                //         // }
                //     }),
                // )
                    
            }),
        );
    }

    @Effect()
    public signInUser(): Observable<Action> {
        return this.actions$.pipe(
            ofType(sessionActions.SIGN_IN_USER),
            map((action: sessionActions.SignInUserAction) => action.payload),
            switchMap((payload) => {
                return this.authenticationTicketService.getAuthenticationTiket(payload.login, payload.password);
            }),
            map((authTicket) => {
                return new sessionActions.SignInUserSuccessAction(authTicket);
            }),
            catchError((error) => {
                console.error(error);

                return of(new sessionActions.SignInUserFailAction());
            }),
        );
    }
}
