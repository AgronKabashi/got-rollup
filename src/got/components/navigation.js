import {Component, Input} from "@angular/core";

@Component({
  selector: "got-navigation",
  template: `
  <header>
    <img src="images/logo.png">
    <menu>
      <a [routerLinkActive]="'active'" routerLink="/season/1/episode/1">Season 1</a>
      <nav>
        <a [routerLinkActive]="'active'" routerLink="/season/1/episode/1">Episode 1</a>
        <a [routerLinkActive]="'active'" routerLink="/season/1/episode/2">Episode 2</a>
        <a [routerLinkActive]="'active'" routerLink="/season/1/episode/3">Episode 3</a>
        <a [routerLinkActive]="'active'" routerLink="/season/1/episode/4">Episode 4</a>
        <a [routerLinkActive]="'active'" routerLink="/season/1/episode/5">Episode 5</a>
        <a [routerLinkActive]="'active'" routerLink="/season/1/episode/6">Episode 6</a>
        <a [routerLinkActive]="'active'" routerLink="/season/1/episode/7">Episode 7</a>
        <a [routerLinkActive]="'active'" routerLink="/season/1/episode/8">Episode 8</a>
        <a [routerLinkActive]="'active'" routerLink="/season/1/episode/9">Episode 9</a>
        <a [routerLinkActive]="'active'" routerLink="/season/1/episode/10">Episode 10</a>
      </nav>
    </menu>
    <menu>
      <a [routerLinkActive]="'active'" routerLink="/season/2/episode/1">Season 2</a>
      <nav>
        <a [routerLinkActive]="'active'" routerLink="/season/2/episode/1">Episode 1</a>
        <a [routerLinkActive]="'active'" routerLink="/season/2/episode/2">Episode 2</a>
        <a [routerLinkActive]="'active'" routerLink="/season/2/episode/3">Episode 3</a>
        <a [routerLinkActive]="'active'" routerLink="/season/2/episode/4">Episode 4</a>
        <a [routerLinkActive]="'active'" routerLink="/season/2/episode/5">Episode 5</a>
        <a [routerLinkActive]="'active'" routerLink="/season/2/episode/6">Episode 6</a>
        <a [routerLinkActive]="'active'" routerLink="/season/2/episode/7">Episode 7</a>
        <a [routerLinkActive]="'active'" routerLink="/season/2/episode/8">Episode 8</a>
        <a [routerLinkActive]="'active'" routerLink="/season/2/episode/9">Episode 9</a>
        <a [routerLinkActive]="'active'" routerLink="/season/2/episode/10">Episode 10</a>
      </nav>
    </menu>
    <menu>
      <a [routerLinkActive]="'active'" routerLink="/season/3/episode/1">Season 3</a>
      <nav>
        <a [routerLinkActive]="'active'" routerLink="/season/3/episode/1">Episode 1</a>
        <a [routerLinkActive]="'active'" routerLink="/season/3/episode/2">Episode 2</a>
      </nav>
    </menu>
  </header>`
})
export class NavigationComponent {
}