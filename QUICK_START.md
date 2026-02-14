# 🚀 QUICK START - Get Running in 5 Minutes

## What You Need
1. Computer with internet
2. Code editor (VS Code recommended - download at code.visualstudio.com)
3. That's it! Everything else is free.

---

## Step 1: Install Node.js (2 minutes)

1. Go to [nodejs.org](https://nodejs.org)
2. Download the **LTS version** (the green button)
3. Install it (just keep clicking "Next")
4. Verify it worked:
   - Open Terminal (Mac) or Command Prompt (Windows)
   - Type: `node --version`
   - You should see something like `v20.11.0`

---

## Step 2: Set Up the Project (2 minutes)

1. **Open the project folder**
   - Extract the `kganya-streetwear` folder
   - Open it in VS Code (File → Open Folder)

2. **Install dependencies**
   - In VS Code, open Terminal (View → Terminal)
   - Type: `npm install`
   - Wait for it to finish (2-3 minutes)

---

## Step 3: Set Up Supabase Database (FREE) (5 minutes)

1. **Create Supabase account**
   - Go to [supabase.com](https://supabase.com)
   - Click "Start your project"
   - Sign up with GitHub (easiest)

2. **Create a new project**
   - Click "New Project"
   - Name: `kganya-store`
   - Database Password: (create a strong password, save it somewhere)
   - Region: Choose closest to South Africa
   - Click "Create new project"
   - Wait 2-3 minutes for setup

3. **Get your credentials**
   - In Supabase dashboard, click "Settings" (gear icon)
   - Click "API"
   - Copy two things:
     - Project URL (looks like: `https://abc123.supabase.co`)
     - anon public key (long string starting with `eyJ...`)

4. **Add credentials to your project**
   - In your project folder, find `.env.example`
   - Rename it to `.env` (remove the `.example`)
   - Open `.env` and paste your credentials:
     ```
     VITE_SUPABASE_URL=https://abc123.supabase.co
     VITE_SUPABASE_ANON_KEY=eyJ...your-long-key-here
     ```
   - Save the file

5. **Create database tables**
   - In Supabase, click "SQL Editor" in the sidebar
   - Click "New query"
   - Open the `supabase-schema.sql` file from your project
   - Copy ALL the content
   - Paste it in the Supabase SQL editor
   - Click "Run" (green button)
   - You should see "Success. No rows returned"

---

## Step 4: Run Your Website! (30 seconds)

1. **In VS Code terminal, type:**
   ```bash
   npm run dev
   ```

2. **Open your browser and go to:**
   ```
   http://localhost:5173
   ```

3. **🎉 Your website is running!**

---

## What You Can Do Now

### Test the Website
1. Browse products
2. Click "Sign Up" and create an account
3. Add products to cart
4. Go through checkout
5. View your profile and orders

### Add Your Own Products
1. Go to Supabase dashboard
2. Click "Table Editor"
3. Click "products" table
4. Click "Insert" → "Insert row"
5. Fill in product details
6. Click "Save"
7. Refresh your website - new product appears!

### Customize
- Change colors in components (search for `bg-black`, change to `bg-blue-600`, etc.)
- Update contact info in `src/components/Footer.tsx` and `src/pages/Contact.tsx`
- Add your logo image to `public/` folder and update `src/components/Header.tsx`

---

## Common Issues

### "npm: command not found"
- Node.js not installed properly
- Restart your computer and try again
- Or reinstall Node.js from nodejs.org

### "Port 5173 already in use"
- Another app is using that port
- Close other dev servers
- Or change port: edit `vite.config.ts` and add:
  ```typescript
  server: { port: 3000 }
  ```

### Website loads but products don't show
- Check your `.env` file has correct Supabase credentials
- Make sure you ran the `supabase-schema.sql` in Supabase
- Check browser console for errors (F12 → Console tab)

### Can't create account
- Check Supabase is running (green status in dashboard)
- Check browser console for errors
- Try a different email address

---

## Next Steps

1. **Read SETUP_GUIDE.md** for more detailed information
2. **Read DEPLOYMENT_GUIDE.md** to put your site online
3. **Add real product images** (replace the placeholder URLs)
4. **Set up payments** (see DEPLOYMENT_GUIDE.md for PayFast integration)

---

## Need Help?

- Check the guides: `SETUP_GUIDE.md` and `DEPLOYMENT_GUIDE.md`
- Google the error message
- Check Supabase docs: [supabase.com/docs](https://supabase.com/docs)
- Check Vite docs: [vitejs.dev](https://vitejs.dev)

---

**Remember**: This is YOUR website now. Experiment, break things, learn, and have fun! 

**Walk in the Light! ✨**
