// One phone per line:  Brand|Model|Camera layout
// Camera layouts: diag2 = iPhone standard (2 lenses diagonal), tri = iPhone Pro (3 lenses in a square),
// vert3 = 3 separate lenses in a column (Samsung style), pill2 = narrow vertical pill with 2 lenses,
// circ2 = wide horizontal pill with 2 lenses, circ3 = round island with 3 lenses.
// Layouts are a best-fit guess. Check each phone and change the last word if needed.
// To add a phone: add one line. Keep brand spelling the same as the logo list (Apple, Samsung, Vivo, ...).
// Phones whose camera layout I am NOT sure about. Check them in layout_checker.html (search the model name, click 'see real phone').
// G = guess (low confidence), L = likely right (medium confidence).

// ======== GUESSES ========
var RAW = `



Apple|iPhone Air|bar
Apple|iPhone 18 Pro|bar
Apple|iPhone 17|pill2
Apple|iPhone 17 Pro|bar
Apple|iPhone 17 Pro Max|bar


Google|Pixel 10|bar
Google|Pixel 10a|circ2
Google|Pixel 10 Pro|bar

Motorola|Moto Edge 70 Fusion|pill2
Motorola|Moto Edge 60|pill2
Motorola|Moto Edge 60 Fusion|pill2
Motorola|Moto Edge 60 Stylus|pill2
Motorola|Moto Edge 60 Pro|pill3
Motorola|Moto Edge 50|pill2
Motorola|Moto Edge 50 Fusion|pill2
Motorola|Moto Edge 50 Neo|pill2
Motorola|Moto Edge 50 Pro 5G|pill3
Motorola|Moto Edge 50 Ultra 5G|pill3
Motorola|Moto Edge 40|pill2
Motorola|Moto Edge 40 Neo|pill2
Motorola|Moto Edge 30|pill2
Motorola|Moto Edge 30 Fusion|pill2
Motorola|Moto Edge 30 Pro|pill3
Motorola|Moto Edge 30 Ultra|pill3
Motorola|Moto Edge 20 5G|pill3
Motorola|Moto Edge 20 Fusion 5G|pill2
Motorola|Moto G96 5G|pill2
Motorola|Moto G86 Power|pill2
Motorola|Moto G85|pill2
Motorola|Moto G84 5G|pill2
Motorola|Moto G82 5G|pill2
Motorola|Moto G73 5G|pill2
Motorola|Moto G72|pill2
Motorola|Moto G71 5G|pill2
Motorola|Moto G67 Power 5G|pill2
Motorola|Moto G64 5G|pill2
Motorola|Moto G62 5G|pill2
Motorola|Moto G60/G40 Fusion|pill3
Motorola|Moto G57 Power 5G|pill2
Motorola|Moto G54 5G|pill2
Motorola|Moto G52|pill3
Motorola|Moto G51 5G|pill2
Motorola|Moto G45|pill2
Motorola|Moto G31/G41|pill3
Motorola|Moto G35 5G|pill2
Motorola|Moto G34 5G|pill2
Motorola|Moto G32|pill2
Motorola|Moto G30/G10 Power|sq4
Motorola|Moto G24 Power|pill2
Motorola|Moto G22|pill2
Motorola|Moto G9|pill3
Motorola|Moto G8 Plus|circ3
Motorola|Moto G8 Power Lite|pill3
Motorola|Moto G7|pill2
Motorola|Moto G6|circ2
Motorola|Moto G04|pill2
Motorola|Moto e40|pill3
Motorola|Moto E7 Power|pill2
Motorola|Moto E6s|pill2
Motorola|Moto One Fusion Plus|pill3
Motorola|Moto One Power|pill2


Nothing|Phone (2)|diag2
Nothing|Phone 4a|sq3
Nothing|Phone 4a Pro|sq3
Nothing|Phone 3A|sq3
Nothing|Phone 3|circ3
Nothing|Phone 3A Lite|sq3
Nothing|Phone 3a Pro|sq3
Nothing|Phone 2|diag2
Nothing|Phone 1|diag2
Nothing|CMF Phone 2 Pro|pill3
Nothing|CMF Phone 1|pill2


OnePlus|Nord CE 6|vert3
OnePlus|Nord CE6 Lite|vert3
OnePlus|Nord CE5|vert3
OnePlus|Nord CE4|vert3
OnePlus|Nord CE4 Lite|vert3
OnePlus|Nord CE 3 5G|vert3
OnePlus|Nord CE 3 Lite 5G|vert3
OnePlus|Nord CE 2 5G|vert3
OnePlus|Nord CE 2 Lite 5G|vert3
OnePlus|Nord CE 5G|vert3
OnePlus|10R 5G|pill2
OnePlus|9|pill3
OnePlus|9 Pro|pill3
OnePlus|9R|pill3
OnePlus|9RT|pill3
OnePlus|8|vert3
OnePlus|8 Pro|vert3
OnePlus|5|vert2
OnePlus|5T|vert2
OnePlus|Nord 6|vert3
OnePlus|Nord 5|vert3
OnePlus|Nord 4|vert3
OnePlus|Nord 2 5G|vert3
OnePlus|Nord 2T 5G|vert3


Oppo|A79 5G|pill2
Oppo|A78 5G|pill2
Oppo|A78 4G|pill2
Oppo|A77 2022|pill2
Oppo|A77s|pill2
Oppo|A76|pill2
Oppo|A74 5G|pill2
Oppo|A59 5G|pill2
Oppo|A57|pill2
Oppo|A57 2022|pill2
Oppo|A54|pill2
Oppo|A53 2020|sq4
Oppo|A53s 5G|sq4
Oppo|A52|sq4
Oppo|A31|sq4
Oppo|A18/Oppo A38|pill2
Oppo|A17|pill2
Oppo|A16|pill2
Oppo|A16k/A16e|pill2
Oppo|A15/A15s|pill2
Oppo|A9|pill2
Oppo|A7/A5s/A12|pill2
Oppo|A6x 5G|pill2
Oppo|A6 5G|pill2
Oppo|A6s 5G|pill2
Oppo|A5x 5G|pill2
Oppo|A5|pill2
Oppo|A5 5G|pill2
Oppo|A5 2020/A9 2020|pill2
Oppo|A5 Pro 5G|pill2
Oppo|A3 5G|pill2
Oppo|A3x|pill2
Oppo|A3S|pill2
Oppo|A3 Pro 5G|pill2
Oppo|F33 5G|circ2
Oppo|F31 5G|circ2
Oppo|F31 Pro 5G|circ2
Oppo|F31 Pro Plus 5G|circ2
Oppo|F29 5G|circ2
Oppo|F29 Pro 5G|circ2
Oppo|F27 5G|circ2
Oppo|F27 Pro|circ2
Oppo|F27 Pro Plus|circ2
Oppo|F25 Pro 5G|circ2
Oppo|F23|circ2
Oppo|F21 Pro 5G|circ2
Oppo|F21s Pro 5G|circ2
Oppo|F21 Pro 4G|circ2
Oppo|F19/F19s|pill3
Oppo|F19 Pro+|pill3
Oppo|F19 Pro|pill3
Oppo|F17|pill3
Oppo|F17 Pro|pill3
Oppo|F15|pill3
Oppo|F11|vert2
Oppo|F11 Pro|vert2
Oppo|F9/F9 Pro|vert2
Oppo|F7|single
Oppo|F5|single
Oppo|Reno15 5G|circ3
Oppo|Reno15c 5G|circ3
Oppo|Reno15 Pro 5G|circ3
Oppo|Reno14 5G|circ3
Oppo|Reno14 Pro 5G|circ3
Oppo|Reno13 5G|circ3
Oppo|Reno13 Pro 5G|circ3
Oppo|Reno12 5G|circ3
Oppo|Reno12 Pro 5G|circ3
Oppo|Reno11|circ3
Oppo|Reno11 Pro 5G|circ3
Oppo|Reno10 5G/10 Pro 5G|circ3
Oppo|Reno 10x Zoom|pill3
Oppo|Reno8|pill3
Oppo|Reno8 Pro|pill3
Oppo|Reno8 T 5G|pill3
Oppo|Reno7 5G|pill3
Oppo|Reno7 Pro 5G|pill3
Oppo|Reno6 5G|pill3
Oppo|Reno6 Pro 5G|pill3
Oppo|Reno5 Pro 5G|pill3
Oppo|Reno4 Pro|pill3
Oppo|Reno3 Pro|pill3
Oppo|Reno2 F|pill3
Oppo|Reno2 Z|pill3
Oppo|Reno2|pill3
Oppo|K14x 5G|pill2
Oppo|K13 5G|pill2
Oppo|K13x|pill2
Oppo|K13 Turbo Pro 5G|pill2
Oppo|K12x|pill2
Oppo|K10 5G|pill2
Oppo|K10 4G|pill2
Oppo|K1|pill2


Poco|X6 Pro|pill3
Poco|F7 5G|pill3
Poco|X6 Neo|pill3
Poco|F5 5G|pill3
Poco|C55|pill2
Poco|M6 Pro 5G|pill2
Poco|X7 Pro 5G|pill3
Poco|X7 5G|pill3
Poco|M7 Pro 5G|pill2
Poco|M4 Pro 5G|pill3
Poco|F1|pill2
Poco|C65|pill2
Poco|X4 Pro|pill3
Poco|M7 5G|pill2
Poco|C71|pill2
Poco|X6|pill3
Poco|X5 Pro 5G|pill3
Poco|F6 5G|pill3
Poco|Redmi 9 Prime/Poco M2/M2 reloaded|sq4
Poco|X5 5G|pill3
Poco|M6 5G|pill2
Poco|M4 Pro 4G|pill3
Poco|C3|pill2
Poco|X3/X3 Pro|sq4
Poco|M6 Plus 5G|pill2
Poco|M3|pill3
Poco|M2 Pro|pill3
Poco|C31|pill2
Poco|M4 5G|pill3
Poco|M3 Pro 5G|pill3
Poco|C75 5G|pill2
Poco|X2|sq4
Poco|F3 GT 5G|pill3
Poco|M8 5G|pill2
Poco|M7 Plus 5G|pill2


Realme|16 Pro 5G|ctr
Realme|15|circ2
Realme|15T 5G|circ2
Realme|15 Pro|ctr
Realme|14|circ2
Realme|14x 5G|circ2
Realme|14T 5G|circ2
Realme|14 Pro 5G|ctr
Realme|14 Pro Plus 5G|ctr
Realme|13 5G|circ2
Realme|13 Plus 5G|circ2
Realme|13 Pro+ 5G|ctr
Realme|13 Pro 5G|ctr
Realme|12 5G|circ2
Realme|12x 5G|circ2
Realme|12+ 5G|circ2
Realme|11 5G/11X 5G/C67|circ2
Realme|10|circ2
Realme|10 Pro 5G|circ2
Realme|10 Pro+ 5G|circ2
Realme|9 5G|pill3
Realme|9i 4G|pill3
Realme|9 4G|pill3
Realme|9i 5G|pill3
Realme|9 SE|pill3
Realme|9 Pro 5G|pill3
Realme|9 Pro+ 5G|pill3
Realme|8/8 Pro (not 5G)|pill3
Realme|8 5G/8s 5G|pill3
Realme|8i|pill3
Realme|7/Narzo 20 Pro|pill3
Realme|7 Pro|pill3
Realme|6/6i|pill3
Realme|6 Pro|pill3
Realme|5/5i/5s|pill3
Realme|5 Pro|pill3
Realme|3|pill2
Realme|3 Pro|pill2
Realme|2|pill2
Realme|2 Pro|pill2
Realme|Narzo 80 Lite 5G|circ2
Realme|Narzo 80 Pro 5G|circ2
Realme|Narzo 70 5G/70 Pro 5G|circ2
Realme|Narzo 60 5G|circ2
Realme|Narzo 60x|circ2
Realme|Narzo 60 Pro|circ2
Realme|Narzo 50A|pill3
Realme|Narzo 50i|pill3
Realme|Narzo 50 5G|pill3
Realme|Narzo 50 Pro 5G|pill3
Realme|Narzo 30A|pill3
Realme|Narzo 30 5G|pill3
Realme|Narzo 30 4G|pill3
Realme|Narzo 30 Pro 5G|pill3
Realme|Narzo 10|pill3
Realme|Narzo 10A/20A|pill3
Realme|Narzo N63|pill2
Realme|Narzo N53|pill2
Realme|C85 5G|pill2
Realme|C75 5G|pill2
Realme|C65 5G|pill2
Realme|C63|pill2
Realme|C61|pill2
Realme|C55/N55|pill2
Realme|C53|pill2
Realme|C35|pill3
Realme|C31|pill3
Realme|C25/C25s|pill3
Realme|C21|pill3
Realme|C21Y/C25Y|pill3
Realme|C17/Realme 7i|pill3
Realme|C15|pill3
Realme|C12/Narzo 20|pill3
Realme|C11 2021|pill2
Realme|C3|pill2
Realme|C2|pill2
Realme|P4|circ2
Realme|P4x 5G|circ2
Realme|P4 Power 5G|circ2
Realme|P4 Pro|circ2
Realme|P3x 5G|circ2
Realme|P3|circ2
Realme|P3 Ultra 5G|circ2
Realme|P3 Pro 5G|circ2
Realme|P2 Pro 5G|circ2
Realme|P1 5G|circ2
Realme|P1 Pro 5G|circ2
Realme|GT 7|circ3
Realme|GT 7T|circ3
Realme|GT 7 Pro|circ3
Realme|GT 6|circ3
Realme|GT 6T 5G|circ3
Realme|GT 2 5G|circ3
Realme|GT 2 Pro|circ3
Realme|GT 5G|circ3
Realme|GT NEO 2/Neo 3T|circ3
Realme|GT Neo 3|circ3
Realme|GT Master Edition|circ3
Realme|X50 Pro|sq4
Realme|X7|pill3
Realme|X7 Max|pill3
Realme|X7 Pro|pill3
Realme|X3|sq4
Realme|X|sq4
Realme|XT/X2|sq4
Realme|U1|pill2


Samsung|Galaxy A80|vert3
Samsung|Galaxy A72|pill3
Samsung|Galaxy A71|sq4
Samsung|Galaxy A70|vert3
Samsung|Galaxy A70s|vert3
Samsung|Galaxy A57 5G|pill3
Samsung|Galaxy A56 5G|pill3
Samsung|Galaxy A52/Galaxy A52s 5G|pill3
Samsung|Galaxy A51|pill3
Samsung|Galaxy A50/Galaxy A50s/Galaxy A30s|vert3
Samsung|Galaxy A37 5G|pill3
Samsung|Galaxy A36 5G|pill3
Samsung|Galaxy A33 5G|pill3
Samsung|Galaxy A32 4G|vert3
Samsung|Galaxy A31|sq4
Samsung|Galaxy A30|pill2
Samsung|Galaxy A27 5G|pill3
Samsung|Galaxy A26|pill3
Samsung|Galaxy A22 4G|vert3
Samsung|Galaxy A22 5G|vert3
Samsung|Galaxy A21s|pill3
Samsung|Galaxy A20/M10s|pill2
Samsung|Galaxy A20s|vert3
Samsung|Galaxy A12|pill3
Samsung|Galaxy A9|pill3
Samsung|Galaxy A7|circ2
Samsung|Galaxy A07 5G|pill2
Samsung|Galaxy A06 5G|pill2
Samsung|Galaxy A05|vert2
Samsung|Galaxy A05s|vert3
Samsung|Galaxy A04s|vert3
Samsung|Galaxy A03s|vert3
Samsung|Galaxy A03|vert2
Samsung|Galaxy S26|vert3
Samsung|Galaxy S26 Plus|vert3
Samsung|Galaxy S26 Ultra|vert3
Samsung|Galaxy S10|circ2
Samsung|Galaxy S10 Plus|circ2
Samsung|M56 5G|vert3
Samsung|M55 5G|vert3
Samsung|M53 5G|vert3
Samsung|M52 5G|vert3
Samsung|M51|sq4
Samsung|M42|vert3
Samsung|M40/A60|vert3
Samsung|M36 5G|vert3
Samsung|M35 5G|vert3
Samsung|M34 5G/F34 5G|vert3
Samsung|M33 5G|vert3
Samsung|M32|vert3
Samsung|M32 5G|vert3
Samsung|M31/F41|vert3
Samsung|M31s|vert3
Samsung|M30/A40s|vert3
Samsung|M30s|vert3
Samsung|M21 2020|vert3
Samsung|M20|vert2
Samsung|M17 5G|vert3
Samsung|M15 5G|vert3
Samsung|M14 4G|vert3
Samsung|M14 5G|vert3
Samsung|M13 5G|vert3
Samsung|M13 4G|vert3
Samsung|M12/F12|vert3
Samsung|M11|vert3
Samsung|M10|vert2
Samsung|M06 5G|pill2
Samsung|M02s|vert2
Samsung|M02|vert2
Samsung|M01|vert2
Samsung|F62|vert3
Samsung|F56|vert3
Samsung|F55 5G|vert3
Samsung|F54 5G|vert3
Samsung|F42 5G|vert3
Samsung|F36 5G|vert3
Samsung|F23 5G|vert3
Samsung|F17 5G|vert3
Samsung|F16 5G|vert3
Samsung|F15 5G|vert3
Samsung|F14 5G|vert3
Samsung|F06 5G|pill2
Samsung|J8|circ2
Samsung|J6 plus|circ2
Samsung|Galaxy Z Flip3|vert2
Samsung|Galaxy Z Flip4|vert2
Samsung|Galaxy Z Flip5|vert2


Vivo|V70 5G|circ3
Vivo|V70 Elite 5G|circ3
Vivo|V70 FE 5G|circ3
Vivo|V60 5G|circ3
Vivo|V60e 5G|circ3
Vivo|V50 5G|circ3
Vivo|V50e 5G|circ3
Vivo|V40 5G|circ3
Vivo|V40 Pro 5G|circ3
Vivo|V40e 5G|circ3
Vivo|V40 Lite|circ3
Vivo|V30 5G|circ3
Vivo|V30 Pro 5G|circ3
Vivo|V30e|circ3
Vivo|V29/V29 Pro|circ3
Vivo|V29E|circ3
Vivo|V27/V27 Pro|pill3
Vivo|V25 5G|pill3
Vivo|V25 Pro 5G|pill3
Vivo|V23 5G|pill3
Vivo|V23 Pro 5G|pill3
Vivo|V23E 5G|pill3
Vivo|V21|pill3
Vivo|V21E 5G|pill3
Vivo|V20|pill3
Vivo|V20 SE|pill3
Vivo|V20 Pro|pill3
Vivo|V19|sq4
Vivo|V17|sq4
Vivo|V17 Pro|sq4
Vivo|V15|vert3
Vivo|V15 Pro|vert3
Vivo|V11|vert2
Vivo|V11 Pro|vert2
Vivo|V9/V9 Pro/V9 Youth|vert2
Vivo|Y400 5G|pill2
Vivo|Y400 Pro 5G|pill2
Vivo|Y300 5G|pill2
Vivo|Y300 Plus 5G|pill2
Vivo|Y200 5G|pill3
Vivo|Y200 Pro|pill3
Vivo|Y200E 5G/T3 5G|pill3
Vivo|Y100|pill2
Vivo|Y91/Y93/Y95|vert2
Vivo|Y91i/Y1s|single
Vivo|Y83|single
Vivo|Y83 Pro|single
Vivo|Y81|single
Vivo|Y81i|single
Vivo|Y75 5G/Vivo T1 5G|pill3
Vivo|Y75|pill3
Vivo|Y73/V21E 4G|pill3
Vivo|Y72 5G|pill3
Vivo|Y71|single
Vivo|Y69|single
Vivo|Y66|single
Vivo|Y58 5G|pill2
Vivo|Y56 5G|pill2
Vivo|Y55s|single
Vivo|Y53|single
Vivo|Y51A/Y51 2020|pill3
Vivo|Y51 Pro 5G|pill3
Vivo|Y39 5G|pill2
Vivo|Y36|pill2
Vivo|Y35|pill2
Vivo|Y33T|pill3
Vivo|Y31|pill3
Vivo|Y31 5G|pill3
Vivo|Y31 Pro 5G|pill3
Vivo|Y30/Y50|pill2
Vivo|Y29 5G|pill2
Vivo|Y28 5G|pill2
Vivo|Y28s 5G|pill2
Vivo|Y28e 5G|pill2
Vivo|Y27|pill2
Vivo|Y22|pill2
Vivo|Y21/Y21s/Y33s|pill3
Vivo|Y21T|pill3
Vivo|Y20/Y20i|pill3
Vivo|Y20G|pill3
Vivo|Y19/U20|pill3
Vivo|Y19s 5G|pill3
Vivo|Y19 5G|pill3
Vivo|Y18/Y18e|pill2
Vivo|Y17s|pill3
Vivo|Y16|pill2
Vivo|Y15/Y17|pill3
Vivo|Y12s|pill3
Vivo|Y11/Y12/U10|pill3
Vivo|Y02/Y02T|pill2
Vivo|T5x 5G|circ2
Vivo|T4x 5G|circ2
Vivo|T4 5G|circ2
Vivo|T4R 5G|circ2
Vivo|T4 Ultra 5G|circ2
Vivo|T4 Pro 5G|circ2
Vivo|T4 Lite 5G|circ2
Vivo|T3 Ultra|circ2
Vivo|T3x|circ2
Vivo|T3 Pro 5G|circ2
Vivo|T3 Lite 5G|circ2
Vivo|T2x 5G|pill2
Vivo|T2 5G|pill2
Vivo|T2 Pro 5G|pill2
Vivo|T1 44W|pill2
Vivo|T1 Pro 5G|pill2
Vivo|X300|circ3
Vivo|X300 Pro|circ3
Vivo|X300 FE 5G|circ3
Vivo|X200 5G|circ3
Vivo|X200T|circ3
Vivo|X200 Pro 5G|circ3
Vivo|X200 FE|circ3
Vivo|X100|circ3
Vivo|X100 Pro|circ3
Vivo|X80|sq4
Vivo|X80 Pro|sq4
Vivo|X70 Pro|sq4
Vivo|X70 Pro+|sq4
Vivo|X60|sq4
Vivo|X60 Pro|sq4
Vivo|X60 Pro+|sq4
Vivo|X50|sq4
Vivo|X50 Pro|sq4
Vivo|X21|pill2
Vivo|S1/Z1x|vert3
Vivo|S1 Pro|vert3
Vivo|Z1 Pro|vert3


Xiaomi|Redmi Note 15 5G|pill2
Xiaomi|Redmi Note 15 Pro+ 5G|pill3
Xiaomi|Redmi Note 14 5G|pill2
Xiaomi|Redmi Note 14 Pro 5G|pill3
Xiaomi|Redmi Note 14 Pro Plus 5G|pill3
Xiaomi|Redmi Note 13 5G|pill2
Xiaomi|Redmi Note 13 Pro 5G|pill3
Xiaomi|Redmi Note 13 Pro+ 5G|pill3
Xiaomi|Redmi Note 12 5G|pill2
Xiaomi|Redmi Note 12 4G|pill2
Xiaomi|Redmi Note 12 Pro 5G|pill3
Xiaomi|Redmi Note 12 Pro+ 5G|pill3
Xiaomi|Redmi Note 11T 5G|pill2
Xiaomi|Redmi Note 11/11S|pill3
Xiaomi|Redmi Note 11 SE|pill3
Xiaomi|Redmi Note 11 Pro|pill3
Xiaomi|Redmi Note 11 Pro+ 5G|pill3
Xiaomi|Redmi Note 10/10S|pill3
Xiaomi|Redmi Note 10T 5G|pill2
Xiaomi|Redmi Note 9|pill3
Xiaomi|Redmi Note 8|pill3
Xiaomi|Redmi Note 8 Pro|pill3
Xiaomi|Redmi 15C 5G|pill2
Xiaomi|Redmi 15 5G|pill2
Xiaomi|Redmi 14C 5G|pill2
Xiaomi|Redmi 13C 4G|pill2
Xiaomi|Redmi 13C 5G|pill2
Xiaomi|Redmi 13 5G|pill2
Xiaomi|Redmi 12C|pill2
Xiaomi|Redmi 12 5G|pill2
Xiaomi|Redmi 12 4G|pill2
Xiaomi|Redmi 11 Prime 5G|pill2
Xiaomi|Redmi 10 Prime|pill2
Xiaomi|Redmi 10/10 Power|pill2
Xiaomi|Redmi 9|sq4
Xiaomi|Redmi 9 Power|sq4
Xiaomi|Redmi K50i|pill3
Xiaomi|Redmi K20/K20 Pro|pill3
Xiaomi|Redmi K20 Pro|pill3
Xiaomi|Mi 11i 5G/11i 5G Hypercharge|pill3
Xiaomi|Mi 11X/11X Pro|pill3
Xiaomi|Mi 11T Pro 5G|pill3
Xiaomi|Mi 11 Lite|pill3
Xiaomi|Mi 11 Lite NE 5G|pill3
Xiaomi|Mi Mix 2|pill3
Xiaomi|Mi Max 2|single
Xiaomi|Mi A3|pill2
Xiaomi|Mi A2|pill2
Xiaomi|Mi A1|circ2
Xiaomi|Mi Max|pill3
Xiaomi|15 Ultra|circ3
Xiaomi|14 Civi|circ3


iQOO|Z11x 5G|circ2
iQOO|Z10 5G|circ2
iQOO|Z10R 5G|circ2
iQOO|Z10x 5G|pill2
iQOO|Z10 Lite 5G|pill2
iQOO|Z9 5G|circ2
iQOO|Z9X|pill2
iQOO|Z9s 5G|circ2
iQOO|Z9S Pro 5G|circ2
iQOO|Z9 Lite 5G|pill2
iQOO|Z7 5G|circ2
iQOO|Z7s 5G|circ2
iQOO|Z7 Pro 5G|circ2
iQOO|Z6 5G (not 44W)|circ2
iQOO|Z6 Lite 5G|pill2
iQOO|Z3 5G|circ2
iQOO|Neo 10|circ3
iQOO|Neo 10R 5G|circ3
iQOO|Neo 9 Pro|circ3
iQOO|Neo 7 Pro|circ3
iQOO|Neo 7|circ3
iQOO|Neo 6 5G|circ3
iQOO|15 5G|sq3
iQOO|13 5G|sq3
iQOO|12 5G|sq3
iQOO|9 5G|sq3
iQOO|9 Pro 5G|sq3
iQOO|7 5G|sq3
iQOO|7 Legend 5G|sq3
iQOO|15R 5G|pill2


Google|Pixel 9|bar
Google|Pixel 9A|circ2
Google|Pixel 9 Pro|bar
Google|Pixel 9 Pro XL|bar
Google|Pixel 8|bar
Google|Pixel 8A|bar
Google|Pixel 8 Pro|bar
Google|Pixel 4|sq3
Google|Pixel 4 XL|sq3
Google|Pixel 4A|single


Motorola|Moto G6 Play|single
Motorola|Moto G5|single
Motorola|Moto G5 plus|single
Motorola|Moto G5S|single
Motorola|Moto G5S plus|single
Motorola|Moto G4/G4 plus|single
Motorola|Moto G4/G4 plus logocut|single
Motorola|Moto E5 Plus|single
Motorola|Moto E5 Play|single
Motorola|Moto M|single
Motorola|Moto Z2 Play|single

Nothing|Phone (2a)|circ2
Nothing|Phone 2A|circ2
Nothing|Phone 2A Plus|circ2


OnePlus|15|circ3
OnePlus|15R|circ3
OnePlus|13|circ3
OnePlus|13R|circ3
OnePlus|13s|circ3
OnePlus|12|circ3
OnePlus|12R|circ3
OnePlus|11 5G|circ3
OnePlus|11R|circ3
OnePlus|10 Pro 5G|sq3
OnePlus|10T 5G|circ3
OnePlus|8T|sq4
OnePlus|7|vert2
OnePlus|7 Pro|vert3
OnePlus|7T|circ3
OnePlus|7T Pro|circ3
OnePlus|6|vert2
OnePlus|6T|vert2
OnePlus|3/3T|single
OnePlus|Nord 3 5G|vert3


Oppo|Reno10 Pro+ 5G|circ3
Oppo|Find X8 5G|circ3
Oppo|Find X8 Pro 5G|circ3
Oppo|Find X8 Pro+ 5G|circ3


Realme|12 Pro 5G/12 Pro+ 5G|ctr
Realme|11 Pro/Pro+ 5G|ctr
Realme|1|single
Realme|C30|single
Realme|C20|single
Realme|C11 2020|single
Realme|C1|single


Samsung|Galaxy A73 5G|vert3
Samsung|Galaxy A55 5G|vert3
Samsung|Galaxy A54 5G|vert3
Samsung|Galaxy A53 5G|vert3
Samsung|Galaxy A35 5G|vert3
Samsung|Galaxy A34 5G|vert3
Samsung|Galaxy A25 5G|vert3
Samsung|Galaxy A24 5G|vert3
Samsung|Galaxy A23|vert3
Samsung|Galaxy A17 5G|vert3
Samsung|Galaxy A16 5G|vert3
Samsung|Galaxy A15 5G|vert3
Samsung|Galaxy A14 5G|vert3
Samsung|Galaxy A13 4G|vert3
Samsung|Galaxy A10|single
Samsung|Galaxy A8 plus|single
Samsung|Galaxy S25 Edge|pill2
Samsung|Galaxy S21|pill3
Samsung|Galaxy S21 Plus|pill3
Samsung|Galaxy S21 Ultra|pill3
Samsung|Galaxy S21 FE 5G|pill3
Samsung|Galaxy S20|pill3
Samsung|Galaxy S20 Plus|pill3
Samsung|Galaxy S20 Ultra|pill3
Samsung|Galaxy S20 FE|pill3
Samsung|Galaxy S10E|circ2
Samsung|Galaxy S10 Lite|sq3
Samsung|Galaxy S9|single
Samsung|S9 Plus|vert2
Samsung|M01 Core|single
Samsung|Note 9|circ2
Samsung|Note 10|vert3
Samsung|Note 20|pill3
Samsung|Note 10 Plus|vert3
Samsung|Note 20 Ultra|pill3
Samsung|Note 10 Lite|sq3
Samsung|J7 2016|single
Samsung|J7 Prime|single
Samsung|J7 Max|single
Samsung|J7 Nxt|single
Samsung|J7 Pro|single
Samsung|J6|single
Samsung|J4|single
Samsung|J4 Plus|single
Samsung|J2 2017|single


Vivo|V7|single
Vivo|V7 plus|single
Vivo|V5/V5s|single


Xiaomi|Redmi Note 10 Pro|sq4
Xiaomi|Redmi Note 10 Pro Max|sq4
Xiaomi|Redmi Note 9 Pro/Pro Max|sq4
Xiaomi|Redmi Note 7S|pill2
Xiaomi|Redmi Note 7/7S/7 Pro|pill2
Xiaomi|Redmi Note 7 Pro|pill2
Xiaomi|Redmi Note 6 Pro|pill2
Xiaomi|Redmi Note 5|pill2
Xiaomi|Redmi Note 5 Pro|pill2
Xiaomi|Redmi Note 4|single
Xiaomi|Redmi Note 3|single
Xiaomi|Redmi 9A/9i|single
Xiaomi|Redmi 8|pill2
Xiaomi|Redmi 8A|single
Xiaomi|Redmi 8A Dual|pill2
Xiaomi|Redmi 7|pill2
Xiaomi|Redmi 7A|single
Xiaomi|Redmi 6A|single
Xiaomi|Redmi 6|pill2
Xiaomi|Redmi 6 Pro|pill2
Xiaomi|Redmi 5|single
Xiaomi|Redmi 5A|single
Xiaomi|Redmi 4|single
Xiaomi|Redmi 4A|single
Xiaomi|Redmi 3S Prime|single
Xiaomi|Redmi A5|single
Xiaomi|Redmi A4 5G|single
Xiaomi|Redmi A1/A2|single
Xiaomi|Redmi A1+/A2+|single
Xiaomi|Redmi Y3|single
Xiaomi|Redmi Y2|single
Xiaomi|Redmi Y1|single
Xiaomi|Redmi Y1 Lite|single
Xiaomi|Redmi Go|single
Xiaomi|Mi 12 Pro 5G|sq3
Xiaomi|Mi 10i|sq3
Xiaomi|Mi 10T Pro|sq3
`;
var M = RAW.trim().split("\n").map(function (l) { return l.trim().split("|"); })
  .filter(function (r) { return r.length === 3; });
