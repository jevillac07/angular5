import { Component } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {
  nuevasCanciones: any;
  loading = true;
  notification = false;
  messageService: string;

  constructor( private spotify: SpotifyService ) {
    this.spotify.getNewReleases().subscribe(data => {
      this.nuevasCanciones = data;
      this.loading = false;
    }, (catchService) => {
      this.loading = false;
      this.notification = true;
      this.messageService = catchService.error.error.message;
    });
  }
}
