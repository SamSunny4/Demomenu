const fs = require('fs');
const path = 'src/data/menu.ts';
let code = fs.readFileSync(path, 'utf8');

const replacements = {
  'ms-vennila': 'Madagascar vanilla beans blended with fresh cream.',
  'ms-chocolate': 'Artisanal dark cocoa blended with heavy cream.',
  'ms-pista': 'Roasted pistachios blended with cardamom and whole milk.',
  'ms-black-current': 'Wild blackcurrants blended with fresh cream.',
  'ms-cashew': 'Slow-roasted cashews with milk and honey.',
  'ms-kashmir': 'Saffron infused shake with almonds and rose water.',
  'ms-mango': 'Alphonso mango pulp blended with chilled milk.',
  'ms-pineapple': 'Fresh pineapple blended with vanilla ice cream.',
  'ms-coconut': 'Tender coconut meat blended with fresh coconut water.',
  
  'ss-badam': 'Chilled milk infused with crushed almonds and saffron.',
  'ss-cara-milk': 'Vanilla ice cream layered with caramel and mixed nuts.',
  
  'fa-royal': 'Rose syrup layered with vermicelli, basil seeds, and ice cream.',
  'fa-butter': 'Butterscotch syrup layered with vermicelli and pecan ice cream.',
  
  'fl-fresh': 'Freshly squeezed limes served sweet or salted.',
  'fl-mint': 'Fresh lime juice muddled with mint leaves.',
  'fl-grapes': 'Fresh lime juice blended with crushed grape extract.',
  
  'fs-pudding': 'Seasonal cut fruits folded into silky vanilla custard.',
  
  'mt-chops': 'Pan-seared mutton chops marinated in heritage spices.',
  'mt-fry': 'Boneless mutton slow-roasted with curry leaves and pepper.',
  
  'fs-fry': 'Shallow-fried fish coated in semolina and spices.',
  'fs-65': 'Deep-fried fish florets tempered with curry leaves.',
  'fs-chilli': 'Crispy fish fillets tossed in a soy-garlic glaze.',
  'fs-prawns': 'Tiger prawns simmered in a tangy tomato-onion gravy.',
  
  'dn-parotta': 'Flaky flatbread pan-roasted with ghee.',
  'dn-veechu': 'Ultra-thin, elegantly folded soft parotta.',
  'dn-kothu': 'Shredded parotta stir-fried with eggs and spicy salna.',
  'dn-kalima': 'Crispy parotta stuffed with spiced minced chicken.',
  'dn-oil': 'Shallow-fried parotta with a soft core.',
  'dn-panchu': 'Soft parottas made with milk and butter.',
  'dn-banana': 'Parotta and chicken gravy steamed in a banana leaf.',
  'dn-chapathi': 'Soft-roasted whole wheat flatbreads.',
  'dn-dosa': 'Crisp rice crepe stuffed with spicy chicken mince.',
  'dn-appam': 'Lace-edged rice pancakes with coconut-milk chicken stew.',
  
  'ch-veg': 'Minced vegetable dumplings in dark soy and garlic sauce.',
  'ch-gobi': 'Crisp cauliflower florets in a tangy Manchurian glaze.',
  'ch-mushroom': 'Button mushrooms wok-tossed in a sweet and spicy sauce.',
  'ch-crispy': 'Flash-fried julienned vegetables tossed in sweet-chilli sauce.',
  'ch-chilli-chk': 'Chicken cubes in a glossy sauce with bell peppers.',
  'ch-dragon': 'Crispy chicken strips tossed with cashews and red chillies.',
  'ch-shawarma': 'Spit-roasted chicken and garlic emulsion wrapped in pita.',
  
  'fr-veg': 'Wok-tossed long-grain rice with crisp vegetables.',
  'fr-chicken': 'Fluffy rice wok-charred with chicken and egg ribbons.',
  'fr-panner': 'Golden-fried cottage cheese cubes with seasoned vegetable rice.',
  'fr-schezwan': 'Spicy rice elevated by house-made Schezwan sauce.',
  'fr-taiwanese': 'Subtly flavored rice with Taiwanese aromatics and bok choy.',
  
  'nd-chicken': 'Wok-tossed noodles with chicken shreds and vegetables.',
  'nd-egg': 'Silky noodles with scrambled eggs and white pepper.',
  'nd-schezwan': 'Spicy noodles laced with garlic Schezwan sauce and chicken.',
  'nd-taiwanese': 'Aromatic stir-fry of noodles and crisp Asian greens.'
};

for (const [id, newDesc] of Object.entries(replacements)) {
  const regex = new RegExp(`(id:\\s*"${id}",[\\s\\S]*?description:\\s*")[^"]+(")`);
  code = code.replace(regex, `$1${newDesc}$2`);
}

fs.writeFileSync(path, code);
console.log('Done');
