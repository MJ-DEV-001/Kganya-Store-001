# Deployment Guide for Kganya Streetwear

This guide covers deploying your Kganya e-commerce website to production.

---

## 🚀 Recommended Hosting: Vercel

**Why Vercel?**
- Free tier with good limits
- Automatic CI/CD from GitHub
- Fast global CDN
- Easy environment variable management
- Excellent for React/Vite apps

### Deploying to Vercel

#### Step 1: Prepare Your Repository
1. Create a GitHub account (if you don't have one)
2. Create a new repository
3. Push your code:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/kganya-streetwear.git
   git push -u origin main
   ```

#### Step 2: Deploy to Vercel
1. Go to [vercel.com](https://vercel.com) and sign up with GitHub
2. Click "New Project"
3. Import your `kganya-streetwear` repository
4. Configure project:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`

#### Step 3: Add Environment Variables
In Vercel project settings → Environment Variables, add:
```
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

#### Step 4: Deploy!
Click "Deploy" and wait for the build to complete.

Your site will be live at: `https://your-project-name.vercel.app`

---

## 🌐 Custom Domain Setup

### Using Vercel with Custom Domain

1. **Purchase a Domain**
   - Recommended registrars: Namecheap, GoDaddy, Cloudflare
   - Suggested: `kganya.co.za` or `kganyaclothing.com`

2. **Add Domain in Vercel**
   - Go to Project Settings → Domains
   - Add your domain (e.g., `kganya.co.za`)
   - Vercel will provide DNS records

3. **Update DNS Settings**
   In your domain registrar, add these records:
   ```
   Type: A
   Name: @
   Value: 76.76.21.21

   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```

4. **Wait for Propagation**
   - DNS changes can take 24-48 hours
   - Vercel will auto-issue SSL certificate

---

## 🔐 Production Checklist

Before going live, ensure:

### Security
- [ ] All environment variables are set
- [ ] Supabase RLS policies are active
- [ ] No sensitive data in frontend code
- [ ] HTTPS is enabled (automatic with Vercel)

### Functionality
- [ ] All pages load correctly
- [ ] User registration works
- [ ] Login/logout works
- [ ] Products display properly
- [ ] Cart functionality works
- [ ] Checkout process completes
- [ ] Orders save to database

### Content
- [ ] Replace placeholder images with real products
- [ ] Add actual product descriptions
- [ ] Update contact information (email, WhatsApp)
- [ ] Add your logo
- [ ] Update social media links
- [ ] Review all text content

### Performance
- [ ] Images are optimized (<200KB each)
- [ ] No console errors in browser
- [ ] Site loads in <3 seconds
- [ ] Mobile responsive on all pages

---

## 💳 Payment Integration

### Recommended: PayFast (for South Africa)

PayFast is the most popular payment gateway in South Africa.

#### Setup Steps:

1. **Create PayFast Account**
   - Go to [payfast.co.za](https://www.payfast.co.za)
   - Sign up for a merchant account
   - Complete verification process

2. **Get API Credentials**
   - Login to PayFast Dashboard
   - Go to Settings → Integration
   - Copy Merchant ID and Merchant Key

3. **Install PayFast SDK**
   ```bash
   npm install payfast-js
   ```

4. **Update Checkout Component**
   
   Add to `src/pages/Checkout.tsx`:
   ```typescript
   import { generatePaymentIdentifier } from 'payfast-js';

   const initiatePayment = () => {
     const paymentData = {
       merchant_id: process.env.VITE_PAYFAST_MERCHANT_ID,
       merchant_key: process.env.VITE_PAYFAST_MERCHANT_KEY,
       amount: cartTotal.toFixed(2),
       item_name: 'Kganya Order',
       return_url: 'https://yourdomain.com/payment-success',
       cancel_url: 'https://yourdomain.com/payment-cancelled',
       notify_url: 'https://yourdomain.com/api/payfast-webhook',
     };

     // Generate signature and redirect to PayFast
     const signature = generatePaymentIdentifier(paymentData);
     // Redirect to PayFast payment page
   };
   ```

5. **Add Environment Variables**
   ```
   VITE_PAYFAST_MERCHANT_ID=your_merchant_id
   VITE_PAYFAST_MERCHANT_KEY=your_merchant_key
   ```

---

## 📧 Email Notifications

### Recommended: Resend (Modern, Developer-Friendly)

1. **Sign up at [resend.com](https://resend.com)**
2. **Create API Key**
3. **Install SDK**:
   ```bash
   npm install resend
   ```
4. **Send Order Confirmation**:
   ```typescript
   import { Resend } from 'resend';

   const resend = new Resend(process.env.RESEND_API_KEY);

   await resend.emails.send({
     from: 'orders@kganya.co.za',
     to: customer.email,
     subject: 'Order Confirmation - Kganya',
     html: '<p>Thank you for your order...</p>'
   });
   ```

---

## 📱 WhatsApp Integration

### Option 1: WhatsApp Business API (Official)
- More expensive but professional
- Requires verification
- [Learn more](https://business.whatsapp.com)

### Option 2: Simple Click-to-Chat
Update contact links with:
```typescript
const whatsappNumber = '27XXXXXXXXX'; // Your number without +
const message = encodeURIComponent('Hi, I have a question about...');
const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;
```

---

## 📊 Analytics Setup

### Google Analytics 4

1. **Create GA4 Property**
   - Go to [analytics.google.com](https://analytics.google.com)
   - Create new property
   - Get Measurement ID (G-XXXXXXXXXX)

2. **Install GA4**
   ```bash
   npm install react-ga4
   ```

3. **Initialize in App**
   ```typescript
   import ReactGA from 'react-ga4';

   ReactGA.initialize('G-XXXXXXXXXX');
   ```

---

## 🔍 SEO Optimization

### Add Meta Tags
Update `index.html`:
```html
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="description" content="Kganya - Modern Christian streetwear. Walk in the Light with faith-inspired fashion." />
  <meta name="keywords" content="Christian clothing, streetwear, faith apparel, South Africa" />
  
  <!-- Open Graph -->
  <meta property="og:title" content="Kganya - Christian Streetwear" />
  <meta property="og:description" content="Modern Christian streetwear for the faithful generation" />
  <meta property="og:image" content="https://yourdomain.com/og-image.jpg" />
  
  <title>Kganya - Christian Streetwear | South Africa</title>
</head>
```

### Create Sitemap
Install package:
```bash
npm install sitemap
```

Generate sitemap for all your pages and submit to Google Search Console.

---

## 🛡️ Security Best Practices

1. **Never commit `.env` file** - It's in `.gitignore` but double-check
2. **Use Supabase RLS** - Already configured, but review policies
3. **Validate user input** - Add validation to all forms
4. **Rate limiting** - Implement on checkout and contact forms
5. **HTTPS only** - Vercel provides this automatically
6. **Regular updates** - Keep dependencies updated:
   ```bash
   npm update
   npm audit fix
   ```

---

## 💰 Cost Breakdown (Monthly)

### Free Tier (Getting Started)
- **Vercel**: $0 (100GB bandwidth, 100 builds)
- **Supabase**: $0 (500MB database, 2GB bandwidth)
- **Domain**: ~$15/year (~$1.25/month)
- **Total**: ~$1.25/month

### When You Grow
- **Vercel Pro**: $20/month (unlimited sites, analytics)
- **Supabase Pro**: $25/month (8GB database, better support)
- **PayFast**: 3.5% + R2 per transaction
- **Email (Resend)**: Free for 100 emails/day, then $20/month
- **Total**: ~$65/month + transaction fees

---

## 🔧 Maintenance

### Weekly Tasks
- Check order emails/notifications
- Monitor analytics
- Review customer inquiries
- Update inventory if needed

### Monthly Tasks
- Review and update content
- Check for broken links
- Update product images
- Review site performance
- Backup database (Supabase has automatic backups)

### Quarterly Tasks
- Update dependencies: `npm update`
- Review pricing
- Add new products
- Analyze sales data
- Improve SEO

---

## 📞 Support Resources

- **Vercel Support**: [vercel.com/support](https://vercel.com/support)
- **Supabase Docs**: [supabase.com/docs](https://supabase.com/docs)
- **PayFast Support**: support@payfast.co.za
- **React Docs**: [react.dev](https://react.dev)

---

## 🎯 Growth Tips

1. **Social Media Marketing**
   - Instagram: Post product photos, behind-the-scenes
   - Facebook: Create business page, run ads
   - TikTok: Short videos showcasing products

2. **Email Marketing**
   - Collect emails at checkout
   - Send weekly newsletters
   - Announce new products
   - Offer exclusive discounts

3. **SEO**
   - Blog about Christian lifestyle, fashion
   - Get listed in directories
   - Partner with Christian influencers

4. **Customer Service**
   - Respond quickly to inquiries
   - Follow up after purchases
   - Ask for reviews/testimonials

---

**🎉 Congratulations! You're ready to launch Kganya to the world!**

Walk in the Light! ✨
