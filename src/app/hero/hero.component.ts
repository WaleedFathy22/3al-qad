import { Component } from '@angular/core';
import { RESTAURANT, waLink } from '../restaurant.info';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {
  name = RESTAURANT.name;
  tagline = RESTAURANT.tagline;
  wa = waLink(RESTAURANT.phones[0]);
  // صورة الكفر المؤقتة - بدّلها بصورتك
  cover = 'https://loremflickr.com/1600/900/burger?lock=99';
}
