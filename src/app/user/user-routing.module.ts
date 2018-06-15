import { NgModule } from "@angular/core";
import {
    RouterModule,
    Routes,
} from "@angular/router";

import { UserComponent } from "./user.component"
import { UserLayoutComponent } from "./user-shared";

const ROUTES: Routes = [
    {
        children: [
            {
                loadChildren: "./welcome/welcome.module#WelcomeModule",
                path: "welcome",
            },
            { path: "", redirectTo: "gfa", pathMatch: "full" },
            {
                children: [
                    {
                        loadChildren: "./scenario-tree/scenario-tree.module#ScenarioTreeModule",
                        path: "",
                    },
                ],
                component: UserLayoutComponent,
                path: "",
            },
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
