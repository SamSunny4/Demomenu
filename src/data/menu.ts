export interface MenuItem {
  id: string;
  name: string;
  price: number;
  category: string;
  description: string;
  ingredients: string[];
  imageUrl: string;
}

export interface MenuCategory {
  title: string;
  items: MenuItem[];
}

export const menuData: MenuCategory[] = [
  {
    title: "Milk Shake & Ice Cream",
    items: [
      {
        id: "ms-vennila",
        name: "Vennila",
        price: 75,
        category: "Milk Shake & Ice Cream",
        description: "A timeless classic that embodies elegant simplicity. Hand-spun with premium vanilla bean extract to create a velvety smooth texture that lingers gracefully on the palate.",
        ingredients: ["Madagascar Vanilla Beans", "Full Cream Milk", "Fresh Cream", "Cane Sugar"],
        imageUrl: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=500&auto=format&fit=crop&q=60"
      },
      {
        id: "ms-chocolate",
        name: "Chocolate",
        price: 80,
        category: "Milk Shake & Ice Cream",
        description: "An indulgent symphony of rich cocoa. Each sip offers a deeply satisfying plunge into a world of decadent, artisanal chocolate goodness.",
        ingredients: ["Artisanal Dark Cocoa", "Full Cream Milk", "Heavy Cream", "Chocolate Shavings"],
        imageUrl: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=500&auto=format&fit=crop&q=60"
      },
      {
        id: "ms-pista",
        name: "Pista",
        price: 80,
        category: "Milk Shake & Ice Cream",
        description: "A royal treat brimming with the earthy, nutty essence of roasted pistachios. Blended to a stunning pastel green perfection.",
        ingredients: ["Roasted Pistachios", "Whole Milk", "Sweetened Condensed Milk", "Cardamom Hint"],
        imageUrl: "https://images.unsplash.com/photo-1550461716-ba4eea50b25c?w=500&auto=format&fit=crop&q=60"
      },
      {
        id: "ms-black-current",
        name: "Black Current",
        price: 80,
        category: "Milk Shake & Ice Cream",
        description: "A vibrant, berry-infused masterpiece that perfectly balances sweet and tart notes, delivering a refreshing burst of dark fruit elegance.",
        ingredients: ["Wild Blackcurrants", "Fresh Cream", "Whole Milk", "Berry Compote"],
        imageUrl: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=500&auto=format&fit=crop&q=60"
      },
      {
        id: "ms-cashew",
        name: "Cashew",
        price: 90,
        category: "Milk Shake & Ice Cream",
        description: "Luxuriously rich and creamy, this golden shake features the subtle, buttery sweetness of premium, slow-roasted cashews.",
        ingredients: ["Premium Cashew Nuts", "Rich Milk", "Heavy Cream", "Hint of Honey"],
        imageUrl: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=500&auto=format&fit=crop&q=60"
      },
      {
        id: "ms-kashmir",
        name: "Kashmir",
        price: 85,
        category: "Milk Shake & Ice Cream",
        description: "An aromatic journey inspired by the valley of Kashmir. A majestic blend of exotic fruits and delicate spices.",
        ingredients: ["Saffron", "Almonds", "Rose Water", "Rich Cream", "Dried Fruits"],
        imageUrl: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=500&auto=format&fit=crop&q=60"
      },
      {
        id: "ms-mango",
        name: "Mango Shake",
        price: 80,
        category: "Milk Shake & Ice Cream",
        description: "The undisputed king of fruits presented in a luscious, golden shake. A tropical escape in every decadent sip.",
        ingredients: ["Alphonso Mango Pulp", "Chilled Milk", "Ice Cream", "Mango Chunks"],
        imageUrl: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=500&auto=format&fit=crop&q=60"
      },
      {
        id: "ms-pineapple",
        name: "Pineapple",
        price: 90,
        category: "Milk Shake & Ice Cream",
        description: "A zesty and revitalizing creation that captures the bright, sun-kissed essence of freshly harvested pineapples.",
        ingredients: ["Fresh Pineapple", "Vanilla Ice Cream", "Milk", "Tropical Syrup"],
        imageUrl: "https://images.unsplash.com/photo-1550461716-ba4eea50b25c?w=500&auto=format&fit=crop&q=60"
      },
      {
        id: "ms-coconut",
        name: "Tender Coconut",
        price: 80,
        category: "Milk Shake & Ice Cream",
        description: "A pristine, soul-soothing beverage celebrating the delicate, hydrating purity of young tender coconut meat.",
        ingredients: ["Tender Coconut Meat", "Coconut Water", "Light Cream", "Organic Sugar"],
        imageUrl: "https://images.unsplash.com/photo-1550461716-ba4eea50b25c?w=500&auto=format&fit=crop&q=60"
      }
    ]
  },
  {
    title: "Special Shakes",
    items: [
      {
        id: "ss-badam",
        name: "Badam Shake",
        price: 100,
        category: "Special Shakes",
        description: "A regal, nutrient-rich elixir steeped in tradition. Laden with crushed almonds and a whisper of saffron for an opulent finish.",
        ingredients: ["California Almonds", "Saffron Threads", "Whole Milk", "Cardamom", "Raw Sugar"],
        imageUrl: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=500&auto=format&fit=crop&q=60"
      },
      {
        id: "ss-cara-milk",
        name: "Cara Milk Nuts",
        price: 80,
        category: "Special Shakes",
        description: "A caramel lover's dream elevated by the satisfying crunch of assorted premium nuts. A sophisticated balance of sweet and savory.",
        ingredients: ["Caramel Syrup", "Mixed Nuts", "Vanilla Bean Ice Cream", "Whole Milk"],
        imageUrl: "https://images.unsplash.com/photo-1550461716-ba4eea50b25c?w=500&auto=format&fit=crop&q=60"
      }
    ]
  },
  {
    title: "Falooda",
    items: [
      {
        id: "fa-royal",
        name: "Royal Falooda",
        price: 150,
        category: "Falooda",
        description: "A majestic dessert beverage layered with textures and flavors. A visual and gastronomic spectacle fit for royalty.",
        ingredients: ["Rose Syrup", "Vermicelli", "Sweet Basil Seeds", "Ice Cream", "Mixed Jelly"],
        imageUrl: "https://images.unsplash.com/photo-1550461716-ba4eea50b25c?w=500&auto=format&fit=crop&q=60"
      },
      {
        id: "fa-butter",
        name: "Butter Falooda",
        price: 170,
        category: "Falooda",
        description: "An extraordinarily rich variation of the classic, crowned with butterscotch notes and an exceptionally creamy base.",
        ingredients: ["Butterscotch Syrup", "Vermicelli", "Basil Seeds", "Butter Pecan Ice Cream", "Nuts"],
        imageUrl: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=500&auto=format&fit=crop&q=60"
      }
    ]
  },
  {
    title: "Fresh Lime",
    items: [
      {
        id: "fl-fresh",
        name: "Fresh Lime",
        price: 20,
        category: "Fresh Lime",
        description: "A crisp, invigorating thirst-quencher made from freshly squeezed limes. The ultimate palate cleanser.",
        ingredients: ["Fresh Lime Juice", "Chilled Water", "Mint Garnish", "Simple Syrup/Salt"],
        imageUrl: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=500&auto=format&fit=crop&q=60"
      },
      {
        id: "fl-mint",
        name: "Mint Lime",
        price: 35,
        category: "Fresh Lime",
        description: "An uplifting fusion of zesty lime and crushed fresh mint leaves. A cooling breeze in a glass.",
        ingredients: ["Fresh Lime", "Muddled Mint Leaves", "Crushed Ice", "Sugar Syrup"],
        imageUrl: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=500&auto=format&fit=crop&q=60"
      },
      {
        id: "fl-grapes",
        name: "Grapes Lime",
        price: 30,
        category: "Fresh Lime",
        description: "A delightful twist on the classic cooler, featuring the sweet, nectarous essence of crushed grapes.",
        ingredients: ["Fresh Lime Juice", "Grape Extract", "Chilled Water", "Ice Cubes"],
        imageUrl: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=500&auto=format&fit=crop&q=60"
      }
    ]
  },
  {
    title: "Fruits Salad",
    items: [
      {
        id: "fs-pudding",
        name: "Fruits Salad Pudding",
        price: 100,
        category: "Fruits Salad",
        description: "A vibrant mosaic of seasonal fresh fruits gently folded into a silky, luscious pudding. A celebration of nature's candy.",
        ingredients: ["Seasonal Mixed Fruits", "Vanilla Custard", "Fresh Cream", "Honey Drizzle"],
        imageUrl: "https://images.unsplash.com/photo-1563805042-7684c8a9e9cb?w=500&auto=format&fit=crop&q=60"
      }
    ]
  },
  {
    title: "Mutton",
    items: [
      {
        id: "mt-chops",
        name: "Mutton Chops",
        price: 190,
        category: "Mutton",
        description: "Succulent, frenched mutton chops marinated in a secret blend of heritage spices, seared to a glorious caramelized finish.",
        ingredients: ["Premium Mutton Chops", "Ginger Garlic Paste", "Garam Masala", "Yogurt", "Black Pepper"],
        imageUrl: "https://images.unsplash.com/photo-1544025162-8111142154ea?w=500&auto=format&fit=crop&q=60"
      },
      {
        id: "mt-fry",
        name: "Mutton Fry",
        price: 120,
        category: "Mutton",
        description: "Tender morsels of mutton slow-roasted in a cast-iron pan until intensely flavorful, dark, and beautifully spiced.",
        ingredients: ["Boneless Mutton", "Roasted Spices", "Curry Leaves", "Shallots", "Coconut Oil"],
        imageUrl: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=500&auto=format&fit=crop&q=60"
      }
    ]
  },
  {
    title: "Fish & Seafood",
    items: [
      {
        id: "fs-fry",
        name: "Fish Fry",
        price: 100,
        category: "Fish & Seafood",
        description: "Catch of the day enveloped in a fiery, aromatic spice rub and shallow-fried to a crisp, golden perfection.",
        ingredients: ["Fresh Fish Slices", "Turmeric", "Red Chilli Paste", "Lemon Juice", "Semolina Crust"],
        imageUrl: "https://images.unsplash.com/photo-1580476262798-bddd9f4b7369?w=500&auto=format&fit=crop&q=60"
      },
      {
        id: "fs-65",
        name: "Fish 65",
        price: 100,
        category: "Fish & Seafood",
        description: "Spicy, deep-fried fish florets tempered with curry leaves and green chillies. An irresistible and iconic appetizer.",
        ingredients: ["Boneless Fish Cubes", "Spicy 65 Marinade", "Curry Leaves", "Green Chillies", "Rice Flour"],
        imageUrl: "https://images.unsplash.com/photo-1580476262798-bddd9f4b7369?w=500&auto=format&fit=crop&q=60"
      },
      {
        id: "fs-chilli",
        name: "Chilli Fish",
        price: 130,
        category: "Fish & Seafood",
        description: "An Indo-Chinese fusion delight. Crispy fish tossed in a glossy, savory, and perfectly spiced soy-garlic glaze.",
        ingredients: ["Fish Fillets", "Bell Peppers", "Soy Sauce", "Garlic", "Spring Onions"],
        imageUrl: "https://images.unsplash.com/photo-1580476262798-bddd9f4b7369?w=500&auto=format&fit=crop&q=60"
      },
      {
        id: "fs-prawns",
        name: "Prawns Masala",
        price: 180,
        category: "Fish & Seafood",
        description: "Plump, juicy prawns simmered gently in a robust, tangy, and deeply aromatic coastal tomato-onion gravy.",
        ingredients: ["Tiger Prawns", "Tomato Puree", "Caramelized Onions", "Coastal Spices", "Coriander"],
        imageUrl: "https://images.unsplash.com/photo-1559742811-822873691fc8?w=500&auto=format&fit=crop&q=60"
      }
    ]
  },
  {
    title: "Dinner",
    items: [
      {
        id: "dn-parotta",
        name: "Parotta",
        price: 15,
        category: "Dinner",
        description: "Flaky, multi-layered flatbread crafted with artistic precision. The perfect canvas for our rich, flavorful gravies.",
        ingredients: ["Refined Wheat Flour", "Ghee", "Salt", "Water", "Love"],
        imageUrl: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=500&auto=format&fit=crop&q=60"
      },
      {
        id: "dn-veechu",
        name: "Veechu Parotta",
        price: 25,
        category: "Dinner",
        description: "An ultra-thin, elegantly folded variation of the classic parotta, offering a delightfully soft and delicate texture.",
        ingredients: ["Refined Flour", "Oil", "Salt", "Egg Wash (Optional)"],
        imageUrl: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=500&auto=format&fit=crop&q=60"
      },
      {
        id: "dn-kothu",
        name: "Kothu Parotta",
        price: 70,
        category: "Dinner",
        description: "A rhythmic street-food symphony. Shredded parotta stir-fried vigorously with spices, eggs, and rich salna on a hot griddle.",
        ingredients: ["Shredded Parotta", "Eggs", "Onions", "Spicy Salna", "Curry Leaves"],
        imageUrl: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=500&auto=format&fit=crop&q=60"
      },
      {
        id: "dn-kalima",
        name: "Chicken Kalima Parotta",
        price: 170,
        category: "Dinner",
        description: "A spectacular stuffed creation. Parotta enveloping a lavish, spicy chicken filling, cooked to a crisp golden brown.",
        ingredients: ["Parotta Dough", "Minced Chicken Spiced Filling", "Onions", "Coriander", "Ghee"],
        imageUrl: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=500&auto=format&fit=crop&q=60"
      },
      {
        id: "dn-oil",
        name: "Oil Parotta",
        price: 25,
        category: "Dinner",
        description: "A deeply indulgent parotta, shallow-fried to achieve a satisfyingly crispy exterior and a pillowy soft core.",
        ingredients: ["Flour", "Generous Oil", "Salt", "Water"],
        imageUrl: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=500&auto=format&fit=crop&q=60"
      },
      {
        id: "dn-panchu",
        name: "Panchu Parotta",
        price: 25,
        category: "Dinner",
        description: "Incredibly soft, cloud-like parottas that live up to their name. They melt effortlessly in the mouth.",
        ingredients: ["Special Milled Flour", "Milk", "Butter", "Salt"],
        imageUrl: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=500&auto=format&fit=crop&q=60"
      },
      {
        id: "dn-banana",
        name: "Banana Leaf Chicken Parotta",
        price: 170,
        category: "Dinner",
        description: "A fragrant masterpiece. Parotta and rich chicken gravy wrapped in a banana leaf and steamed to infuse earthy aromas.",
        ingredients: ["Parotta", "Chicken Sukka Gravy", "Banana Leaf Wrapper", "Aromatic Spices"],
        imageUrl: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=500&auto=format&fit=crop&q=60"
      },
      {
        id: "dn-chapathi",
        name: "Chapathi",
        price: 40,
        category: "Dinner",
        description: "Wholesome, soft-roasted whole wheat flatbreads. A healthy and traditional accompaniment to our rich curries.",
        ingredients: ["Whole Wheat Flour", "Water", "Pinch of Salt", "Ghee Brushing"],
        imageUrl: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=500&auto=format&fit=crop&q=60"
      },
      {
        id: "dn-dosa",
        name: "Chicken Dosa",
        price: 130,
        category: "Dinner",
        description: "A spectacular fusion. A crisp, golden rice crepe generously stuffed with a robust, spicy chicken masala.",
        ingredients: ["Fermented Rice Batter", "Spiced Chicken Mince", "Onions", "Ghee"],
        imageUrl: "https://images.unsplash.com/photo-1589301760014-d929f39ce9b0?w=500&auto=format&fit=crop&q=60"
      },
      {
        id: "dn-appam",
        name: "Appam / Chicken Gravy",
        price: 135,
        category: "Dinner",
        description: "Lace-edged, bowl-shaped rice pancakes served alongside a fragrant, coconut-milk infused chicken stew.",
        ingredients: ["Fermented Rice & Coconut Batter", "Chicken", "Coconut Milk", "Mild Spices"],
        imageUrl: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=500&auto=format&fit=crop&q=60"
      }
    ]
  },
  {
    title: "Chinese",
    items: [
      {
        id: "ch-veg",
        name: "Veg Manchurian",
        price: 100,
        category: "Chinese",
        description: "Finely minced vegetable dumplings tossed in a deeply savory, umami-rich dark soy and garlic sauce.",
        ingredients: ["Mixed Vegetables", "Soy Sauce", "Garlic", "Ginger", "Cornstarch"],
        imageUrl: "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=500&auto=format&fit=crop&q=60"
      },
      {
        id: "ch-gobi",
        name: "Chilli Gobi Manchurian",
        price: 90,
        category: "Chinese",
        description: "Crisp cauliflower florets coated in a spicy, tangy glaze. An irresistible vegetarian classic with a satisfying crunch.",
        ingredients: ["Cauliflower", "Chilli Sauce", "Soy Sauce", "Spring Onions", "Garlic"],
        imageUrl: "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=500&auto=format&fit=crop&q=60"
      },
      {
        id: "ch-mushroom",
        name: "Mushroom Manchurian",
        price: 120,
        category: "Chinese",
        description: "Earthy, premium mushrooms wok-tossed in a vibrant, slightly sweet and sharply spicy Manchurian sauce.",
        ingredients: ["Button Mushrooms", "Capsicum", "Onions", "Manchurian Sauce", "Coriander"],
        imageUrl: "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=500&auto=format&fit=crop&q=60"
      },
      {
        id: "ch-crispy",
        name: "Crispy Veg",
        price: 120,
        category: "Chinese",
        description: "An addictive medley of julienned vegetables, flash-fried to absolute crispness and tossed in a sweet-chilli sauce.",
        ingredients: ["Carrots", "Beans", "Cabbage", "Sweet Chilli Sauce", "Sesame Seeds"],
        imageUrl: "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=500&auto=format&fit=crop&q=60"
      },
      {
        id: "ch-chilli-chk",
        name: "Chilli Chicken",
        price: 120,
        category: "Chinese",
        description: "The crown jewel of Indo-Chinese cuisine. Succulent chicken cubes in a fiery, glossy sauce with crunchy bell peppers.",
        ingredients: ["Boneless Chicken", "Green Chillies", "Bell Peppers", "Soy Sauce", "Garlic"],
        imageUrl: "https://images.unsplash.com/photo-1525755662778-989d0524087e?w=500&auto=format&fit=crop&q=60"
      },
      {
        id: "ch-dragon",
        name: "Dragon Chicken",
        price: 150,
        category: "Chinese",
        description: "A visually striking, intensely spicy dish featuring crispy chicken strips tossed with roasted cashews and fiery red chillies.",
        ingredients: ["Chicken Strips", "Dry Red Chillies", "Cashew Nuts", "Spicy Red Sauce", "Spring Onions"],
        imageUrl: "https://images.unsplash.com/photo-1525755662778-989d0524087e?w=500&auto=format&fit=crop&q=60"
      },
      {
        id: "ch-shawarma",
        name: "Shawarma Roll",
        price: 80,
        category: "Chinese",
        description: "A Middle-Eastern inspired wrap packed with spit-roasted, spiced chicken, fresh greens, and a luscious garlic emulsion.",
        ingredients: ["Roasted Chicken Cuts", "Pita Bread", "Garlic Toum", "Pickled Veggies", "Lettuce"],
        imageUrl: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=500&auto=format&fit=crop&q=60"
      }
    ]
  },
  {
    title: "Fried Rice",
    items: [
      {
        id: "fr-veg",
        name: "Veg Fried Rice",
        price: 80,
        category: "Fried Rice",
        description: "A harmonious wok-tossed creation of fragrant long-grain rice, crisp vegetables, and a delicate touch of soy.",
        ingredients: ["Basmati Rice", "Carrots", "Beans", "Spring Onions", "Light Soy Sauce"],
        imageUrl: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=500&auto=format&fit=crop&q=60"
      },
      {
        id: "fr-chicken",
        name: "Chicken Fried Rice",
        price: 120,
        category: "Fried Rice",
        description: "Fluffy rice intensely wok-charred with tender chicken morsels, egg ribbons, and a savory seasoning blend.",
        ingredients: ["Rice", "Shredded Chicken", "Eggs", "White Pepper", "Soy Sauce"],
        imageUrl: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=500&auto=format&fit=crop&q=60"
      },
      {
        id: "fr-panner",
        name: "Panner Fried Rice",
        price: 110,
        category: "Fried Rice",
        description: "A vegetarian delight featuring soft, golden-fried cottage cheese cubes tossed with premium seasoned rice.",
        ingredients: ["Rice", "Paneer Cubes", "Mixed Vegetables", "Aromatic Spices", "Spring Onions"],
        imageUrl: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=500&auto=format&fit=crop&q=60"
      },
      {
        id: "fr-schezwan",
        name: "Schezwan Chicken Fried Rice",
        price: 140,
        category: "Fried Rice",
        description: "A fiery, bold preparation elevated by our house-made Schezwan sauce, delivering a complex, spicy kick.",
        ingredients: ["Rice", "Chicken", "Schezwan Peppercorns", "Garlic", "Spicy Red Sauce"],
        imageUrl: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=500&auto=format&fit=crop&q=60"
      },
      {
        id: "fr-taiwanese",
        name: "Taiwanese Veg Fried Rice",
        price: 110,
        category: "Fried Rice",
        description: "An elegant, subtly flavored rice dish distinguished by its unique Taiwanese aromatics and crisp, fresh greens.",
        ingredients: ["Premium Rice", "Bok Choy", "Mushroom", "Taiwanese Seasoning", "Sesame Oil"],
        imageUrl: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=500&auto=format&fit=crop&q=60"
      }
    ]
  },
  {
    title: "Noodles",
    items: [
      {
        id: "nd-chicken",
        name: "Chicken Noodles",
        price: 110,
        category: "Noodles",
        description: "Slippery, perfectly cooked noodles wok-tossed with succulent chicken shreds and a julienne of fresh vegetables.",
        ingredients: ["Egg Noodles", "Chicken Breast", "Cabbage", "Carrots", "Soy Sauce"],
        imageUrl: "https://images.unsplash.com/photo-1552611052-33e04de081de?w=500&auto=format&fit=crop&q=60"
      },
      {
        id: "nd-egg",
        name: "Egg Noodles",
        price: 90,
        category: "Noodles",
        description: "A comforting classic. Silky noodles intertwined with perfectly scrambled eggs and a dash of white pepper.",
        ingredients: ["Noodles", "Fresh Eggs", "Spring Onions", "White Pepper", "Light Soy"],
        imageUrl: "https://images.unsplash.com/photo-1552611052-33e04de081de?w=500&auto=format&fit=crop&q=60"
      },
      {
        id: "nd-schezwan",
        name: "Schezwan Chicken Noodles",
        price: 140,
        category: "Noodles",
        description: "An electrifying noodle dish laced with our signature spicy, garlic-heavy Schezwan sauce and tender chicken.",
        ingredients: ["Noodles", "Chicken", "Schezwan Sauce", "Garlic", "Bell Peppers"],
        imageUrl: "https://images.unsplash.com/photo-1552611052-33e04de081de?w=500&auto=format&fit=crop&q=60"
      },
      {
        id: "nd-taiwanese",
        name: "Taiwanese Veg Noodles",
        price: 100,
        category: "Noodles",
        description: "A refined, aromatic stir-fry of noodles and crisp Asian greens, showcasing delicate Taiwanese flavors.",
        ingredients: ["Noodles", "Asian Greens", "Mushrooms", "Sesame Oil", "Mild Soy"],
        imageUrl: "https://images.unsplash.com/photo-1552611052-33e04de081de?w=500&auto=format&fit=crop&q=60"
      }
    ]
  }
];
