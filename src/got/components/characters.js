import {Component, Input} from "@angular/core";

@Component({
  selector: "got-characters",
  template: `<h3>Characters</h3>
  <got-character *ngFor="let character of characters" [character]="character"></got-character>
  `
})
export class CharactersComponent {
  @Input() characters;
}