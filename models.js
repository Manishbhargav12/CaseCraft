// One phone per line:  Brand|Model|Camera layout
// Camera layouts: diag2 = iPhone standard (2 lenses diagonal), tri = iPhone Pro (3 lenses in a square),
// vert3 = 3 separate lenses in a column (Samsung style), pill2 = narrow vertical pill with 2 lenses,
// circ2 = wide horizontal pill with 2 lenses, circ3 = round island with 3 lenses.
// Layouts are a best-fit guess. Check each phone and change the last word if needed.
// To add a phone: add one line. Keep brand spelling the same as the logo list (Apple, Samsung, Vivo, ...).
var RAW = `
Apple|iPhone Air|diag2
Apple|iPhone 18 Pro|tri
Apple|iPhone 18 Pro Max|tri
Apple|iPhone 17|diag2
Apple|iPhone 17 Pro|tri
Apple|iPhone 17 Pro Max|tri
Apple|iPhone 16|diag2
Apple|iPhone 16 Pro|tri
Apple|iPhone 16 Pro Max|tri
Apple|iPhone 16 Plus|diag2
Apple|iPhone 16e|diag2
Apple|iPhone 15|diag2
Apple|iPhone 15 Pro|diag2
Apple|iPhone 15 Pro Max|diag2
Apple|iPhone 15 Plus|diag2
Apple|iPhone 14|diag2
Apple|iPhone 14 Pro|diag2
Apple|iPhone 14 Pro Max|diag2
Apple|iPhone 14 Plus|diag2
Apple|iPhone 13|diag2
Apple|iPhone 13 Pro|diag2
Apple|iPhone 13 Pro Max|diag2
Apple|iPhone 13 Mini|diag2
Apple|iPhone 12|diag2
Apple|iPhone 12 Pro|diag2
Apple|iPhone 12 Pro Max|diag2
Apple|iPhone 12 Mini|diag2
Apple|iPhone 11|diag2
Apple|iPhone 11 Pro|diag2
Apple|iPhone 11 Pro Max|diag2
Apple|iPhone X|diag2
Apple|iPhone X Logocut|diag2
Apple|iPhone XS|diag2
Apple|iPhone XR|diag2
Apple|iPhone XS Max|diag2
Apple|iPhone 8|diag2
Apple|iPhone 8 Logocut|diag2
Apple|iPhone 8 Plus|diag2
Apple|iPhone 8 Plus Logocut|diag2
Apple|iPhone 7/7s|diag2
Apple|iPhone 7 Logocut|diag2
Apple|iPhone 7 Plus|diag2
Apple|iPhone 7 Plus Logocut|diag2
Apple|iPhone 6/6s|diag2
Apple|iPhone 6 Logocut|diag2
Apple|iPhone 6 Plus/6s Plus|diag2
Apple|iPhone 5/5s|diag2

Vivo|V70 5G|circ2
Vivo|V70 Elite 5G|circ2
Vivo|V70 FE 5G|circ2
Vivo|V60 5G|circ2
Vivo|V60e 5G|circ2
Vivo|V50 5G|circ2
Vivo|V50e 5G|circ2
Vivo|V40 5G|circ2
Vivo|V40 Pro 5G|circ2
Vivo|V40e 5G|circ2
Vivo|V40 Lite|circ2
Vivo|V30 5G|circ2
Vivo|V30 Pro 5G|circ2
Vivo|V30e|circ2
Vivo|V29/V29 Pro|circ2
Vivo|V29E|circ2
Vivo|V27/V27 Pro|circ2
Vivo|V25 5G|circ2
Vivo|V25 Pro 5G|circ2
Vivo|V23 5G|circ2
Vivo|V23 Pro 5G|circ2
Vivo|V23E 5G|circ2
Vivo|V21|circ2
Vivo|V21E 5G|circ2
Vivo|V20|circ2
Vivo|V20 SE|circ2
Vivo|V20 Pro|circ2
Vivo|V19|circ2
Vivo|V17|circ2
Vivo|V17 Pro|circ2
Vivo|V15|circ2
Vivo|V15 Pro|circ2
Vivo|V11|circ2
Vivo|V11 Pro|circ2
Vivo|V9/V9 Pro/V9 Youth|circ2
Vivo|V7|circ2
Vivo|V7 plus|circ2
Vivo|V5/V5s|circ2
Vivo|Y400 5G|circ2
Vivo|Y400 Pro 5G|circ2
Vivo|Y300 5G|circ2
Vivo|Y300 Plus 5G|circ2
Vivo|Y200 5G|circ2
Vivo|Y200 Pro|circ2
Vivo|Y200E 5G/T3 5G|circ2
Vivo|Y100|circ2
Vivo|Y91/Y93/Y95|circ2
Vivo|Y91i/Y1s|circ2
Vivo|Y83|circ2
Vivo|Y83 Pro|circ2
Vivo|Y81|circ2
Vivo|Y81i|circ2
Vivo|Y75 5G/Vivo T1 5G|circ2
Vivo|Y75|circ2
Vivo|Y73/V21E 4G|circ2
Vivo|Y72 5G|circ2
Vivo|Y71|circ2
Vivo|Y69|circ2
Vivo|Y66|circ2
Vivo|Y58 5G|circ2
Vivo|Y56 5G|circ2
Vivo|Y55s|circ2
Vivo|Y53|circ2
Vivo|Y51A/Y51 2020|circ2
Vivo|Y51 Pro 5G|circ2
Vivo|Y39 5G|circ2
Vivo|Y36|circ2
Vivo|Y35|circ2
Vivo|Y33T|circ2
Vivo|Y31|circ2
Vivo|Y31 5G|circ2
Vivo|Y31 Pro 5G|circ2
Vivo|Y30/Y50|circ2
Vivo|Y29 5G|circ2
Vivo|Y28 5G|circ2
Vivo|Y28s 5G|circ2
Vivo|Y28e 5G|circ2
Vivo|Y27|circ2
Vivo|Y22|circ2
Vivo|Y21/Y21s/Y33s|circ2
Vivo|Y21T|circ2
Vivo|Y20/Y20i|circ2
Vivo|Y20G|circ2
Vivo|Y19/U20|circ2
Vivo|Y19s 5G|circ2
Vivo|Y19 5G|circ2
Vivo|Y18/Y18e|circ2
Vivo|Y17s|circ2
Vivo|Y16|circ2
Vivo|Y15/Y17|circ2
Vivo|Y12s|circ2
Vivo|Y11/Y12/U10|circ2
Vivo|Y02/Y02T|circ2
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
Vivo|T2x 5G|circ2
Vivo|T2 5G|circ2
Vivo|T2 Pro 5G|circ2
Vivo|T1 44W|circ2
Vivo|T1 Pro 5G|circ2
Vivo|X300|circ2
Vivo|X300 Pro|circ2
Vivo|X300 FE 5G|circ2
Vivo|X200 5G|circ2
Vivo|X200T|circ2
Vivo|X200 Pro 5G|circ2
Vivo|X200 FE|circ2
Vivo|X100|circ2
Vivo|X100 Pro|circ2
Vivo|X80|circ2
Vivo|X80 Pro|circ2
Vivo|X70 Pro|circ2
Vivo|X70 Pro+|circ2
Vivo|X60|circ2
Vivo|X60 Pro|circ2
Vivo|X60 Pro+|circ2
Vivo|X50|circ2
Vivo|X50 Pro|circ2
Vivo|X21|circ2
Vivo|S1/Z1x|circ2
Vivo|S1 Pro|circ2
Vivo|Z1 Pro|circ2

Oppo|A79 5G|pill2
Oppo|A78 5G|pill2
Oppo|A78 4G|pill2
Oppo|A77 2022|pill2
OPPO|A77s|pill2
Oppo|A76|pill2
Oppo|A74 5G|pill2
Oppo|A59 5G|pill2
Oppo|A57|pill2
Oppo|A57 2022|pill2
Oppo|A54|pill2
Oppo|A53 2020|pill2
Oppo|A53s 5G|pill2
Oppo|A52|pill2
Oppo|A31|pill2
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
OPPO|A3x|pill2
Oppo|A3S|pill2
Oppo|A3 Pro 5G|pill2
Oppo|F33 5G|pill2
Oppo|F31 5G|pill2
Oppo|F31 Pro 5G|pill2
Oppo|F31 Pro Plus 5G|pill2
Oppo|F29 5G|pill2
Oppo|F29 Pro 5G|pill2
Oppo|F27 5G|pill2
Oppo|F27 Pro|pill2
Oppo|F27 Pro Plus|pill2
Oppo|F25 Pro 5G|pill2
Oppo|F23|pill2
Oppo|F21 Pro 5G|pill2
OPPO|F21s Pro 5G|pill2
Oppo|F21 Pro 4G|pill2
Oppo|F19/F19s|pill2
Oppo|F19 Pro+|pill2
Oppo|F19 Pro|pill2
Oppo|F17|pill2
Oppo|F17 Pro|pill2
Oppo|F15|pill2
Oppo|F11|pill2
Oppo|F11 Pro|pill2
Oppo|F9/F9 Pro|pill2
Oppo|F7|pill2
Oppo|F5|pill2
Oppo|Reno15 5G|pill2
Oppo|Reno15c 5G|pill2
Oppo|Reno15 Pro 5G|pill2
Oppo|Reno14 5G|pill2
Oppo|Reno14 Pro 5G|pill2
Oppo|Reno13 5G|pill2
Oppo|Reno13 Pro 5G|pill2
Oppo|Reno12 5G|pill2
Oppo|Reno12 Pro 5G|pill2
Oppo|Reno11|pill2
Oppo|Reno11 Pro 5G|pill2
Oppo|Reno10 5G/10 Pro 5G|pill2
Oppo|Reno 10x Zoom|pill2
Oppo|Reno10 Pro+ 5G|pill2
Oppo|Reno8|pill2
Oppo|Reno8 Pro|pill2
Oppo|Reno8 T 5G|pill2
Oppo|Reno7 5G|pill2
Oppo|Reno7 Pro 5G|pill2
Oppo|Reno6 5G|pill2
Oppo|Reno6 Pro 5G|pill2
Oppo|Reno5 Pro 5G|pill2
Oppo|Reno4 Pro|pill2
Oppo|Reno3 Pro|pill2
Oppo|Reno2 F|pill2
Oppo|Reno2 Z|pill2
Oppo|Reno2|pill2
OPPO|K14x 5G|pill2
Oppo|K13 5G|pill2
Oppo|K13x|pill2
OPPO|K13 Turbo Pro 5G|pill2
OPPO|K12x|pill2
Oppo|K10 5G|pill2
Oppo|K10 4G|pill2
Oppo|K1|pill2
Oppo|Find X8 5G|pill2
Oppo|Find X8 Pro 5G|pill2
Oppo|Find X8 Pro+ 5G|pill2

OnePlus|Nord CE 6|circ2
OnePlus|Nord CE6 Lite|circ2
OnePlus|Nord CE5|circ2
Oneplus|Nord CE4|circ2
OnePlus|Nord CE4 Lite|circ2
OnePlus|Nord CE 3 5G|circ2
OnePlus|Nord CE 3 Lite 5G|circ2
OnePlus|Nord CE 2 5G|circ2
OnePlus|Nord CE 2 Lite 5G|circ2
Oneplus|Nord CE 5G|circ2
OnePlus|15|circ2
OnePlus|15R|circ2
OnePlus|13|circ2
OnePlus|13R|circ2
OnePlus|13s|circ2
Oneplus|12|circ2
OnePlus|12R|circ2
OnePlus|11 5G|circ2
OnePlus|11R|circ2
OnePlus|10 Pro 5G|circ2
OnePlus|10R 5G|circ2
OnePlus|10T 5G|circ2
Oneplus|9|circ2
Oneplus|9 Pro|circ2
Oneplus|9R|circ2
Oneplus|9RT|circ2
Oneplus|8|circ2
Oneplus|8 Pro|circ2
Oneplus|8T|circ2
Oneplus|7|circ2
Oneplus|7 Pro|circ2
Oneplus|7T|circ2
Oneplus|7T Pro|circ2
Oneplus|6|circ2
Oneplus|6T|circ2
Oneplus|5|circ2
Oneplus|5T|circ2
Oneplus|3/3T|circ2
OnePlus|Nord 6|circ2
OnePlus|Nord 5|circ2
OnePlus|Nord 4|circ2
OnePlus|Nord 3 5G|circ2
OnePlus|Nord 2 5G|circ2
OnePlus|Nord 2T 5G|circ2

Realme|16 Pro 5G|circ2
Realme|15|circ2
Realme|15T 5G|circ2
Realme|15 Pro|circ2
Realme|14|circ2
Realme|14x 5G|circ2
Realme|14T 5G|circ2
Realme|14 Pro 5G|circ2
Realme|14 Pro Plus 5G|circ2
Realme|13 5G|circ2
Realme|13 Plus 5G|circ2
Realme|13 Pro+ 5G|circ2
Realme|13 Pro 5G|circ2
Realme|12 5G|circ2
Realme|12x 5G|circ2
Realme|12+ 5G|circ2
Realme|12 Pro 5G/12 Pro+ 5G|circ2
Realme|11 5G/11X 5G/C67|circ2
Realme|11 Pro/Pro+ 5G|circ2
Realme|10|circ2
Realme|10 Pro 5G|circ2
Realme|10 Pro+ 5G|circ2
Realme|9 5G|circ2
Realme|9i 4G|circ2
Realme|9 4G|circ2
Realme|9i 5G|circ2
Realme|9 SE|circ2
Realme|9 Pro 5G|circ2
Realme|9 Pro+ 5G|circ2
Realme|8/8 Pro (not 5G)|circ2
Realme|8 5G/8s 5G|circ2
Realme|8i|circ2
Realme|7/Narzo 20 Pro|circ2
Realme|7 Pro|circ2
Realme|6/6i|circ2
Realme|6 Pro|circ2
Realme|5/5i/5s|circ2
Realme|5 Pro|circ2
Realme|3|circ2
Realme|3 Pro|circ2
Realme|2|circ2
Realme|2 Pro|circ2
Realme|1|circ2
Realme|Narzo 80 Lite 5G|circ2
Realme|Narzo 80 Pro 5G|circ2
Realme|Narzo 70 5G/70 Pro 5G|circ2
Realme|Narzo 60 5G|circ2
Realme|Narzo 60x|circ2
Realme|Narzo 60 Pro|circ2
Realme|Narzo 50A|circ2
Realme|Narzo 50i|circ2
Realme|Narzo 50 5G|circ2
Realme|Narzo 50 Pro 5G|circ2
Realme|Narzo 30A|circ2
Realme|Narzo 30 5G|circ2
Realme|Narzo 30 4G|circ2
Realme|Narzo 30 Pro 5G|circ2
Realme|Narzo 10|circ2
Realme|Narzo 10A/20A|circ2
Realme|Narzo N63|circ2
Realme|Narzo N53|circ2
Realme|C85 5G|circ2
Realme|C75 5G|circ2
Realme|C65 5G|circ2
Realme|C63|circ2
Realme|C61|circ2
Realme|C55/N55|circ2
Realme|C53|circ2
Realme|C35|circ2
Realme|C31|circ2
Realme|C30|circ2
Realme|C25/C25s|circ2
Realme|C21|circ2
Realme|C21Y/C25Y|circ2
Realme|C20|circ2
Realme|C17/Realme 7i|circ2
Realme|C15|circ2
Realme|C12/Narzo 20|circ2
Realme|C11 2020|circ2
Realme|C11 2021|circ2
Realme|C3|circ2
Realme|C2|circ2
Realme|C1|circ2
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
Realme|GT 7|circ2
Realme|GT 7T|circ2
Realme|GT 7 Pro|circ2
Realme|GT 6|circ2
Realme|GT 6T 5G|circ2
Realme|GT 2 5G|circ2
Realme|GT 2 Pro|circ2
Realme|GT 5G|circ2
Realme|GT NEO 2/Neo 3T|circ2
Realme|GT Neo 3|circ2
Realme|GT Master Edition|circ2
Realme|X50 Pro|circ2
Realme|X7|circ2
Realme|X7 Max|circ2
Realme|X7 Pro|circ2
Realme|X3|circ2
Realme|X|circ2
Realme|XT/X2|circ2
Realme|U1|circ2

Xiaomi|Redmi Note 15 5G|pill2
Xiaomi|Redmi Note 15 Pro+ 5G|pill2
Xiaomi|Redmi Note 14 5G|pill2
Xiaomi|Redmi Note 14 Pro 5G|pill2
Xiaomi|Redmi Note 14 Pro Plus 5G|pill2
Xiaomi|Redmi Note 13 5G|pill2
Xiaomi|Redmi Note 13 Pro 5G|pill2
Xiaomi|Redmi Note 13 Pro+ 5G|pill2
Xiaomi|Redmi Note 12 5G|pill2
Xiaomi|Redmi Note 12 4G|pill2
Xiaomi|Redmi Note 12 Pro 5G|pill2
Xiaomi|Redmi Note 12 Pro+ 5G|pill2
Xiaomi|Redmi Note 11T 5G|pill2
Xiaomi|Redmi Note 11/11S|pill2
Xiaomi|Redmi Note 11 SE|pill2
Xiaomi|Redmi Note 11 Pro|pill2
Xiaomi|Redmi Note 11 Pro+ 5G|pill2
Xiaomi|Redmi Note 10/10S|pill2
Xiaomi|Redmi Note 10T 5G|pill2
Xiaomi|Redmi Note 10 Pro|pill2
Xiaomi|Redmi Note 10 Pro Max|pill2
Xiaomi|Redmi Note 9|pill2
Xiaomi|Redmi Note 9 Pro/Pro Max|pill2
Xiaomi|Redmi Note 8|pill2
Xiaomi|Redmi Note 8 Pro|pill2
Xiaomi|Redmi Note 7S|pill2
Xiaomi|Redmi Note 7/7S/7 Pro|pill2
Xiaomi|Redmi Note 7 Pro|pill2
Xiaomi|Redmi Note 6 Pro|pill2
Xiaomi|Redmi Note 5|pill2
Xiaomi|Redmi Note 5 Pro|pill2
Xiaomi|Redmi Note 4|pill2
Xiaomi|Redmi Note 3|pill2
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
Xiaomi|Redmi 9|pill2
Xiaomi|Redmi 9A/9i|pill2
Xiaomi|Redmi 9 Power|pill2
Xiaomi|Redmi 8|pill2
Xiaomi|Redmi 8A|pill2
Xiaomi|Redmi 8A Dual|pill2
Xiaomi|Redmi 7|pill2
Xiaomi|Redmi 7A|pill2
Xiaomi|Redmi 6A|pill2
Xiaomi|Redmi 6|pill2
Xiaomi|Redmi 6 Pro|pill2
Xiaomi|Redmi 5|pill2
Xiaomi|Redmi 5A|pill2
Xiaomi|Redmi 4|pill2
Xiaomi|Redmi 4A|pill2
Xiaomi|Redmi 3S Prime|pill2
Xiaomi|Redmi K50i|pill2
Xiaomi|Redmi K20/K20 Pro|pill2
Xiaomi|Redmi K20 Pro|pill2
Xiaomi|Redmi A5|pill2
Xiaomi|Redmi A4 5G|pill2
Xiaomi|Redmi A1/A2|pill2
Xiaomi|Redmi A1+/A2+|pill2
Xiaomi|Redmi Y3|pill2
Xiaomi|Redmi Y2|pill2
Xiaomi|Redmi Y1|pill2
Xiaomi|Redmi Y1 Lite|pill2
Xiaomi|Redmi Go|pill2
Xiaomi|Mi 12 Pro 5G|pill2
Xiaomi|Mi 11i 5G/11i 5G Hypercharge|pill2
Xiaomi|Mi 11X/11X Pro|pill2
Xiaomi|Mi 11T Pro 5G|pill2
Xiaomi|Mi 11 Lite|pill2
Xiaomi|Mi 11 Lite NE 5G|pill2
Xiaomi|Mi 10i|pill2
Xiaomi|Mi 10T Pro|pill2
Xiaomi|Mi Mix 2|pill2
Xiaomi|Mi Max 2|pill2
Xiaomi|Mi A3|pill2
Xiaomi|Mi A2|pill2
Xiaomi|Mi A1|pill2
Xiaomi|Mi Max|pill2
Xiaomi|15 Ultra|pill2
Xiaomi|14 Civi|pill2

iQOO|Z11x 5G|circ2
iQOO|Z10 5G|circ2
iQOO|Z10R 5G|circ2
iQOO|Z10x 5G|circ2
iQOO|Z10 Lite 5G|circ2
iQOO|Z9 5G|circ2
iQOO|Z9X|circ2
iQOO|Z9s 5G|circ2
iQOO|Z9S Pro 5G|circ2
iQOO|Z9 Lite 5G|circ2
iQOO|Z7 5G|circ2
iQOO|Z7s 5G|circ2
iQOO|Z7 Pro 5G|circ2
iQOO|Z6 5G (not 44W)|circ2
iQOO|Z6 Lite 5G|circ2
iQOO|Z3 5G|circ2
iQOO|Neo 10|circ2
iQOO|Neo 10R 5G|circ2
iQOO|Neo 9 Pro|circ2
iQOO|Neo 7 Pro|circ2
iQOO|Neo 7|circ2
iQOO|Neo 6 5G|circ2
iQOO|15 5G|circ2
iQOO|13 5G|circ2
iQOO|12 5G|circ2
iQOO|9 5G|circ2
iQOO|9 Pro 5G|circ2
iQOO|7 5G|circ2
iQOO|7 Legend 5G|circ2
iQOO|15R 5G|circ2

Nothing|Phone (2a)|circ2
Nothing|Phone (2)|vert3
Nothing|Phone 4a|circ2
Nothing|Phone 4a Pro|circ2
Nothing|Phone 3A|circ2
Nothing|Phone 3|circ2
Nothing|Phone 3A Lite|circ2
Nothing|Phone 3a Pro|circ2
Nothing|Phone 2|circ2
Nothing|Phone 2A|circ2
Nothing|Phone 2A Plus|circ2
Nothing|Phone 1|circ2
Nothing|CMF Phone 2 Pro|circ2
Nothing|CMF Phone 1|circ2

Poco|X6 Pro|pill2
Poco|F7 5G|pill2
Poco|X6 Neo|pill2
Poco|F5 5G|pill2
Poco|C55|pill2
Poco|M6 Pro 5G|pill2
Poco|X7 Pro 5G|pill2
Poco|X7 5G|pill2
Poco|M7 Pro 5G|pill2
Poco|M4 Pro 5G|pill2
Poco|F1|pill2
Poco|C65|pill2
Poco|X4 Pro|pill2
Poco|M7 5G|pill2
Poco|C71|pill2
Poco|X6|pill2
Poco|X5 Pro 5G|pill2
Poco|F6 5G|pill2
Poco|Redmi 9 Prime/Poco M2/M2 reloaded|pill2
Poco|X5 5G|pill2
Poco|M6 5G|pill2
Poco|M4 Pro 4G|pill2
Poco|C3|pill2
Poco|X3/X3 Pro|pill2
Poco|M6 Plus 5G|pill2
Poco|M3|pill2
Poco|M2 Pro|pill2
Poco|C31|pill2
Poco|M4 5G|pill2
Poco|M3 Pro 5G|pill2
Poco|C75 5G|pill2
Poco|X2|pill2
Poco|F3 GT 5G|pill2
Poco|M8 5G|pill2
Poco|M7 Plus 5G|pill2

Motorola|Moto Edge 70 Fusion|pill2
Motorola|Moto Edge 60|pill2
Motorola|Moto Edge 60 Fusion|pill2
Motorola|Moto Edge 60 Stylus|pill2
Motorola|Moto Edge 60 Pro|pill2
Motorola|Moto Edge 50|pill2
Motorola|Moto Edge 50 Fusion|pill2
Motorola|Moto Edge 50 Neo|pill2
Motorola|Moto Edge 50 Pro 5G|pill2
Motorola|Moto Edge 50 Ultra 5G|pill2
Motorola|Moto Edge 40|pill2
Motorola|Moto Edge 40 Neo|pill2
Motorola|Moto Edge 30|pill2
Motorola|Moto Edge 30 Fusion|pill2
Motorola|Moto Edge 30 Pro|pill2
Motorola|Moto Edge 30 Ultra|pill2
Motorola|Moto Edge 20 5G|pill2
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
Motorola|Moto G60/G40 Fusion|pill2
Motorola|Moto G57 Power 5G|pill2
Motorola|Moto G54 5G|pill2
Motorola|Moto G52|pill2
Motorola|Moto G51 5G|pill2
Motorola|Moto G45|pill2
Motorola|Moto G31/G41|pill2
Motorola|Moto G35 5G|pill2
Motorola|Moto G34 5G|pill2
Motorola|Moto G32|pill2
Motorola|Moto G30/G10 Power|pill2
Motorola|Moto G24 Power|pill2
Motorola|Moto G22|pill2
Motorola|Moto G9|pill2
Motorola|Moto G8 Plus|pill2
Motorola|Moto G8 Power Lite|pill2
Motorola|Moto G7|pill2
Motorola|Moto G6|pill2
Motorola|Moto G6 Play|pill2
Motorola|Moto G5|pill2
Motorola|Moto G5 plus|pill2
Motorola|Moto G5S|pill2
Motorola|Moto G5S plus|pill2
Motorola|Moto G04|pill2
Motorola|Moto G4/G4 plus|pill2
Motorola|Moto G4/G4 plus logocut|pill2
Motorola|Moto e40|pill2
Motorola|Moto E7 Power|pill2
Motorola|Moto E6s|pill2
Motorola|Moto E5 Plus|pill2
Motorola|Moto E5 Play|pill2
Motorola|Moto M|pill2
Motorola|Moto One Fusion Plus|pill2
Motorola|Moto One Power|pill2
Motorola|Moto Z2 Play|pill2

Google|Pixel 10|circ2
Google|Pixel 10a|circ2
Google|Pixel 10 Pro|circ2
Google|Pixel 9|circ2
Google|Pixel 9A|circ2
Google|Pixel 9 Pro|circ2
Google|Pixel 9 Pro XL|circ2
Google|Pixel 8|circ2
Google|Pixel 8A|circ2
Google|Pixel 8 Pro|circ2
Google|Pixel 7|circ2
Google|Pixel 7A|circ2
Google|Pixel 7 Pro|circ2
Google|Pixel 6|circ2
Google|Pixel 6A|circ2
Google|Pixel 6 Pro|circ2
Google|Pixel 4|circ2
Google|Pixel 4 XL|circ2
Google|Pixel 4A|circ2
Google|Pixel 3|circ2
Google|Pixel 3 XL|circ2
Google|Pixel 2|circ2
Google|Pixel 2 XL|circ2
Google|Pixel 1|circ2
Google|Pixel 1 XL|circ2

Samsung|Galaxy A80|vert3
Samsung|Galaxy A73 5G|circ2
Samsung|Galaxy A72|circ2
Samsung|Galaxy A71|circ2
Samsung|Galaxy A70|circ2
Samsung|Galaxy A70s|circ2
Samsung|Galaxy A57 5G|circ2
Samsung|Galaxy A56 5G|circ2
Samsung|Galaxy A55 5G|circ2
Samsung|Galaxy A54 5G|circ2
Samsung|Galaxy A53 5G|circ2
Samsung|Galaxy A52/Galaxy A52s 5G|circ2
Samsung|Galaxy A51|circ2
Samsung|Galaxy A50/Galaxy A50s/Galaxy A30s|circ2
Samsung|Galaxy A37 5G|circ2
Samsung|Galaxy A36 5G|circ2
Samsung|Galaxy A35 5G|circ2
Samsung|Galaxy A34 5G|circ2
Samsung|Galaxy A33 5G|circ2
Samsung|Galaxy A32 4G|circ2
Samsung|Galaxy A31|circ2
Samsung|Galaxy A30|circ2
Samsung|Galaxy A27 5G|circ2
Samsung|Galaxy A26|circ2
Samsung|Galaxy A25 5G|circ2
Samsung|Galaxy A24 5G|circ2
Samsung|Galaxy A23|circ2
Samsung|Galaxy A22 4G|circ2
Samsung|Galaxy A22 5G|circ2
Samsung|Galaxy A21s|circ2
Samsung|Galaxy A20/M10s|circ2
Samsung|Galaxy A20s|circ2
Samsung|Galaxy A17 5G|circ2
Samsung|Galaxy A16 5G|circ2
Samsung|Galaxy A15 5G|circ2
Samsung|Galaxy A14 5G|circ2
Samsung|Galaxy A13 4G|circ2
Samsung|Galaxy A12|circ2
Samsung|Galaxy A10|circ2
Samsung|Galaxy A9|circ2
Samsung|Galaxy A8 plus|circ2
Samsung|Galaxy A7|circ2
Samsung|Galaxy A07 5G|circ2
Samsung|Galaxy A06 5G|circ2
Samsung|Galaxy A05|circ2
Samsung|Galaxy A05s|circ2
Samsung|Galaxy A04s|circ2
Samsung|Galaxy A03s|circ2
Samsung|Galaxy A03|circ2
Samsung|Galaxy S26|circ2
Samsung|Galaxy S26 Plus|circ2
Samsung|Galaxy S26 Ultra|circ2
Samsung|Galaxy S25|circ2
Samsung|Galaxy S25 Plus|circ2
Samsung|Galaxy S25 Ultra|circ2
Samsung|Galaxy S25 Edge|circ2
Samsung|Galaxy S25 FE 5G|circ2
Samsung|Galaxy S24|circ2
Samsung|Galaxy S24 Plus|circ2
Samsung|Galaxy S24 Ultra|circ2
Samsung|Galaxy S24 FE 5G|circ2
Samsung|Galaxy S23|circ2
Samsung|Galaxy S23 Plus|circ2
Samsung|Galaxy S23 Ultra|circ2
Samsung|Galaxy S23 FE 5G|circ2
Samsung|Galaxy S22|circ2
Samsung|Galaxy S22 Plus|circ2
Samsung|Galaxy S22 Ultra|circ2
Samsung|Galaxy S21|circ2
Samsung|Galaxy S21 Plus|circ2
Samsung|Galaxy S21 Ultra|circ2
Samsung|Galaxy S21 FE 5G|circ2
Samsung|Galaxy S20|circ2
Samsung|Galaxy S20 Plus|circ2
Samsung|Galaxy S20 Ultra|circ2
Samsung|Galaxy S20 FE|circ2
Samsung|Galaxy S10E|circ2
Samsung|Galaxy S10|circ2
Samsung|Galaxy S10 Plus|circ2
Samsung|Galaxy S10 Lite|circ2
Samsung|Galaxy S9|circ2
Samsung|S9 Plus|circ2
Samsung|M56 5G|circ2
Samsung|M55 5G|circ2
Samsung|M53 5G|circ2
Samsung|M52 5G|circ2
Samsung|M51|circ2
Samsung|M42|circ2
Samsung|M40/A60|circ2
Samsung|M36 5G|circ2
Samsung|M35 5G|circ2
Samsung|M34 5G/F34 5G|circ2
Samsung|M33 5G|circ2
Samsung|M32|circ2
Samsung|M32 5G|circ2
Samsung|M31/F41|circ2
Samsung|M31s|circ2
Samsung|M30/A40s|circ2
Samsung|M30s|circ2
Samsung|M21 2020|circ2
Samsung|M20|circ2
Samsung|M17 5G|circ2
Samsung|M15 5G|circ2
Samsung|M14 4G|circ2
Samsung|M14 5G|circ2
Samsung|M13 5G|circ2
Samsung|M13 4G|circ2
Samsung|M12/F12|circ2
Samsung|M11|circ2
Samsung|M10|circ2
Samsung|M06 5G|circ2
Samsung|M02s|circ2
Samsung|M02|circ2
Samsung|M01|circ2
Samsung|M01 Core|circ2
Samsung|F62|circ2
Samsung|F56|circ2
Samsung|F55 5G|circ2
Samsung|F54 5G|circ2
Samsung|F42 5G|circ2
Samsung|F36 5G|circ2
Samsung|F23 5G|circ2
Samsung|F17 5G|circ2
Samsung|F16 5G|circ2
Samsung|F15 5G|circ2
Samsung|F14 5G|circ2
Samsung|F06 5G|circ2
Samsung|Note 9|circ2
Samsung|Note 10|circ2
Samsung|Note 20|circ2
Samsung|Note 10 Plus|circ2
Samsung|Note 20 Ultra|circ2
Samsung|Note 10 Lite|circ2
Samsung|J8|circ2
Samsung|J7 2016|circ2
Samsung|J7 Prime|circ2
Samsung|J7 Max|circ2
Samsung|J7 Nxt|circ2
Samsung|J7 Pro|circ2
Samsung|J6|circ2
Samsung|J6 plus|circ2
Samsung|J4|circ2
Samsung|J4 Plus|circ2
Samsung|J2 2017|circ2
Samsung|Galaxy Z Flip3|circ2
Samsung|Galaxy Z Flip4|circ2
Samsung|Galaxy Z Flip5|circ2

`;
var M = RAW.trim().split("\n").map(function (l) { return l.trim().split("|"); })
  .filter(function (r) { return r.length === 3; });
