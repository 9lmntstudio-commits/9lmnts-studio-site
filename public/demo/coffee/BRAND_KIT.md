# Kremas Coffee Co. — Brand Identity & Visual System Kit
**Version:** 2.0 · Production Master  
**Agency:** 9LMNTS Studio Creative Architecture  
**Category:** Luxury Beverage · Third-Wave Cold Brew & Heritage Spirits  
**Heritage Origin:** Republic of Haiti (Repiblik d Ayiti) × Ottawa Roastery Lab  
**Public Showcase URL:** `/demo/coffee` (Direct Clean Route: `https://9lmntsstudio.com/demo/coffee`)

---

## 1. Brand Strategy & Ancestral Heritage

### 1.1 The Cultural Origin: What is Kremas?
In Haitian culture, **Kremas** (or *Krémasse* in Haitian Creole) is far more than a beverage; it is a sacred celebratory elixir. Traditionally prepared for holiday gatherings, weddings, family reunions, and festive communions, Kremas is hand-whipped using:
- **Pure Sweetened Condensed & Evaporated Milk**
- **Rich Fresh-Pressed Coconut Cream**
- **Toasted Whole Caribbean Spices:** Star anise pods (*anise etwal*), Ceylon cinnamon bark (*kanèl*), fresh-grated nutmeg (*muskad*), and whole cloves (*jiwòf*)
- **Citrus & Vanilla Zest:** Fresh lime rind shavings (*sitwon vèt*) and Tahitian or Madagascar vanilla bean
- **The Spirit Anchor:** Smooth aged Caribbean dark rum or golden whiskey, elevating the velvety cream into an aromatic, warming digestif.

### 1.2 The Innovation: Third-Wave Cold Brew Meets Ancestral Kremas
Traditional coffee brands either serve scorched, bitter espresso or industrial iced drinks smothered in synthetic corn syrups. **Kremas Coffee Co.** disrupts the luxury beverage space by merging two obsessive crafts:
1. **18-Hour Single-Origin Cold Steep:** Direct-trade specialty Arabica (Huila, Colombia & Sidama, Ethiopia) coarsely ground and slow-steeped in cold, micro-filtered mineral water. This yields natural dark-chocolate notes with zero bitter acidity.
2. **Spiced Whiskey Cream Elixir:** The 18-hour cold brew is blended with fresh-pressed coconut cream, cast-iron toasted whole spices, and fine aged whiskey.
3. **The Ritual:** Uncorked from heavy glass apothecary bottles, poured cold over crystal clear ice, and served in chilled cocktail coupe glasses with fresh star anise garnish alongside warm Haitian bakery confections.

### 1.3 Brand Positioning & North Star
- **Brand Purpose:** To honor ancestral Haitian culinary mastery through modern luxury beverage craft and immersive sensory design.
- **Tagline:** *Kremas, uncorked.*
- **Secondary Descriptor:** *Artisanal Haitian Spiced Whiskey Cream & 18-Hour Cold Brew.*
- **Tone of Voice:** Sensory, reverent, unhurried, sophisticated, and deeply grounded. Zero corporate jargon, zero sterile tech talk. Every sentence feels tactile, like fresh cream swirling into dark coffee.

---

## 2. Brand Architecture & Naming Conventions

| Entity | Formal Name | Colloquial / Short | Digital Handle |
| :--- | :--- | :--- | :--- |
| **Parent Brand** | Kremas Coffee Company Ltd. | Kremas Coffee Co. | `@kremascoffeeco` |
| **Flagship Elixir** | Original Kremas Reserve | Kremas Reserve | `#kremasreserve` |
| **Roastery & Lab** | Kremas Roastery & Bottle Shop | The Roastery | `214 Dalhousie St, Ottawa` |
| **Bakery Atelier** | La Pâtisserie Haïtienne | Kremas Bakery | `#kremasbakery` |
| **Wholesale / B2B** | Kremas Hospitality Allocation | Private Cellar Allocation | `concierge@kremascoffeeco.com` |

---

## 3. Visual Identity & Color System

The color system is inspired by raw obsidian volcanic stone, toasted star anise, aged whiskey oak casks, and unrefined coconut cream.

### 3.1 Color Palette Tokens

```
========================================================================================
TOKEN NAME            HEX         RGB               HSL            ROLE
========================================================================================
--bg (Obsidian)       #0A0807     rgb(10, 8, 7)     hsl(20, 18%, 3%)   Deep stage background
--ink (Crema White)   #F7EFE6     rgb(247, 239, 230) hsl(32, 53%, 94%) Primary headline & body
--ink-dim             rgba(247, 239, 230, 0.72)                     Secondary descriptive copy
--ink-faint           rgba(247, 239, 230, 0.42)                     Metadata, borders, dates
--line                rgba(247, 239, 230, 0.14)                     Glass hairline dividers
--glass               rgba(14, 11, 9, 0.72)                         70% Chroma frosted UI
--accent (Terracotta) #C86428     rgb(200, 100, 40) hsl(23, 67%, 47%) Primary CTAs & active tabs
========================================================================================
```

### 3.2 Dynamic Blend Tint Palette (Interactive Scroll Tints)

Each blend shifts the background video color grade dynamically using CSS `mix-blend-mode: color`:

```
========================================================================================
BLEND FLAVOUR             HEX CODE    ACCENT COLOR NAME         VISUAL MOOD
========================================================================================
01 · Kremas Reserve       #E2C39B     Cream Gold                Velvety, festive, golden glow
02 · Cinnamon Ember       #C86428     Toasted Cinnamon Orange   Warm hearth, spice fire
03 · Star Anise Noir      #5C321E     Deep Anise Umber          Nocturnal, bold, late-night
04 · Nutmeg Caramel       #D49B45     Toffee Amber              Sweet confection, buttery gold
05 · Toasted Coconut      #EDE2D0     Silky Coconut Ivory       Pristine tropical, dairy-free
========================================================================================
```

---

## 4. Typography System

The typography creates a contrast between high-editorial Caribbean literature and ultra-modern Swiss craft.

### 4.1 Typeface Families
1. **Primary Editorial Display:** `Instrument Serif` (Google Fonts)
   - *Characteristics:* High-contrast traditional serif, razor-sharp terminals, romantic italics.
   - *Usage:* Hero titles, quote marks, brand logo wordmark, bakery headings (`<em>` italicized accents).
2. **Primary Interface & Body:** `Plus Jakarta Sans` (Google Fonts)
   - *Characteristics:* Clean geometric sans-serif with humanist warm proportions.
   - *Usage:* Body paragraphs, navigation links, ingredient listings, button labels.
3. **Technical Metadata & Telemetry:** `JetBrains Mono` (Google Fonts)
   - *Characteristics:* Fixed-width monospace designed for developer precision.
   - *Usage:* SKU badges, origin coordinates, ABV percentages, pricing tags, volume measurements.

### 4.2 Type Scale & Hierarchy

| Role | Font Family | Size | Weight | Line Height | Tracking |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Hero Title** | Instrument Serif | `clamp(3.2rem, 7.8vw, 7.2rem)` | 400 (Regular) | `0.94` | `-0.035em` |
| **Section Title** | Instrument Serif | `clamp(2.4rem, 4.5vw, 4.2rem)` | 400 (Regular) | `1.05` | `-0.025em` |
| **Card Heading** | Plus Jakarta Sans | `1.25rem` – `1.5rem` | 700 (Bold) | `1.2` | `-0.015em` |
| **Body Paragraph** | Plus Jakarta Sans | `clamp(0.95rem, 1.05vw, 1.1rem)` | 400 (Regular) | `1.68` | `0` |
| **Navigation & Buttons** | Plus Jakarta Sans | `0.75rem` – `0.8rem` | 700 (Bold) | `1.0` | `+0.16em` (Caps) |
| **Badges & Numbers** | JetBrains Mono | `0.68rem` – `0.78rem` | 500 (Medium) | `1.0` | `+0.18em` (Caps) |

---

## 5. Physical Packaging & Apothecary Specifications

The Kremas packaging is engineered to sit proudly on a luxury bar cart, equal in stature to high-end mezcal or Japanese single-malt whiskey.

```
       ┌────────────────────────┐
       │     NATURAL CORK       │ <-- Grade A Portuguese agglomerate cork
       │     ~~~~~~~~~~~~       │
       │   NATURAL JUTE TWINE   │ <-- 3-ply raw organic jute tied in artisan knot
       │     ~~~~~~~~~~~~       │
       │       /      \         │
       │      /        \        │ <-- 500ml Heavy Flint Apothecary Glass (620g tare)
       │     │          │       │
       │     │ ╔══════╗ │       │
       │     │ ║KREMAS║ │       │ <-- 100% Cotton Rag Uncoated Paper Label (180 GSM)
       │     │ ║COFFEE║ │       │     Hot-stamped Matte Copper Foil Lettering
       │     │ ╚══════╝ │       │     Hand-numbered Batch & Bottle Calligraphy
       │     │          │       │
       │     │          │       │ <-- Thick crystal base with embossed fluting
       │     └──────────┘       │
       └────────────────────────┘
```

- **Bottle Silhouette:** 500ml Heavyweight French Apothecary Glass bottle with flared base fluting.
- **Closure:** 100% Natural Portuguese cork stopper sealed with raw organic 3-ply jute cord.
- **Label Material:** 180 GSM unbleached cotton-rag paper with deckled edges.
- **Print Embellishments:** Debossed blind letterpress logo with hot-stamped matte copper foil accents (`#C86428`).
- **Inspection Seal:** Hand-stamped roastery wax seal on the bottle shoulder with roaster signature and batch harvest date.

---

## 6. The 5 Flagship Kremas Blends Matrix

### 01 · Original Kremas Reserve (The Crown Jewel)
- **Concept:** The authentic ancestral recipe perfected over three generations.
- **Tasting Notes:** Rich sweetened condensed milk, fresh coconut meat, ground star anise, fresh grated nutmeg, smooth aged whiskey, and bittersweet cold brew chocolate.
- **Profile:** Sweetness: 7/10 · Spice: 6/10 · Body: 9/10
- **Volume / Price:** 500ml Glass Bottle · `$20.00 CAD`

### 02 · Cinnamon Ember
- **Concept:** Hearth-fire toasted whole spice profile.
- **Tasting Notes:** Cast-iron roasted Ceylon cinnamon quills, dark demerara cane sugar, toasted Georgia pecans, and charred oak whiskey.
- **Profile:** Sweetness: 5/10 · Spice: 8/10 · Body: 8/10
- **Volume / Price:** 500ml Glass Bottle · `$20.00 CAD`

### 03 · Star Anise Noir
- **Concept:** Nocturnal bold digestif for late-night slow sipping.
- **Tasting Notes:** Hand-cracked Vietnamese star anise pods, 85% single-origin Haitian cacao nibs, Tellicherry black peppercorn, and full-bodied whiskey warmth.
- **Profile:** Sweetness: 3/10 · Spice: 9/10 · Body: 9/10
- **Volume / Price:** 500ml Glass Bottle · `$21.00 CAD`

### 04 · Nutmeg Caramel
- **Concept:** Golden Caribbean dessert indulgence.
- **Tasting Notes:** Freshly rasped whole Grenadian nutmeg, kettle-cooked salted demerara toffee, Bourbon vanilla caviar, and smooth cream over crystal ice.
- **Profile:** Sweetness: 8/10 · Spice: 6/10 · Body: 8/10
- **Volume / Price:** 500ml Glass Bottle · `$21.00 CAD`

### 05 · Toasted Coconut (Zero-Proof / Plant-Based)
- **Concept:** 100% Dairy-Free and Alcohol-Free wellness tribute.
- **Tasting Notes:** Double-extracted raw coconut milk, roasted coconut shavings, wild Quebec wildflower honey, warm clove, and cold brew velvet.
- **Profile:** Sweetness: 6/10 · Spice: 4/10 · Body: 6/10
- **Volume / Price:** 500ml Glass Bottle · `$19.00 CAD`

---

## 7. Haitian Heritage Bakery & Confections Catalog (La Pâtisserie)

A traditional pour of Kremas is inextricably linked with Haitian baked goods. Our roastery bakes fresh four heritage recipes:

### 01 · Pain Patate Traditionnel (Léogâne & Port-au-Prince)
- **Description:** The undisputed soul of Haitian desserts. A slow-steamed, dense sweet potato pudding-cake made from purple-skinned Caribbean batata, freshly pressed coconut milk, black raisins, grated fresh ginger root, and sweet cinnamon.
- **Pairing Note:** Pair with **Original Kremas Reserve**; the earthy ginger and sweet potato cut through the rich coconut cream.
- **Price:** `$8.50 CAD` per generous square.

### 02 · Dous Makòs Artisanal (Petit-Goâve Heritage)
- **Description:** Haiti’s legendary tri-color fudge created in 1939 by Fernand Macos in Petit-Goâve. Kettle-cooked in heavy copper cauldrons with pure cane sugar and condensed milk, layered into vanilla cream, dark Haitian cacao, and almond praline.
- **Pairing Note:** Pair with **Star Anise Noir**; the intense dark cocoa layer bridges the licorice spice of star anise.
- **Price:** `$9.00 CAD` (3-bar artisan presentation box).

### 03 · Tablèt Kokoye aux Épices (Jacmel Praline Recipe)
- **Description:** Crunchy, caramelized coconut brittle candy kettle-simmered in raw unrefined sugarcane syrup (*siwo kann*), spiked with cracked ginger root, fresh nutmeg, and sea salt crystals.
- **Pairing Note:** Pair with **Nutmeg Caramel**; the snap of roasted coconut brittle creates textural delight against the cold silky cream.
- **Price:** `$7.00 CAD` (2 oversized crisp rounds).

### 04 · Gâteau au Beurre Épicé (Ancestral Salon Celebration Cake)
- **Description:** A moist, velvety golden crumb celebration pound cake enriched with cultured European butter, fresh Persian lime zest, Tahitian vanilla bean caviar, and an aromatic splash of dark spiced rum.
- **Pairing Note:** Pair with **Cinnamon Ember**; the lime zest in the cake illuminates the warm toasted cinnamon bark.
- **Price:** `$8.00 CAD` per thick-cut roastery slice.

---

## 8. Art Direction & Photography Standards

### 8.1 Visual Hallmarks
- **Atmosphere:** Dark, moody, opulent, cinematic (Obsidian `#0A0807` background with warm directional golden-hour lighting).
- **Textures:** Condensation beads on heavy glass, swirling cream vortexes, coarse burlap jute, rough split cinnamon sticks, whole star anise florets, and deep espresso crema.
- **Motion:** High-speed 120fps fluid dynamics (fluid splash, liquid vortex, pour-over bloom, ice drop).

### 8.2 Shot List & Keyframes
1. **The Cork Explosion (Still 01):** The Portuguese cork pops from the neck in a dynamic 45-degree angle, releasing an explosive fan of cold brew, coconut cream, floating star anise, and whole coffee beans against dark obsidian stone.
2. **The Crema Vortex (Still 02):** Overhead macro shot of thick golden espresso crema pouring steadily into a dark matte stoneware mug with roasted beans frozen in mid-air.
3. **The 18-Hour Slow Steep (Still 03):** Precision glass V60 pour-over cone with crystal-clear hot water blooming coarse dark grounds, wisps of steam illuminated by rim lighting.
4. **The Finished Pour & Cocktail Coupe (Still 04):** The heavy 500ml apothecary bottle standing beside a chilled vintage cocktail coupe filled with layered iced Kremas coffee, garnished with a single whole star anise and cinnamon stick.

---

## 9. Brand Compliance & Founder Override

- **Founders Customization Mode:** Press `Shift + B` anywhere inside `/demo/coffee` to open the real-time client re-branding drawer, or pass URL query parameters:
  - `?brand=Velvet+Ember` $\rightarrow$ Rebrands logo, marquee, title, and metadata.
  - `?city=Montreal` $\rightarrow$ Relocalizes all roastery and courier delivery copy.
- **Payment Standard:** Direct Interac e-Transfer autodeposit to `9lmntstudio@gmail.com` with SMS backup dispatch (`+16134009691`).
