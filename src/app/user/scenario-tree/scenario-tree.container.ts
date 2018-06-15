import {
    Component,
    OnInit,
} from "@angular/core";
import {
    ActivatedRoute,
    ParamMap,
} from "@angular/router";
import {
    Observable,
    of,
} from "rxjs";
import { map } from "rxjs/operators";

@Component({
    selector: "ab-scanario-tree-container",
    template: `<ab-scenario-tree [selectedScenarioType]="selectedScenarioType$ | async"></ab-scenario-tree>`,
})
export class ScenarioTreeContainer implements OnInit {
    public selectedScenarioType$: Observable<string>;

    constructor(
        private route: ActivatedRoute,
    ) { }

    public ngOnInit(): void {
        // this.selectedScenarioType$ = of("gfa");
        this.selectedScenarioType$ = this.route.paramMap.pipe(
            map((params: ParamMap) => {
                return params.get("type");
            }),
        );
    }
}