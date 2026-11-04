# CLUB PHOENIX LP制作計画

作成日：2026-11-04（日本時間）

本書は制作前の設計書。2026-11-04の続行依頼でローカルソースの実装・画像生成へ進んだ。ユーザー指定により実装後の確認は省略。実装内容と編集方法は `docs/EDITING.md`、素材の出典と最終プロンプトは `docs/IMAGE-CREDITS.md` を参照。公開は行っていない。

## 1. 制作の目的とコンセプト

初めて訪れる方が「雰囲気」「料金」「場所」を把握し、電話で来店の相談ができるLPを制作する。

デザインコンセプトは **「夜に、華がひらく。」**。実際の店内にある黒いソファ、ガラスブロック、照明付きのフェニックスの壁面ロゴを起点に、光と陰影で印象をつくる。

生成ビジュアル → 実際の店内 → 料金 → 最新情報 → アクセス・電話、という順に関心と判断材料をつなぐ。料金とアクセスへはヘッダーから直接移動できるようにする。

ヒーローの左右分割、同じカードの繰り返し、大量の説明文は採用しない。全面ビジュアル、大小の写真、罫線で整えた料金表、余白のある案内面を組み合わせる。

## 2. 確認したプロジェクトと素材

- 現在のページはAstroの初期ページ。
- package.jsonにはAstro、GSAP、Lenisが記載されている。既存の依存関係変更は保持する。
- src/assets内の7点を目視確認。
- ユーザー提供の店舗情報・料金情報を掲載内容の基準とする。
- ポケパラの指定ページも参照。Instagramは今回の取得では内容を確認できていない。

| ファイル | 確認できた内容 | 採用計画 |
| --- | --- | --- |
| IMG_3497.jpeg | 料金表の写真 | 料金の照合資料。表自体は読みやすいHTMLで作成 |
| IMG_3527.JPG | 店内の奥行きが見える写真 | 店内紹介の補助候補。3528と似るため両方を大きくは掲載しない |
| IMG_3528.JPG | 通路、テーブル席、壁面ロゴ | 店内紹介のメイン横写真 |
| IMG_3529.JPG | ソファ席と壁面ロゴ | メイン写真とずらした位置のサブ写真。ロゴ生成の参照資料 |
| IMG_3530.JPG | バーカウンター、ボトル棚、グラス | ドリンク案内、店内のディテール |
| IMG_3531.JPG | カクテルと店内の文字入りコラージュ | 優先度低。個別の提供メニューの根拠にはしない |
| IMG_3532.JPG | 正面から捉えた壁面ロゴ | 店内パートの締め、または3529との比較で選択 |

似た構図をすべて並べず、基本は3528・3529・3530の3点を中心に構成し、3532を必要に応じて採用する。写真は解像感を見ながら表示サイズを決め、大きな引き伸ばしを避ける。スマートフォンでのトリミングでは壁面ロゴと座席の関係を残す。

## 3. デザインシステム

### 色と質感

- ベース：ミッドナイトブラック `#0D0D12`
- サブ背景：チャコール `#19191F`
- 本文：ウォームホワイト `#F3F0EA`
- アクセント：シャンパンゴールド `#BEA778`
- 補助：プラチナ `#C8CBD2`、ごく控えめなスモークバイオレット `#8B8198`

金色はロゴ・細い線・操作箇所に絞る。料金パートは明るいストーン色の面に切り替え、情報を読み取る場面をつくる。文字色・背景色の組み合わせは実装時にコントラストを確認する。

### 文字と余白

- 欧文の店名・見出し：細すぎないセリフ体を候補に、実際のロゴとの相性を比較。
- 日本語の短いコピー：明朝体。本文・料金・案内：読みやすいゴシック体。
- モバイルの本文は原則16px前後。料金注記も14px以上を目安にし、薄い文字で埋もれさせない。
- デスクトップは12列グリッドを基準に、写真の幅と開始位置を変える。
- セクションの余白はデスクトップ96〜160px、モバイル64〜88pxを初期値として実画面で調整。
- 角丸のカードを大量に置かず、写真の直線、余白、細い罫線で構成する。

## 4. ページ構成とレイアウト

### 01 — HERO：全面に広がるナイトビジュアル

PC・スマートフォンともに画面いっぱいの生成画像。中央に生成フェニックスマークとCLUB PHOENIXのロゴタイプ、短いコピー「夜に、華がひらく。」のみを重ねる。

背景は黒いガラス、金属的な反射、羽の曲線を思わせる光の表現。架空の豪華な店内や在籍していない人物は描かない。下端に「IBARAKI, OSAKA / OPEN 20:00」と小さなスクロール案内を配置。料金や長い紹介文は入れない。

ヘッダーは左上に小さなブランド表示、右上にメニュー。デスクトップでは料金・アクセス・電話をすぐ選べる配置とし、モバイルではメニューボタンと電話導線の役割を明確に分ける。

ヒーローの基準は100svh。モバイルではヘッダー、主役のマーク、コピー、下部の固定電話バーが重ならない高さ・余白を確保する。

### 02 — ATMOSPHERE：実際の店内へ

ヒーローの余韻から、実際の店内写真へ移る。見出し案は「グラスを傾け、会話を楽しむ夜に。」。説明は2〜3行程度に抑える。

3528の横写真を大きく置き、少し下の別の列に3529を小さく配置。文字は写真の脇の細い余白や写真間に置き、同じ左右二分割を繰り返さない。写真への文字重ねは最小限とする。

写真の下に「カウンター4席 / テーブル10卓」を端的に掲載。モバイルはメイン写真 → 短い紹介 → サブ写真の順で縦に流す。

### 03 — DRINK：実際のカウンターとドリンク案内

3530を使い、グラスとボトル棚の質感を見せる。写真はページ幅いっぱいに引き伸ばさず、解像感が保てる幅の横帯として配置。

掲載する文言は次を基本とする。

- ウィスキー・ブランデー・焼酎 飲み放題
- ビールフリー ＋1,000円
- その他各種ボトルを取り揃えております。男性スタッフにお問い合わせください。

特定銘柄やカクテル名は追加しない。ビールの追加料金は料金表にも同じデータから表示する。写真だけでは足りない場合に限り、生成したグラスのディテール写真を小さく補助使用する。

### 04 — SYSTEM：料金を読み取りやすい一面に

背景をウォームホワイト系に切り替え、レストランの料金冊子のような整列した罫線表をつくる。PCではセット料金を大きな2行、延長・指名などを下段にまとめる。モバイルでは1列にし、料金表を横スクロールさせない。

| 項目 | 表示金額 |
| --- | ---: |
| OPEN〜21:00 | 5,000円 |
| 21:00〜LAST | 6,000円 |
| 延長30分 | 3,500円 |
| 延長50分 | 6,000円 |
| 指名料 | 2,000円 |
| ビールフリー | ＋1,000円 |

「1set 50分」は提供された料金表写真で確認できるため、セット料金の近くに表示する。

以下の注記は同じ料金エリア内に、折りたたまず表示する。

- 税・サービス料として別途20％を頂戴します。
- カードでお支払いの場合は手数料10％を別途頂戴します。

価格を税込総額として書き換えない。20％と10％の計算順序・対象金額は不明なため、合計金額の例や自動計算は設けない。

料金表写真には「コンパニオンのオーダー（フード＆ドリンク）は含まれておりません」「当店では2SET毎の精算をさせて頂いております」とも記載されている。現行の案内として有効か、制作時に確認してから追加する。

### 05 — UPDATES：最新情報への入口

Instagramとポケパラへ、役割がわかる2本のリンクを設ける。

- Instagram：お店の最新情報を見る
- ポケパラ：キャスト情報・ブログを見る

小さなアイコン、見出し、短い説明、リンクを細い罫線で整える。店舗写真の小さな切り抜きや大きなPHOENIXの文字で余白に変化をつける。

キャスト紹介は外部ページへつなぐ。実在するかのような生成キャスト写真、架空のプロフィールは作らない。投稿埋め込みや自動取得は初期実装では採用せず、表示速度と更新負担を抑える。

### 06 — ACCESS & CONTACT：来店の行動につなぐ

住所と駅からの所要時間を先に掲載。地図は住所検索のリンクを必ず用意し、埋め込みを置く場合は遅延読み込みとする。未検証の座標や独自の道順は書かない。

| 項目 | 掲載内容 |
| --- | --- |
| 店舗名 | CLUB PHOENIX |
| 住所 | 大阪府茨木市末広町2-18 セカンドBOXビル 2F |
| 最寄駅 | 阪急京都線「茨木市駅」から徒歩4分 |
| その他アクセス | JR京都線「JR総持寺駅」から徒歩17分 |
| 営業時間 | 20:00〜LAST（平日・土日祝） |
| 定休日 | 不定休 ※お電話でご確認ください |
| 電話 | 072-637-3211（19時以降受付） |

セクション末尾に「ご来店・空席のお問い合わせ」と電話番号を大きく配置。リンクは `tel:0726373211`。その場で予約確定できるような表現は使わない。

### 07 — FOOTER

ロゴ、住所、電話、SNSリンク、コピーライトを簡潔に配置。採用情報や問い合わせフォームは今回の依頼範囲に追加しない。

## 5. モバイルの来店導線

- 画面下に「電話する / 19時以降受付」と「アクセス」の2つの導線。
- 電話側を主ボタンとして強調。セーフエリアと同じ高さの本文余白を確保する。
- 料金・住所・電話番号は画像に焼き込まず、選択・拡大・読み上げができる文字として掲載する。
- タップ領域は44px以上を目安に設計する。
- メニューはキーボード・Escapeキー・フォーカス復帰に対応する。
- 不定休のため現在の営業状態は自動表示しない。19時より前も電話受付時刻を明記する。

## 6. 画像生成・ロゴ制作の計画

標準は新規生成3点（PCヒーロー、スマートフォンヒーロー、透過ロゴシンボル）。PC画像をトリミングしても成立する場合は、スマートフォン版を別生成せず2点に抑える。補助画像は実装画面の不足を確認した場合だけ追加する。

### HERO / PC

予定名：`src/assets/generated/hero-night-desktop-v1.png`

生成仕様：横長16:9を目標。黒いガラスの反射とフェニックスの翼を想起する金属的な光。中央にロゴを載せる暗い余白、端に繊細なハイライト。人物、室内の全景、特定銘柄、文字、炎の爆発は入れない。

生成プロンプト案：

> Use case: ads-marketing. Asset type: full-bleed website hero for CLUB PHOENIX, a nightlife venue in Ibaraki, Osaka. Create an atmospheric editorial still life of smoked black glass and delicate platinum and champagne-gold reflections, with a restrained curved light motif suggesting the wings of a phoenix. Cinematic low-key lighting, tactile materials, spacious composition, quiet dark central negative space for a separately overlaid logo. Wide landscape composition suitable for a 16:9 crop. No people, no fictional venue interior, no bottle labels, no text, no watermark, no literal flames, no excessive particles.

### HERO / MOBILE

予定名：`src/assets/generated/hero-night-mobile-v1.png`

生成仕様：縦長9:16を目標。PC版の色・質感を参照して再構成。中央上部のロゴ領域、下部の固定バー領域に主役を置かない。横長画像の単純な切り抜きで光の構図が崩れる場合に作成する。

生成プロンプト案：

> Use the approved desktop hero as a visual style reference. Recompose the same smoked glass, platinum and champagne-gold reflected light into a portrait composition suitable for a 9:16 crop. Keep a quiet dark central upper area for a separately overlaid logo and a clear lower margin for mobile navigation. Preserve the restrained material palette and photographic lighting. No people, no venue interior, no text, no bottle labels, no watermark.

### LOGO

予定名：`src/assets/generated/phoenix-symbol-v1.png`

3529・3497に写る実店舗のマークを参照し、首の曲線と広げた翼を残したフェニックスのシンボルを生成。金・銀の関係を保ち、Webの小さい表示でも輪郭を認識できる密度に整理する。

透過PNGのシンボルと、正確な綴りの `CLUB PHOENIX` ロゴタイプを組み合わせる。ロゴタイプはHTMLの文字として組み、生成画像の綴り誤りを避ける。サイトに初期アイコン・タイトルを残さない。

生成プロンプト案：

> Use case: logo-brand. Asset type: transparent phoenix emblem for a website logo. Reference images: the client-provided photographs of the existing CLUB PHOENIX wall emblem and printed menu emblem. Preserve the recognisable long curved neck, upward spread wings and tapered tail rhythm. Refine into clean balanced silhouettes with restrained platinum and champagne-gold shapes, crisp edges, readable at small scale, flat vector-like finish. Generate only the bird emblem, centered, with generous transparent padding. No lettering, no black rectangular background, no mockup, no glow, no 3D bevel, no watermark. True transparent background.

### 生成素材の扱い

生成にはbuilt-in image_genを使用する。ローカルの参照写真を表示してから生成に渡す。生成した最終素材はプロジェクト内へ保存する。

ヒーローはイメージビジュアルとして扱い、実際の店内写真と区別する。装飾背景のaltは空にし、必要な場合は小さく「イメージビジュアル」と補足する。店内紹介・地図・店舗の代表写真など、実物を説明する箇所には提供写真を使う。

## 7. GSAP・Lenisのアニメーション設計

| 対象 | 演出 | 初期値の目安 |
| --- | --- | --- |
| 初回ヒーロー | 背景のわずかな縮小とロゴ・コピーのフェード | 0.8〜1.2秒、背景scale 1.035→1 |
| ヒーロー退出 | 背景の短い視差、コピーの穏やかなフェード | 移動量はPC24〜48px程度、モバイル縮小または停止 |
| 店内写真 | 下から12〜24pxの移動＋フェード | 0.6〜0.9秒、1回だけ |
| 写真のレイヤー | PCの一部だけ軽い移動差 | 16〜32px程度、長いpinは使用しない |
| 料金 | 見出しと罫線、表全体の短い出現 | 0.4〜0.6秒、金額のカウントアップなし |
| ボタン | 下線・背景・矢印の小さな変化 | 0.2秒程度、hover可能な端末のみ |

GSAP + ScrollTriggerで出現とスクロール連動を管理する。Lenisは主にPCのホイールスクロールを穏やかに整える目的で使用し、スマートフォンのタッチ操作はネイティブを優先する。

実装時はLenisとScrollTriggerの更新を同期し、アニメーションループを重複させない。アンカー位置では固定ヘッダー分を考慮する。メニュー表示中は背景スクロールを停止し、閉じたら元に戻す。

`prefers-reduced-motion` ではLenisの補間、視差、拡大縮小を停止する。JavaScriptが使えなくても、写真・料金・電話・SNSリンクが最初から読める設計にする。文字の一文字ずつの長い演出、強制ローディング、カーソル追従、無限マーキー、自動カルーセルは採用しない。

## 8. Astro実装構成の案

```text
src/
  assets/
    （クライアント提供素材）
    generated/
      hero-night-desktop-v1.png
      hero-night-mobile-v1.png       # 必要な場合
      phoenix-symbol-v1.png
  components/
    SiteHeader.astro
    Hero.astro
    Atmosphere.astro
    Drinks.astro
    System.astro
    Updates.astro
    AccessContact.astro
    MobileContactBar.astro
    SiteFooter.astro
    Seo.astro
  data/
    site.ts
    pricing.ts
  layouts/
    Layout.astro
  pages/
    index.astro
  scripts/
    motion.ts
  styles/
    global.css
docs/
  LP-PLAN.md
  IMAGE-CREDITS.md
```

店舗情報と料金データを集約し、電話番号・営業時間・追加料金の食い違いを防ぐ。React等は追加せず、Astroと必要なクライアントスクリプトで構成する。

画像は表示幅に合うWebP/AVIF等の配信形式を検討する。ヒーローは優先読み込み、下部写真は遅延読み込み。画像の幅と高さを指定し、読み込みによるレイアウトのずれを防ぐ。ファーストビュー画像は目標200〜400KB程度から画質を比較し、端末ごとの転送量を測定して調整する。

ページ言語は日本語。タイトル案は「CLUB PHOENIX｜大阪・茨木市駅徒歩4分のキャバクラ」。住所・電話・営業時間を文字で掲載し、実店舗写真をOGP候補にする。公開URLが決まったらcanonical、OGP URL、サイトマップ等を設定する。LASTの閉店時刻や不定休の日付は推測で構造化データに入れない。

## 9. 制作順序と検証

1. 店舗写真の採用と色・書体・余白を確定する。
2. ヒーローとロゴシンボルを生成し、PC・スマートフォン両方の構図で比較する。
3. ヒーロー、実店舗紹介、料金表を先につくり、ページ全体の密度を決める。
4. ドリンク、SNS、アクセス、電話導線を実装する。
5. GSAP・Lenisを組み込み、動きの量を実画面で調整する。
6. 料金原稿、電話、外部リンク、地図、画像、表示速度を確認する。
7. ビルドとブラウザー検証を行い、実装結果と公開状態を区別して報告する。

開発サーバーが必要になったら、AGENTS.mdに従い `astro dev --background` を使用し、status / logs / stopで管理する。

検証の対象：

- 360 / 390 / 768 / 1440pxを目安としたレスポンシブ表示。
- 画面下の電話バーと料金・地図・フッターの重なり。
- iOS・Android相当のタッチ操作、アンカー移動、メニュー開閉。
- キーボード操作、フォーカス、読み上げ順、動きを減らす設定。
- 画像読み込み前後のレイアウト、横はみ出し、フォントの可読性。
- 料金の追加費用の見つけやすさと19時以降受付の表示。
- 電話リンク、Instagram、ポケパラ、地図リンクの接続先。
- 提供写真と生成画像の用途の区別。

## 10. 実装前後に整理する事項

設計は現時点の情報で進められる。次の項目は該当箇所の原稿・公開設定を固める段階で整理する。

- 料金表写真にある追加注文の対象と2SET毎の精算の案内が現行運用か。
- サイト上で総額例を出す必要が生じた場合の各手数料の計算対象と順序。
- 公開する正式なドメイン・URL。

クーポン、LINE予約、特定ボトル価格、キャストの在籍情報、口コミは、今回の提供情報から独自に追加しない。

## 参照

- ユーザー提供の店舗・料金情報とsrc/assetsの7点。
- ポケパラ：https://www.pokepara.jp/osaka/m304/a339/shop10895/
- Instagram（指定リンク。内容未取得）：https://www.instagram.com/club_phoenix.10.10/
- Astro Components：https://docs.astro.build/en/basics/astro-components/
- Astro Styling：https://docs.astro.build/en/guides/styling/
- GSAP ScrollTrigger：https://gsap.com/docs/v3/Plugins/ScrollTrigger/
- Lenis：https://github.com/darkroomengineering/lenis
