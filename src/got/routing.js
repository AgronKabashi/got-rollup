import {RouterModule} from "@angular/router";
import * as components from "./components";

export default RouterModule.forRoot([
  {
    path: "",
    redirectTo: "season/1/episode/1",
    pathMatch: "full"
  },
  {
    path: "season/:season/episode/:episode",
    component: components.HomeComponent,
    children: [
      {
        path: "",
        component: components.NoContentComponent
      },
      {
        path: "bio/:characterName",
        component: components.CharacterBioComponent
      }
    ]
  }
], {useHash: true});