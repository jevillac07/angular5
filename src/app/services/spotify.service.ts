import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient) {
    console.log('Servicio listo!');
  }

  getQuery(url: string) {
    const headers = new HttpHeaders({
      Authorization: 'Bearer BQAy0pso-YmMvcmqwZIJ4ma7z_-wG2RgxFnv1gZqAejlLS1Nb0wAubrISrTrm4Bf-rAlEfgQxGnm4YQwWS8'
    });

    return this.http.get(`https://api.spotify.com/v1/${ url }`, { headers });
  }

  getNewReleases() {
    return this.getQuery('browse/new-releases?limit=5')
              .pipe(map((data: any) => data.albums.items));
  }

  getArtists(termino: string) {
    return this.getQuery(`search?q=${ termino }&type=artist&limit=15`)
              .pipe(map((data: any) => data.artists.items));
  }

  getArtist(id: string) {
    return this.getQuery(`artists/${ id }`);
  }

  getTopTracks(id: string) {
    return this.getQuery(`artists/${ id }/top-tracks?country=es`)
              .pipe(map((data: any) => data.tracks));
  }
}
