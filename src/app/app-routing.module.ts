import { NgModule } from "@angular/core";
import {
    RouterModule,
    Routes,
} from "@angular/router";

import { LANDING_PATH } from "./landing";
import { MAIN_PATH } from "./main/index";

import { LandingModule } from "./landing/landing.module";
import { MainModule } from "./main/main.module";

const ROUTES: Routes = [
    {
        loadChildren: () => LandingModule,
        path: LANDING_PATH,
    },
    {
        loadChildren: () => MainModule,
        path: MAIN_PATH,
    },
    {
        path: "",
        pathMatch: "full",
        redirectTo: LANDING_PATH,
    },
    {
        // component: PageNotFoundComponent,
        path: "**",
        redirectTo: LANDING_PATH,
    },
];

@NgModule({
    exports: [
        RouterModule,
    ],
    imports: [
        RouterModule.forRoot(ROUTES),
    ],
})
export class AppRoutingModule { }
