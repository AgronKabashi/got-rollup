import {Component, ViewEncapsulation} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {CharacterBioService, EpisodeService} from "../services";

@Component({
  selector: "got-home",
  styleUrls: ["got/css/main.css"],
  encapsulation: ViewEncapsulation.None,
  template: `
  <got-navigation></got-navigation>
  <got-episode-cover [episodeSummary]="episodeSummary"></got-episode-cover>
  <got-characters [characters]="characters"></got-characters>
  <router-outlet></router-outlet>`
})
export class HomeComponent {
  constructor(route: ActivatedRoute, characterBioService: CharacterBioService, episodeService: EpisodeService) {
    this.route = route;
    this.characterBioService = characterBioService;
    this.episodeService = episodeService;

    this.selectedCharacter = null;
    this.currentSeason = 1;
    this.currentEpisode = 1;

    this.episodeSummary = {
      season: this.currentSeason,
      episode: this.currentEpisode,
      title: ""
    };
  }

  ngOnInit() {
    const characterBiosPromise = this.characterBioService.whenGetAllCharacterBios()
      .then(characterBios => this.characterBios = characterBios);

    this.route.params
      .subscribe(args => {
        const {episode, season} = args;

        // Wait for the character bios' to load
        characterBiosPromise.then(() => this.loadEpisode(season, episode));
      });
  }

  loadEpisode (season = 1, episode = 1) {
    this.episodeService.whenGetEpisode(season, episode)
      .then(episodeData => {
        this.characters = episodeData.characters.map(character => {
          return Object.assign(character, this.characterBios[character.name]);
        });

        this.episodeSummary = {
          season,
          episode,
          title: episodeData.title
        };

        this.currentSeason = season;
        this.currentEpisode = episode;
    });
  }
}