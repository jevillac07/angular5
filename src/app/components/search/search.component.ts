import { Component } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent {
  artistas: any[] = [];
  loading = false;

  constructor( private spotify: SpotifyService) { }

  buscarArtista(termino: string) {
    if (termino.length > 1) {
      this.loading = true;
      this.spotify.getArtists(termino).subscribe((data: any) => {
        this.artistas = data;
        this.loading = false;
      });
    }
  }

}
