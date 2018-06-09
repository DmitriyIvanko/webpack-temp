import { NgModule } from "@angular/core";
import {
    RouterModule,
    Routes,
} from "@angular/router";

import { MainComponent } from "./main.component"

const ROUTES: Routes = [
    {
        component: MainComponent,
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
export class MainRoutingModule { }
