import { Component, inject } from '@angular/core';
import { MealService } from '../meal.service';
import { RevealDirective } from '../shared/reveal.directive';

const FALLBACK =
  'data:image/svg+xml;utf8,' +
  encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" width="600" height="400"><rect width="100%" height="100%" fill="#1b2a52"/><text x="50%" y="50%" fill="#8fa3d6" font-size="28" text-anchor="middle">صورة الوجبة</text></svg>',
  );

@Component({
  selector: 'app-menu',
  imports: [RevealDirective],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
})
export class MenuComponent {
  service = inject(MealService);

  onImgError(e: Event) {
    (e.target as HTMLImageElement).src = FALLBACK;
  }
}
