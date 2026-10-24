export interface PriceOption {
  label: string;
  price: number;
}

export interface Meal {
  id: number;
  name: string;
  nameEn?: string;
  category: string;
  description?: string;
  image: string;
  prices: PriceOption[];
  featured?: boolean; // النجمة ⭐ في المنيو
  spicy?: boolean; // 🌶
  spiceOption?: boolean; // حار أو عادي
}

export interface Addon {
  group: string;
  name: string;
  price: number;
}

export const CATEGORIES = [
  { key: 'fried-chicken', label: 'فرايد تشيكن' },
  { key: 'chicken-burger', label: 'تشيكن برجر محشي جبنة' },
  { key: 'beef-burger', label: 'بيف برجر' },
  { key: 'french', label: 'تشيكن فرنساوي' },
  { key: 'fries', label: 'بطاطس' },
  { key: 'rizo', label: 'ريزو' },
  { key: 'strips', label: 'وجبات استربس' },
  { key: 'broast', label: 'وجبات بروست' },
];

// صور مؤقتة من الإنترنت - بدّلها بصورك لما تجهز
const img = (keyword: string, lock: number) =>
  `${keyword}`;

const SD = (single: number, double: number): PriceOption[] => [
  { label: 'سنجل', price: single },
  { label: 'دبل', price: double },
];
const PC = (plain?: number, cheese?: number): PriceOption[] => {
  const out: PriceOption[] = [];
  if (plain != null) out.push({ label: 'ساده', price: plain });
  if (cheese != null) out.push({ label: 'جبنة', price: cheese });
  return out;
};

export const MEALS: Meal[] = [
  // ===== فرايد تشيكن =====
  { id: 1, name: 'بيج رانشر', nameEn: 'Big Rancher', category: 'fried-chicken', image: img('/assets/images/2.png', 1), prices: SD(159.9, 199.9),
    description: 'صوص رانش - صوص جبنة - كريسبي استربس - حلقات بصل - 2 موزاريلا استيكس - باكت بطاطس' },
  { id: 2, name: 'هاليبينو', nameEn: 'Jalapeno', category: 'fried-chicken', image: img('/assets/images/2.png', 2), prices: SD(159.9, 199.9),
    description: 'صوص جبنة - كريسبي استربس - فلفل هالبينو - روست بيف - حلقات بصل مقلية - 2 شيدر هاليبينو استيكس - باكت بطاطس' },
  { id: 3, name: 'ديناميت', nameEn: 'Dynamite', category: 'fried-chicken', image: img('/assets/images/2.png', 3), prices: SD(159.9, 199.9),
    description: 'صوص ناوزند ايلاند - صوص جبنة - كريسبي استربس - حلقات بصل مقلية - تركي مدخن - 2 موزاريلا استيكس - باكت بطاطس' },
  { id: 4, name: 'تيستي', nameEn: 'Tasty', category: 'fried-chicken', image: img('/assets/images/2.png', 4), prices: SD(149.9, 189.9),
    description: 'صوص تيستي - صوص جبنة - كريسبي استربس - حلقات بصل مقلية - 2 موزاريلا استيكس - باكت بطاطس' },

  // ===== تشيكن برجر محشي جبنة =====
  { id: 5, name: 'كريمي رانش تشيكن برجر', nameEn: 'Creamy Ranch Chicken Burger', category: 'chicken-burger', image: img('/assets/images/12.png', 5), prices: SD(149.9, 214.9),
    description: 'قطعة تشيكن برجر محشية جبنة - صوص رانش - خس - طماطم - مايونيز - صوص جبنة' },
  { id: 6, name: 'تشيز بومب تشيكن برجر', nameEn: 'Cheese Bomb Chicken Burger', category: 'chicken-burger', image: img('/assets/images/12.png', 6), prices: SD(179.9, 239.9), featured: true,
    description: 'قطعة تشيكن برجر محشية جبنة - صوص تيستي - خس - طماطم - قطعة جبنة سايحة 100 جم - صوص جبنة' },
  { id: 7, name: 'جوسي لوسي تشيكن برجر', nameEn: 'Juicy Lucy Chicken Burger', category: 'chicken-burger', image: img('/assets/images/12.png', 7), prices: SD(184.9, 244.9), featured: true,
    description: 'قطعة تشيكن برجر محشية جبنة - صوص رانش - خس - طماطم - مايونيز - 2 كيري مقلية - صوص جبنة - روست بيف مدخن' },

  // ===== بيف برجر =====
  { id: 8, name: 'سموكي بيف برجر', nameEn: 'Smoky Beef Burger', category: 'beef-burger', image: img('/assets/images/4.png', 8), prices: SD(174.9, 239.9),
    description: 'قطعة بيف برجر جورميه 150 جرام - خس - طماطم - بصل فريش - صوص السموكي الجديد - صوص جبنة' },
  { id: 9, name: 'تشيز بومب بيف برجر', nameEn: 'Cheese Bomb Beef Burger', category: 'beef-burger', image: img('/assets/images/4.png', 9), prices: SD(199.9, 259.9), featured: true,
    description: 'قطعة بيف برجر جورميه 150 جرام - صوص السموكي الجديد - خس - طماطم - بصل - قطعة جبنة سايحة 100 جم - صوص جبنة' },
  { id: 10, name: 'موزاريلا مادنس بيف برجر', nameEn: 'Mozzarella Madness Beef Burger', category: 'beef-burger', image: img('/assets/images/4.png', 10), prices: SD(199.9, 259.9), featured: true,
    description: 'قطعة بيف برجر جورميه 150 جرام - صوص السموكي الجديد - خس - طماطم - بصل فريش - روست بيف - صوص جبنة - موزاريلا استيكس' },

  // ===== تشيكن فرنساوي (حار أو عادي) =====
  { id: 11, name: 'تشيكن بانية', category: 'french', image: img('/assets/images/Gourmet-Crispy-Chicken.png', 11), prices: PC(100, 110), spiceOption: true },
  { id: 12, name: 'تشيكن استربس', category: 'french', image: img('/assets/images/Gourmet-Crispy-Chicken.png', 12), prices: PC(100, 110), spiceOption: true },
  { id: 13, name: 'تشيكن استربس كولسلو', category: 'french', image: img('/assets/images/Gourmet-Crispy-Chicken.png', 13), prices: PC(105, 115), spiceOption: true },
  { id: 14, name: 'فاهيتا فراخ', category: 'french', image: img('/assets/images/Gourmet-Crispy-Chicken.png', 14), prices: PC(105, 115), spiceOption: true },
  { id: 15, name: 'كريسبي رانش', category: 'french', image: img('/assets/images/Gourmet-Crispy-Chicken.png', 15), prices: PC(105, 115), featured: true, spiceOption: true },
  { id: 16, name: 'كريسبي رانش سوبريم', category: 'french', image: img('/assets/images/Gourmet-Crispy-Chicken.png', 16), prices: PC(undefined, 135), featured: true, spiceOption: true },
  { id: 17, name: 'سوبر كرانشي', category: 'french', image: img('/assets/images/Gourmet-Crispy-Chicken.png', 17), prices: PC(undefined, 135), featured: true, spiceOption: true },
  { id: 18, name: 'بيج فاير', nameEn: 'Big Fire', category: 'french', image: img('/assets/images/Gourmet-Crispy-Chicken.png', 18), prices: PC(undefined, 160), spicy: true,
    description: 'صوص رانش - هالبينو حار - تركي مدخن - خس - تشيكن استربس - صوص جبنة - سبايسي مايونيز - روست بيف مدخن - هالبينو شيدر استيكس' },

  // ===== بطاطس =====
  { id: 19, name: 'ساندوتش بطاطس', category: 'fries', image: img('/assets/images/French-fries.jpg', 19), prices: PC(50, 60) },
  { id: 20, name: 'ساندوتش بطاطس رانش', category: 'fries', image: img('/assets/images/French-fries.jpg', 20), prices: PC(55, 65) },
  { id: 21, name: 'ساندوتش بطاطس كول سلو', category: 'fries', image: img('/assets/images/French-fries.jpg', 21), prices: PC(55, 65) },
  { id: 22, name: 'باكت بطاطس', category: 'fries', image: img('/assets/images/French-fries.jpg', 22), prices: PC(35, 45) },
  { id: 23, name: 'باكت بطاطس هاليبينو جبنة', category: 'fries', image: img('/assets/images/French-fries.jpg', 23), prices: PC(undefined, 50) },
  { id: 24, name: 'باكت بطاطس فريسكاس', category: 'fries', image: img('/assets/images/French-fries.jpg', 24), prices: PC(undefined, 60) },
  { id: 25, name: 'باكت بطاطس استربس', category: 'fries', image: img('/assets/images/French-fries.jpg', 25), prices: PC(undefined, 80) },

  // ===== ريزو =====
  { id: 26, name: 'فتة', category: 'rizo', image: img('/assets/images/rizo.jfif', 26), prices: [{ label: 'سعر', price: 169.9 }], spiceOption: true,
    description: 'أرز بسمتي - صوص من اختيارك (باربيكيو / رانش / سويت تشيلي / جبنة) - استربس - كول سلو' },
  { id: 27, name: 'ريزو', category: 'rizo', image: img('/assets/images/rizo.jfif', 27), prices: [{ label: 'سعر', price: 114.9 }], spiceOption: true,
    description: 'أرز بسمتي - صوص من اختيارك (باربيكيو / رانش / سويت تشيلي / جبنة) - استربس' },

  // ===== وجبات استربس =====
  { id: 28, name: 'وجبة تشيكن استربس', category: 'strips', image: img('/assets/images/Crispy-Fried-Chicken-Box.png', 28), spiceOption: true,
    prices: [{ label: '3 قطع', price: 149.9 }, { label: '5 قطع', price: 199.9 }],
    description: 'تشيكن استربس - بطاطس - كول سلو - مايونيز - كاتشب - 1 عيش' },

  // ===== وجبات بروست =====
  { id: 29, name: 'وجبة قطعتين بروست', category: 'broast', image: img('/assets/images/Crispy-Fried-Chicken-Box.png', 29), prices: [{ label: 'سعر', price: 149.9 }], spiceOption: true,
    description: 'فخد - دبوس - بطاطس - ثومية - كاتشب - 1 عيش - كولسلو' },
  { id: 30, name: 'وجبة ع القد', category: 'broast', image: img('/assets/images/Crispy-Fried-Chicken-Box.png', 30), prices: [{ label: 'سعر', price: 224.9 }], featured: true, spiceOption: true,
    description: 'صدر - فخد - دبوس - جناح - بطاطس - ثومية - كاتشب - 1 عيش - كول سلو' },
];

export const ADDONS: Addon[] = [
  { group: 'إضافات', name: '1 عيش كايزر', price: 5 },
  { group: 'إضافات', name: 'كول سلو', price: 15 },
  { group: 'إضافات', name: 'قطعة استربس', price: 35 },
  { group: 'إضافات', name: 'قطعة بروست', price: 50 },
  { group: 'إضافات', name: 'أرز بسمتي', price: 25 },
  { group: 'إضافات', name: 'حلقات بصل', price: 25 },
  { group: 'إضافات', name: 'موزاريلا استيكس', price: 50 },
  { group: 'إضافات', name: 'شيدر استيكس', price: 50 },
  { group: 'إضافات', name: 'كيري بايتس', price: 50 },
  { group: 'إضافات', name: 'هاليبينو', price: 5 },
  { group: 'صوصات', name: 'ثومية', price: 15 },
  { group: 'صوصات', name: 'صوص سويت تشيلي', price: 15 },
  { group: 'صوصات', name: 'صوص باربيكيو', price: 15 },
  { group: 'صوصات', name: 'صوص رانش', price: 15 },
  { group: 'صوصات', name: 'صوص جبنة', price: 20 },
  { group: 'مشروبات وحلو', name: 'كانز', price: 25 },
  { group: 'مشروبات وحلو', name: 'لتر كولا', price: 40 },
  { group: 'مشروبات وحلو', name: 'مياه', price: 10 },
  { group: 'مشروبات وحلو', name: 'كاب ثلج', price: 5 },
  { group: 'مشروبات وحلو', name: 'ميني بان كيك', price: 50 },
];
