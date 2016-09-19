import {Component, Input} from "@angular/core";

@Component({
  selector: "got-episode-cover",
  template: `
    <img [src]="'got/covers/' + episodeSummary.season + '_' + episodeSummary.episode + '.jpg'">
    <div class="wrapper">
        <div class="summary">
        <hr>
        <h1>Season {{episodeSummary.season}} Episode {{episodeSummary.episode}}</h1>
        <h2 [innerText]="episodeSummary?.title"></h2>
        </div>
    </div>
  `
})
export class EpisodeCoverComponent {
  @Input() episodeSummary;
}