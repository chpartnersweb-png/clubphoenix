# CLUB PHOENIX SEO設定

対象URL： https://clubphoenix.pages.dev/

## 今回の変更

SEOの変更はローカルのソースへ実装しています。今回の作業では再デプロイ、Search Consoleの操作、変更後の検証は行っていません。

公開URLへの事前アクセスは取得ツールで失敗したため、現在公開されているHTML・HTTPヘッダー・インデックス状況は確認できていません。これはサイト停止を確認したという意味ではありません。

### 公開URLとcanonical

`src/config/seo.mjs` の `seo.url` を正規の公開URLとして、Astroのsite設定、canonical、OGP、構造化データ、robots.txt、サイトマップで共有しています。

環境変数の有無に依存せず、指定された公開URLを出力します。旧 `PUBLIC_SITE_URL` は使用しません。将来ドメインを変更する場合は `seo.url` を更新してください。

canonicalは公開ドメインとページのpathnameから組み立て、広告などのクエリ文字列やページ内アンカーは含めません。

### タイトル・説明文

`src/data/site.ts` で管理しています。

タイトル：

> CLUB PHOENIX（フェニックス）｜茨木市駅徒歩4分のキャバクラ

説明文：

> 大阪府茨木市のキャバクラ、CLUB PHOENIX（クラブ フェニックス）。阪急茨木市駅から徒歩4分。店内写真、1set50分の料金システム、営業時間・アクセスをご案内。20:00〜LAST営業。お電話は072-637-3211（19時以降受付）。

本文の店舗名の補足にも地域と業態を掲載し、読み上げ用H1に店名と店舗の概要を含めました。表示上のヒーローは短いコピーとロゴの構成を維持しています。

### OGP・Xカード

`src/components/Seo.astro` から以下を出力します。

- タイトル、説明文、サイト名、日本語ロケール。
- 正規URLを用いた絶対URL。
- 実店舗写真 `src/assets/IMG_3528.JPG` から生成する1200×630 JPEG。
- 画像の絶対URL、幅・高さ、画像形式、説明。
- X用のsummary_large_image、タイトル、説明文、画像、画像説明。

代表画像には生成したヒーローを使用せず、実際の店内を掲載しています。画像URLはAstroの画像処理が生成するパスを参照するため、仮のファイル名を指定していません。

### 構造化データ

`src/components/Seo.astro` でJSON-LDをHTMLのheadへ出力します。店舗・サイト・ページ・画像を安定したIDで関連付けています。

| 型 | 主な内容 |
| --- | --- |
| EntertainmentBusiness | LocalBusinessの下位型。店名、読み、URL、国際形式の電話、住所、地図、SNS、実店舗写真、ロゴ、通貨 |
| WebSite | サイト名、URL、言語、運営する店舗への参照 |
| WebPage | ページ名、説明、URL、対象となる店舗、サイト・代表写真への参照 |
| ImageObject | 実店舗写真のURL、画像説明、幅、高さ |

閉店時刻はLAST、不定休のため、推測した `openingHoursSpecification` は出力していません。営業時間と電話受付時刻は本文で案内しています。

未提供・未確認の郵便番号、座標、口コミ、評価、受賞歴、在籍情報は追加していません。手数料の計算対象が未確定なため、確定した支払総額としてのOfferも出力していません。存在しないサイト内検索・予約フォーム・FAQの構造化データも設けていません。

JSON-LDのテキストに含まれる `<` はエスケープして出力しています。

### robots.txt・サイトマップ

Astroの静的エンドポイントとして実装しています。追加パッケージは不要です。

| ソース | 再デプロイ後の出力先 |
| --- | --- |
| src/pages/robots.txt.ts | https://clubphoenix.pages.dev/robots.txt |
| src/pages/sitemap.xml.ts | https://clubphoenix.pages.dev/sitemap.xml |

robots.txtは通常のクローラーへページの取得を許可し、サイトマップの絶対URLを案内します。HTMLにも `index, follow, max-image-preview:large` を出力しています。

サイトマップには現在の実在ページであるトップページのみを掲載します。店内・料金・アクセスはページ内アンカーのため、別ページとして登録しません。更新日時の推測やビルドごとの自動lastmodは設けていません。

robotsの許可やサイトマップの設置は、Googleへの登録や検索順位を保証するものではありません。

## 再デプロイ後の手順

以下は今回は未実施です。

1. 更新したソースをCloudflare Pagesへ再デプロイする。
2. トップページ、robots.txt、sitemap.xmlの応答と、canonical・OGP画像・JSON-LDを確認する。
3. Google Search Consoleで `https://clubphoenix.pages.dev/` をURLプレフィックスのプロパティとして登録し、所有権を確認する。
4. サイトマップとして `https://clubphoenix.pages.dev/sitemap.xml` を送信する。
5. トップページをURL検査し、必要に応じてインデックス登録をリクエストする。

所有権確認用のタグ・ファイルはアカウントごとの値が必要なため、推測して追加していません。

Pagesのプレビュー環境の設定と本番URLを区別してください。HTTPヘッダーやCloudflare側にnoindex・アクセス制限がある場合は、ソース内のrobotsメタ情報だけでは解除できません。

## 検証範囲

以前のユーザー指定を引き継ぎ、変更後のビルド、型チェック、テスト、ブラウザー確認、構造化データ検証、公開サイトの再確認は省略しています。検索順位、クロール、インデックス登録、検索結果表示は未確認です。

## 参照した公式資料

- Astro Routing: https://docs.astro.build/en/guides/routing/
- Astro Endpoints: https://docs.astro.build/en/guides/endpoints/
- Astro Image API: https://docs.astro.build/en/reference/modules/astro-assets/
- Google canonicalガイド: https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls
- Google LocalBusinessガイド: https://developers.google.com/search/docs/appearance/structured-data/local-business
- Schema.orgの型の階層: https://schema.org/NightClub
