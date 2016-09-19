import {Injectable} from "@angular/core";
import {Http} from "@angular/http";

@Injectable()
export class EpisodeService {
  constructor (http: Http)  {
    this.http = http;
    this.cachedEpisodes = {};
  }

  whenGetEpisode(season, episode) {
    const id = `${season}-${episode}`;
    if (this.cachedEpisodes[id]) {
      return Promise.resolve(this.cachedEpisodes[id]);
    }

    return this.http.get(`got/data/season${season}_${episode}.json`)
      .toPromise()
      .then(response => {
        const data = response.json();
        this.cachedEpisodes[id] = data;

        return data;
      });
  }
}