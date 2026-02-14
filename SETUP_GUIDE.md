# Kganya Streetwear - Complete Setup Guide

This guide will walk you through setting up your Kganya e-commerce website from scratch.

## Table of Contents
1. [Supabase Setup](#supabase-setup)
2. [Local Development](#local-development)
3. [Testing the Application](#testing)
4. [Deployment](#deployment)
5. [Adding Products](#adding-products)
6. [Troubleshooting](#troubleshooting)

---

## Supabase Setup

### Step 1: Create a Supabase Account
1. Go to https://supabase.com
2. Click "Start your project"
3. Sign up with GitHub, Google, or email

### Step 2: Create a New Project
1. Click "New Project"
2. Fill in:
   - Name: kganya-streetwear
   - Database Password: Choose a strong password
   - Region: Choose closest to South Africa
   - Pricing Plan: Free
3. Click "Create new project"
4. Wait 2-3 minutes for setup

### Step 3: Setup Database Schema
1. Click "SQL Editor" in left sidebar
2. Click "New query"
3. Copy ALL code from `supabase-schema.sql`
4. Paste and click "Run"

### Step 4: Get API Credentials
1. Click "Settings" → "API"
2. Copy:
   - Project URL
   - anon/public key

---

## Local Development

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Configure Environment
1. Copy `.env.example` to `.env`
2. Add your Supabase credentials

### Step 3: Start Development Server
```bash
npm run dev
```

Open http://localhost:5173

---

## Testing the Application

1. Browse products
2. Create an account
3. Add items to cart
4. Complete checkout
5. View order history in profile

---

## Deployment

### Vercel (Recommended)
1. Go to vercel.com
2. Import your repo
3. Add environment variables
4. Deploy!

### Netlify
1. Go to netlify.com
2. Import repo
3. Add environment variables
4. Deploy!

---

## Adding Products

Use Supabase Table Editor:
1. Go to products table
2. Insert new rows with product data

---

## Troubleshooting

**Missing environment variables**: Check .env file
**Can't load products**: Verify schema was created
**Can't sign up**: Check email provider is enabled

For more help, check README.md
