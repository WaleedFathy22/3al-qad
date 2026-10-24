import { DestroyRef, Directive, ElementRef, afterNextRender, inject, input, signal } from '@angular/core';

/** يعمل أنيميشن لما العنصر يظهر في الشاشة: appReveal="up|left|right|zoom" و revealDelay بالمللي ثانية */
@Directive({
  selector: '[appReveal]',
  host: {
    class: 'reveal',
    '[class.revealed]': 'shown()',
    '[attr.data-reveal]': 'type() || "up"',
    '[style.transition-delay.ms]': 'delay()',
  },
})
export class RevealDirective {
  type = input<string>('up', { alias: 'appReveal' });
  delay = input<number>(0, { alias: 'revealDelay' });
  shown = signal(false);

  constructor() {
    const el = inject(ElementRef).nativeElement as HTMLElement;
    const destroyRef = inject(DestroyRef);
    afterNextRender(() => {
      if (!('IntersectionObserver' in window)) {
        this.shown.set(true);
        return;
      }
      const io = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            this.shown.set(true);
            io.disconnect();
          }
        },
        { threshold: 0.12 },
      );
      io.observe(el);
      destroyRef.onDestroy(() => io.disconnect());
    });
  }
}
