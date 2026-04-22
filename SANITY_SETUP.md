# Sanity CMS Setup

## Quick Start

1. **Create a Sanity project** (if you haven't already):
   ```bash
   npx sanity init --project-id YOUR_PROJECT_ID --dataset production
   ```

2. **Get your credentials from Sanity**:
   - Go to https://www.sanity.io/manage
   - Select your project
   - Copy your **Project ID**
   - Go to API settings and create an **API Token** with Editor permissions

3. **Create `.env.local` file** in the project root:
   ```bash
   cp .env.local.example .env.local
   ```

4. **Add your credentials** to `.env.local`:
   ```
   NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id_here
   NEXT_PUBLIC_SANITY_DATASET=production
   SANITY_API_TOKEN=your_api_token_here
   ```

5. **Run the Sanity Studio**:
   ```bash
   npm run sanity
   ```
   This will start the studio at `http://localhost:3333`

6. **Deploy the Studio** (optional):
   ```bash
   npm run sanity:deploy
   ```

## Schema Structure

### Product Schema
Located at `sanity/schemas/product.ts`

Fields include:
- Title, Slug, Tagline, Description
- Company reference
- Category, FDA Status, Regions
- Hero Image
- Overview, Key Features, Mechanism of Action
- Clinical Validation, Regulatory Status
- Treatment Protocol, Clinical Evidence
- Resources (links)

### Company Schema
Located at `sanity/schemas/company.ts`

Fields include:
- Name, Slug, Description
- Logo
- Website

## Using Sanity in Your App

Import the client:
```typescript
import { client } from '@/lib/sanity.client'
```

Query products:
```typescript
const products = await client.fetch('*[_type == "product"]')
```

## Scripts

- `npm run sanity` - Start Sanity Studio locally
- `npm run sanity:deploy` - Deploy Studio to Sanity's hosted platform

## Resources

- [Sanity Documentation](https://www.sanity.io/docs)
- [Next.js Integration](https://www.sanity.io/docs/next-js)
- [GROQ Query Language](https://www.sanity.io/docs/groq)
