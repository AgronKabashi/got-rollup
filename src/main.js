import {Component, enableProdMode, NgModule} from "@angular/core";
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic"; // includes compiler
import {RouterModule} from "@angular/router";

import GOTModule from "./got";

// enableProdMode();

@Component({
  selector: "got-app",
  template: "<router-outlet></router-outlet>"
})
class AppComponent {}

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent],
  imports: [
    RouterModule.forRoot([], {useHash: true}),
    GOTModule,
    RouterModule
  ]
})
class ApplicationModule {}

platformBrowserDynamic().bootstrapModule(ApplicationModule);