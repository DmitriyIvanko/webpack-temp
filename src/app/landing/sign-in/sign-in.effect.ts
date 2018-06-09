import { Injectable } from "@angular/core";
import {
    Actions,
    Effect,
    ofType,
} from "@ngrx/effects";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

import * as signInActions from "./sign-in.actions";

@Injectable()
export class SignInEffect {

    constructor(
        private actions$: Actions,
    ) { }

    @Effect({  dispatch: false} )
    public init(): Observable<void> {
        return this.actions$.pipe(
            ofType(signInActions.INIT),
            map(action => {
                console.log("Effected");
            }));
    }
}
