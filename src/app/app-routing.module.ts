import { NgModule } from "@angular/core";
import {
    RouterModule,
    Routes,
} from "@angular/router";

import { LANDING_ROUTE } from "./landing";
import { USER_ROUTE } from "./user";

const ROUTES: Routes = [
    {
        loadChildren: "./landing/landing.module#LandingModule",
        path: LANDING_ROUTE,
    },
    {
        loadChildren: "./user/user.module#UserModule",
        path: USER_ROUTE,
    },
    {
        path: "",
        pathMatch: "full",
        redirectTo: LANDING_ROUTE,
    },
    {
        // component: PageNotFoundComponent,
        path: "**",
        redirectTo: LANDING_ROUTE,
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
