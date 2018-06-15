import { NgModule } from "@angular/core";
import {
    RouterModule,
    Routes,
} from "@angular/router";

import { WelcomeComponent } from "./welcome.component";

const ROUTES: Routes = [
    {
        component: WelcomeComponent,
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
export class WelcomeRoutingModule { }
