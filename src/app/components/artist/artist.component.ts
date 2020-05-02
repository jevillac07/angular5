import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html'
})
export class ArtistComponent {
  artist: any = {};
  loading: boolean;
  topTracks: any = [];

  constructor(private router: ActivatedRoute, private spotifyService: SpotifyService) {
    this.loading = true;
    this.router.params.subscribe(params => {
      this.getArtist(params.id);
      this.getTopTracks(params.id);
      this.loading = false;
    });
  }

  getArtist(id: string) {
    this.spotifyService.getArtist(id).subscribe(data => {
      this.artist = data;
    });
  }

  getTopTracks(id: string) {
    this.spotifyService.getTopTracks(id).subscribe(data => {
      this.topTracks = data;
      console.log(this.topTracks);
    });
  }
}
