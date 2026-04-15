export const mockRecipes = [
  {
    id: 1,
    title: 'Strawberry Shortcake',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500&h=375&fit=crop',
    cookTime: '45 min',
    author: 'Sarah Chen',
    authorAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
    tags: ['dessert', 'baked'],
    ingredients: [
      '2 cups all-purpose flour',
      '1 cup sugar',
      '2 eggs',
      '1 cup fresh strawberries',
      '1 cup whipped cream',
      '2 tsp baking powder',
      '1 tsp vanilla extract',
      'Pinch of salt'
    ],
    steps: [
      'Preheat oven to 350°F. Grease a 9-inch round cake pan.',
      'Mix flour, baking powder, and salt in a bowl.',
      'In another bowl, beat eggs with sugar until fluffy.',
      'Fold in flour mixture and vanilla extract.',
      'Pour into prepared pan and bake for 25 minutes.',
      'Cool cake and layer with strawberries and whipped cream.',
      'Refrigerate for at least 2 hours before serving.'
    ],
    rating: 4.8,
    reviews: [
      { id: 1, author: 'John Doe', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop', date: '2 days ago', text: 'Absolutely delicious!', rating: 5 },
      { id: 2, author: 'Jane Smith', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop', date: '1 week ago', text: 'Perfect for parties', rating: 5 }
    ]
  },
  {
    id: 2,
    title: 'Pan-Fried Salmon',
    image: 'https://images.unsplash.com/photo-1580822261290-991b38693d1b?w=500&h=375&fit=crop',
    cookTime: '30 min',
    author: 'Marcus Johnson',
    authorAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
    tags: ['pan-fried', 'seafood'],
    ingredients: [
      '4 salmon fillets',
      '2 tbsp olive oil',
      'Salt and pepper',
      '2 cloves garlic',
      '1 lemon',
      'Fresh dill',
      '2 tbsp butter'
    ],
    steps: [
      'Heat olive oil in a pan over medium-high heat.',
      'Season salmon with salt and pepper.',
      'Place salmon skin-side up and sear for 4 minutes.',
      'Flip and cook for another 4 minutes.',
      'Add garlic and butter, baste the salmon.',
      'Cook until internal temperature reaches 145°F.',
      'Serve with fresh lemon and dill.'
    ],
    rating: 4.9,
    reviews: []
  },
  {
    id: 3,
    title: 'Vegetable Stir-Fry',
    image: 'https://images.unsplash.com/photo-1609501676725-7186f017a4b6?w=500&h=375&fit=crop',
    cookTime: '25 min',
    author: 'Lisa Wang',
    authorAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
    tags: ['stir-fried', 'vegetarian'],
    ingredients: [
      '2 cups broccoli florets',
      '1 red bell pepper',
      '1 cup snap peas',
      '3 cloves garlic',
      '2 tbsp soy sauce',
      '1 tbsp sesame oil',
      '1 tbsp ginger',
      '2 tbsp vegetable oil'
    ],
    steps: [
      'Heat vegetable oil in a wok over high heat.',
      'Add garlic and ginger, stir-fry for 30 seconds.',
      'Add broccoli and cook for 2 minutes.',
      'Add bell pepper and snap peas.',
      'Stir-fry for another 3 minutes.',
      'Pour soy sauce and sesame oil.',
      'Toss everything together and serve immediately.'
    ],
    rating: 4.6,
    reviews: []
  },
  {
    id: 4,
    title: 'Grilled Chicken Breast',
    image: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=500&h=375&fit=crop',
    cookTime: '35 min',
    author: 'Chef Michael',
    authorAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
    tags: ['grilled', 'protein'],
    ingredients: [
      '4 chicken breasts',
      '3 tbsp olive oil',
      '2 tbsp balsamic vinegar',
      '4 cloves garlic',
      '2 tbsp Dijon mustard',
      'Fresh thyme',
      'Salt and pepper'
    ],
    steps: [
      'Mix olive oil, vinegar, garlic, and mustard for marinade.',
      'Marinate chicken for at least 30 minutes.',
      'Preheat grill to medium-high heat.',
      'Grill chicken for 6-7 minutes per side.',
      'Let rest for 5 minutes before serving.',
      'Garnish with fresh thyme.'
    ],
    rating: 4.7,
    reviews: []
  },
  {
    id: 5,
    title: 'Roasted Vegetables',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500&h=375&fit=crop',
    cookTime: '40 min',
    author: 'Emma Roberts',
    authorAvatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
    tags: ['roasted', 'vegetarian'],
    ingredients: [
      '2 cups cherry tomatoes',
      '1 cup Brussels sprouts',
      '1 cup baby carrots',
      '2 tbsp olive oil',
      '3 cloves garlic',
      '1 tsp Italian seasoning',
      'Salt and pepper',
      'Parmesan cheese'
    ],
    steps: [
      'Preheat oven to 425°F.',
      'Toss vegetables with olive oil and seasonings.',
      'Spread on a baking sheet.',
      'Roast for 25-30 minutes, stirring halfway through.',
      'Top with Parmesan cheese.',
      'Roast for another 5 minutes.'
    ],
    rating: 4.5,
    reviews: []
  },
  {
    id: 6,
    title: 'Thai Green Curry',
    image: 'https://images.unsplash.com/photo-1455619452474-d2be8b1e9f1d?w=500&h=375&fit=crop',
    cookTime: '30 min',
    author: 'Priya Kumar',
    authorAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
    tags: ['sautéed', 'spicy'],
    ingredients: [
      '400ml coconut milk',
      '3 tbsp green curry paste',
      '500g chicken breast',
      '2 cups green beans',
      '1 red bell pepper',
      '3 Thai basil leaves',
      '2 tbsp fish sauce',
      '1 tbsp brown sugar'
    ],
    steps: [
      'Heat oil in a pan and fry curry paste until fragrant.',
      'Add half the coconut milk and stir.',
      'Add diced chicken and cook until done.',
      'Add remaining coconut milk and vegetables.',
      'Simmer for 10 minutes.',
      'Season with fish sauce and brown sugar.',
      'Garnish with Thai basil.'
    ],
    rating: 4.8,
    reviews: []
  },
  {
    id: 7,
    title: 'Chocolate Lava Cake',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500&h=375&fit=crop',
    cookTime: '20 min',
    author: 'Rachel Green',
    authorAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
    tags: ['baked', 'dessert'],
    ingredients: [
      '200g dark chocolate',
      '200g butter',
      '4 eggs',
      '4 tbsp sugar',
      '2 tbsp flour',
      'Pinch of salt'
    ],
    steps: [
      'Preheat oven to 425°F.',
      'Melt chocolate and butter together.',
      'Beat eggs and sugar until fluffy.',
      'Fold in chocolate mixture and flour.',
      'Pour into ramekins.',
      'Bake for 12-14 minutes until edges are firm.',
      'Invert onto plates and serve warm.'
    ],
    rating: 4.9,
    reviews: []
  },
  {
    id: 8,
    title: 'Pasta Carbonara',
    image: 'https://images.unsplash.com/photo-1612874742237-6526221fcf4d?w=500&h=375&fit=crop',
    cookTime: '25 min',
    author: 'Antonio Rossi',
    authorAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
    tags: ['pasta', 'Italian'],
    ingredients: [
      '400g spaghetti',
      '200g pancetta',
      '4 eggs',
      '100g Pecorino Romano cheese',
      'Black pepper',
      'Salt'
    ],
    steps: [
      'Cook pasta in boiling salted water.',
      'Cut pancetta into strips and fry until crispy.',
      'Beat eggs with grated cheese and black pepper.',
      'Reserve pasta water and drain pasta.',
      'Toss hot pasta with pancetta.',
      'Remove from heat and add egg mixture.',
      'Toss quickly, adding pasta water if needed.'
    ],
    rating: 4.8,
    reviews: []
  },
  {
    id: 9,
    title: 'Mushroom Risotto',
    image: 'https://images.unsplash.com/photo-1571407-918f48b37f6d?w=500&h=375&fit=crop',
    cookTime: '35 min',
    author: 'Sofia Rossi',
    authorAvatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
    tags: ['sautéed', 'vegetarian'],
    ingredients: [
      '300g Arborio rice',
      '500g mushrooms',
      '1 liter vegetable stock',
      '1 onion',
      '3 cloves garlic',
      '100ml white wine',
      '50g Parmesan cheese',
      '2 tbsp butter'
    ],
    steps: [
      'Heat vegetable stock in a separate pot.',
      'Sauté mushrooms and set aside.',
      'Cook onion and garlic until soft.',
      'Add rice and toast for 2 minutes.',
      'Add wine and let it absorb.',
      'Add stock one ladle at a time, stirring constantly.',
      'When rice is creamy, fold in mushrooms, butter, and cheese.'
    ],
    rating: 4.7,
    reviews: []
  },
  {
    id: 10,
    title: 'Beef Stew',
    image: 'https://images.unsplash.com/photo-1550890846-b494be05ff81?w=500&h=375&fit=crop',
    cookTime: '120 min',
    author: 'Gordon Ramsay',
    authorAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
    tags: ['stewed', 'comfort-food'],
    ingredients: [
      '800g beef chuck',
      '3 tbsp olive oil',
      '2 onions',
      '4 carrots',
      '3 potatoes',
      '400ml beef stock',
      '200ml red wine',
      'Thyme and bay leaves'
    ],
    steps: [
      'Brown beef in oil on all sides.',
      'Remove beef and cook onions until soft.',
      'Add carrots and potatoes.',
      'Deglaze with red wine.',
      'Add beef stock and herbs.',
      'Return beef to pot.',
      'Simmer for 90 minutes until beef is tender.'
    ],
    rating: 4.6,
    reviews: []
  },
  {
    id: 11,
    title: 'Lemon Cheesecake',
    image: 'https://images.unsplash.com/photo-1548365328-c9fa89d128fa?w=500&h=375&fit=crop',
    cookTime: '60 min',
    author: 'Nina Patel',
    authorAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
    tags: ['baked', 'dessert'],
    ingredients: [
      '300g graham cracker crust',
      '800g cream cheese',
      '1 cup sugar',
      '4 eggs',
      '1/2 cup sour cream',
      '4 tbsp lemon juice',
      '1 tbsp lemon zest'
    ],
    steps: [
      'Preheat oven to 325°F.',
      'Prepare crust in a springform pan.',
      'Beat cream cheese and sugar until smooth.',
      'Add eggs one at a time.',
      'Mix in sour cream, lemon juice, and zest.',
      'Pour filling over crust.',
      'Bake for 50-60 minutes until set.',
      'Cool completely and refrigerate overnight.'
    ],
    rating: 4.9,
    reviews: []
  },
  {
    id: 12,
    title: 'Quinoa Buddha Bowl',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&h=375&fit=crop',
    cookTime: '30 min',
    author: 'Alex Turner',
    authorAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
    tags: ['healthy', 'vegetarian'],
    ingredients: [
      '1 cup quinoa',
      '2 cups mixed greens',
      '1 avocado',
      '1 sweet potato',
      '1 cup chickpeas',
      '1 cucumber',
      '2 tbsp tahini',
      '1 lemon'
    ],
    steps: [
      'Cook quinoa according to package directions.',
      'Roast sweet potato until tender.',
      'Toast chickpeas with spices.',
      'Arrange quinoa in a bowl.',
      'Top with vegetables.',
      'Make dressing from tahini, lemon juice, and water.',
      'Drizzle over bowl and serve.'
    ],
    rating: 4.5,
    reviews: []
  }
];

export const recipeCategories = ['Pan-fried', 'Stir-fried', 'Grilled', 'Roasted', 'Sautéed', 'Baked', 'Steamed', 'Stewed'];
