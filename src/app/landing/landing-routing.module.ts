import { NgModule } from "@angular/core";
import {
    RouterModule,
    Routes,
} from "@angular/router";

import { LandingComponent } from "./landing.component";

const ROUTES: Routes = [
    {
        children: [
            {
                loadChildren: "./sign-in/sign-in.module#SignInModule",
                path: "sign-in",
            },
        ],
        component: LandingComponent,
        path: "",
    },
];

@NgModule({
    exports: [
        RouterModule,
    ],
    imports: [
        RouterModule.forChild(ROUTES),
    ],
})
export class LandingRoutingModule { }
