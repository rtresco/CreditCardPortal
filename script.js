const rewards = [
 {category:"Warehouse & Superstores",icon:"🛒",card:"Bank of America",cash:"2.625%",details:"Walmart, Target, Sam's Club, etc.",until:"Ongoing",search:["walmart","target","sam's","sams","warehouse","superstore"]},
 {category:"Grocery Stores",icon:"🧺",card:"Chase Freedom Flex",cash:"5%",details:"Kroger, HEB, etc. (excludes warehouse and superstores)",until:"Dec 31, 2026",search:["grocery","kroger","heb"]},
 {category:"Flights",icon:"✈️",card:"Bank of America",cash:"2.625%",details:"Airlines, air travel purchases",until:"Ongoing",search:["flight","airline","air travel"]},
 {category:"Travel / Hotels",icon:"🏨",card:"Capital One / Chase",cash:"5%",details:"Capital One and Chase Travel portal purchases",until:"Ongoing",search:["hotel","travel","capital one travel","chase travel"]},
 {category:"Gas",icon:"⛽",card:"Bank of America",cash:"2.625%",details:"Gas stations",until:"Ongoing",search:["gas","gas station","fuel"]},
 {category:"Public Transportation",icon:"🚌",card:"Bank of America",cash:"2.625%",details:"Bus, rail, ferry, etc.",until:"Ongoing",search:["bus","rail","ferry","transportation"]},
 {category:"Restaurants / Dining",icon:"🍴",card:"Chase Freedom Flex",cash:"7%",details:"Dine-in, takeout, delivery",until:"Dec 31, 2026",search:["restaurant","dining","takeout","delivery"]},
 {category:"Entertainment",icon:"🎟️",card:"Discover",cash:"5%",details:"Movies, concerts, events, etc.",until:"Dec 31, 2026",search:["movie","concert","entertainment","event"]},
 {category:"Streaming Services",icon:"▶️",card:"Capital One Savor",cash:"3%",details:"Netflix, YouTube TV, Disney+/Hulu Bundle, Paramount+, Spotify, HBO Max, etc.",until:"Ongoing",search:["streaming","netflix","youtube tv","disney","hulu","paramount","spotify","hbo"]},
 {category:"Utilities",icon:"💡",card:"Discover",cash:"5%",details:"Electric, water, internet, phone, etc.",until:"Dec 31, 2026",search:["utility","electric","electricity","water","internet","phone"]},
 {category:"Drugstores",icon:"💊",card:"Chase Freedom Flex & Unlimited",cash:"3%",details:"CVS, Walgreens, etc.",until:"Ongoing",search:["drugstore","cvs","walgreens","pharmacy"]},
 {category:"Everything Else",icon:"•••",card:"Bank of America",cash:"2.625%",details:"Any purchase not listed above",until:"Ongoing",search:["everything else","other"]}
];

const bills = [
 ["⚡ Electricity","Utilities","Discover More","5% Cash Back","Expires December 31, 2026, then Bank of America Visa","https://www.discountpowertx.com/"],
 ["💧 Water","Utilities","Discover More","5% Cash Back","Expires December 31, 2026, then Bank of America Checking to avoid credit card processing fees","https://www.houstonwaterbills.houstontx.gov/"],
 ["🔥 Gas","Utilities","Bank of America Checking","","Avoids credit card processing fees.","https://myaccount.centerpointenergy.com/"],
 ["🌐 Internet","Utilities","Bank of America Checking","","$10 discount with bank account","https://www.att.com/"],
 ["📱 Cell Phones","Utilities","Bank of America Checking","","$15 discount ($5 per line) with bank account","https://www.verizon.com/"],
 ["🚗 Auto Loans","Home/Auto","Bank of America Checking","","Bank account payment only available","https://www.wellsfargo.com/"],
 ["🏠🚗 Home and Auto Insurance","Home/Auto","Bank of America Visa","","","https://www.statefarm.com/"],
 ["🏠 Houston Property Taxes","Home/Auto","Bank of America Visa","","Check to see if credit txn fee is > than cash back. If so, use Bank of America Checking","https://www.hctax.net/"],
 ["🏠 Houston Property Taxes Protest","Home/Auto","Bank of America Visa","","","https://www.hctax.net/"],
 ["🚗 Auto Registration","Home/Auto","Bank of America Visa","","","https://txt.texas.gov/"],
 ["📦 🚚 Public Storage","Home/Auto","Bank of America Visa","","","https://www.publicstorage.com/"],
 ["🛏️ Mattress Loan","Home/Auto","Bank of America Checking","","","https://id.synchrony.com/idp/en/standard/login"],
 ["🚗 Toll Roads","Home/Auto","Bank of America Visa","","","https://www.hctra.org/"],
 ["📚 TAMU College Tuition","School","Bank of America Visa","","","https://howdy.tamu.edu/"],
 ["🏠 FSU Apartment Rent","School","Bank of America Checking","","","https://west10.residentportal.com/auth"],
 ["🏠 TAMU Apartment Rent","School","Bank of America Checking","","","https://woodlandsapts.residentportal.com/auth"],
 ["📺 Netflix","Streaming","Capital One Savor","3% cash back","","https://www.netflix.com/"],
 ["📺 Paramount+","Streaming","Bank of America Checking","","Up to $8 off/month - No expiration.","https://www.paramountplus.com/"],
 ["📺 YouTube TV","Streaming","Chase Freedom Unlimited","$20 Cash Back","Expires 10/29/2026","https://tv.youtube.com/"],
 ["📺 Disney+/Hulu Bundle","Streaming","Capital One Savor","3% cash back","Promo price expires 11/24/2026, then $12.99/month","https://www.disneyplus.com/"],
 ["📺 HBO Max","Streaming","Capital One Savor","3% cash back","Promo price expires 12/1/2026, then $10.99/month","https://play.hbomax.com/"],
 ["🎵 Spotify","Streaming","Capital One Savor","3% cash back","","https://www.spotify.com/"],
 ["🤖 ChatGPT","Software","Bank of America Visa","","","https://chatgpt.com/"],
 ["📍 Life360","Software","Bank of America Visa","","","https://play.google.com/"],
 ["☁️ Apple iCloud","Software","Bank of America Visa","","","https://www.icloud.com/"],
 ["🏠 Google Home Premium Standard (Nest Aware)","Software","Bank of America Visa","","","https://play.google.com/"],
 ["❤️ Google Health (Fitbit)","Software","Bank of America Visa","","","https://play.google.com/"],
 ["☁️ Google One (Cloud Storage/AI Plus)","Software","Bank of America Visa","","","https://play.google.com/"],
 ["📻 VRadio","Software","Bank of America Visa","","","https://play.google.com/"]
];

const benefits = {
 "Chase Freedom Flex":[
  ["📞 Cell Phone Protection","Pay the wireless bill with Flex. You do NOT have to buy the phone with the Flex. Coverage is tied to eligible phones listed on the bill. Up to $800/claim; $50 deductible; 2 claims / 12 months; $1,000 max / 12 months."],
  ["🚗 Rental Car Insurance","Auto rental collision/theft coverage. Chase coverage is secondary in the U.S.; generally decline the rental company's collision waiver and pay the full rental with the card. The benefit generally covers the rental vehicle, not liability for injuries or damage to others."],
  ["✈️ Trip Cancellation Protection","Trip Cancellation & Interruption coverage. Chase Flex/Unlimited: up to $1,500 per covered traveler / $6,000 per trip."],
  ["💎 Purchase Protection","Eligible theft or damage protection. Chase: 120 days, up to $500 per item."],
  ["🔧 Manufacturer Warranty","Extended warranty protection. Chase adds 1 year to eligible manufacturer's warranties of 3 years or less."],
  ["🚧 Travel Assistance","Travel & Emergency Assistance."],
  ["🚫 Unauthorized Charge Protection","Zero-liability / fraud protection, subject to issuer terms."]
 ],
 "Chase Freedom Unlimited":[
  ["🚗 Rental Car Insurance","Auto rental collision/theft coverage. Chase coverage is secondary in the U.S.; generally decline the rental company's collision waiver and pay the full rental with the card. The benefit generally covers the rental vehicle, not liability for injuries or damage to others."],
  ["✈️ Trip Cancellation Protection","Trip Cancellation & Interruption coverage. Chase Flex/Unlimited: up to $1,500 per covered traveler / $6,000 per trip."],
  ["💎 Purchase Protection","120-day purchase protection, up to $500 per item."],
  ["🔧 Manufacturer Warranty","Adds 1 year to eligible manufacturer's warranties of 3 years or less."],
  ["🚧 Travel Assistance","Travel & Emergency Assistance."],
  ["🚫 Unauthorized Charge Protection","Zero-liability / fraud protection, subject to issuer terms."]
 ],
 "Capital One Savor":[
  ["🚗 Rental Car Insurance","Auto rental collision/theft coverage. Savor coverage is secondary in the U.S.; generally decline the rental company's collision waiver and pay the full rental with the card. The benefit generally covers the rental vehicle, not liability for injuries or damage to others."],
  ["✈️ Trip Cancellation Protection","Trip Cancellation & Interruption coverage."],
  ["👜 Baggage Protection","Baggage-delay and lost-luggage reimbursement benefits."],
  ["🚨 Travel Accident Coverage","Travel/flight accident insurance."],
  ["💎 Purchase Protection","Purchase protection/security for eligible theft or damage."],
  ["🔧 Manufacturer Warranty","Extended warranty protection."],
  ["💲 Price Protection","Price Protection benefit for eligible purchases."],
  ["🧑‍💼 Concierge Assistance","Concierge Services for eligible assistance/arrangements."],
  ["👮 Identity-theft Protection","Personal Identity Theft and Comprehensive Identity Solutions."],
  ["🚧 Travel Assistance","Travel & Emergency Assistance."],
  ["🚫 Unauthorized Charge Protection","Zero-liability / fraud protection, subject to issuer terms."]
 ],
 "Discover More":[
  ["🚫 Unauthorized Charge Protection","Zero-liability / fraud protection, subject to issuer terms."]
 ],
 "Bank of America":[
  ["🚨 Travel Accident Coverage","Travel/flight accident insurance."],
  ["💎 Purchase Protection","Purchase protection/security for eligible theft or damage."],
  ["🔧 Manufacturer Warranty","Extended warranty protection."],
  ["🚫 Unauthorized Charge Protection","Zero-liability / fraud protection, subject to issuer terms."]
 ]
};

const cards = [
 ["boa","Bank of America","Unlimited Cash Rewards Visa","2.625% everywhere.  Use as the default card when there are not other offers available.","Default card for credit card purchases.","https://www.bankofamerica.com/"],
 ["capital","Capital One","Savor Mastercard","3% on entertainment, grocery, restaurants, and streaming services; 5% through Capital One Travel.","Entertainment • Grocery • Restaurants • Streaming • Travel Portal","https://www.capitalone.com/"],
 ["discover","Discover","Discover More","5% quarterly rotating categories.","Activate quarterly categories.","https://www.capitalone.com/"],
 ["","Chase","Freedom Flex Mastercard","5% quarterly rotating categories; 5% through Capital One Travel.","Travel Portal • Activate quarterly categories.","https://www.chase.com/"],
 ["","Chase","Freedom Unlimited Visa","3% on drugstores and restaurants.","Restaurants • Drugstores","https://www.chase.com/"]
];

function cardChipClass(name){
  if(name.includes("Discover")) return "chip-discover";
  if(name.includes("Capital One Savor")) return "chip-capital";
  if(name.includes("Chase Freedom Unlimited")) return "chip-unlimited";
  if(name.includes("Chase Freedom Flex")) return "chip-flex";
  if(name.includes("Bank of America") || name.includes("Bank of America Visa")) return "chip-boa";
  return "chip-neutral";
}
function renderCardChips(name){
  const parts = name === "Capital One / Chase" ? ["Capital One Savor","Chase Freedom Flex"] :
    name === "Chase Freedom Flex & Unlimited" ? ["Chase Freedom Flex","Chase Freedom Unlimited"] :
    name === "Discover" ? ["Discover More"] : [name];
  return `<div class="card-chips">${parts.map(x=>`<span class="card-chip ${cardChipClass(x)}">${x}</span>`).join("")}</div>`;
}
function renderRewards(){
  rewardGrid.innerHTML = rewards.map((r,i)=>{
    const parts = r.card === "Capital One / Chase" ? ["Capital One Savor","Chase Freedom Flex"] :
      r.card === "Chase Freedom Flex & Unlimited" ? ["Chase Freedom Flex","Chase Freedom Unlimited"] :
      r.card === "Discover" ? ["Discover More"] : [r.card];
    const multi = parts.length > 1;
    const issuerArea = parts.map(card => `
      <div class="reward-issuer-section ${cardChipClass(card)}">
        <div class="card-name">${card}</div>
      </div>`).join("");
    const lower = multi ? issuerArea : `
      <div class="reward-gradient-area ${cardChipClass(parts[0])}">
        <div class="reward-card-method">${renderCardChips(r.card)}</div>
        ${r.until!=="Ongoing"?`<div class="reward-expiry-row">Expires ${r.until}</div>`:""}
      </div>`;
    return `
      <article class="reward-card ${multi ? "reward-card-multi" : cardChipClass(parts[0])}" data-search="${[r.category,r.card,r.details,...r.search].join(" ").toLowerCase()}">
        <div class="reward-top">
          <div class="reward-icon">${r.icon}</div>
          <div class="reward-category-block"><div class="reward-title">${r.category}</div></div>
          <div class="reward-header-rate">${r.cash}</div>
        </div>
        ${lower}
        ${multi && r.until!=="Ongoing"?`<div class="reward-expiry-row">Expires ${r.until}</div>`:""}
      </article>`;
  }).join("");
  document.getElementById("rewards").insertAdjacentHTML("beforeend", `
    <div class="info-panel page-notes">
      <h2>📝 Notes</h2>
      <ul>
        <li>Activate Discover and Chase Freedom Flex 5% categories each quarter (required).</li>
        <li>Bank of America base rewards (1.5%) post first; the 75% Preferred Honors bonus is added after the transaction posts (total 2.625%).</li>
        <li>Chase Freedom Flex/Unlimited: 3% on dining and 3% on drugstores.</li>
        <li>Capital One Savor: 3% on grocery stores, dining, entertainment and popular streaming services.</li>
      </ul>
    </div>`);
}
function paymentCardClass(method){
  if(method === "Discover" || method === "Discover More") return "payment-discover";
  if(method === "Capital One Savor") return "payment-capital";
  if(method === "Chase Freedom Unlimited") return "payment-unlimited";
  if(method === "Chase Freedom Flex") return "payment-flex";
  if(method === "Bank of America Visa" || method === "Bank of America Checking") return "payment-boa";
  return "payment-boa";
}
function renderBills(filter="All"){
  const rows=bills.filter(b=>filter==="All"||b[1]===filter);
  billsTable.innerHTML=`
    <div class="payment-grid">
      ${rows.map(b=>{
        const methodClass=paymentCardClass(b[2]);
        const reward = b[2] === "Bank of America Visa" ? "2.625% cash back" : b[3];
        const noteIsExpiry = /expires/i.test(b[4]||"");
        return `
        <article class="payment-card ${methodClass}">
          <div class="payment-card-top">
            <div class="payment-payee">${b[5] ? `<a href="${b[5]}" target="_blank" rel="noopener" title="Open ${b[0].replace(/<[^>]*>/g,"")} website">${b[0]} <span class="external-link">↗</span></a>` : b[0]}</div>
            <span class="type-pill type-${b[1].toLowerCase().replace(/[^a-z]+/g,"-")}">${b[1]}</span>
          </div>
          <div class="payment-gradient-area">
            <div class="payment-card-reward-row">
              <strong class="payment-method-chip ${methodClass}">${b[2]}</strong>
              ${reward ? `<div class="payment-reward"><span>⭐</span>${reward}</div>` : ""}
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
  "Discover More":"https://www.mycardbenefits.com/",
  "Bank of America":"https://bankofamericalifestylebenefits.com/client/dashboard.jsf"
};
benefitTabs.innerHTML=Object.keys(benefits).map((c,i)=>`<button class="tab-btn ${c===card?"active":""} ${c===card?cardChipClass(c):""}" data-card="${c}"><span>${c.replace("Chase Freedom ","Chase ")}</span>${benefitGuides[c]?`<a class="benefit-guide-link" href="${benefitGuides[c]}" target="_blank" rel="noopener" title="Open ${c} benefits guide" onclick="event.stopPropagation()">↗</a>`:""}</button>`).join("");
  benefitContent.innerHTML=`
    <div class="benefit-list">${benefits[card].map(b=>`<article class="benefit-card"><span class="tag ${cardChipClass(card)}">${card}</span><h3>${b[0]}</h3><div class="benefit-body">${b[1]}</div></article>`).join("")}</div>
    <div class="info-panel">
      <h2>📝 Benefit Notes</h2>
      <ul>
        <li><strong>Cell Phone Protection:</strong> Use the Flex to pay the monthly wireless bill. You do NOT have to buy the phone with the Flex. Coverage is tied to eligible phones listed on the bill.</li>
        <li><strong>Rental Car Insurance:</strong> For Chase Flex/Unlimited and Capital One Savor, coverage is secondary in the U.S. The card benefit generally covers the rental vehicle, not liability for injuries or damage to others.</li>
        <li><strong>Purchase Protection:</strong> Flex and Unlimited are easy to remember: 120-day purchase protection, up to $500 per item, plus 1 year of extended warranty on eligible warranties.</li>
      </ul>
    </div>
    <div class="info-panel travel-note">
      <h2>✈️ Travel Benefits</h2>
      <p>Savor has the broadest set of travel-related benefits, including baggage, lost luggage, travel accident, trip cancellation/interruption, and rental-car coverage.</p>
    </div>
`;
  benefitTabs.querySelectorAll(".tab-btn").forEach(btn=>btn.onclick=()=>renderBenefits(btn.dataset.card));
}
function renderOffers(){
  offersGrid.innerHTML=`
  <article class="offer-card"><div class="offer-head offer-discover">Discover 5% Categories</div><div class="offer-body"><h3>Q4 2026 (Oct 1–Dec 31)</h3><ul><li>Restaurants</li><li>Entertainment</li><li>Utilities</li></ul><h3>Q1 2027 (Jan 1–Mar 31)</h3><ul><li>TBD</li></ul><strong>Activation required each quarter.</strong></div></article>
  <article class="offer-card"><div class="offer-head offer-flex">Chase Freedom Flex +4% Categories</div><div class="offer-body"><h3>Q4 2026 (Oct 1–Dec 31)</h3><ul><li>Grocery stores — 5%</li><li>Restaurants, takeout, delivery — 7%</li><li>American Red Cross donations — 5%</li></ul><h3>Q1 2027 (Jan 1–Mar 31)</h3><ul><li>Grocery stores (excluding Walmart and Target) — 5%</li><li>Streaming services — 5%</li></ul><strong>Activation required each quarter.</strong></div></article>
  <article class="offer-card"><div class="offer-head">Offers Currently Used</div><div class="offer-body"><div class="used-offer-item"><h3>Paramount+</h3><p><strong class="offer-card-title chip-boa">Bank of America Checking</strong></p><p>Up to $8 off/month • No expiration.</p></div><div class="used-offer-item"><h3>YouTube TV</h3><p><strong class="offer-card-title chip-unlimited">Chase Freedom Unlimited</strong></p><p>$20 Cash Back • Expires 10/29/2026.</p></div></div></article>`;
}
function renderCards(){
  cardsGrid.innerHTML=cards.map(c=>`<article class="my-card ${c[0]} ${c[2].includes("Unlimited")?"card-unlimited":c[2].includes("Flex")?"card-flex":""}"><div class="portfolio-card-brand">${c[1]}</div><h2>${c[2]} <a class="card-site-link" href="${c[5]}" target="_blank" rel="noopener" title="Open ${c[2]} website">↗</a></h2><p style="margin-top:10px">${c[3]}</p><ul>${c[4].split(" • ").map(x=>`<li>${x}</li>`).join("")}</ul></article>`).join("");
}
function showView(view){
  document.querySelectorAll(".view").forEach(v=>v.classList.toggle("active",v.id===view));
  document.querySelectorAll(".nav-btn").forEach(b=>b.classList.toggle("active",b.dataset.view===view));
  window.scrollTo({top:0,behavior:"smooth"});
}
document.querySelectorAll(".nav-btn").forEach(b=>b.onclick=()=>showView(b.dataset.view));

globalSearch.addEventListener("input",()=>{
  const q=globalSearch.value.trim().toLowerCase();
  if(!q){searchResults.classList.add("hidden");return}
  const matches=rewards.filter(r=>[r.category,r.card,r.details,...r.search].join(" ").toLowerCase().includes(q));
  searchResults.innerHTML=matches.length?matches.map(r=>`<div class="search-result"><div><strong>${r.icon} ${r.category}</strong><br><span>${r.details}</span></div><div><strong>${r.card}</strong><br><span class="cash">${r.cash}</span></div></div>`).join(""):`<div class="search-result">No matching category found.</div>`;
  searchResults.classList.remove("hidden");
});

renderRewards();renderBillFilters();renderBills();renderBenefits();renderOffers();renderCards();
