import { NgModule } from "@angular/core";
import {
    RouterModule,
    Routes,
} from "@angular/router";

import { ScenarioTreeContainer } from "./scenario-tree.container";

const ROUTES: Routes = [
    {
        component: ScenarioTreeContainer,
        path: ":type",
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
export class ScenarioTreeRoutingModule { }
