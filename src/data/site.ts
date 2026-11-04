const address = '大阪府茨木市末広町2-18 セカンドBOXビル 2F';
const mapQuery = encodeURIComponent(`CLUB PHOENIX ${address}`);

export const site = {
  name: 'CLUB PHOENIX',
  reading: 'クラブ フェニックス',
  title: 'CLUB PHOENIX｜大阪・茨木市駅徒歩4分のキャバクラ',
  description: '阪急茨木市駅から徒歩4分。大阪府茨木市のCLUB PHOENIX（クラブ フェニックス）。店内の雰囲気、料金システム、アクセスをご案内します。20:00〜LAST営業。お問い合わせは072-637-3211（19時以降受付）。',
  phone: '072-637-3211',
  phoneHref: 'tel:0726373211',
  phoneHours: '19時以降受付',
  address,
  street: '大阪府茨木市末広町2-18',
  building: 'セカンドBOXビル 2F',
  hours: '20:00〜LAST',
  holiday: '不定休',
  holidayNote: 'お電話でご確認ください。',
  counterSeats: 4,
  tables: 10,
  stations: [
    { line: '阪急京都線', name: '茨木市駅', minutes: 4 },
    { line: 'JR京都線', name: 'JR総持寺駅', minutes: 17 },
  ],
  instagram: 'https://www.instagram.com/club_phoenix.10.10/',
  pokepara: 'https://www.pokepara.jp/osaka/m304/a339/shop10895/',
  mapUrl: `https://www.google.com/maps/search/?api=1&query=${mapQuery}`,
  mapEmbed: `https://www.google.com/maps?q=${mapQuery}&output=embed&hl=ja`,
};

export const navigation = [
  { href: '#space', en: 'Atmosphere', ja: '店内のご案内' },
  { href: '#drink', en: 'Drink', ja: 'ドリンク' },
  { href: '#system', en: 'System', ja: '料金システム' },
  { href: '#updates', en: 'Updates', ja: '最新情報' },
  { href: '#access', en: 'Access', ja: 'アクセス' },
];
