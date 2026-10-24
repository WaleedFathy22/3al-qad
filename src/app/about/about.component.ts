import { Component } from '@angular/core';
import { RevealDirective } from '../shared/reveal.directive';

@Component({
  selector: 'app-about',
  imports: [RevealDirective],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  image = '/assets/images/logo.jfif'; // مؤقتة
  features = [
    { icon: 'fa-burger', title: 'برجر بيف وتشيكن', text: 'برجر جورميه وتشيكن برجر محشي جبنة.' },
    { icon: 'fa-drumstick-bite', title: 'فرايد تشيكن وبروست', text: 'ساندوتشات ووجبات بروست مقرمشة.' },
    { icon: 'fa-bread-slice', title: 'فرنساوي وبطاطس', text: 'ساندوتشات فرنساوي وبواكي بطاطس بأنواعها.' },
    { icon: 'fa-bowl-rice', title: 'ريزو وفتة', text: 'أرز بسمتي مع الاستربس والصوص اللي تختاره.' },
  ];
}
