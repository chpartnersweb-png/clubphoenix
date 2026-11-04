export const pricing = {
  setMinutes: 50,
  sets: [
    { label: 'OPEN〜21:00', amount: 5000 },
    { label: '21:00〜LAST', amount: 6000 },
  ],
  extensions: [
    { label: '延長料金', duration: '30分', amount: 3500 },
    { label: '延長料金', duration: '50分', amount: 6000 },
  ],
  nomination: 2000,
  beer: 1000,
  included: ['ウィスキー', 'ブランデー', '焼酎'],
  notes: [
    '税・サービス料として別途20％を頂戴します。',
    'カードでお支払いの場合は手数料10％を別途頂戴します。',
  ],
};

export const formatPrice = (amount: number) => amount.toLocaleString('ja-JP');
