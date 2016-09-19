import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {HttpModule} from "@angular/http";

import routing from "./routing";
import * as components from "./components";
import * as services from "./services";

// Module definition for GOT
@NgModule({
  imports: [
    routing,
    BrowserModule,
    HttpModule
  ],
  providers: [
    services.CharacterBioService,
    services.EpisodeService
  ],
  declarations: [
    components.ALL_COMPONENTS
  ],
  exports: [
    components.HomeComponent
  ]
})
export default class {}