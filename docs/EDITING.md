# CLUB PHOENIX 編集ガイド

## ページの構成

`src/pages/index.astro` で以下の順にコンポーネントを配置しています。

1. Hero — 全面の生成ビジュアル、生成ロゴ、短いコピー
2. Atmosphere — 実際の店内写真と席数
3. Drinks — カウンター写真とドリンクのご案内
4. System — 料金表と追加費用の注記
5. Updates — Instagram・ポケパラへのリンク
6. AccessContact — 地図、アクセス、営業時間、電話

ヘッダー・フッター・スマートフォンの固定電話バーは別コンポーネントです。

## 店舗情報を変更する

`src/data/site.ts` に電話、住所、営業時間、定休日、駅からの所要時間、SNSリンクをまとめています。

- 電話番号を変更するときは `phone` と `phoneHref` の両方を更新してください。
- 住所を変更するときは冒頭の `addressRegion`（都道府県）、`addressLocality`（市区町村）、`streetAddress`（町名・番地）、`building` を更新してください。表示用住所と構造化データに共通で反映します。
- SEOの説明文 `description` や `title` にも店舗情報が含まれています。
- 不定休のため、現在営業中かどうかを自動判定する表示は設けていません。

## 料金を変更する

`src/data/pricing.ts` にセット料金、延長、指名料、ビールフリー、追加費用の注記をまとめています。ビール料金はドリンク紹介と料金表で共通の値を使用します。

1set 50分は提供された料金表写真を根拠にしています。税・サービス料20％とカード支払い時手数料10％は別途の注記として掲載しています。各費用の計算対象・順序は未確定のため、総額計算機能は設けていません。

料金表写真にある追加注文と2SET毎の精算については、現行の運用が確認されていないため原稿に加えていません。

## 写真・ロゴ

- 生成ヒーロー：`src/assets/generated/hero-night-desktop-v1.png`
- スマートフォン用：`src/assets/generated/hero-night-mobile-v1.png`
- 生成シンボル：`src/assets/generated/phoenix-symbol-v1.png`（透過PNG）
- 店内写真：`IMG_3528.JPG`、`IMG_3529.JPG`、`IMG_3530.JPG`、`IMG_3532.JPG`

ヒーローは画面幅640px以下で縦長の専用画像に切り替わります。生成シンボルとHTMLのロゴタイプを組み合わせています。ファビコンは同じシンボルを `public/favicon.png` に配置しています。

画像はAstroの画像処理でWebPに変換して配信する構成です。元のPNG・JPEG素材は編集用に保持しています。ヒーローは優先読み込み、下部の写真と地図は遅延読み込みです。

## 配色・レイアウト・アニメーション

配色と各画面幅のレイアウト：`src/styles/global.css`

メニュー開閉・アンカー移動・GSAP・Lenis：`src/scripts/motion.ts`

- Lenisは幅761px以上かつ精密なポインターがある端末で有効。
- スマートフォンはネイティブスクロール。
- 動きを減らす設定ではスムーズスクロール・出現演出・視差を停止。
- JavaScript無効時も本文、料金、電話、地図・SNSリンクを表示。
- メニューはネイティブdialogを使い、Escapeで閉じる操作とフォーカス管理に対応。
- WebフォントはGoogle Fontsから読み込み、未取得の場合はシステムフォントにフォールバック。

## 開発サーバー

このプロジェクトのAGENTS.mdに従って、バックグラウンドで起動します。

```powershell
npm run dev -- --background
```

管理用コマンド：

```powershell
npm run astro -- dev status
npm run astro -- dev logs
npm run astro -- dev stop
```

## 公開URLの設定

正式な公開URLは `https://clubphoenix.pages.dev/` として `src/config/seo.mjs` で管理しています。ドメイン変更時はこの設定を更新してください。

Astroのsite設定、canonical、OGP・Xカード、JSON-LD、robots.txt・サイトマップが同じ設定を参照します。以前の `PUBLIC_SITE_URL` 環境変数は使用しません。OGP用写真は実店舗の `IMG_3528.JPG` を1200×630のJPEGとして生成する設定です。

SEOの詳細と再デプロイ後の手順は `docs/SEO.md` を参照してください。

## 今回の実施範囲

2026-11-04：LPのローカルソース実装、ヒーロー・ロゴ生成、素材組み込み、編集資料作成。その後の依頼で公開URLを設定し、SEOメタ情報、構造化データ、robots.txt、サイトマップを追加。

ユーザーの指定により、実装後のビルド、型チェック、テスト、ブラウザー表示、リンク疎通・レスポンシブ表示の確認は実施していません。開発サーバーも起動していません。公開・デプロイは行っていません。
