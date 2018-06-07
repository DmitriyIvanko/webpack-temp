import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { StoreModule } from "@ngrx/store";

import { AppComponent } from "./app.component";
import { counterReducer } from "./counter";

@NgModule({
    declarations: [
      AppComponent, 
    ],
    imports: [
        BrowserModule,
        StoreModule.forRoot({ count: counterReducer }),
    ],
    bootstrap: [
      AppComponent,  
    ],
})
export class AppModule { }
