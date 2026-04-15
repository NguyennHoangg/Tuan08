# 🍳 Chefify - Recipe Discovery & Cooking Platform

A production-grade React application for discovering, saving, and cooking delicious recipes from professional chefs around the world.

## ✨ Features

### Core Features
- **🏠 Home Page** - Hero section with featured recipes, trending recipes, and editor's picks
- **🔍 Advanced Search** - Intelligent recipe search with filtering by type, cooking time, and ratings
- **📖 Recipe Details** - Complete recipe information with step-by-step instructions, ingredients, and reviews
- **❤️ Recipe Box** - Save and organize your favorite recipes with a personal collection
- **💳 Subscription** - Flexible pricing plans (monthly/yearly) with premium features
- **👤 User Authentication** - Email-based login with social media integration

### UI/UX Features
- **Responsive Design** - Mobile, tablet, and desktop optimized layouts
- **Smooth Animations** - Framer Motion animations for delightful interactions
- **Modern Styling** - Tailwind CSS utility-first styling with custom color system
- **Dark Elements** - Professional dark navigation bar with light content
- **Modal System** - Onboarding and login modals with carousel
- **Pagination** - Efficient recipe browsing with smart pagination

## 🛠️ Tech Stack

- **Frontend Framework**: React 18 with React Router v6
- **Styling**: Tailwind CSS (utility-first)
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **HTTP Client**: Axios
- **State Management**: Context API (Auth, RecipeBox)
- **Build Tool**: Vite
- **Package Manager**: npm

## 📦 Installation

### Prerequisites
- Node.js 16.x or higher
- npm or yarn

### Setup Steps

```bash
# Clone the repository
git clone https://github.com/NguyennHoangg/Tuan08.git
cd 23679011

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The application will be available at `http://localhost:5173`

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx                 # Navigation bar with search
│   ├── Footer.jsx                 # Footer with links and email signup
│   ├── RecipeCard.jsx             # Reusable recipe card component
│   ├── Filters/
│   │   ├── FilterSidebar.jsx      # Search filters panel
│   │   ├── RangeSlider.jsx        # Time range slider
│   │   └── StarRating.jsx         # Rating filter
│   └── Modal/
│       ├── OnboardingModal.jsx    # Welcome carousel
│       └── LoginModal.jsx         # Email/social login form
├── pages/
│   ├── HomePage.jsx               # Landing page with hero and featured recipes
│   ├── SearchResultsPage.jsx      # Search results with filters and pagination
│   ├── RecipeDetailPage.jsx       # Full recipe details with instructions
│   ├── RecipeBoxPage.jsx          # Saved recipes collection
│   └── SubscribePage.jsx          # Subscription plans
├── context/
│   ├── AuthContext.jsx            # Authentication state
│   └── RecipeBoxContext.jsx       # Saved recipes state
├── hooks/
│   ├── useModal.js                # Modal management hook
│   └── useSearch.js               # Search state hook
├── data/
│   └── mockRecipes.js             # Sample recipe data (12 recipes)
├── App.jsx                        # Main app with routing
├── index.css                      # Global styles
└── main.jsx                       # React entry point
```

## 🎨 Design System

### Colors
- **Primary Brand**: `#F0326A` (Hot Pink)
- **Secondary**: `#FFC107` (Amber/Golden)
- **Neutral Dark**: `#1A1A2E` (Dark background)
- **Text**: `#333333` (Body text)
- **Background**: `#FFFFFF` (White)

### Fonts
- **Headings**: Playfair Display (serif)
- **Body**: DM Sans (sans-serif)

## 🔄 State Management

### AuthContext
```javascript
{
  user: { email, name },
  isLoggedIn: boolean,
  login(email),
  logout()
}
```

### RecipeBoxContext
```javascript
{
  savedRecipes: number[],
  saveRecipe(id),
  removeRecipe(id),
  isSaved(id)
}
```

## 📋 Mock Data

The application includes 12 sample recipes with:
- Recipe ID, title, and images
- Cook time, author info, and ratings
- Ingredients list and step-by-step instructions
- User reviews and testimonials

## 🎯 Pages Overview

### 1. HomePage (/)
- Full-width hero with featured recipe card
- "This Summer Recipes" horizontal scroll
- "Recipes With Videos" grid
- "Editor's Pick" 2-column layout
- CTA section for premium subscription

### 2. SearchResultsPage (/search?q=...)
- Advanced filters sidebar
- 3-column recipe grid
- Sort by relevance, A-Z, time, rating
- Smart pagination
- Empty state with suggestions

### 3. RecipeDetailPage (/recipe/:id)
- Breadcrumb navigation
- Full recipe information
- Step-by-step instructions with images
- Cooking notes textarea
- Reviews with ratings and replies
- Recently viewed recipes carousel

### 4. RecipeBoxPage (/recipe-box)
- User profile section
- Tabs: Saved Recipes, Folders, Personal Recipes
- 4-column recipe grid with pagination
- Share functionality

### 5. SubscribePage (/subscribe)
- Split layout with pricing info
- Subscription benefits
- Monthly and yearly plans
- FAQ section
- 4 feature cards showcase

## 🚀 Getting Started

### First Time Users
1. Visit the home page - onboarding modal automatically appears
2. Explore featured recipes or use search
3. Click on any recipe to view details
4. Use bookmark icon to save to Recipe Box
5. Create account via login modal
6. Subscribe for premium features

### Development Workflow

```bash
# Start dev server with HMR
npm run dev

# Build for production
npm run build

# Check for lint errors
npm run lint
```

## 📱 Responsive Breakpoints

- **Mobile**: < 768px (single column, hamburger menu)
- **Tablet**: 768px - 1024px (2-column cards)
- **Desktop**: > 1024px (3-4 column cards, full layout)

## ✅ Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🎬 Animations

- Navbar shadow on scroll
- Hero card fade + slide-up
- Recipe cards staggered fade-in
- Modal scale + fade entrance
- Card hover translateY + shadow
- Bookmark button scale bounce

## 🔒 Security Considerations

- Mock authentication (replace with real backend)
- No sensitive data stored locally
- Consider adding:
  - JWT tokens for real auth
  - Environment variables for API endpoints
  - Input validation for forms

## 🚧 Future Enhancements

- [ ] Backend API integration
- [ ] Real user authentication
- [ ] Recipe creation/editing
- [ ] User ratings and reviews
- [ ] Recipe sharing to social media
- [ ] Grocery list with store locations
- [ ] Nutrition information
- [ ] Video integration
- [ ] Dark mode toggle
- [ ] Multi-language support

## 📝 License

MIT License - feel free to use this project for learning and development.

## 👥 Author

Created by Chefify Development Team
- Email: dev@chefify.com
- GitHub: [NguyennHoangg/Tuan08](https://github.com/NguyennHoangg/Tuan08)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

For issues and questions:
1. Check existing GitHub issues
2. Create a new issue with details
3. Include screenshots/error logs

---

**Made with ❤️ for food lovers and home cooks**
