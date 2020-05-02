import { Component } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {
  nuevasCanciones: any;
  loading = true;

  constructor( private spotify: SpotifyService ) {
    this.spotify.getNewReleases().subscribe(data => {
      this.nuevasCanciones = data;
      this.loading = false;
    });
  }
}
