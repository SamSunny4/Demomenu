const fs = require('fs');
const path = 'src/data/menu.ts';
let code = fs.readFileSync(path, 'utf8');

// Ensure MenuItem interface has longDescription
if (!code.includes('longDescription?: string;')) {
  code = code.replace(
    'description: string;',
    'description: string;\n  longDescription?: string;'
  );
}

const longDescriptions = {
  'ms-vennila': 'Our Vanilla Bean Shake is a timeless classic crafted from pure, hand-scraped Madagascar vanilla beans. We blend it with farm-fresh full cream milk and a scoop of premium vanilla ice cream to create a rich, velvety texture. Finished with a delicate swirl of fresh cream on top.',
  'ms-chocolate': 'Indulge in our Dark Chocolate Shake, a decadent treat for true chocolate lovers. Made using artisanal dark cocoa powder and rich heavy cream, this shake balances deep cocoa flavors with the perfect amount of sweetness. It is garnished with fresh chocolate shavings for an extra layer of texture.',
  'ms-pista': 'The Roasted Pistachio Shake offers a delightful nutty profile with an aromatic twist. We use slowly roasted pistachios to bring out their earthy flavors, blending them smoothly with whole milk and sweetened condensed milk. A subtle hint of green cardamom elevates the experience.',
  'ms-black-current': 'Experience a burst of fruity tartness with our Blackcurrant Shake. We use wild blackcurrants combined with fresh cream and whole milk, creating a refreshing and visually stunning purple shake. A swirl of house-made berry compote adds a sweet, tangy finish.',
  'ms-cashew': 'Our Butter Cashew Shake is the epitome of creaminess. Slow-roasted premium cashew nuts are blended into a thick paste, then mixed with rich milk and heavy cream. A delicate touch of golden honey enhances the natural sweetness of the cashews.',
  'ms-kashmir': 'A luxurious, aromatic beverage inspired by the valleys of Kashmir. This shake is steeped with pure saffron threads, crushed almonds, and a few drops of rose water. We add a generous handful of chopped dried fruits, making every sip a regal experience.',
  'ms-mango': 'Celebrate the king of fruits with our Alphonso Mango Shake. We use only fresh, sweet Alphonso mango pulp, perfectly blended with chilled milk and premium mango ice cream. Small, juicy chunks of fresh mango are folded in for a delightful bite.',
  'ms-pineapple': 'A tropical escape in a glass. Our Fresh Pineapple Shake combines zesty, freshly cut pineapple with creamy vanilla ice cream and whole milk. A dash of tropical syrup adds vibrancy, making it the perfect refreshing drink for a warm day.',
  'ms-coconut': 'Hydrating, light, and incredibly refreshing. We blend soft, young tender coconut meat directly with fresh, natural coconut water and a splash of light cream. It is naturally sweet and serves as the perfect palate cleanser.',
  
  'ss-badam': 'A traditional favorite served chilled. This rich milk beverage is infused with generously crushed California almonds and premium saffron threads, giving it a beautiful golden hue. Slowly simmered with cardamom and raw sugar for authentic flavor.',
  'ss-cara-milk': 'A wonderful contrast of smooth and crunchy. We take rich vanilla bean ice cream and layer it heavily with buttery caramel syrup. A generous topping of roasted, crushed mixed nuts provides a satisfying crunch in every sip.',
  
  'fa-royal': 'The Royal Rose Falooda is a majestic, multi-layered dessert in a glass. It features a base of fragrant rose syrup, soft vermicelli noodles, and plump sweet basil seeds. We top it with rich ice cream and colourful mixed jelly cubes for a truly royal treat.',
  'fa-butter': 'A modern twist on a classic dessert. This falooda features a rich, golden butterscotch syrup base layered with vermicelli and basil seeds. It is crowned with a large scoop of butter pecan ice cream and roasted nuts for a buttery, crunchy finish.',
  
  'fl-fresh': 'The ultimate thirst quencher. We squeeze fresh, plump limes into chilled, purified water, serving it either perfectly sweet or delightfully salted according to your preference. Garnished with a sprig of fresh mint.',
  'fl-mint': 'A cooling, herbaceous beverage. Fresh lime juice is combined with freshly muddled mint leaves to release their essential oils, then shaken vigorously with crushed ice and sugar syrup for a vibrant, minty kick.',
  'fl-grapes': 'A unique and refreshing cooler. We take fresh lime juice and blend it perfectly with sweet, crushed grape extract. Served over a generous amount of ice, it balances the tartness of lime with the fruity sweetness of grapes.',
  
  'fs-pudding': 'A comforting and fresh dessert. We gently fold an assortment of freshly cut seasonal fruits into a silky, homemade vanilla custard. Served chilled with a delicate drizzle of organic honey to enhance the natural sweetness of the fruits.',
  
  'mt-chops': 'A delicacy for meat lovers. Our frenched mutton chops are carefully marinated overnight in a blend of heritage spices, yogurt, and ginger-garlic paste. They are then pan-seared on a hot skillet to achieve a beautiful, caramelized crust while remaining juicy inside.',
  'mt-fry': 'A robust and spicy preparation from the South. Tender, boneless pieces of mutton are slow-roasted in a heavy cast-iron pan with aromatic curry leaves, shallots, and freshly cracked black pepper. Cooked in pure coconut oil for an authentic flavour profile.',
  
  'fs-fry': 'A classic coastal favourite. Slices of fresh, daily-catch fish are marinated in a vibrant paste of turmeric, red chilli, and lemon juice. They are then coated in a light semolina crust and shallow-fried until perfectly golden and crispy on the outside.',
  'fs-65': 'A spicy, tangy, and deeply flavourful appetizer. Bite-sized, boneless fish florets are marinated in our special spicy 65 blend, then deep-fried until crisp. The dish is finally tempered with fresh curry leaves, mustard seeds, and slit green chillies.',
  'fs-chilli': 'An Indo-Chinese classic with a seafood twist. Crispy battered fish fillets are wok-tossed with crunchy bell peppers and onions in a thick, glossy soy-garlic glaze. The perfect balance of savoury, spicy, and slightly sweet notes.',
  'fs-prawns': 'A rich and aromatic seafood curry. Plump tiger prawns are gently simmered in a robust, tangy gravy made from pureed tomatoes and caramelized onions. Infused with a special blend of coastal spices and finished with fresh coriander.',
  
  'dn-parotta': 'The quintessential South Indian street bread. Our parottas are expertly kneaded, rested, and hand-beaten to create multiple delicate, flaky layers. They are pan-roasted on a hot tawa with generous drizzles of ghee until golden and crisp.',
  'dn-veechu': 'A testament to culinary skill. This parotta is spun in the air until it becomes a translucent, ultra-thin sheet, then elegantly folded into a square. It cooks into a delightfully soft, melt-in-your-mouth bread that pairs beautifully with any curry.',
  'dn-kothu': 'A vibrant, rhythmic street-food classic. We take our flaky parottas, shred them, and stir-fry them on a searing hot griddle with scrambled eggs, caramelized onions, and a generous pour of spicy, flavourful salna. Garnished with fresh coriander.',
  'dn-kalima': 'A heavy, indulgent stuffed bread. We take crisp parotta dough and envelop it around a rich, intensely spiced minced chicken filling. Pan-fried with ghee until the exterior is perfectly crispy, locking all the savoury juices inside.',
  'dn-oil': 'For those who love indulgence. This parotta is shallow-fried in a generous pool of oil on a flat tawa, resulting in an incredibly crispy, golden-brown exterior that contrasts beautifully with its warm, pillowy soft core.',
  'dn-panchu': 'As soft as cotton. These incredibly tender parottas are made from a specially milled flour dough enriched with milk and butter. They are light, airy, and perfect for soaking up rich gravies and stews.',
  'dn-banana': 'An incredibly aromatic dish. We take our shredded parotta, mix it generously with a thick, spicy chicken sukka gravy, and wrap it tightly in a fresh banana leaf. It is then steamed, allowing the earthy aroma of the leaf to infuse deeply into the food.',
  'dn-chapathi': 'A healthy and comforting staple. Our chapathis are made from premium whole wheat flour, kneaded to perfection for softness. They are soft-roasted on a tawa and brushed lightly with pure ghee before serving.',
  'dn-dosa': 'A crispy, savoury delight. Our perfectly fermented rice and lentil batter is spread thin and cooked until crisp. It is then generously stuffed with a robust, spicy minced chicken masala, making it a heavy, protein-packed meal.',
  'dn-appam': 'A delicate, lace-edged rice pancake with a soft, spongy centre. Fermented naturally with coconut water, it is served alongside a fragrant, mild chicken stew simmered slowly in freshly extracted coconut milk and subtle spices.',
  
  'ch-veg': 'A beloved Indo-Chinese appetizer. We finely mince seasonal vegetables, form them into small dumplings, and fry them until crisp. They are then wok-tossed in a rich, umami-heavy dark soy sauce heavily flavoured with minced garlic and ginger.',
  'ch-gobi': 'A vegetarian favourite that packs a punch. Fresh cauliflower florets are coated in a light batter and fried until exceptionally crisp. They are then quickly tossed in a spicy, tangy, and slightly sweet Manchurian glaze with spring onions.',
  'ch-mushroom': 'Earthy button mushrooms prepared the Indo-Chinese way. The mushrooms are flash-fried to retain their bite, then wok-tossed with diced capsicum and onions in a vibrant, balanced sauce that is simultaneously sweet, spicy, and savoury.',
  'ch-crispy': 'A delightful textural experience. We julienne an array of fresh vegetables, lightly batter them, and flash-fry them to absolute crispness. They are tossed in a sticky sweet-chilli sauce and garnished with toasted sesame seeds.',
  'ch-chilli-chk': 'The undisputed king of Indo-Chinese cuisine. Succulent cubes of boneless chicken are fried and then tossed in a fiery, glossy sauce along with crunchy squares of green bell peppers and onions. Heavy on garlic and soy notes.',
  'ch-dragon': 'A spicy, nutty, and vibrant dish. Crispy strips of chicken breast are tossed in a fiery red sauce alongside crunchy roasted cashew nuts and dry red chillies. The heat is perfectly balanced, making it highly addictive.',
  'ch-shawarma': 'A Mediterranean classic with our special touch. Tender, spit-roasted chicken is carved fresh and laid onto soft pita bread. We add a generous spread of our signature garlic emulsion (toum), pickled veggies, and fresh lettuce, then roll it tight.',
  
  'fr-veg': 'A light, comforting bowl of goodness. We use premium long-grain basmati rice, wok-tossed at high heat with a colourful array of crisp, finely chopped vegetables. Seasoned delicately with light soy sauce and white pepper to let the vegetables shine.',
  'fr-chicken': 'Our signature fried rice. Fluffy, separate grains of rice are wok-charred alongside tender morsels of chicken and delicate ribbons of scrambled egg. The high heat of the wok gives it a distinct, smoky "wok hei" flavour.',
  'fr-panner': 'A rich vegetarian alternative. We toss premium seasoned vegetable fried rice with golden-fried cubes of soft cottage cheese (paneer). A touch of aromatic spices and a generous handful of spring onions finish the dish.',
  'fr-schezwan': 'For those who love heat. This bold, vibrant red fried rice is elevated by our house-made Schezwan sauce, made from fiery chillies, garlic, and unique Schezwan peppercorns. It is spicy, garlicky, and deeply flavourful.',
  'fr-taiwanese': 'A subtly flavoured, highly aromatic rice dish. This preparation is distinguished by its use of unique Taiwanese aromatics, delicate sesame oil, and crisp Asian greens like bok choy. It offers a clean, sophisticated flavour profile.',
  
  'nd-chicken': 'A street-food staple elevated. Long, springy egg noodles are wok-tossed at blistering heat with succulent shreds of chicken, julienned cabbage, and carrots. A dash of dark soy and white pepper brings the classic Hakka flavour together.',
  'nd-egg': 'Simple, silky, and deeply satisfying. We take premium noodles and intertwine them with perfectly scrambled fresh eggs. Seasoned minimally with light soy, white pepper, and spring onions to highlight the natural richness of the egg.',
  'nd-schezwan': 'A fiery noodle preparation. Our springy noodles are laced with a heavy dose of our signature garlic-heavy Schezwan sauce. Tossed with tender chicken strips and bell peppers, it is a spicy, bold, and addictive dish.',
  'nd-taiwanese': 'An elegant and aromatic stir-fry. We toss high-quality noodles with an assortment of crisp Asian greens and earthy mushrooms. The dish is brought together with delicate notes of toasted sesame oil and mild, high-quality soy sauce.'
};

for (const [id, desc] of Object.entries(longDescriptions)) {
  const regex = new RegExp(`(id:\\s*"${id}",[\\s\\S]*?description:\\s*"[^"]+",)`);
  // Add longDescription right after description
  code = code.replace(regex, `$1\n        longDescription: "${desc}",`);
}

fs.writeFileSync(path, code);
console.log('Done adding long descriptions');
