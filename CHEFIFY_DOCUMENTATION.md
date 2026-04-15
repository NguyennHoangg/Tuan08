# Chefify - Recipe Discovery & Cooking Platform

A complete, production-grade ReactJS application for discovering recipes, saving favorites, and learning to cook like a pro.

## 🎨 Features

### Pages & Functionality

#### 1. **HomePage** (`/`)
- Full-width hero section with animated recipe of the day card
- "This Summer Recipes" horizontal scrolling carousel
- "Recipes With Videos" 4-column grid
- "Editor's Pick" alternating 2-column layout
- Subscription CTA section
- Fully responsive design

#### 2. **SearchResultsPage** (`/search?q=...`)
- Advanced filter sidebar with:
  - Cooking type checkboxes (Pan-fried, Stir-fried, Grilled, etc.)
  - Time range slider (15-120 minutes)
  - Star rating filters
  - "Apply Filters" button
- Main content area with:
  - Search query header with result count
  - Sort dropdown (Relevance, A-Z, Cook Time, Rating)
  - 3-column responsive recipe grid
  - Pagination controls
- Empty state with suggestion chips

#### 3. **RecipeDetailPage** (`/recipe/:id`)
- Breadcrumb navigation
- Left column:
  - Recipe title
  - Author info with avatar
  - Cook time, ingredients count, rating
  - Ingredient list with checkboxes
  - Save to Recipe Box button
- Right column:
  - High-quality recipe image
  - Step-by-step instructions with numbered badges
  - Cooking notes textarea
  - Reviews section with tabs (All, Most Helpful, Private)
  - Comment cards with user info
- "Your Recently Viewed" horizontal recipe row at bottom

#### 4. **RecipeBoxPage** (`/recipe-box`)
- Profile section with avatar, name, subscriber count, share button
- Three tabs: Saved Recipes, Folders, Recipes by [Name]
- 4-column recipe card grid with pagination
- Empty state with "Explore Recipes" CTA

#### 5. **SubscribePage** (`/subscribe`)
- Split layout with text content and imagery
- Benefits section with checkmarks
- Pricing cards showing $0.25/week or $1/month
- Subscribe CTA button
- Feature cards (Cooking, Wirecutter, Games, Athletic)
- Plan selection (Monthly or Yearly)
- FAQ section

### Shared Components

#### **Navbar**
- Logo with chef emoji and "Chefify" branding
- Search input with autocomplete
- Navigation links (What to cook, Recipes, Ingredients, Occasions, About Us)
- Auth state aware:
  - Logged out: "Login" + "Subscribe" buttons
  - Logged in: "Recipe Box" + user avatar dropdown
- Mobile hamburger menu
- Sticky with shadow on scroll

#### **Footer**
- Dark background (#1A1A2E)
- 3-column layout: About, Learn More, Recipes
- Email subscription input
- Social links
- Copyright info and legal links

#### **RecipeCard**
- Image with rounded corners and aspect ratio 4:3
- Recipe title
- Cook time in pink
- Bookmark button (top-right, animated)
- Hover effects with shadow and image zoom
- Star rating display

#### **Modals**

**LoginModal**
- Split layout: Left (food image + quote), Right (form)
- Email input
- Pink "Continue" button
- Social login options (Google, Facebook, Apple)
- Terms disclaimer

**OnboardingModal**
- 3-slide carousel with dots
- Food images with descriptions
- "Next" button (or "Get Started" on last slide)
- "Skip" link
- Smooth transitions

#### **FilterSidebar**
- Cooking type checkboxes
- Range slider for cook time
- Star rating filters
- Pink "Apply Filters" button

## 🎨 Design System

### Colors
- **Primary**: #F0326A (Hot Pink)
- **Secondary**: #FFC107 (Amber/Golden)
- **Neutral Dark**: #1A1A2E (Dark Background)
- **Background**: #FFFFFF
- **Text Body**: #333333

### Typography
- **Headings**: Playfair Display (bold)
- **Body**: DM Sans (regular, 500, 700 weights)

### Animations
- Fade-in and slide-up on page load
- Card hover: translateY(-4px) with shadow lift
- Bookmark button: scale bounce on click
- Modal entrance: scale + fade
- Navbar shadow on scroll
- Staggered animations for recipe grids

## 🏗️ Tech Stack

- **React 18** - UI Library
- **React Router v6** - Client-side routing
- **Tailwind CSS v4** - Utility-first styling
- **Framer Motion** - Animations & transitions
- **Lucide React** - Icon library
- **Context API** - Global state management
- **Vite** - Build tool & dev server

## 🗂️ State Management

### AuthContext
```javascript
{
  user: { email, name },
  isLoggedIn: boolean,
  login(email): void,
  logout(): void
}
```

### RecipeBoxContext
```javascript
{
  savedRecipes: number[],
  saveRecipe(id): void,
  removeRecipe(id): void,
  isSaved(id): boolean
}
```

## 📊 Mock Data

The application includes 12 sample recipes with:
- Title, image URL, cook time
- Author name and avatar
- Ingredients list
- Step-by-step instructions
- Rating and reviews
- Tags (pan-fried, stir-fried, baked, etc.)

## 📱 Responsive Design

- **Mobile**: Single column layouts, hamburger menu, stacked components
- **Tablet**: 2-column grids, adjusted spacing
- **Desktop**: 3-4 column grids, full sidebar, optimized layouts

## 🚀 Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Server runs on `http://localhost:5176` (or next available port)

### Build

```bash
npm run build
```

### Preview

```bash
npm preview
```

## 📁 Project Structure

```
src/
├── App.jsx                 # Main app with routing
├── index.css              # Global styles & Tailwind
├── components/
│   ├── Navbar.jsx         # Navigation bar
│   ├── Footer.jsx         # Footer with links
│   ├── RecipeCard.jsx     # Reusable recipe card
│   ├── Modal/
│   │   ├── LoginModal.jsx
│   │   └── OnboardingModal.jsx
│   └── Filters/
│       ├── FilterSidebar.jsx
│       ├── RangeSlider.jsx
│       └── StarRating.jsx
├── pages/
│   ├── HomePage.jsx
│   ├── SearchResultsPage.jsx
│   ├── RecipeDetailPage.jsx
│   ├── RecipeBoxPage.jsx
│   └── SubscribePage.jsx
├── context/
│   ├── AuthContext.jsx
│   └── RecipeBoxContext.jsx
├── hooks/
│   ├── useModal.js
│   └── useSearch.js
└── data/
    └── mockRecipes.js
```

## 🎯 Key Features

✅ **Full Search & Filter**: Real-time recipe search with advanced filtering
✅ **Recipe Bookmarking**: Save favorite recipes with Context API
✅ **User Authentication**: Login/logout with email
✅ **Responsive Design**: Mobile-first approach with Tailwind
✅ **Smooth Animations**: Framer Motion for professional feel
✅ **Rich Content**: Step-by-step recipes with reviews
✅ **Modern UI**: Pink & gold design system
✅ **Accessibility**: Semantic HTML, ARIA attributes

## 💡 Future Enhancements

- Backend API integration
- Real user authentication (Firebase, Auth0)
- Recipe upload & sharing
- Meal planning calendar
- Shopping list generation
- Video tutorials integration
- Social sharing features
- Dark mode support
- Multi-language support

## 📄 License

MIT License - Feel free to use this project for learning or commercial purposes.

---

Built with ❤️ using React, Tailwind CSS, and Framer Motion
