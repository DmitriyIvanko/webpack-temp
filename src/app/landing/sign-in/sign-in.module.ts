import { NgModule } from "@angular/core";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from '@ngrx/store';

import { SignInComponent } from "./sign-in.component";
import { SignInContainer } from "./sign-in.container";
import { SignInRoutingModule } from "./sign-in-routing.module";
import { SignInEffect } from "./sign-in.effect";

import {
    FEATURE_NAME,
    reducer,
} from "./sign-in.reducer";

@NgModule({
    declarations: [
        SignInComponent,
        SignInContainer,
    ],
    imports: [
        SignInRoutingModule,
        StoreModule.forFeature(FEATURE_NAME, reducer),
        EffectsModule.forFeature([SignInEffect]),
    ],
})
export class SignInModule { }
