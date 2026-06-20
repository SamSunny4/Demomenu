export interface MenuItem {
  id: string;
  name: string;
  price: number;
  category: string;
  description: string;
  longDescription?: string;
  ingredients: string[];
  imageUrl: string;
  isVeg: boolean;
  isPopular?: boolean;
  isChefSpecial?: boolean;
  tag?: string;
}

export interface MenuCategory {
  title: string;
  icon: string;
  items: MenuItem[];
}

export const menuData: MenuCategory[] = [
  {
    title: "Milk Shake & Ice Cream",
    icon: "",
    items: [
      {
        id: "ms-vennila",
        name: "Vanilla Bean Shake",
        price: 75,
        category: "Milk Shake & Ice Cream",
        description: "Madagascar vanilla beans blended with fresh cream.",
        longDescription: "Our Vanilla Bean Shake is a timeless classic crafted from pure, hand-scraped Madagascar vanilla beans. We blend it with farm-fresh full cream milk and a scoop of premium vanilla ice cream to create a rich, velvety texture. Finished with a delicate swirl of fresh cream on top.",
        ingredients: ["Madagascar Vanilla Beans", "Full Cream Milk", "Fresh Cream", "Cane Sugar"],
        imageUrl: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=500&auto=format&fit=crop&q=60",
        isVeg: true
      },
      {
        id: "ms-chocolate",
        name: "Dark Chocolate Shake",
        price: 80,
        category: "Milk Shake & Ice Cream",
        description: "Artisanal dark cocoa blended with heavy cream.",
        longDescription: "Indulge in our Dark Chocolate Shake, a decadent treat for true chocolate lovers. Made using artisanal dark cocoa powder and rich heavy cream, this shake balances deep cocoa flavors with the perfect amount of sweetness. It is garnished with fresh chocolate shavings for an extra layer of texture.",
        ingredients: ["Artisanal Dark Cocoa", "Full Cream Milk", "Heavy Cream", "Chocolate Shavings"],
        imageUrl: "https://images.unsplash.com/photo-1511018556340-d16986a1c194?w=500&auto=format&fit=crop&q=60",
        isVeg: true,
        isPopular: true
      },
      {
        id: "ms-pista",
        name: "Roasted Pistachio Shake",
        price: 80,
        category: "Milk Shake & Ice Cream",
        description: "Roasted pistachios blended with cardamom and whole milk.",
        longDescription: "The Roasted Pistachio Shake offers a delightful nutty profile with an aromatic twist. We use slowly roasted pistachios to bring out their earthy flavors, blending them smoothly with whole milk and sweetened condensed milk. A subtle hint of green cardamom elevates the experience.",
        ingredients: ["Roasted Pistachios", "Whole Milk", "Sweetened Condensed Milk", "Cardamom Hint"],
        imageUrl: "https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?w=500&auto=format&fit=crop&q=60",
        isVeg: true
      },
      {
        id: "ms-black-current",
        name: "Blackcurrant Shake",
        price: 80,
        category: "Milk Shake & Ice Cream",
        description: "Wild blackcurrants blended with fresh cream.",
        longDescription: "Experience a burst of fruity tartness with our Blackcurrant Shake. We use wild blackcurrants combined with fresh cream and whole milk, creating a refreshing and visually stunning purple shake. A swirl of house-made berry compote adds a sweet, tangy finish.",
        ingredients: ["Wild Blackcurrants", "Fresh Cream", "Whole Milk", "Berry Compote"],
        imageUrl: "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?w=500&auto=format&fit=crop&q=60",
        isVeg: true
      },
      {
        id: "ms-cashew",
        name: "Butter Cashew Shake",
        price: 90,
        category: "Milk Shake & Ice Cream",
        description: "Slow-roasted cashews with milk and honey.",
        longDescription: "Our Butter Cashew Shake is the epitome of creaminess. Slow-roasted premium cashew nuts are blended into a thick paste, then mixed with rich milk and heavy cream. A delicate touch of golden honey enhances the natural sweetness of the cashews.",
        ingredients: ["Premium Cashew Nuts", "Rich Milk", "Heavy Cream", "Hint of Honey"],
        imageUrl: "https://images.unsplash.com/photo-1506084868230-bb9d95c24759?w=500&auto=format&fit=crop&q=60",
        isVeg: true
      },
      {
        id: "ms-kashmir",
        name: "Kashmiri Saffron Shake",
        price: 85,
        category: "Milk Shake & Ice Cream",
        description: "Saffron infused shake with almonds and rose water.",
        longDescription: "A luxurious, aromatic beverage inspired by the valleys of Kashmir. This shake is steeped with pure saffron threads, crushed almonds, and a few drops of rose water. We add a generous handful of chopped dried fruits, making every sip a regal experience.",
        ingredients: ["Saffron", "Almonds", "Rose Water", "Rich Cream", "Dried Fruits"],
        imageUrl: "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?w=500&auto=format&fit=crop&q=60",
        isVeg: true,
        isChefSpecial: true
      },
      {
        id: "ms-mango",
        name: "Alphonso Mango Shake",
        price: 80,
        category: "Milk Shake & Ice Cream",
        description: "Alphonso mango pulp blended with chilled milk.",
        longDescription: "Celebrate the king of fruits with our Alphonso Mango Shake. We use only fresh, sweet Alphonso mango pulp, perfectly blended with chilled milk and premium mango ice cream. Small, juicy chunks of fresh mango are folded in for a delightful bite.",
        ingredients: ["Alphonso Mango Pulp", "Chilled Milk", "Ice Cream", "Mango Chunks"],
        imageUrl: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=500&auto=format&fit=crop&q=60",
        isVeg: true,
        isPopular: true,
        tag: "Seasonal"
      },
      {
        id: "ms-pineapple",
        name: "Fresh Pineapple Shake",
        price: 90,
        category: "Milk Shake & Ice Cream",
        description: "Fresh pineapple blended with vanilla ice cream.",
        longDescription: "A tropical escape in a glass. Our Fresh Pineapple Shake combines zesty, freshly cut pineapple with creamy vanilla ice cream and whole milk. A dash of tropical syrup adds vibrancy, making it the perfect refreshing drink for a warm day.",
        ingredients: ["Fresh Pineapple", "Vanilla Ice Cream", "Milk", "Tropical Syrup"],
        imageUrl: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=500&auto=format&fit=crop&q=60",
        isVeg: true
      },
      {
        id: "ms-coconut",
        name: "Tender Coconut Shake",
        price: 80,
        category: "Milk Shake & Ice Cream",
        description: "Tender coconut meat blended with fresh coconut water.",
        longDescription: "Hydrating, light, and incredibly refreshing. We blend soft, young tender coconut meat directly with fresh, natural coconut water and a splash of light cream. It is naturally sweet and serves as the perfect palate cleanser.",
        ingredients: ["Tender Coconut Meat", "Coconut Water", "Light Cream", "Organic Sugar"],
        imageUrl: "https://images.unsplash.com/photo-1546964124-0cce460f38ef?w=500&auto=format&fit=crop&q=60",
        isVeg: true
      }
    ]
  },
  {
    title: "Special Shakes",
    icon: "",
    items: [
      {
        id: "ss-badam",
        name: "Saffron Badam Milk",
        price: 100,
        category: "Special Shakes",
        description: "Chilled milk infused with crushed almonds and saffron.",
        longDescription: "A traditional favorite served chilled. This rich milk beverage is infused with generously crushed California almonds and premium saffron threads, giving it a beautiful golden hue. Slowly simmered with cardamom and raw sugar for authentic flavor.",
        ingredients: ["California Almonds", "Saffron Threads", "Whole Milk", "Cardamom", "Raw Sugar"],
        imageUrl: "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?w=500&auto=format&fit=crop&q=60",
        isVeg: true,
        isPopular: true
      },
      {
        id: "ss-cara-milk",
        name: "Caramel Nut Shake",
        price: 80,
        category: "Special Shakes",
        description: "Vanilla ice cream layered with caramel and mixed nuts.",
        longDescription: "A wonderful contrast of smooth and crunchy. We take rich vanilla bean ice cream and layer it heavily with buttery caramel syrup. A generous topping of roasted, crushed mixed nuts provides a satisfying crunch in every sip.",
        ingredients: ["Caramel Syrup", "Mixed Nuts", "Vanilla Bean Ice Cream", "Whole Milk"],
        imageUrl: "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=500&auto=format&fit=crop&q=60",
        isVeg: true,
        tag: "New"
      }
    ]
  },
  {
    title: "Falooda",
    icon: "",
    items: [
      {
        id: "fa-royal",
        name: "Royal Rose Falooda",
        price: 150,
        category: "Falooda",
        description: "Rose syrup layered with vermicelli, basil seeds, and ice cream.",
        longDescription: "The Royal Rose Falooda is a majestic, multi-layered dessert in a glass. It features a base of fragrant rose syrup, soft vermicelli noodles, and plump sweet basil seeds. We top it with rich ice cream and colourful mixed jelly cubes for a truly royal treat.",
        ingredients: ["Rose Syrup", "Vermicelli", "Sweet Basil Seeds", "Ice Cream", "Mixed Jelly"],
        imageUrl: "https://images.unsplash.com/photo-1582716401301-b2407dc7563d?w=500&auto=format&fit=crop&q=60",
        isVeg: true,
        isPopular: true
      },
      {
        id: "fa-butter",
        name: "Butterscotch Falooda",
        price: 170,
        category: "Falooda",
        description: "Butterscotch syrup layered with vermicelli and pecan ice cream.",
        longDescription: "A modern twist on a classic dessert. This falooda features a rich, golden butterscotch syrup base layered with vermicelli and basil seeds. It is crowned with a large scoop of butter pecan ice cream and roasted nuts for a buttery, crunchy finish.",
        ingredients: ["Butterscotch Syrup", "Vermicelli", "Basil Seeds", "Butter Pecan Ice Cream", "Nuts"],
        imageUrl: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=500&auto=format&fit=crop&q=60",
        isVeg: true,
        isChefSpecial: true
      }
    ]
  },
  {
    title: "Fresh Lime",
    icon: "",
    items: [
      {
        id: "fl-fresh",
        name: "Classic Fresh Lime",
        price: 20,
        category: "Fresh Lime",
        description: "Freshly squeezed limes served sweet or salted.",
        longDescription: "The ultimate thirst quencher. We squeeze fresh, plump limes into chilled, purified water, serving it either perfectly sweet or delightfully salted according to your preference. Garnished with a sprig of fresh mint.",
        ingredients: ["Fresh Lime Juice", "Chilled Water", "Mint Garnish", "Simple Syrup/Salt"],
        imageUrl: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=500&auto=format&fit=crop&q=60",
        isVeg: true
      },
      {
        id: "fl-mint",
        name: "Muddled Mint Lime",
        price: 35,
        category: "Fresh Lime",
        description: "Fresh lime juice muddled with mint leaves.",
        longDescription: "A cooling, herbaceous beverage. Fresh lime juice is combined with freshly muddled mint leaves to release their essential oils, then shaken vigorously with crushed ice and sugar syrup for a vibrant, minty kick.",
        ingredients: ["Fresh Lime", "Muddled Mint Leaves", "Crushed Ice", "Sugar Syrup"],
        imageUrl: "https://images.unsplash.com/photo-1527661591475-527312dd65f5?w=500&auto=format&fit=crop&q=60",
        isVeg: true
      },
      {
        id: "fl-grapes",
        name: "Grape Lime Cooler",
        price: 30,
        category: "Fresh Lime",
        description: "Fresh lime juice blended with crushed grape extract.",
        longDescription: "A unique and refreshing cooler. We take fresh lime juice and blend it perfectly with sweet, crushed grape extract. Served over a generous amount of ice, it balances the tartness of lime with the fruity sweetness of grapes.",
        ingredients: ["Fresh Lime Juice", "Grape Extract", "Chilled Water", "Ice Cubes"],
        imageUrl: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=500&auto=format&fit=crop&q=60",
        isVeg: true
      }
    ]
  },
  {
    title: "Fruits Salad",
    icon: "",
    items: [
      {
        id: "fs-pudding",
        name: "Fresh Fruit Custard",
        price: 100,
        category: "Fruits Salad",
        description: "Seasonal cut fruits folded into silky vanilla custard.",
        longDescription: "A comforting and fresh dessert. We gently fold an assortment of freshly cut seasonal fruits into a silky, homemade vanilla custard. Served chilled with a delicate drizzle of organic honey to enhance the natural sweetness of the fruits.",
        ingredients: ["Seasonal Mixed Fruits", "Vanilla Custard", "Fresh Cream", "Honey Drizzle"],
        imageUrl: "https://images.unsplash.com/photo-1506084868230-bb9d95c24759?w=500&auto=format&fit=crop&q=60",
        isVeg: true
      }
    ]
  },
  {
    title: "Mutton",
    icon: "",
    items: [
      {
        id: "mt-chops",
        name: "Pan-Seared Mutton Chops",
        price: 190,
        category: "Mutton",
        description: "Pan-seared mutton chops marinated in heritage spices.",
        longDescription: "A delicacy for meat lovers. Our frenched mutton chops are carefully marinated overnight in a blend of heritage spices, yogurt, and ginger-garlic paste. They are then pan-seared on a hot skillet to achieve a beautiful, caramelized crust while remaining juicy inside.",
        ingredients: ["Premium Mutton Chops", "Ginger Garlic Paste", "Garam Masala", "Yogurt", "Black Pepper"],
        imageUrl: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=500&auto=format&fit=crop&q=60",
        isVeg: false,
        isChefSpecial: true
      },
      {
        id: "mt-fry",
        name: "Pepper Mutton Fry",
        price: 120,
        category: "Mutton",
        description: "Boneless mutton slow-roasted with curry leaves and pepper.",
        longDescription: "A robust and spicy preparation from the South. Tender, boneless pieces of mutton are slow-roasted in a heavy cast-iron pan with aromatic curry leaves, shallots, and freshly cracked black pepper. Cooked in pure coconut oil for an authentic flavour profile.",
        ingredients: ["Boneless Mutton", "Roasted Spices", "Curry Leaves", "Shallots", "Coconut Oil"],
        imageUrl: "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?w=500&auto=format&fit=crop&q=60",
        isVeg: false
      }
    ]
  },
  {
    title: "Fish & Seafood",
    icon: "",
    items: [
      {
        id: "fs-fry",
        name: "Semolina Fish Fry",
        price: 100,
        category: "Fish & Seafood",
        description: "Shallow-fried fish coated in semolina and spices.",
        longDescription: "A classic coastal favourite. Slices of fresh, daily-catch fish are marinated in a vibrant paste of turmeric, red chilli, and lemon juice. They are then coated in a light semolina crust and shallow-fried until perfectly golden and crispy on the outside.",
        ingredients: ["Fresh Fish Slices", "Turmeric", "Red Chilli Paste", "Lemon Juice", "Semolina Crust"],
        imageUrl: "https://images.unsplash.com/photo-1580476262798-bddd9f4b7369?w=500&auto=format&fit=crop&q=60",
        isVeg: false
      },
      {
        id: "fs-65",
        name: "Spicy Fish 65",
        price: 100,
        category: "Fish & Seafood",
        description: "Deep-fried fish florets tempered with curry leaves.",
        longDescription: "A spicy, tangy, and deeply flavourful appetizer. Bite-sized, boneless fish florets are marinated in our special spicy 65 blend, then deep-fried until crisp. The dish is finally tempered with fresh curry leaves, mustard seeds, and slit green chillies.",
        ingredients: ["Boneless Fish Cubes", "Spicy 65 Marinade", "Curry Leaves", "Green Chillies", "Rice Flour"],
        imageUrl: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=500&auto=format&fit=crop&q=60",
        isVeg: false
      },
      {
        id: "fs-chilli",
        name: "Chilli Garlic Fish",
        price: 130,
        category: "Fish & Seafood",
        description: "Crispy fish fillets tossed in a soy-garlic glaze.",
        longDescription: "An Indo-Chinese classic with a seafood twist. Crispy battered fish fillets are wok-tossed with crunchy bell peppers and onions in a thick, glossy soy-garlic glaze. The perfect balance of savoury, spicy, and slightly sweet notes.",
        ingredients: ["Fish Fillets", "Bell Peppers", "Soy Sauce", "Garlic", "Spring Onions"],
        imageUrl: "https://images.unsplash.com/photo-1580476262798-bddd9f4b7369?w=500&auto=format&fit=crop&q=60",
        isVeg: false
      },
      {
        id: "fs-prawns",
        name: "Coastal Prawn Masala",
        price: 180,
        category: "Fish & Seafood",
        description: "Tiger prawns simmered in a tangy tomato-onion gravy.",
        longDescription: "A rich and aromatic seafood curry. Plump tiger prawns are gently simmered in a robust, tangy gravy made from pureed tomatoes and caramelized onions. Infused with a special blend of coastal spices and finished with fresh coriander.",
        ingredients: ["Tiger Prawns", "Tomato Puree", "Caramelized Onions", "Coastal Spices", "Coriander"],
        imageUrl: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=500&auto=format&fit=crop&q=60",
        isVeg: false,
        isChefSpecial: true
      }
    ]
  },
  {
    title: "Dinner",
    icon: "",
    items: [
      {
        id: "dn-parotta",
        name: "Flaky Parotta",
        price: 15,
        category: "Dinner",
        description: "Flaky flatbread pan-roasted with ghee.",
        longDescription: "The quintessential South Indian street bread. Our parottas are expertly kneaded, rested, and hand-beaten to create multiple delicate, flaky layers. They are pan-roasted on a hot tawa with generous drizzles of ghee until golden and crisp.",
        ingredients: ["Refined Wheat Flour", "Ghee", "Salt", "Water"],
        imageUrl: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=500&auto=format&fit=crop&q=60",
        isVeg: true
      },
      {
        id: "dn-veechu",
        name: "Veechu Parotta",
        price: 25,
        category: "Dinner",
        description: "Ultra-thin, elegantly folded soft parotta.",
        longDescription: "A testament to culinary skill. This parotta is spun in the air until it becomes a translucent, ultra-thin sheet, then elegantly folded into a square. It cooks into a delightfully soft, melt-in-your-mouth bread that pairs beautifully with any curry.",
        ingredients: ["Refined Flour", "Oil", "Salt", "Egg Wash (Optional)"],
        imageUrl: "https://images.unsplash.com/photo-1628294895950-9805252327bc?w=500&auto=format&fit=crop&q=60",
        isVeg: true
      },
      {
        id: "dn-kothu",
        name: "Egg Kothu Parotta",
        price: 70,
        category: "Dinner",
        description: "Shredded parotta stir-fried with eggs and spicy salna.",
        longDescription: "A vibrant, rhythmic street-food classic. We take our flaky parottas, shred them, and stir-fry them on a searing hot griddle with scrambled eggs, caramelized onions, and a generous pour of spicy, flavourful salna. Garnished with fresh coriander.",
        ingredients: ["Shredded Parotta", "Eggs", "Onions", "Spicy Salna", "Curry Leaves"],
        imageUrl: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=500&auto=format&fit=crop&q=60",
        isVeg: false,
        isPopular: true
      },
      {
        id: "dn-kalima",
        name: "Chicken Stuffed Parotta",
        price: 170,
        category: "Dinner",
        description: "Crispy parotta stuffed with spiced minced chicken.",
        longDescription: "A heavy, indulgent stuffed bread. We take crisp parotta dough and envelop it around a rich, intensely spiced minced chicken filling. Pan-fried with ghee until the exterior is perfectly crispy, locking all the savoury juices inside.",
        ingredients: ["Parotta Dough", "Minced Chicken Spiced Filling", "Onions", "Coriander", "Ghee"],
        imageUrl: "https://images.unsplash.com/photo-1628294895950-9805252327bc?w=500&auto=format&fit=crop&q=60",
        isVeg: false,
        isChefSpecial: true
      },
      {
        id: "dn-oil",
        name: "Fried Oil Parotta",
        price: 25,
        category: "Dinner",
        description: "Shallow-fried parotta with a soft core.",
        longDescription: "For those who love indulgence. This parotta is shallow-fried in a generous pool of oil on a flat tawa, resulting in an incredibly crispy, golden-brown exterior that contrasts beautifully with its warm, pillowy soft core.",
        ingredients: ["Flour", "Generous Oil", "Salt", "Water"],
        imageUrl: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=500&auto=format&fit=crop&q=60",
        isVeg: true
      },
      {
        id: "dn-panchu",
        name: "Soft Panchu Parotta",
        price: 25,
        category: "Dinner",
        description: "Soft parottas made with milk and butter.",
        longDescription: "As soft as cotton. These incredibly tender parottas are made from a specially milled flour dough enriched with milk and butter. They are light, airy, and perfect for soaking up rich gravies and stews.",
        ingredients: ["Special Milled Flour", "Milk", "Butter", "Salt"],
        imageUrl: "https://images.unsplash.com/photo-1628294895950-9805252327bc?w=500&auto=format&fit=crop&q=60",
        isVeg: true
      },
      {
        id: "dn-banana",
        name: "Banana Leaf Chicken Parotta",
        price: 170,
        category: "Dinner",
        description: "Parotta and chicken gravy steamed in a banana leaf.",
        longDescription: "An incredibly aromatic dish. We take our shredded parotta, mix it generously with a thick, spicy chicken sukka gravy, and wrap it tightly in a fresh banana leaf. It is then steamed, allowing the earthy aroma of the leaf to infuse deeply into the food.",
        ingredients: ["Parotta", "Chicken Sukka Gravy", "Banana Leaf Wrapper", "Aromatic Spices"],
        imageUrl: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=500&auto=format&fit=crop&q=60",
        isVeg: false,
        isChefSpecial: true
      },
      {
        id: "dn-chapathi",
        name: "Whole Wheat Chapathi",
        price: 40,
        category: "Dinner",
        description: "Soft-roasted whole wheat flatbreads.",
        longDescription: "A healthy and comforting staple. Our chapathis are made from premium whole wheat flour, kneaded to perfection for softness. They are soft-roasted on a tawa and brushed lightly with pure ghee before serving.",
        ingredients: ["Whole Wheat Flour", "Water", "Pinch of Salt", "Ghee Brushing"],
        imageUrl: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=500&auto=format&fit=crop&q=60",
        isVeg: true
      },
      {
        id: "dn-dosa",
        name: "Chicken Masala Dosa",
        price: 130,
        category: "Dinner",
        description: "Crisp rice crepe stuffed with spicy chicken mince.",
        longDescription: "A crispy, savoury delight. Our perfectly fermented rice and lentil batter is spread thin and cooked until crisp. It is then generously stuffed with a robust, spicy minced chicken masala, making it a heavy, protein-packed meal.",
        ingredients: ["Fermented Rice Batter", "Spiced Chicken Mince", "Onions", "Ghee"],
        imageUrl: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=500&auto=format&fit=crop&q=60",
        isVeg: false
      },
      {
        id: "dn-appam",
        name: "Appam with Chicken Stew",
        price: 135,
        category: "Dinner",
        description: "Lace-edged rice pancakes with coconut-milk chicken stew.",
        longDescription: "A delicate, lace-edged rice pancake with a soft, spongy centre. Fermented naturally with coconut water, it is served alongside a fragrant, mild chicken stew simmered slowly in freshly extracted coconut milk and subtle spices.",
        ingredients: ["Fermented Rice & Coconut Batter", "Chicken", "Coconut Milk", "Mild Spices"],
        imageUrl: "https://images.unsplash.com/photo-1628294895950-9805252327bc?w=500&auto=format&fit=crop&q=60",
        isVeg: false
      }
    ]
  },
  {
    title: "Chinese",
    icon: "",
    items: [
      {
        id: "ch-veg",
        name: "Veg Manchurian",
        price: 100,
        category: "Chinese",
        description: "Minced vegetable dumplings in dark soy and garlic sauce.",
        longDescription: "A beloved Indo-Chinese appetizer. We finely mince seasonal vegetables, form them into small dumplings, and fry them until crisp. They are then wok-tossed in a rich, umami-heavy dark soy sauce heavily flavoured with minced garlic and ginger.",
        ingredients: ["Mixed Vegetables", "Soy Sauce", "Garlic", "Ginger", "Cornstarch"],
        imageUrl: "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=500&auto=format&fit=crop&q=60",
        isVeg: true
      },
      {
        id: "ch-gobi",
        name: "Crispy Gobi Manchurian",
        price: 90,
        category: "Chinese",
        description: "Crisp cauliflower florets in a tangy Manchurian glaze.",
        longDescription: "A vegetarian favourite that packs a punch. Fresh cauliflower florets are coated in a light batter and fried until exceptionally crisp. They are then quickly tossed in a spicy, tangy, and slightly sweet Manchurian glaze with spring onions.",
        ingredients: ["Cauliflower", "Chilli Sauce", "Soy Sauce", "Spring Onions", "Garlic"],
        imageUrl: "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=500&auto=format&fit=crop&q=60",
        isVeg: true
      },
      {
        id: "ch-mushroom",
        name: "Mushroom Manchurian",
        price: 120,
        category: "Chinese",
        description: "Button mushrooms wok-tossed in a sweet and spicy sauce.",
        longDescription: "Earthy button mushrooms prepared the Indo-Chinese way. The mushrooms are flash-fried to retain their bite, then wok-tossed with diced capsicum and onions in a vibrant, balanced sauce that is simultaneously sweet, spicy, and savoury.",
        ingredients: ["Button Mushrooms", "Capsicum", "Onions", "Manchurian Sauce", "Coriander"],
        imageUrl: "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=500&auto=format&fit=crop&q=60",
        isVeg: true
      },
      {
        id: "ch-crispy",
        name: "Crispy Honey Veg",
        price: 120,
        category: "Chinese",
        description: "Flash-fried julienned vegetables tossed in sweet-chilli sauce.",
        longDescription: "A delightful textural experience. We julienne an array of fresh vegetables, lightly batter them, and flash-fry them to absolute crispness. They are tossed in a sticky sweet-chilli sauce and garnished with toasted sesame seeds.",
        ingredients: ["Carrots", "Beans", "Cabbage", "Sweet Chilli Sauce", "Sesame Seeds"],
        imageUrl: "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=500&auto=format&fit=crop&q=60",
        isVeg: true
      },
      {
        id: "ch-chilli-chk",
        name: "Classic Chilli Chicken",
        price: 120,
        category: "Chinese",
        description: "Chicken cubes in a glossy sauce with bell peppers.",
        longDescription: "The undisputed king of Indo-Chinese cuisine. Succulent cubes of boneless chicken are fried and then tossed in a fiery, glossy sauce along with crunchy squares of green bell peppers and onions. Heavy on garlic and soy notes.",
        ingredients: ["Boneless Chicken", "Green Chillies", "Bell Peppers", "Soy Sauce", "Garlic"],
        imageUrl: "https://images.unsplash.com/photo-1525755662778-989d0524087e?w=500&auto=format&fit=crop&q=60",
        isVeg: false,
        isPopular: true
      },
      {
        id: "ch-dragon",
        name: "Dragon Chicken",
        price: 150,
        category: "Chinese",
        description: "Crispy chicken strips tossed with cashews and red chillies.",
        longDescription: "A spicy, nutty, and vibrant dish. Crispy strips of chicken breast are tossed in a fiery red sauce alongside crunchy roasted cashew nuts and dry red chillies. The heat is perfectly balanced, making it highly addictive.",
        ingredients: ["Chicken Strips", "Dry Red Chillies", "Cashew Nuts", "Spicy Red Sauce", "Spring Onions"],
        imageUrl: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=500&auto=format&fit=crop&q=60",
        isVeg: false,
        isPopular: true,
        tag: "Spicy"
      },
      {
        id: "ch-shawarma",
        name: "Chicken Shawarma Roll",
        price: 80,
        category: "Chinese",
        description: "Spit-roasted chicken and garlic emulsion wrapped in pita.",
        longDescription: "A Mediterranean classic with our special touch. Tender, spit-roasted chicken is carved fresh and laid onto soft pita bread. We add a generous spread of our signature garlic emulsion (toum), pickled veggies, and fresh lettuce, then roll it tight.",
        ingredients: ["Roasted Chicken Cuts", "Pita Bread", "Garlic Toum", "Pickled Veggies", "Lettuce"],
        imageUrl: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=500&auto=format&fit=crop&q=60",
        isVeg: false,
        isPopular: true
      }
    ]
  },
  {
    title: "Fried Rice",
    icon: "",
    items: [
      {
        id: "fr-veg",
        name: "Vegetable Fried Rice",
        price: 80,
        category: "Fried Rice",
        description: "Wok-tossed long-grain rice with crisp vegetables.",
        longDescription: "A light, comforting bowl of goodness. We use premium long-grain basmati rice, wok-tossed at high heat with a colourful array of crisp, finely chopped vegetables. Seasoned delicately with light soy sauce and white pepper to let the vegetables shine.",
        ingredients: ["Basmati Rice", "Carrots", "Beans", "Spring Onions", "Light Soy Sauce"],
        imageUrl: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=500&auto=format&fit=crop&q=60",
        isVeg: true
      },
      {
        id: "fr-chicken",
        name: "Chicken Fried Rice",
        price: 120,
        category: "Fried Rice",
        description: "Fluffy rice wok-charred with chicken and egg ribbons.",
        longDescription: "Our signature fried rice. Fluffy, separate grains of rice are wok-charred alongside tender morsels of chicken and delicate ribbons of scrambled egg. The high heat of the wok gives it a distinct, smoky 'wok hei' flavour.",
        ingredients: ["Rice", "Shredded Chicken", "Eggs", "White Pepper", "Soy Sauce"],
        imageUrl: "https://images.unsplash.com/photo-1564834724105-918b73d1b9e0?w=500&auto=format&fit=crop&q=60",
        isVeg: false,
        isPopular: true
      },
      {
        id: "fr-panner",
        name: "Paneer Fried Rice",
        price: 110,
        category: "Fried Rice",
        description: "Golden-fried cottage cheese cubes with seasoned vegetable rice.",
        longDescription: "A rich vegetarian alternative. We toss premium seasoned vegetable fried rice with golden-fried cubes of soft cottage cheese (paneer). A touch of aromatic spices and a generous handful of spring onions finish the dish.",
        ingredients: ["Rice", "Paneer Cubes", "Mixed Vegetables", "Aromatic Spices", "Spring Onions"],
        imageUrl: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=500&auto=format&fit=crop&q=60",
        isVeg: true
      },
      {
        id: "fr-schezwan",
        name: "Schezwan Chicken Fried Rice",
        price: 140,
        category: "Fried Rice",
        description: "Spicy rice elevated by house-made Schezwan sauce.",
        longDescription: "For those who love heat. This bold, vibrant red fried rice is elevated by our house-made Schezwan sauce, made from fiery chillies, garlic, and unique Schezwan peppercorns. It is spicy, garlicky, and deeply flavourful.",
        ingredients: ["Rice", "Chicken", "Schezwan Peppercorns", "Garlic", "Spicy Red Sauce"],
        imageUrl: "https://images.unsplash.com/photo-1564834724105-918b73d1b9e0?w=500&auto=format&fit=crop&q=60",
        isVeg: false,
        tag: "Spicy"
      },
      {
        id: "fr-taiwanese",
        name: "Taiwanese Veg Fried Rice",
        price: 110,
        category: "Fried Rice",
        description: "Subtly flavored rice with Taiwanese aromatics and bok choy.",
        longDescription: "A subtly flavoured, highly aromatic rice dish. This preparation is distinguished by its use of unique Taiwanese aromatics, delicate sesame oil, and crisp Asian greens like bok choy. It offers a clean, sophisticated flavour profile.",
        ingredients: ["Premium Rice", "Bok Choy", "Mushroom", "Taiwanese Seasoning", "Sesame Oil"],
        imageUrl: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=500&auto=format&fit=crop&q=60",
        isVeg: true,
        tag: "New"
      }
    ]
  },
  {
    title: "Noodles",
    icon: "",
    items: [
      {
        id: "nd-chicken",
        name: "Chicken Hakka Noodles",
        price: 110,
        category: "Noodles",
        description: "Wok-tossed noodles with chicken shreds and vegetables.",
        longDescription: "A street-food staple elevated. Long, springy egg noodles are wok-tossed at blistering heat with succulent shreds of chicken, julienned cabbage, and carrots. A dash of dark soy and white pepper brings the classic Hakka flavour together.",
        ingredients: ["Egg Noodles", "Chicken Breast", "Cabbage", "Carrots", "Soy Sauce"],
        imageUrl: "https://images.unsplash.com/photo-1552611052-33e04de081de?w=500&auto=format&fit=crop&q=60",
        isVeg: false,
        isPopular: true
      },
      {
        id: "nd-egg",
        name: "Egg Noodles",
        price: 90,
        category: "Noodles",
        description: "Silky noodles with scrambled eggs and white pepper.",
        longDescription: "Simple, silky, and deeply satisfying. We take premium noodles and intertwine them with perfectly scrambled fresh eggs. Seasoned minimally with light soy, white pepper, and spring onions to highlight the natural richness of the egg.",
        ingredients: ["Noodles", "Fresh Eggs", "Spring Onions", "White Pepper", "Light Soy"],
        imageUrl: "https://images.unsplash.com/photo-1552611052-33e04de081de?w=500&auto=format&fit=crop&q=60",
        isVeg: true
      },
      {
        id: "nd-schezwan",
        name: "Schezwan Chicken Noodles",
        price: 140,
        category: "Noodles",
        description: "Spicy noodles laced with garlic Schezwan sauce and chicken.",
        longDescription: "A fiery noodle preparation. Our springy noodles are laced with a heavy dose of our signature garlic-heavy Schezwan sauce. Tossed with tender chicken strips and bell peppers, it is a spicy, bold, and addictive dish.",
        ingredients: ["Noodles", "Chicken", "Schezwan Sauce", "Garlic", "Bell Peppers"],
        imageUrl: "https://images.unsplash.com/photo-1552611052-33e04de081de?w=500&auto=format&fit=crop&q=60",
        isVeg: false,
        tag: "Spicy"
      },
      {
        id: "nd-taiwanese",
        name: "Taiwanese Veg Noodles",
        price: 100,
        category: "Noodles",
        description: "Aromatic stir-fry of noodles and crisp Asian greens.",
        longDescription: "An elegant and aromatic stir-fry. We toss high-quality noodles with an assortment of crisp Asian greens and earthy mushrooms. The dish is brought together with delicate notes of toasted sesame oil and mild, high-quality soy sauce.",
        ingredients: ["Noodles", "Asian Greens", "Mushrooms", "Sesame Oil", "Mild Soy"],
        imageUrl: "https://images.unsplash.com/photo-1552611052-33e04de081de?w=500&auto=format&fit=crop&q=60",
        isVeg: true,
        tag: "New"
      }
    ]
  }
];
