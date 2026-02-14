# Kganya Streetwear - E-Commerce Platform

A complete e-commerce website for Kganya, a Christian-themed streetwear brand. Built with React, TypeScript, Vite, Tailwind CSS, and Supabase.

## 🌟 Features

- **User Authentication**: Sign up, sign in, and profile management
- **Product Catalog**: Browse and search products by category
- **Shopping Cart**: Add, remove, and update cart items
- **Checkout Process**: Complete order with shipping information
- **Order History**: View past orders and order status
- **Responsive Design**: Mobile-first design with Tailwind CSS
- **Real-time Updates**: Powered by Supabase real-time subscriptions

## 🚀 Tech Stack

- **Frontend**: React 19, TypeScript, Vite
- **Styling**: Tailwind CSS 4
- **Backend**: Supabase (PostgreSQL, Authentication, Real-time)
- **Routing**: React Router v6
- **State Management**: React Context API

## 📋 Prerequisites

- Node.js 18+ and npm
- Supabase account (free tier works great)

## 🛠️ Setup Instructions

### 1. Clone the Repository

```bash
git clone <your-repo-url>
cd kganya-streetwear
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Setup Supabase

#### Create a Supabase Project
1. Go to [supabase.com](https://supabase.com)
2. Create a new project
3. Wait for the project to be ready

#### Setup Database Schema
1. In your Supabase project, go to the SQL Editor
2. Copy the contents of `supabase-schema.sql`
3. Paste and run the SQL script
4. This will create all necessary tables, policies, and sample products

#### Get Your API Credentials
1. Go to Project Settings → API
2. Copy the `Project URL` and `anon/public` key

### 4. Configure Environment Variables

1. Copy the example environment file:
```bash
cp .env.example .env
```

2. Edit `.env` and add your Supabase credentials:
```
VITE_SUPABASE_URL=your_project_url
VITE_SUPABASE_ANON_KEY=your_anon_key
```

### 5. Run the Development Server

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

## 📦 Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist/` directory.

## 🎨 Design & Branding

### Color Palette
- **Primary**: Black (#000000)
- **Secondary**: White (#FFFFFF)
- **Accents**: Earth tones (beige, brown, grey)

### Typography
- Clean, modern sans-serif fonts
- Bold headings for impact
- Simple, readable body text

## 📱 Pages

1. **Home** - Brand introduction and featured products
2. **Shop** - Product catalog with category filtering
3. **Product Details** - Individual product page with size/color selection
4. **Cart** - Shopping cart management
5. **Checkout** - Order placement with shipping info
6. **Profile** - User account and order history
7. **About** - Brand story and mission
8. **Contact** - Contact form and information

## 🔐 Authentication Flow

1. Users can browse products without signing in
2. Sign in required for:
   - Adding items to cart
   - Placing orders
   - Viewing order history
3. Email verification on signup (configurable in Supabase)

## 💳 Payment Integration

**Note**: This project currently doesn't include payment processing. To add payments:

### Recommended Payment Gateways for South Africa:
1. **Payfast** - Local, easy integration
2. **Stripe** - International, comprehensive
3. **PayGate** - South African payment gateway

### Integration Steps:
1. Sign up for a payment gateway
2. Install their SDK
3. Add payment component to checkout page
4. Update order flow to process payments

## 📊 Database Structure

### Tables:
- `products` - Product catalog
- `cart_items` - User shopping carts
- `orders` - Order records
- `order_items` - Items in each order
- `profiles` - Extended user profiles

### Row Level Security:
All tables have RLS policies ensuring users can only access their own data.

## 🔧 Customization

### Adding Products:
1. Go to Supabase Dashboard → Table Editor → products
2. Insert new products manually, or
3. Build an admin panel (recommended for production)

### Changing Branding:
- Update colors in `tailwind.config.js` (if needed)
- Replace logo/brand name in `Navbar.tsx` and `Footer.tsx`
- Update content in `About.tsx`, `Home.tsx`, etc.

### Adding Features:
- Wishlist: Add new table and context
- Reviews: Add reviews table linked to products
- Admin Panel: Create admin routes with authentication

## 🚀 Deployment

### Recommended Hosting Options:

#### 1. Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

#### 2. Netlify
```bash
# Install Netlify CLI
npm i -g netlify-cli

# Deploy
netlify deploy --prod
```

#### 3. Railway.app
- Connect your GitHub repo
- Deploy automatically

### Environment Variables
Don't forget to add your environment variables in your hosting platform's dashboard!

## 📝 TODO / Future Enhancements

- [ ] Payment gateway integration
- [ ] Email notifications for orders
- [ ] Admin dashboard for managing products/orders
- [ ] Product reviews and ratings
- [ ] Wishlist functionality
- [ ] Product image zoom/gallery
- [ ] Size guide
- [ ] Stock alerts
- [ ] Discount codes/promotions
- [ ] Social media integration

## 🤝 Support

For issues or questions:
- Email: info@kganya.com
- WhatsApp: +27 XX XXX XXXX

## 📄 License

This project is proprietary software for Kganya Streetwear.

## 🙏 Acknowledgments

- Built with love for the Christian streetwear community
- Powered by Supabase and modern web technologies
- Inspired by faith, designed for believers

---

**Kganya** - Light Your Path 🌟
