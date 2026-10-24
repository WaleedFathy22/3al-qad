import { Component } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { HeroComponent } from './hero/hero.component';
import { MenuComponent } from './menu/menu.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [NavbarComponent, HeroComponent, MenuComponent, AboutComponent, ContactComponent, FooterComponent],
  template: `
    <app-navbar />
    <app-hero />
    <app-menu />
    <app-about />
    <app-contact />
    <app-footer />
  `,
})
export class App {}
