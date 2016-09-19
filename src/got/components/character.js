import {Component, Input} from "@angular/core";

@Component({
  selector: "got-character",
  template: `
  <a [routerLink]="['./bio', character.name]">
    <img [src]="character.portrait">
    <span class="summary" [innerText]="character.name"></span>
  </a>`
})
export class CharacterComponent {
  @Input() character;
}