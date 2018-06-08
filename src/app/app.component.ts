import { Component } from "@angular/core";
import {
    Store,
    select,
} from "@ngrx/store";
import { Observable } from 'rxjs';

//import { } from "../../node_modules/@types/googlemaps";

import {
    INCREMENT,
    DECREMENT,
    RESET,
} from './counter';

interface AppState {
    count: number;
}

@Component({
    selector: "app-root",
    styles: [require("./app.scss").toString()],
    template: require("./app.template.html"),
})
export class AppComponent {
    public title: string = "Hello World!!!";

    lat: number = 59.95;
    lng: number = 30.32;
    // @ViewChild('gmap') gmapElement: any;
    // map: google.maps.Map;

    public count$: Observable<number>;

    constructor(private store: Store<AppState>) {
        this.count$ = store.pipe(select('count'));
    }

   public increment(): void {
        this.store.dispatch({ type: INCREMENT });
    }

    public decrement(): void {
        this.store.dispatch({ type: DECREMENT });
    }

    public reset(): void {
        this.store.dispatch({ type: RESET });
    }
}
// 
