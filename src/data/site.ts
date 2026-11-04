const addressRegion = '大阪府';
const addressLocality = '茨木市';
const streetAddress = '末広町2-18';
const building = 'セカンドBOXビル 2F';
const street = `${addressRegion}${addressLocality}${streetAddress}`;
const address = `${street} ${building}`;
const mapQuery = encodeURIComponent(`CLUB PHOENIX ${address}`);

export const site = {
  name: 'CLUB PHOENIX',
  reading: 'クラブ フェニックス',
  title: 'CLUB PHOENIX（フェニックス）｜茨木市駅徒歩4分のキャバクラ',
  description: '大阪府茨木市のキャバクラ、CLUB PHOENIX（クラブ フェニックス）。阪急茨木市駅から徒歩4分。店内写真、1set50分の料金システム、営業時間・アクセスをご案内。20:00〜LAST営業。お電話は072-637-3211（19時以降受付）。',
  phone: '072-637-3211',
  phoneHref: 'tel:0726373211',
  phoneHours: '19時以降受付',
  address,
  street,
  building,
  addressRegion,
  addressLocality,
  streetAddress,
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
