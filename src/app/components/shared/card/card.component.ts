import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html'
})
export class CardComponent {
  @Input() items: any[] = [];

  constructor(private router: Router) { }

  showArtist(item: any) {
    let id: string;

    id = (item.type === 'artist') ? item.id : item.artists[0].id;

    this.router.navigate(['/artist', id]);
  }
}
