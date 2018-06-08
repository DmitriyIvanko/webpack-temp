import { NgModule } from "@angular/core";
import {
    RouterModule,
    Routes,
} from "@angular/router";

import { LANDING_PATH } from "./landing";

const ROUTES: Routes = [
    {
        loadChildren: "./landing/landing.module#LandingModule",
        path: LANDING_PATH,
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
