import { Injectable } from "@angular/core";
import { Action } from "@ngrx/store";
import {
    Actions,
    Effect,
    ofType,
} from "@ngrx/effects";
import { Observable, of } from "rxjs";
import { catchError, map, mergeMap } from "rxjs/operators";

@Injectable()
export class AppEffects {

    constructor(private actions$: Actions) { }

    // @Effect({ dispatch: false })
    // login$ = this.actions$.pipe(
    //     ofType('RESET'),
    //     map(action => {
    //         console.log("Effected");
    //     }));
}
