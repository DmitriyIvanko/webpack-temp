﻿import { NgModule } from "@angular/core";
import {
    RouterModule,
    Routes,
} from "@angular/router";

import { UserComponent } from "./user.component"

const ROUTES: Routes = [
    {
        children: [
            {
                loadChildren: "./welcome/welcome.module#WelcomeModule",
                path: "welcome",
            }
        ],
        component: UserComponent,
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
export class UserRoutingModule { }
