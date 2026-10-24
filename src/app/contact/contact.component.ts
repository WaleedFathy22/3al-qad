import { Component } from '@angular/core';
import { RESTAURANT, waLink } from '../restaurant.info';
import { RevealDirective } from '../shared/reveal.directive';

@Component({
  selector: 'app-contact',
  imports: [RevealDirective],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  phones = RESTAURANT.phones;
  branches = RESTAURANT.branches;
  wa = waLink;
}
