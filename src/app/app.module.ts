import { AgmCoreModule } from '@agm/core';
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from "@ngrx/store-devtools";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { counterReducer } from "./counter";
import { AppEffects } from "./app.effect";
import { CoreModule } from "./core";
import { HttpModule } from "@angular/http";

@NgModule({
    bootstrap: [
        AppComponent,
    ],
    declarations: [
      AppComponent, 
    ],
    imports: [
        BrowserModule,
        HttpModule,
        StoreModule.forRoot({ count: counterReducer }),
        EffectsModule.forRoot([AppEffects]),
        StoreDevtoolsModule.instrument(),
        AgmCoreModule.forRoot({
            apiKey: "AIzaSyB8A0Bw8-24pobZWFisjcFYerUh4cnbrg8",
        }),
        AppRoutingModule,
        CoreModule,
    ],

})
export class AppModule { }
