import {Component, Input} from "@angular/core";
import {ActivatedRoute} from "@angular/router";

import {CharacterBioService} from "got/services/character-bio";

@Component({
  selector: "got-character-bio",
  template: `
  <div class="card" *ngIf="character">
    <img [src]="character.portrait">
    <span class="summary">
      <span [innerText]="character.bio"></span>
      <a [routerLink]="'../..'">Return to episode</a>
    </span>
  </div>`
})
export class CharacterBioComponent {
  constructor (route: ActivatedRoute, characterBioService: CharacterBioService) {
    this.route = route;
    this.characterBioService = characterBioService;
  }

  ngOnInit () {
    this.characterBioService.whenGetCharacterBio(this.route.params.value.characterName)
      .then(character => this.character = character);
  }
}