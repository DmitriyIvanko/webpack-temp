import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from "@ngrx/store-devtools";

import { AppComponent } from "./app.component";
import { counterReducer } from "./counter";
import { AppEffects } from "./app.effect";

@NgModule({
    declarations: [
      AppComponent, 
    ],
    imports: [
        BrowserModule,
        StoreModule.forRoot({ count: counterReducer }),
        EffectsModule.forRoot([AppEffects]),
        StoreDevtoolsModule.instrument(),
    ],
    bootstrap: [
      AppComponent,  
    ],
})
export class AppModule { }
