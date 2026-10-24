import { Component } from '@angular/core';
import { RESTAURANT } from '../restaurant.info';
import { RevealDirective } from '../shared/reveal.directive';

@Component({
  selector: 'app-footer',
  imports: [RevealDirective],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  info = RESTAURANT;
  year = new Date().getFullYear();
  links = [
    { id: 'home', label: 'الرئيسية' },
    { id: 'category', label: 'الأقسام' },
    { id: 'about', label: 'من نحن' },
    { id: 'contact', label: 'اتصل بنا' },
  ];
}
