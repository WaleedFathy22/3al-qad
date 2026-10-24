import { Injectable, computed, signal } from '@angular/core';
import { ADDONS, CATEGORIES, MEALS, Meal } from './meals.data';

@Injectable({ providedIn: 'root' })
export class MealService {
  readonly categories = [
    { key: 'all', label: 'الكل' },
    ...CATEGORIES,
    { key: 'adds', label: 'الإضافات' },
  ];
  readonly selected = signal('all');
  private readonly meals = signal<Meal[]>(MEALS);

  readonly filteredMeals = computed(() => {
    const s = this.selected();
    if (s === 'adds') return [];
    return s === 'all' ? this.meals() : this.meals().filter(m => m.category === s);
  });

  readonly showAddons = computed(() => ['all', 'adds'].includes(this.selected()));

  readonly addonGroups = computed(() => {
    const map = new Map<string, typeof ADDONS>();
    for (const a of ADDONS) map.set(a.group, [...(map.get(a.group) ?? []), a]);
    return [...map].map(([group, items]) => ({ group, items }));
  });
}
