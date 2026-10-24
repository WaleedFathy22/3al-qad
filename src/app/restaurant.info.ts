export const RESTAURANT = {
  name: 'ع القد',
  tagline: 'ملوك الفرنساوي',
  phones: ['01553703403', '01040432335'],
  branches: ['أكتوبر - السياحية الرابعة - بنزينة بترومين', 'أكتوبر - غرب سوميد - بنزينة طاقة'],
};

// رقم مصري: نشيل الصفر ونضيف كود الدولة 20
export const waLink = (phone: string) => `https://wa.me/2${phone}`;
