import { Injectable } from "@angular/core";
import {
    Actions,
    Effect,
    ofType,
} from "@ngrx/effects"
import { Action } from "@ngrx/store";
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

import { AuthenticationTicketService } from "../authentication-ticket";

import * as sessionActions from "./session.actions";

@Injectable()
export class SessionEffect {

    constructor(
        private actions$: Actions,
        private authenticationTicketService: AuthenticationTicketService,
    ) { }

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
