import { NgModule } from "@angular/core";
import { EffectsModule } from "@ngrx/effects";

import { SessionEffect } from "./session.effect";

@NgModule({
    imports: [
        EffectsModule.forFeature([SessionEffect]),
    ],
})
export class SessionModule { }
