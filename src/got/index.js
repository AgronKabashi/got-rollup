import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {HttpModule} from "@angular/http";
import {RouterModule} from "@angular/router";

import routes from "./routes";
import * as components from "./components";
import * as services from "./services";

// Module definition for GOT
@NgModule({
  imports: [
    RouterModule.forChild(routes),
    BrowserModule,
    HttpModule
  ],
  providers: Object.values(services),
  declarations: Object.values(components),
  exports: [
    components.HomeComponent
  ]
})
export default class GOTModule {}