export interface MenuItem {
  id: string;
  name: string;
  price: number;
  category: string;
  description: string;
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
        ingredients: ["Noodles", "Asian Greens", "Mushrooms", "Sesame Oil", "Mild Soy"],
        imageUrl: "https://images.unsplash.com/photo-1552611052-33e04de081de?w=500&auto=format&fit=crop&q=60",
        isVeg: true,
        tag: "New"
      }
    ]
  }
];
