import {
    Component,
    OnInit,
} from "@angular/core";
import { Store } from "@ngrx/store";

import * as signInActions from "./sign-in.actions";
import { State } from "./sign-in.reducer";

@Component({
    selector: "ab-sign-in-container",
    template: `<ab-sign-in></ab-sign-in>`,
})
export class SignInContainer implements OnInit {

    constructor(
        private store: Store<State>,
    ) { }

    public ngOnInit(): void {
        this.store.dispatch(new signInActions.InitAction())
    }
}
