/* Inline SVG icon library: icon markup is emitted directly by each render template. */
const iconPaths={"i0":"<rect x=\"3\" y=\"6\" width=\"18\" height=\"13\" rx=\"2\"/><path d=\"M3 10h18M16 14h.01\"/>","i1":"<path d=\"M8 21h8m-4-4v4M7 4h10v5a5 5 0 0 1-10 0V4ZM7 6H4v2a4 4 0 0 0 4 4m9-6h3v2a4 4 0 0 1-4 4\"/>","i2":"<path d=\"M20 7v5h-5M4 17v-5h5M5 9a7 7 0 0 1 12-3l3 6M4 12l3 6a7 7 0 0 0 12-3\"/>","i3":"<rect x=\"2\" y=\"5\" width=\"20\" height=\"14\" rx=\"2\"/><path d=\"M2 10h20\"/>","i4":"<rect x=\"5\" y=\"4\" width=\"14\" height=\"18\" rx=\"2\"/><path d=\"M9 4V3h6v1m-6 6h6m-6 4h6m-6 4h4\"/>","i5":"<path d=\"m12 3 2.7 5.5 6.1.9-4.4 4.3 1 6.1-5.4-2.9-5.4 2.9 1-6.1-4.4-4.3 6.1-.9Z\"/>","i6":"<circle cx=\"11\" cy=\"11\" r=\"7\"/><path d=\"m20 20-4-4\"/>","i7":"<path d=\"M12 20h9M16.5 3.5a2.1 2.1 0 0 1 3 3L8 18l-4 1 1-4Z\"/>","i8":"<path d=\"M3 3h2l2.4 12.4a2 2 0 0 0 2 1.6h8.8a2 2 0 0 0 2-1.6L22 8H6\"/><circle cx=\"10\" cy=\"21\" r=\"1\"/><circle cx=\"18\" cy=\"21\" r=\"1\"/>","i9":"<path d=\"M5 8h14l1 13H4L5 8Z\"/><path d=\"M9 9V6a3 3 0 0 1 6 0v3\"/>","i10":"<rect x=\"3\" y=\"7\" width=\"18\" height=\"10\" rx=\"5\" transform=\"rotate(-45 12 12)\"/><path d=\"m8 8 8 8\"/>","i11":"<path d=\"M3 21h12V4H3zM6 7h6v5H6zM15 9h2l3 3v6a2 2 0 0 1-4 0v-3\"/>","i12":"<path d=\"M3 7a2 2 0 0 0 0 4v2a2 2 0 0 0 0 4v2h18v-2a2 2 0 0 1 0-4v-2a2 2 0 0 1 0-4V5H3Z\"/><path d=\"M13 5v14\"/>","i13":"<rect x=\"3\" y=\"4\" width=\"18\" height=\"16\" rx=\"2\"/><path d=\"m7 4 4 6m2-6 4 6M7 20l4-6m2 6 4-6\"/>","i14":"<path d=\"M9 18V5l12-2v13\"/><circle cx=\"6\" cy=\"18\" r=\"3\"/><circle cx=\"18\" cy=\"16\" r=\"3\"/>","i15":"<rect x=\"3\" y=\"6\" width=\"18\" height=\"13\" rx=\"2\"/><path d=\"m8 2 4 4 4-4M8 22h8\"/>","i16":"<path d=\"M9 18h6m-5 4h4m-2-20a7 7 0 0 0-4 12.7c.6.4 1 1 1 1.8V18h6v-1.5c0-.8.4-1.4 1-1.8A7 7 0 0 0 12 2Z\"/>","i17":"<path d=\"m17.8 19.2-1.8-8.2 3.5-3.5a2.1 2.1 0 0 0-3-3L13 8l-8.2-1.8a.5.5 0 0 0-.5.8L9 12l-3 3-3-1-1 1 4 4 1-1-1-3 3-3 4.7 5a.5.5 0 0 0 .8-.5Z\"/>","i18":"<path d=\"M3 21V5h18v16H3ZM3 11h18M7 8h2m6 0h2M7 15h2m6 0h2M10 21v-4h4v4\"/>","i19":"<path d=\"m5 11 2-6h10l2 6 2 2v6h-2v-2H5v2H3v-6l2-2Z\"/><path d=\"M5 11h14M6 15h.01M18 15h.01\"/>","i20":"<path d=\"M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z\"/><path d=\"m9 12 2 2 4-4\"/>","i21":"<rect x=\"3\" y=\"8\" width=\"18\" height=\"13\" rx=\"1\"/><path d=\"M12 8v13M2 8h20v4H2zM12 8H7a2 2 0 1 1 2-2c0 2 3 2 3 2Zm0 0h5a2 2 0 1 0-2-2c0 2-3 2-3 2Z\"/>","i22":"<rect x=\"3\" y=\"5\" width=\"18\" height=\"16\" rx=\"2\"/><path d=\"M16 3v4M8 3v4M3 10h18\"/>","i23":"<rect x=\"6\" y=\"2\" width=\"12\" height=\"20\" rx=\"2\"/><path d=\"M11 18h2\"/>","i24":"<rect x=\"3\" y=\"4\" width=\"18\" height=\"13\" rx=\"2\"/><path d=\"M2 20h20\"/>","i25":"<path d=\"M14.7 6.3a5 5 0 0 0-6.4 6.4L3 18l3 3 5.3-5.3a5 5 0 0 0 6.4-6.4L14 12l-3-3Z\"/>","i26":"<circle cx=\"12\" cy=\"12\" r=\"9\"/><path d=\"m5.6 5.6 12.8 12.8\"/>","i27":"<path d=\"M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2m6-10a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm7-7.5a4 4 0 0 1 0 7.8M20 21v-2a4 4 0 0 0-3-3.9\"/>","i28":"<path d=\"M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9m-8 12h4\"/>","i29":"<path d=\"M6 2h9l5 5v15H6z\"/><path d=\"M14 2v6h6M9 13h8m-8 4h8\"/>","i30":"<circle cx=\"12\" cy=\"12\" r=\"10\"/><path d=\"m16 8-2.5 5.5L8 16l2.5-5.5Z\"/>","i31":"<path d=\"M3 20V5m0 10h18M7 15v-4a3 3 0 0 1 6 0v4m0-5a3 3 0 0 1 6 0v5M3 20h18\"/>","i32":"<path d=\"m3 9 9-6 9 6M4 10h16M5 10v8m4-8v8m6-8v8m4-8v8M3 21h18M2 18h20\"/>","i33":"<path d=\"m3 7 9-4 9 4v10l-9 4-9-4Z\"/><path d=\"m3 7 9 4 9-4m-9 4v10\"/>","i34":"<path d=\"M3 2v7a3 3 0 0 0 6 0V2M6 2v20m12-20v20m0-20c-4 4-4 9 0 11\"/>","i35":"<path d=\"M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z\"/><circle cx=\"12\" cy=\"10\" r=\"2\"/>","i36":"<rect x=\"4\" y=\"10\" width=\"16\" height=\"11\" rx=\"2\"/><path d=\"M8 10V7a4 4 0 1 1 8 0v3\"/>","i37":"<circle cx=\"12\" cy=\"12\" r=\"10\"/><path d=\"M2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20\"/>","i38":"<path d=\"M22 16.9v3a2 2 0 0 1-2.2 2A19.8 19.8 0 0 1 3.1 5.2 2 2 0 0 1 5.1 3h3a2 2 0 0 1 2 1.7l.5 2.7a2 2 0 0 1-.6 1.9L8.1 11a16 16 0 0 0 4.9 4.9l1.7-1.9a2 2 0 0 1 1.9-.6l2.7.5a2 2 0 0 1 1.7 2Z\"/>","i39":"<rect x=\"3\" y=\"5\" width=\"18\" height=\"14\" rx=\"2\"/><path d=\"m3 7 9 6 9-6\"/>","i40":"<path d=\"m13 2-3 9h7l-6 11 2-9H6Z\"/>","i41":"<path d=\"m3 10 9-7 9 7v11h-6v-7H9v7H3Z\"/>","i42":"<path d=\"M6 11h4m-2-2v4m7-1h.01M18 12h.01M5 7h14a3 3 0 0 1 3 3l-1 8a2 2 0 0 1-3 1l-4-3h-4l-4 3a2 2 0 0 1-3-1l-1-8a3 3 0 0 1 3-3Z\"/>","i43":"<rect x=\"9\" y=\"2\" width=\"6\" height=\"12\" rx=\"3\"/><path d=\"M5 10v2a7 7 0 0 0 14 0v-2m-7 9v3m-4 0h8\"/>","i44":"<rect x=\"3\" y=\"7\" width=\"18\" height=\"14\" rx=\"2\"/><path d=\"M8 7V4h8v3M8 11v6m8-6v6\"/>","i45":"<path d=\"m8 5 12 7-12 7Z\"/>","i46":"<path d=\"M7 18a5 5 0 1 1 1-9.9A6 6 0 0 1 19 10a4 4 0 0 1 0 8Z\"/>","i47":"<path d=\"M6 22V3m0 1c5-4 8 4 13 0v10c-5 4-8-4-13 0\"/>","i48":"<path d=\"M20.8 8.8c0 5.2-8.8 11-8.8 11s-8.8-5.8-8.8-11A4.8 4.8 0 0 1 12 6.2a4.8 4.8 0 0 1 8.8 2.6Z\"/>","i49":"<path d=\"M5 3v6a3 3 0 0 0 6 0V3M8 3v18m8-18v18m0-18c-3 4-3 8 0 10\"/>","i50":"<path d=\"M4 8h16l1 13H3L4 8Z\"/><path d=\"M9 8V6a3 3 0 0 1 6 0v2\"/>","i51":"<circle cx=\"12\" cy=\"8\" r=\"4\"/><path d=\"M4 21a8 8 0 0 1 16 0M8 4l4-2 4 2m-6 4h4\"/>","i52":"<path d=\"m3 8 4-5h10l4 5-9 13Z\"/><path d=\"m3 8 18 0M7 3l5 18 5-18\"/>","i53":"<path d=\"M12 2s7 8 7 13a7 7 0 0 1-14 0c0-5 7-13 7-13Z\"/>","i54":"<path d=\"M12 2v20m5-15c-1-2-3-3-5-3-3 0-5 1.5-5 4s2 3.5 5 4 5 1.5 5 4-2 4-5 4-5-1-6-3\"/>","i55":"<path d=\"M4 4h4v16H4zM10 3h4v17h-4zM16 5h4v15h-4zM5 7h2m5-1h2m5 2h2\"/>","i56":"<rect x=\"6\" y=\"2\" width=\"12\" height=\"20\" rx=\"2\"/><path d=\"M11 18h2m-7-9h4m-2-2 2 2-2 2\"/>","i57":"<rect x=\"3\" y=\"7\" width=\"18\" height=\"14\" rx=\"2\"/><path d=\"m5 7 13-4M7 11h10m-10 4h5\"/><circle cx=\"17\" cy=\"16\" r=\"2\"/>","i58":"<path d=\"M12 22a7 7 0 0 0 7-7c0-4-3-6-4-10-2 2-2 4-2 5-2-2-3-4-3-7-4 4-5 8-5 12a7 7 0 0 0 7 7Z\"/><path d=\"M12 22a3 3 0 0 0 3-3c0-2-2-3-3-5-1 2-3 3-3 5a3 3 0 0 0 3 3Z\"/>","i59":"<path d=\"m5 11 2-6h10l2 6 2 2v6h-2v-2H5v2H3v-6l2-2Z\"/><path d=\"M5 11h14M6 15h.01M18 15h.01\"/>","i60":"<path d=\"M3 6h12v12H3zM15 10h4l3 4v4h-7z\"/><circle cx=\"7\" cy=\"19\" r=\"2\"/><circle cx=\"18\" cy=\"19\" r=\"2\"/>","i61":"<path d=\"M3 20h18M5 20V8h14v12M5 8l5-5 4 5 5-5\"/><path d=\"m7 12 3 3m4-3 3 3\"/>","i62":"<path d=\"M5 18h14l-2-8a5 5 0 0 0-10 0Z\"/><path d=\"M3 21h18M12 2V1M3 5 1 3m20 2 2-2M2 12H1m22 0h-1\"/>","i63":"<path d=\"M5 18h14l-2-2V9a5 5 0 0 0-10 0v7Z\"/><path d=\"M3 21h18m-11 0a2 2 0 0 0 4 0\"/>","i64":"<path d=\"M3 18V6m0 9h18v6M3 12h18M7 12V9a2 2 0 0 1 2-2h3a3 3 0 0 1 3 3v2\"/>","i65":"<path d=\"M8 22 11 2m5 20L13 2M12 5v3m0 4v3m0 4v2\"/>","i66":"<rect x=\"4\" y=\"7\" width=\"16\" height=\"13\" rx=\"3\"/><path d=\"M12 3v4m-3 6h.01m6 0h.01M8 17h8M2 11v5m20-5v5\"/>","i67":"<circle cx=\"12\" cy=\"7\" r=\"4\"/><path d=\"M4 21a8 8 0 0 1 16 0M9 15l3 3 3-3\"/>","i68":"<path d=\"M3 10h18l-2 11H5L3 10Z\"/><path d=\"m7 10 3-6m7 6-3-6M8 14v4m4-4v4m4-4v4\"/>","i69":'<path d="M5 4h14a2 2 0 0 1 2 2v13H3V6a2 2 0 0 1 2-2Z"/><path d="M3 10h18M7 15h.01M17 15h.01M7 19v2m10-2v2M8 4V2m8 2V2"/>',"i70":'<path d="M12 7a2.5 2.5 0 1 0-2.5-2.5"/><path d="M12 7 3 14.5a1.5 1.5 0 0 0 1 2.7h16a1.5 1.5 0 0 0 1-2.7L12 7Z"/>'};
function iconSvg(id){
 const path=iconPaths[id];
 if(!path)return "";
 return '<span class="portal-lucide" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">'+path+'</svg></span>';
}


const rewards = [
 {category:"Grocery Stores",icon:`${iconSvg("i68")}`,card:"Chase Freedom Flex",cash:"5%",details:"Kroger, HEB, etc. (excludes warehouse and superstores)",until:"Dec 31, 2026",search:["grocery","kroger","heb"]},
 {category:"Restaurants / Dining",icon:`${iconSvg("i49")}`,card:"Chase Freedom Flex",cash:"7%",details:"Dine-in, takeout, delivery",until:"Dec 31, 2026",search:["restaurant","dining","takeout","delivery"]},
 {category:"Drugstores",icon:`${iconSvg("i10")}`,card:"Chase Freedom Flex & Unlimited",cash:"3%",details:"CVS, Walgreens, etc.",until:"Ongoing",search:["drugstore","cvs","walgreens","pharmacy"]},
 {category:"Department Stores",icon:`${iconSvg("i70")}`,card:"U.S. Bank Cash+ Visa Signature",cash:"5%",details:"Department store purchases",until:"Dec 31, 2026",search:["department store","department stores","bloomingdale's","bloomingdales","kohl's","kohls","off 5th","off fifth","bon-ton","bonton","loehmann's","loehmanns","saks fifth avenue","saks","boston store","boston stores","macy's","macys","sears","dillard's","dillards","nordstrom","soma intimates","soma","jcpenney","j.c. penney","jcp","nordstrom rack","von maur"]},
 {category:"Electronics Stores",icon:`${iconSvg("i24")}`,card:"U.S. Bank Cash+ Visa Signature",cash:"5%",details:"Electronics store purchases",until:"Dec 31, 2026",search:["electronics","electronics store","electronics stores","apple store","apple","firststreet","first street","magnolia","best buy","bestbuy","bestbuy.com","fry's electronics","frys electronics","frys.com","fry's","monoprice","newegg.com","newegg","bose","h.h. gregg","hhgregg","h h gregg","o&m electronics","om electronics","electronic express","huppin's","huppins","video only","computer store"]},
 {category:"Superstores / Clubs",icon:`${iconSvg("i8")}`,card:"Bank of America",cash:"2.625%",details:"Walmart, Target, Sam's Club, etc.",until:"Ongoing",search:["walmart","target","sam's","sams","warehouse","superstore"]},
 {category:"Amazon / Whole Foods",icon:`${iconSvg("i8")}`,card:"Amazon Prime Store Card",cash:"5%",details:"Amazon.com and Whole Foods purchases with an active Prime membership.",until:"Ongoing",search:["amazon","whole foods","prime store card"]},
 {category:"Walmart",icon:`${iconSvg("i8")}`,card:"Walmart OnePay Cash Rewards",cash:"5%",details:"Walmart in-store and online purchases with an active Walmart+ membership.",until:"Ongoing",search:["walmart","onepay","walmart plus","walmart+"]},
 {category:"Gas",icon:`${iconSvg("i11")}`,card:"Bank of America",cash:"2.625%",details:"Gas stations",until:"Ongoing",search:["gas","gas station","fuel"]},
 {category:"Entertainment",icon:`${iconSvg("i12")}`,card:"Discover",cash:"5%",details:"Movies, concerts, events, etc.",until:"Dec 31, 2026",search:["movie","concert","entertainment","event"]},
 {category:"Streaming Services",icon:`${iconSvg("i45")}`,card:"Capital One Savor",cash:"3%",details:"Netflix, YouTube TV, Disney+ / Hulu Bundle, Paramount+, Spotify, HBO Max, etc.",until:"Ongoing",search:["streaming","netflix","youtube tv","disney","hulu","paramount","spotify","hbo"]},
 {category:"Utilities",icon:`${iconSvg("i16")}`,card:"Discover",cash:"5%",details:"Electric, water, internet, phone, etc.",until:"Dec 31, 2026",search:["utility","electric","electricity","water","internet","phone"]},
 {category:"Flights",icon:`${iconSvg("i17")}`,card:"Bank of America",cash:"2.625%",details:"Airlines, air travel purchases",until:"Ongoing",search:["flight","airline","air travel"]},
 {category:"Travel / Hotels",icon:`${iconSvg("i18")}`,card:"Capital One / Chase",cash:"5%",details:"Capital One and Chase Travel portal purchases",until:"Ongoing",search:["hotel","travel","capital one travel","chase travel"]},
 {category:"Public Transportation",icon:`${iconSvg("i69")}`,card:"Bank of America",cash:"2.625%",details:"Bus, rail, ferry, etc.",until:"Ongoing",search:["bus","rail","ferry","transportation"]},
 {category:"Everything Else",icon:"•••",card:"Bank of America",cash:"2.625%",details:"Any purchase not listed above",until:"Ongoing",search:["everything else","other"]}
];

const bills = [
 [`${iconSvg("i40")} Electricity`,"Utilities","Discover More","5% Cash Back","Expires December 31, 2026, then Bank of America Visa","https://www.discountpowertx.com/"],
 [`${iconSvg("i53")} Water`,"Utilities","Discover More","5% Cash Back","Expires December 31, 2026, then Bank of America Checking to avoid credit card processing fees","https://www.houstonwaterbills.houstontx.gov/"],
 [`${iconSvg("i58")} Gas`,"Utilities","Bank of America Checking","","Avoids credit card processing fees.","https://myaccount.centerpointenergy.com/"],
 [`${iconSvg("i37")} Internet`,"Utilities","Bank of America Checking","","$10 discount with bank account","https://www.att.com/"],
 [`${iconSvg("i23")} Cell Phones`,"Utilities","Bank of America Checking","","$15 discount ($5 per line) with bank account","https://www.verizon.com/"],
 [`${iconSvg("i19")} Auto Loans`,"Home/Auto","Bank of America Checking","","Bank account payment only available","https://www.wellsfargo.com/"],
 [`${iconSvg("i41")}${iconSvg("i19")} Home / Auto Insurance`,"Home/Auto","Bank of America Visa","","","https://www.statefarm.com/"],
 [`${iconSvg("i41")} Property Tax`,"Home/Auto","Bank of America Visa","","Check to see if credit txn fee is > than Cash Back. If so, use Bank of America Checking","https://www.hctax.net/"],
 [`${iconSvg("i41")} Property Tax Protest`,"Home/Auto","Bank of America Visa","","","https://www.hctax.net/"],
 [`${iconSvg("i19")} Auto Registration`,"Home/Auto","Bank of America Visa","","","https://txt.texas.gov/"],
 [`${iconSvg("i33")} ${iconSvg("i60")} Public Storage`,"Home/Auto","Bank of America Visa","","","https://www.publicstorage.com/"],
 [`${iconSvg("i64")} Mattress Loan`,"Home/Auto","Bank of America Checking","","","https://id.synchrony.com/idp/en/standard/login"],
 [`${iconSvg("i19")} Toll Roads`,"Home/Auto","Bank of America Visa","","","https://www.hctra.org/"],
 [`${iconSvg("i55")} TAMU College Tuition`,"School","Bank of America Visa","","","https://howdy.tamu.edu/"],
 [`${iconSvg("i41")} FSU Apartment Rent`,"School","Bank of America Checking","","","https://west10.residentportal.com/auth"],
 [`${iconSvg("i41")} TAMU Apartment Rent`,"School","Bank of America Checking","","","https://woodlandsapts.residentportal.com/auth"],
 [`${iconSvg("i15")} Netflix`,"Streaming","Capital One Savor","3% Cash Back","","https://www.netflix.com/"],
 [`${iconSvg("i15")} Paramount+`,"Streaming","Bank of America Checking","","Up to $8 off/month - No expiration.","https://www.paramountplus.com/"],
 [`${iconSvg("i15")} YouTube TV`,"Streaming","U.S. Bank Cash+ Visa Signature","","$20 cash back/month • Expires 12/31/2026.","https://tv.youtube.com/"],
 [`${iconSvg("i15")} Disney+ / Hulu Bundle`,"Streaming","Capital One Savor","3% Cash Back","Promo price expires 11/24/2026, then $12.99/month","https://www.disneyplus.com/"],
 [`${iconSvg("i15")} HBO Max`,"Streaming","Capital One Savor","3% Cash Back","Promo price expires 11/24/2027, then $10.99/month","https://play.hbomax.com/"],
 [`${iconSvg("i14")} Spotify`,"Streaming","Capital One Savor","3% Cash Back","","https://www.spotify.com/"],
 [`${iconSvg("i66")} ChatGPT`,"Software","Bank of America Visa","","","https://chatgpt.com/"],
 [`${iconSvg("i35")} Life360`,"Software","Bank of America Visa","","","https://play.google.com/"],
 [`${iconSvg("i46")} Apple iCloud`,"Software","Bank of America Visa","","","https://www.icloud.com/"],
 [`${iconSvg("i41")} Google Home Premium`,"Software","Bank of America Visa","","","https://play.google.com/"],
 [`${iconSvg("i48")} Google Health (Fitbit)`,"Software","Bank of America Visa","","","https://play.google.com/"],
 [`${iconSvg("i46")} Google One AI Plus (400 GB)`,"Software","Bank of America Visa","","","https://play.google.com/"],
 [`${iconSvg("i57")} VRadio`,"Software","Bank of America Visa","","","https://play.google.com/"],
 [`${iconSvg("i65")} AAA Texas`,"Memberships","Bank of America Visa","","","https://www.aaa.com/"],
 [`${iconSvg("i8")} Sam's Club / Walmart+`,"Memberships","Bank of America Visa","","When renewing, check cards for cash back offers. For example, Chase Unlimited offered 40% back for memberships (up to $20).","https://www.samsclub.com/"],
 [`${iconSvg("i33")} Amazon`,"Memberships","Bank of America Visa","","","https://www.amazon.com/"]
];

const benefits = {
 "Chase Freedom Flex":[
  [`${iconSvg("i38")} Cell Phone Protection`,"Pay the wireless bill with Flex. You do NOT have to buy the phone with the Flex. Coverage is tied to eligible phones listed on the bill. Up to $800/claim; $50 deductible; 2 claims / 12 months; $1,000 max / 12 months."],
  [`${iconSvg("i19")} Rental Car Insurance`,"Auto rental collision/theft coverage. Chase coverage is secondary in the U.S.; generally decline the rental company's collision waiver and pay the full rental with the card. The benefit generally covers the rental vehicle, not liability for injuries or damage to others."],
  [`${iconSvg("i17")} Trip Cancellation Protection`,"Trip Cancellation & Interruption coverage. Chase Flex/Unlimited: up to $1,500 per covered traveler / $6,000 per trip."],
  [`${iconSvg("i52")} Purchase Protection`,"Eligible theft or damage protection. Chase: 120 days, up to $500 per item."],
  [`${iconSvg("i25")} Manufacturer Warranty`,"Extended warranty protection. Chase adds 1 year to eligible manufacturer's warranties of 3 years or less."],
  [`${iconSvg("i61")} Travel Assistance`,"Travel & Emergency Assistance."],
  [`${iconSvg("i26")} Unauthorized Charge Protection`,"Zero-liability / fraud protection, subject to issuer terms."]
 ],
 "Chase Freedom Unlimited":[
  [`${iconSvg("i19")} Rental Car Insurance`,"Auto rental collision/theft coverage. Chase coverage is secondary in the U.S.; generally decline the rental company's collision waiver and pay the full rental with the card. The benefit generally covers the rental vehicle, not liability for injuries or damage to others."],
  [`${iconSvg("i17")} Trip Cancellation Protection`,"Trip Cancellation & Interruption coverage. Chase Flex/Unlimited: up to $1,500 per covered traveler / $6,000 per trip."],
  [`${iconSvg("i52")} Purchase Protection`,"120-day purchase protection, up to $500 per item."],
  [`${iconSvg("i25")} Manufacturer Warranty`,"Adds 1 year to eligible manufacturer's warranties of 3 years or less."],
  [`${iconSvg("i61")} Travel Assistance`,"Travel & Emergency Assistance."],
  [`${iconSvg("i26")} Unauthorized Charge Protection`,"Zero-liability / fraud protection, subject to issuer terms."]
 ],
 "Capital One Savor":[
  [`${iconSvg("i19")} Rental Car Insurance`,"Auto rental collision/theft coverage. Savor coverage is secondary in the U.S.; generally decline the rental company's collision waiver and pay the full rental with the card. The benefit generally covers the rental vehicle, not liability for injuries or damage to others."],
  [`${iconSvg("i17")} Trip Cancellation Protection`,"Trip Cancellation & Interruption coverage."],
  [`${iconSvg("i50")} Baggage Protection`,"Baggage-delay and lost-luggage reimbursement benefits."],
  [`${iconSvg("i62")} Travel Accident Coverage`,"Travel/flight accident insurance."],
  [`${iconSvg("i52")} Purchase Protection`,"Purchase protection/security for eligible theft or damage."],
  [`${iconSvg("i25")} Manufacturer Warranty`,"Extended warranty protection."],
  [`${iconSvg("i54")} Price Protection`,"Price Protection benefit for eligible purchases."],
  [`${iconSvg("i67")} Concierge Assistance`,"Concierge Services for eligible assistance/arrangements."],
  [`${iconSvg("i51")} Identity-theft Protection`,"Personal Identity Theft and Comprehensive Identity Solutions."],
  [`${iconSvg("i61")} Travel Assistance`,"Travel & Emergency Assistance."],
  [`${iconSvg("i26")} Unauthorized Charge Protection`,"Zero-liability / fraud protection, subject to issuer terms."]
 ],
 "Discover More":[
  [`${iconSvg("i26")} Unauthorized Charge Protection`,"Zero-liability / fraud protection, subject to issuer terms."]
 ],
 "Bank of America":[
  [`${iconSvg("i62")} Travel Accident Coverage`,"Travel/flight accident insurance."],
  [`${iconSvg("i52")} Purchase Protection`,"Purchase protection/security for eligible theft or damage."],
  [`${iconSvg("i25")} Manufacturer Warranty`,"Extended warranty protection."],
  [`${iconSvg("i26")} Unauthorized Charge Protection`,"Zero-liability / fraud protection, subject to issuer terms."]
 ],
 "U.S. Bank Cash+ Visa Signature":[
  [`${iconSvg("i0")} 5% Cash Back`,"Earn 5% cash back on your first $2,000 in combined eligible purchases each quarter (exclusions apply). Eligible spend categories: Cell Phone Providers, Department Stores, Electronic Stores, Fast Food, Furniture Stores, Ground Transportation, Gym/Fitness Centers, Home Utilities, Movie Theaters, Select Clothing Stores, Sporting Goods Stores, and TV, Internet & Streaming Services."],
  [`${iconSvg("i9")} 2% Cash Back`,"Earn 2% cash back on your choice of one everyday category. Everyday categories: Gas Stations and EV Charging Stations*, Grocery Stores* or Restaurants. *Excludes discount stores/supercenters and wholesale clubs."],
  [`${iconSvg("i17")} 5% Cash Back — Travel Center`,"Earn 5% cash back when using your card to book prepaid air, hotels and car rentals in the Travel Center."],
  [`${iconSvg("i47")} Premier Golf Rewards`,"Earn more points on golf fees and merchandise with Troon®."],
  [`${iconSvg("i14")} Sofar Sounds Access`,"Discover new music with exclusive ticket offers and presale access."],
  [`${iconSvg("i31")} Universal Studios Hollywood Offers`,"A world of action and adventure awaits with Universal Studios Hollywood offers."],
  [`${iconSvg("i12")} Universal Orlando Resort Offers`,"Enjoy special offers at Universal Orlando Resort."],
  [`${iconSvg("i44")} Book a Trip`,"Explore fun travel options and create your dream vacation."],
  [`${iconSvg("i63")} Concierge Service`,"Get assistance with travel planning, entertainment tickets and more."],
  [`${iconSvg("i59")} Car Rental Discounts`,"Unlock special offers and upgrades from Avis® and Budget®."],
  [`${iconSvg("i23")} GigSky Global Mobile Data`,"Stay connected with global mobile data options in destinations around the world."],
  [`${iconSvg("i8")} Cash-Back Deals`,"Earn up to 5% total cash back on online shopping."],
  [`${iconSvg("i32")} U.S. Bank Smart Rewards®`,"Grow with U.S. Bank and get rewarded."],
  [`${iconSvg("i21")} Discounted Gift Cards`,"Receive 5% off your order when you purchase from The Gift Card Shop."],
  [`${iconSvg("i22")} U.S. Bank ExtendPay® Plan`,"Get extra time to pay for larger purchases."],
  [`${iconSvg("i9")} Shop with Points at Amazon.com`,"Use your rewards to get your favorite items at Amazon.com."],
  [`${iconSvg("i24")} Check Out with PayPal`,"Redeem your rewards at checkout for easy online shopping."],
  [`${iconSvg("i56")} Real-Time Rewards`,"Claim your rewards instantly on new purchases with a text."],
  [`${iconSvg("i20")} Zero Fraud Liability & More`,"Built-in protection features and security coverage."],
  [`${iconSvg("i19")} Roadside Dispatch®`,"Rely on 24/7 emergency roadside assistance."],
  [`${iconSvg("i30")} Travel & Emergency Assistance`,"Count on emergency assistance while traveling."],
  [`${iconSvg("i27")} Authorized Users`,"Add authorized users to share your account with family or friends."],
  [`${iconSvg("i28")} Account Alerts`,"Set account alerts to track your balance, payments and more."],
  [`${iconSvg("i29")} Go Paperless`,"With e-statements it's easy, simple and saves paper."],
  [`${iconSvg("i23")} 24/7 Account Access`,"Bank when and where you want with the mobile app or online banking."]
 ]
};

const cards = [
 ["boa","Bank of America","Unlimited Cash Rewards Visa","2.625% everywhere.  Use as the default card when there are not other offers available.","Default card for credit card purchases.","https://www.bankofamerica.com/"],
 ["capital","Capital One","Savor Mastercard","3% on entertainment, grocery, restaurants, and streaming services; 5% through Capital One Travel.","Entertainment • Grocery • Restaurants • Streaming • Travel Portal","https://www.capitalone.com/"],
 ["discover","Capital One","Discover More","5% quarterly rotating categories.","Activate quarterly categories.","https://www.capitalone.com/"],
 ["","Chase","Freedom Flex Mastercard","5% quarterly rotating categories; 5% through Chase Travel.","Travel Portal • Activate quarterly categories.","https://www.chase.com/"],
 ["","Chase","Freedom Unlimited Visa","3% on drugstores and restaurants.","Restaurants • Drugstores","https://www.chase.com/"],
 ["usb","U.S. Bank","Cash+ Visa Signature","Two 5% quarterly categories. One 2% quarterly “everyday” category.","Select two 5% quarterly categories to activate. • Select one 2% quarterly “everyday” category to activate.","https://www.usbank.com/"],
 ["synchrony","Synchrony Bank","Walmart OnePay Cash Rewards Mastercard","5% on all Walmart purchases in store and online with an active Walmart+ membership.","Rotating, limited-time extra rewards and offers inside the OnePay app.","https://id.synchrony.com/idp/en/standard/login"],
 ["synchrony","Synchrony Bank","Amazon Prime Store Card","5% on all Amazon purchases at Amazon.com & Whole Foods with an active Prime membership; 5% to 15% on select rotating items and categories throughout the year.","6% back for Amazon Day / No-Rush shipping.","https://asc.syf.com/login/"]
];

function cardChipClass(name){
  if(name.includes("Amazon Prime Store Card") || name.includes("Walmart OnePay Cash Rewards")) return "chip-synchrony";
  if(name.includes("Discover")) return "chip-discover";
  if(name.includes("Capital One Savor")) return "chip-capital";
  if(name.includes("Chase Freedom Unlimited")) return "chip-unlimited";
  if(name.includes("Chase Freedom Flex")) return "chip-flex";
  if(name.includes("Bank of America") || name.includes("Bank of America Visa")) return "chip-boa";
  if(name.includes("U.S. Bank Cash+")) return "chip-usb";
  return "chip-neutral";
}
function renderCardChips(name){
  const parts = name === "Capital One / Chase" ? ["Capital One Savor","Chase Freedom Flex"] :
    name === "Chase Freedom Flex & Unlimited" ? ["Chase Freedom Flex","Chase Freedom Unlimited"] :
    name === "Discover" ? ["Discover More"] : [name];
  return `<div class="card-chips">${parts.map(x=>`<span class="card-chip ${cardChipClass(x)}">${x === "Bank of America" ? "Bank of America Unlimited Cash Rewards" : x}</span>`).join("")}</div>`;
}
function renderRewards(){
  rewardGrid.innerHTML = rewards.map((r,i)=>{
    const parts = r.card === "Capital One / Chase" ? ["Capital One Savor","Chase Freedom Flex"] :
      r.card === "Chase Freedom Flex & Unlimited" ? ["Chase Freedom Flex","Chase Freedom Unlimited"] :
      r.card === "Discover" ? ["Discover More"] : [r.card];
    const multi = parts.length > 1;
    const categoryClass = "category-" + r.category.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"");
    const issuerArea = parts.map(card => `
      <div class="reward-issuer-section ${cardChipClass(card)}">
        <div class="card-name">${card}</div>
      </div>`).join("");
    const lower = multi ? issuerArea : `
      <div class="reward-gradient-area ${cardChipClass(parts[0])}">
        <div class="reward-card-method">${renderCardChips(r.card)}</div>
        ${`<div class="reward-expiry-row ${r.until==="Ongoing"?"reward-expiry-row-ongoing":""}">${r.until!=="Ongoing"?`Expires ${r.until}`:"&nbsp;"}</div>`}
      </div>`;
    return `
      <article class="reward-card ${categoryClass} ${multi ? "reward-card-multi" : cardChipClass(parts[0])}" data-search="${[r.category,r.card,r.details,...r.search].join(" ").toLowerCase()}">
        <div class="reward-top">
          <div class="reward-category-label">
            <div class="reward-icon">${r.icon}</div>
            <div class="reward-category-block"><div class="reward-title">${r.category}</div></div>
          </div>
          <div class="reward-header-rate">${r.cash}</div>
        </div>
        ${lower}
        ${multi&&r.until!=="Ongoing"?`<div class="reward-expiry-row">Expires ${r.until}</div>`:""}
      </article>`;
  }).join("");
}
function paymentCardClass(method){
  if(method === "Discover" || method === "Discover More") return "payment-discover";
  if(method === "Capital One Savor") return "payment-capital";
  if(method === "Chase Freedom Unlimited") return "payment-unlimited";
  if(method === "Chase Freedom Flex") return "payment-flex";
  if(method === "Bank of America Visa" || method === "Bank of America Checking") return "payment-boa";
  if(method === "U.S. Bank Cash+ Visa Signature") return "payment-usb";
  return "payment-boa";
}
function formatPaymentPayee(name){
  return name.replace(/^(\p{Extended_Pictographic}\uFE0F?)/u, '<span class="payment-category-icon">$1</span>');
}
function renderBills(filter="All"){
  const rows=bills.filter(b=>filter==="All"||b[1]===filter);
  billsTable.innerHTML=`
    <div class="payment-grid">
      ${rows.map(b=>{
        const methodClass=paymentCardClass(b[2]);
        const paymentCategoryClass = "payment-category-" + b[1].toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"");
        const reward = b[2] === "Bank of America Visa" ? "2.625% Cash Back" : b[3];
        const noteIsExpiry = /expires/i.test(b[4]||"");
        return `
        <article class="payment-card ${methodClass} ${paymentCategoryClass}">
          <div class="payment-card-top">
            <div class="payment-payee">${b[5] ? `<a href="${b[5]}" target="_blank" rel="noopener" title="Open ${b[0].replace(/<[^>]*>/g,"")} website">${formatPaymentPayee(b[0])} <span class="external-link">↗</span></a>` : b[0]}</div>
            <span class="type-pill type-${b[1].toLowerCase().replace(/[^a-z]+/g,"-")}">${b[1]}</span>
          </div>
          <div class="payment-gradient-area ${methodClass}">
            <div class="payment-card-reward-row">
              <strong class="payment-method-chip ${methodClass}">${b[2]}</strong>
              ${reward ? `<div class="payment-reward"><span>${iconSvg("i5")}</span>${reward}</div>` : ""}
            </div>
            ${b[4] ? `<div class="payment-note ${noteIsExpiry ? "note-red" : ""}">${b[4]}</div>` : ""}
          </div>
        </article>`;
      }).join("")}
    </div>`;
}function renderBillFilters(){
  const types=["All",...new Set(bills.map(b=>b[1]))];
  billFilters.innerHTML=types.map((t,i)=>`<button class="filter-btn ${i===0?"active":""}" data-filter="${t}">${t}</button>`).join("");
  billFilters.querySelectorAll(".filter-btn").forEach(btn=>btn.onclick=()=>{billFilters.querySelectorAll(".filter-btn").forEach(x=>x.classList.remove("active"));btn.classList.add("active");renderBills(btn.dataset.filter)});
}
function renderBenefits(card="Chase Freedom Flex"){
  const benefitGuides = {
  "Chase Freedom Flex":"https://www.chase.com/personal/credit-cards/education/chase-cards/chase-freedom-benefits-guide",
  "Chase Freedom Unlimited":"https://www.chase.com/personal/credit-cards/education/chase-cards/chase-freedom-benefits-guide",
  "Capital One Savor":"https://ecm.capitalone.com/WCM/card/discover-gtb_english-web.pdf",
  "Discover More":"https://www.capitalone.com/updates/discover/consumer-card/",
  "Bank of America":"https://bankofamericalifestylebenefits.com/client/dashboard.jsf",
  "U.S. Bank Cash+ Visa Signature":"https://rewards.usbank.com/benefits/card/CashPlusBenefits"
};
benefitTabs.innerHTML=Object.keys(benefits).map((c,i)=>`<button class="tab-btn ${c===card?"active":""} ${c===card?cardChipClass(c):""}" data-card="${c}"><span>${c === "Bank of America" ? "Bank of America Unlimited Cash Rewards" : c.replace("Chase Freedom ","Chase ")}</span>${benefitGuides[c]?`<a class="benefit-guide-link" href="${benefitGuides[c]}" target="_blank" rel="noopener" title="Open ${c} benefits guide" onclick="event.stopPropagation()">↗</a>`:""}</button>`).join("");
  benefitContent.innerHTML=`
    <div class="benefit-list">${benefits[card].map(b=>`<article class="benefit-card"><span class="tag ${cardChipClass(card)}">${card === "Bank of America" ? "Bank of America Unlimited Cash Rewards" : card}</span><h3>${b[0]}</h3><div class="benefit-body">${b[1]}</div></article>`).join("")}</div>
    <div class="info-panel">
      <h2>${iconSvg("i7")} Benefit Notes</h2>
      <ul>
        <li><strong>Cell Phone Protection:</strong> Use the Flex to pay the monthly wireless bill. You do NOT have to buy the phone with the Flex. Coverage is tied to eligible phones listed on the bill.</li>
        <li><strong>Rental Car Insurance:</strong> For Chase Flex/Unlimited and Capital One Savor, coverage is secondary in the U.S. The card benefit generally covers the rental vehicle, not liability for injuries or damage to others.</li>
        <li><strong>Purchase Protection:</strong> Flex and Unlimited are easy to remember: 120-day purchase protection, up to $500 per item, plus 1 year of extended warranty on eligible warranties.</li>
      </ul>
    </div>
    <div class="info-panel travel-note">
      <h2>${iconSvg("i17")} Travel Benefits</h2>
      <p>Savor has the broadest set of travel-related benefits, including baggage, lost luggage, travel accident, trip cancellation/interruption, and rental-car coverage.</p>
    </div>
`;
  benefitTabs.querySelectorAll(".tab-btn").forEach(btn=>btn.onclick=()=>renderBenefits(btn.dataset.card));
}
function renderOffers(){
  offersGrid.innerHTML=`
  <article class="offer-card"><div class="offer-head offer-discover">Discover 5% Categories</div><div class="offer-body"><h3>Q4 2026 (Oct 1–Dec 31)</h3><ul><li>Restaurants</li><li>Entertainment</li><li>Utilities</li></ul><h3>Q1 2027 (Jan 1–Mar 31)</h3><ul><li>TBD</li></ul><strong>Activation required each quarter.</strong></div></article>
  <article class="offer-card"><div class="offer-head offer-flex">Chase Freedom Flex +4% Categories</div><div class="offer-body"><h3>Q4 2026 (Oct 1–Dec 31)</h3><ul><li>Grocery stores — 5%</li><li>Restaurants, takeout, delivery — 7%</li><li>American Red Cross donations — 5%</li></ul><h3>Q1 2027 (Jan 1–Mar 31)</h3><ul><li>Grocery stores (excluding Walmart and Target) — 5%</li><li>Streaming services — 5%</li></ul><strong>Activation required each quarter.</strong></div></article>
  <article class="offer-card"><div class="offer-head offer-usb">U.S. Bank Cash+ Visa Signature 5% &amp; 2% Categories</div><div class="offer-body"><h3>Q4 2026 (Oct 1–Dec 31)</h3><ul><li>Department stores — 5%</li><li>Electronics stores — 5%</li><li>Gas stations — 2%</li></ul><h3>Q1 2027 (Jan 1–Mar 31)</h3><ul><li>TBD</li></ul><strong>Activation required each quarter.</strong><p><a class="usb-sample-merchants-link" href="https://cashplus.usbank.com/cash-plus/samplemerchants" target="_blank" rel="noopener">View Sample Merchants for Categories ↗️</a></p></div></article>
  <article class="offer-card"><div class="offer-head">Offers Currently Used</div><div class="offer-body"><div class="used-offer-item"><h3>Paramount+</h3><p><strong class="offer-card-title chip-boa">Bank of America Checking</strong></p><p>Up to $8 off/month • No expiration.</p></div><div class="used-offer-item"><h3>YouTube TV</h3><p><strong class="offer-card-title chip-usb">U.S. Bank Cash+ Visa Signature</strong></p><p>$20 cash back/month • Expires 12/31/2026.</p></div></div></article>`;
}
function renderCards(){
  cardsGrid.innerHTML=cards.map(c=>{const logoPath=c[0]==="boa"?"./images/boa-icon.svg":c[0]==="capital"?"./images/capital-one-icon.svg":c[0]==="discover"?"./images/discover-icon.svg":c[0]==="usb"?"./images/us-bank-icon.svg":c[0]==="synchrony"?"./images/synchrony-bank-logo.svg":"./images/chase-icon.svg";return `<article class="my-card ${c[0]} ${c[0]==="usb"?"boa":""} ${c[2].includes("Unlimited")?"card-unlimited":c[2].includes("Flex")?"card-flex":""}"><div class="portfolio-card-brand">${logoPath?'<img class="portfolio-bank-logo" src="'+logoPath+'" alt="'+c[1]+' icon" loading="lazy">':''}${c[1]}</div><h2>${c[2]} <a class="card-site-link" href="${c[5]}" target="_blank" rel="noopener" title="Open ${c[2]} website">↗</a></h2>${c[3]?`<p style="margin-top:10px">${c[3]}</p>`:""}${c[4]?`<ul>${c[4].split(" • ").map(x=>`<li>${x}</li>`).join("")}</ul>`:""}${c[0]==="usb"?`<p class="usb-sample-merchants-link-wrap"><a class="usb-sample-merchants-link" href="https://cashplus.usbank.com/cash-plus/samplemerchants" target="_blank" rel="noopener">View Sample Merchants for Categories ↗️</a></p>`:""}</article>`}).join("");
  cardsGrid.insertAdjacentHTML("afterend", `
    <div class="info-panel page-notes">
      <h2>${iconSvg("i7")} Notes</h2>
      <ul>
        <li>Activate Discover and Chase Freedom Flex 5% categories each quarter (required).</li>
        <li>Choose to activate U.S. Bank Cash+ Visa Signature 5% &amp; 2% categories each quarter (required).</li>
        <li>Bank of America base rewards (1.5%) post first; the 75% Preferred Honors bonus is added after the transaction posts (total 2.625%).</li>
      </ul>
    </div>`);
}
function showView(view){
  document.querySelectorAll(".view").forEach(v=>v.classList.toggle("active",v.id===view));
  document.querySelectorAll(".nav-btn").forEach(b=>b.classList.toggle("active",b.dataset.view===view));
  window.scrollTo({top:0,behavior:"smooth"});
}
document.querySelectorAll(".nav-btn").forEach(b=>b.onclick=()=>showView(b.dataset.view));

function renderSearchRewardBottom(name){
  const parts = name === "Capital One / Chase" ? ["Capital One Savor","Chase Freedom Flex"] :
    name === "Chase Freedom Flex & Unlimited" ? ["Chase Freedom Flex","Chase Freedom Unlimited"] :
    name === "Discover" ? ["Discover More"] : [name];
  if(parts.length===1){
    return `<div class="search-result-bottom ${cardChipClass(parts[0])}">${renderCardChips(parts[0])}</div>`;
  }
  return `<div class="search-result-bottom search-result-bottom-split">${parts.map(card=>`<div class="search-result-issuer-half ${cardChipClass(card)}"><span class="card-chip ${cardChipClass(card)}">${card}</span></div>`).join("")}</div>`;
}

globalSearch.addEventListener("input",()=>{
  const q=globalSearch.value.trim().toLowerCase();
  if(!q){
    searchResults.classList.add("hidden");
    rewardGrid.classList.remove("hidden");
    return;
  }
  rewardGrid.classList.add("hidden");
  const matches=rewards.filter(r=>{
    if(q.startsWith("walm") || q.includes("walmart")) return r.card==="Walmart OnePay Cash Rewards";
    if(q.startsWith("amaz") || q.includes("amazon") || q.startsWith("whole") || q.includes("whole foods")) return r.card==="Amazon Prime Store Card";
    return [r.category,r.card,r.details,...r.search].join(" ").toLowerCase().includes(q);
  });
  searchResults.innerHTML=matches.length?matches.map(r=>{
    const parts=r.card==="Capital One / Chase"?["Capital One Savor","Chase Freedom Flex"]:
      r.card==="Chase Freedom Flex & Unlimited"?["Chase Freedom Flex","Chase Freedom Unlimited"]:
      r.card==="Discover"?["Discover More"]:[r.card];
    const multi=parts.length>1;
    const categoryClass="category-"+r.category.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"");
    const lower=multi?parts.map(card=>`<div class="reward-issuer-section ${cardChipClass(card)}"><div class="card-name">${card}</div></div>`).join(""):`<div class="reward-gradient-area ${cardChipClass(parts[0])}"><div class="reward-card-method">${renderCardChips(r.card)}</div>${r.until!=="Ongoing"?`<div class="reward-expiry-row">Expires ${r.until}</div>`:""}</div>`;
    return `<article class="search-result reward-card ${categoryClass} ${multi?"reward-card-multi":cardChipClass(parts[0])}"><div class="reward-top"><div class="reward-category-label"><div class="reward-icon">${r.icon}</div><div class="reward-category-block"><div class="reward-title">${r.category}</div></div></div><div class="reward-header-rate">${r.cash}</div></div>${lower}${multi&&r.until!=="Ongoing"?`<div class="reward-expiry-row">Expires ${r.until}</div>`:""}</article>`;
  }).join(""):`<div class="search-result search-result-empty">No matching category found.</div>`;
  searchResults.classList.remove("hidden");
});

renderRewards();renderBillFilters();renderBills();renderBenefits();renderOffers();renderCards();

