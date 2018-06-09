import "../assets/scss/app.scss";
import "../Web.config";

import { enableProdMode } from "@angular/core";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

import { AppModule } from "./app.module";

if (process.env.NODE_ENV === 'production') {
    console.log('Looks like we are in production mode!');
    enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
    .catch(error => console.log(error));
