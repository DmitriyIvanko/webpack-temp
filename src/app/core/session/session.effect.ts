import { Injectable } from "@angular/core";
import {
    Actions,
    Effect,
    ofType,
} from "@ngrx/effects"
import { Action } from "@ngrx/store";
import { Observable } from "rxjs";
import {
    map,
    switchMap,
} from "rxjs/operators";

import * as sessionActions from "./session.actions";

@Injectable()
export class SessionEffect {

    constructor(
        private actions$: Actions,
    ) { }

    @Effect()
    public signInUser(): Observable<Action> {
        return this.actions$.pipe(
            ofType(sessionActions.SIGN_IN_USER),
            map((action: sessionActions.SignInUserAction) => action.payload),
            switchMap((payload) => {
                // to do...
            }),

        );
    }
}
