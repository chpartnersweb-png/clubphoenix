# 画像・ロゴの出典

## クライアント提供素材

| ファイル | 使用先 | 内容 |
| --- | --- | --- |
| src/assets/IMG_3528.JPG | Atmosphere・OGP候補 | 店内のソファ席と通路 |
| src/assets/IMG_3529.JPG | Atmosphere・ロゴ生成の参考 | ソファ席と実店舗の壁面ロゴ |
| src/assets/IMG_3530.JPG | Drinks | バーカウンターとグラス・棚 |
| src/assets/IMG_3532.JPG | Updates | 壁面のフェニックスマーク |
| src/assets/IMG_3497.jpeg | 原稿の照合資料 | 料金表。1set 50分の根拠 |

IMG_3527.JPG・IMG_3531.JPGは保管していますが、ページには使用していません。提供コラージュのカクテルを、個別の提供商品として扱っていません。

## 生成素材

生成日：2026-11-04。生成方法：built-in image_gen。

| ファイル | 用途 |
| --- | --- |
| src/assets/generated/hero-night-desktop-v1.png | PC用の装飾ヒーロー背景 |
| src/assets/generated/hero-night-mobile-v1.png | スマートフォン用の装飾ヒーロー背景 |
| src/assets/generated/phoenix-symbol-v1.png | 提供写真のマークを参考に生成・調整した透過シンボル |
| public/favicon.png | 同じシンボルを使用したファビコン |

生成ヒーローは黒いガラスと羽根を思わせる光を描いたイメージビジュアルです。実際の店内・キャスト・提供商品の写真ではありません。装飾背景としてaltは空にし、店内紹介と店舗を表すOGPにはクライアント提供写真を使用しています。

ロゴは生成した透過シンボルと、HTMLで組んだ正確な綴りのCLUB PHOENIXを組み合わせています。既存マークを参照したWeb向けの生成案であり、既存ロゴデータの厳密なトレースではありません。初回生成後に色を整理した透過版を採用しています。黒背景版の追加生成はサービスの認証エラーで失敗したため、使用していません。

### 最終プロンプト：PCヒーロー

> Use case: ads-marketing. Create a premium editorial photographic hero background for CLUB PHOENIX, a Japanese nightlife venue. Wide landscape 16:9 composition, ideally 2560x1440. A dramatic abstract sculptural still life: on the far left and far right, curved sheets of smoked translucent black glass and thin champagne-gold reflective metal unfurl like the feathers of a phoenix wing. Extremely tactile polished glass, fine cut edges, restrained platinum highlights with muted warm gold. At bottom, a reflective black stone plane catches a soft warm line of light. Center is deep near-black open negative space for a large separately added wordmark. Curves frame the center like a stage without becoming a literal room. Cinematic macro material photography, exquisite controlled specular lighting, black charcoal tones with a little smoky violet, warm highlights. Luxurious, sophisticated, quiet, highly art directed, not a stock bar photo. Edge detail must remain visible without overexposure; central 40 percent calm dark negative space. No people, no venue interior, no bottles, no text or logo, no watermark, no fire or flames, no stars or particles. This is a conceptual background visual, not a factual photograph of the business.

### 最終プロンプト：モバイルヒーロー

> Use case: ads-marketing. Asset type: portrait mobile website hero background for CLUB PHOENIX. Create a cinematic editorial macro still life of smoked black translucent glass and curved champagne-gold metallic feather-like ribbons, premium luxury nightlife material photography. Vertical portrait composition, ideally 1080x1920 with a 9:16 crop. Tall elegant glass curves enter from both side edges, one curve sweeps gently near the bottom, recalling spread phoenix wings without depicting a literal bird. Central 50 percent has quiet deep-black negative space for the website's separately overlaid emblem and wordmark. Thin platinum edge highlights, muted golden reflections, subtle smoky violet undertones, black stone reflections at the very bottom. Detailed tactile glass, carefully lit polished edges, warm restrained light. It must have beautiful visible texture around the perimeter of a portrait frame, not a generic empty black gradient. This must match a landscape version made from the same black glass and champagne-gold metallic curves. No text, no lettering, no people, no venue interior, no flames, no sparks, no brand labels, no watermark. This is a conceptual visual, not a photograph of the actual venue.

### シンボル：初回生成プロンプト

参照：クライアント提供のIMG_3529.JPG。

> Use case: logo-brand. Reference image is the client-provided photograph of the existing CLUB PHOENIX wall emblem, only the bird logo is a reference, not the room. Create a clean transparent phoenix emblem for this venue's website. Preserve the recognisable long elegant curved neck facing right, small bird head, symmetrically outstretched upward wings with separated bold tapered feathers, slender tapered tail below. Refine the recognizable existing silhouette into a graceful contemporary luxury hospitality emblem. Use solid champagne-gold and pale platinum shapes, limited flat colors with a slight satin feel, crisp vector-like edges and generous negative space. Visually balanced, not too ornate, readable at small sizes. Bird emblem ONLY, NO lettering. Isolated on truly transparent background, centered and large filling 80 percent of square canvas. No room, no background, no shadows outside the emblem, no rectangular panel, no mockup, no bevel, no glow, no watermark. This is the final standalone transparent brand symbol.

### シンボル：最終採用した透過版の調整プロンプト

参照：初回の生成シンボル。

> Edit target: the attached transparent phoenix emblem. Keep the elegant long curved neck, head facing right, upward wings, separated feather shapes, tapered tail, overall proportions and centered layout. Clean and simplify the rendering into a pristine flat logo using exactly two solid colors: warm platinum #e4e0d8 and muted champagne gold #c2aa7f. Remove ALL scattered pixels, colored fringing, speckles, grain, yellow or red noise, soft highlights, outer shadows, embossing and gradients. Every shape must have a perfectly crisp clean antialiased silhouette; the open spaces between shapes must be completely empty transparent pixels. No outlines or halos. True transparent background. No lettering. Preserve design identity and shapes; only flatten colors and clean the edges and negative space. Output a production-ready isolated clean flat emblem.

### シンボル：追加生成の指示（認証エラーで未生成・未使用）

参照：クライアント提供のIMG_3529.JPG。

> Use case: logo-brand. Design a completely clean flat phoenix bird emblem based on the existing phoenix logo shown on the wall in the reference photograph. Use the bird only, NOT the room. Long curved swan-like neck, head looking right, symmetrically upward spread wings built from three or four separate tapered sweeping feather shapes, separated tapered flame-like tail below. Use clean large shapes, warm platinum and muted champagne gold, minimalist flat graphic design, perfectly smooth crisp edges. The bird should fill 82 percent of a square image with generous margin. Place the emblem on a completely uniform PURE BLACK #000000 background. This is intentionally an OPAQUE image: do NOT remove the black background, do NOT apply transparency, do NOT extract alpha. The entire background including all negative spaces between the feathers must be pure clean uniform black. Absolutely no scattered pixels, no grain, no speckles, no colored fringes, no particles, no shadows, no textures, no halftone, no glow, no gradients, no outlines. Exactly three flat colors only: pure black background, warm platinum #e4e0d8, muted champagne gold #c2aa7f. No letters, no text, no watermark. A production-ready solid flat elegant geometric phoenix insignia with no mockup effects.
