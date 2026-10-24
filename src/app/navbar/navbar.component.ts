import { Component, signal } from '@angular/core';
import { RESTAURANT } from '../restaurant.info';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
  host: { '(window:scroll)': 'onScroll()' },
})
export class NavbarComponent {
  name = RESTAURANT.name;
  links = [
    { id: 'home', label: 'الرئيسية', icon: 'fa-house' },
    { id: 'category', label: 'الأقسام', icon: 'fa-burger' },
    { id: 'about', label: 'من نحن', icon: 'fa-circle-info' },
    { id: 'contact', label: 'اتصل بنا', icon: 'fa-phone' },
  ];
  scrolled = signal(false);
  active = signal('home');
  open = signal(false);

  onScroll() {
    this.scrolled.set(window.scrollY > 40);
    let current = 'home';
    for (const l of this.links) {
      const el = document.getElementById(l.id);
      if (el && el.getBoundingClientRect().top <= 140) current = l.id;
    }
    this.active.set(current);
  }
}
