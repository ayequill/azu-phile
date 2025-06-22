# Audiophile E-commerce Website

A full-stack e-commerce application built with Next.js 15 and Strapi CMS, featuring a modern audio equipment store with dynamic product management.

## 🏗️ Project Architecture

This project consists of two main components:

- **CMS** (`/cms`): Strapi headless CMS for content management
- **Web** (`/web`): Next.js 15 frontend with App Router

## 🚀 Quick Start

### Prerequisites

- Node.js 18.x or higher
- PNPM (Package Manager)
- PostgreSQL database
- Cloudinary account (for image hosting)

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd audiophile
```

2. Install dependencies for both CMS and Web:

```bash
# Install CMS dependencies
cd cms
pnpm install

# Install Web dependencies  
cd ../web
pnpm install
```

## 📋 CMS Setup (Strapi)

### Environment Configuration

Create a `.env` file in the `/cms` directory:

```bash
cp .env.example .env
```

### Database Setup

The CMS uses PostgreSQL as its primary database. Configuration is handled in `/cms/config/database.ts`:

- **Local Development**: Configure local PostgreSQL connection
- **Production**: Uses Railway's PostgreSQL service with DATABASE_URL

### Running the CMS

```bash
cd cms

# Development mode
pnpm dev

# Production build
pnpm build
pnpm start
```

The CMS will be available at `http://localhost:1337`

### Railway Deployment

The CMS is configured for Railway deployment:

1. Connect your GitHub repository to Railway
2. Set environment variables in Railway dashboard
3. Deploy automatically on git push

### Content Types

The CMS includes the following content types:

1. **Products** (`/cms/src/api/product/`)
   - Name, slug, description, price
   - Images (hero, gallery, cart)
   - Categories, features, includes
   - Custom controllers and services

2. **Categories**
   - Product categorization system

3. **Gallery Items**
   - Product image galleries

## 🌐 Web Application (Next.js 15)

### Environment Configuration

Create a `.env.local` file in the `/web` directory:

```bash
cp .env.example .env.local
```

### Key Features

- **Next.js 15** with App Router
- **TypeScript** for type safety
- **Tailwind CSS 4** for styling
- **shadcn/ui** component library
- **Framer Motion** for animations
- **Axios** for API communication
- **React Hook Form** with Zod validation

### Running the Web Application

```bash
cd web

# Development mode with Turbopack
pnpm dev

# Production build
pnpm build
pnpm start
```

The web application will be available at `http://localhost:3000`

## 🔄 Data Fetching & API Integration

### Server Actions

Located in `/web/actions/products.ts`:

```typescript
// Fetch all products with populated relations
const getProducts = async () => {
  const response = await axiosClient.get<StrapiProductsResponse>(
    "/api/products?populate=image&populate=category&populate=includes&populate=gallery.image&sort=createdAt:desc"
  );
  return response.data;
};

// Fetch single product by slug
const getProductBySlug = async (slug: string) => {
  const response = await axiosClient.get<StrapiProductResponse>(
    `/api/products/${slug}?populate=image&populate=category&populate=includes&populate=gallery.image`
  );
  return response.data;
};
```

### Axios Client Configuration

The `/web/lib/axios-client.ts` handles:

- Base URL configuration from environment
- Bearer token authentication
- Request/response interceptors
- Error handling

## 📱 Dynamic Metadata Generation

Each product page generates dynamic metadata for SEO:

```typescript
// /web/app/(product)/[category]/[slug]/page.tsx
export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ d: string }>;
}) {
  const { d } = await searchParams;
  const product = await getProductBySlug(d);
  return {
    title: product.data.name,
    description: product.data.description,
    openGraph: {
      title: product.data.name,
      description: product.data.description,
      images: [product.data.image.url],
    },
  };
}
```

### Routing Architecture

The project uses a unique routing structure where product IDs are passed via query parameters:

#### URL Structure

```
/headphones/xx99-mark-two-headphones?d=c3pnl4zd38ne5lnv7p5wz8sl
```

- **Route segment**: `/headphones/xx99-mark-two-headphones` (for SEO)
- **Query parameter**: `?d=c3pnl4zd38ne5lnv7p5wz8sl` (actual product ID)

This approach provides:

- **SEO-friendly URLs** with product names
- **Unique identification** via Strapi document IDs
- **Flexible routing** that accommodates CMS changes

### Metadata Features

- Dynamic titles with template: `%s | Audiophile`
- Product-specific descriptions
- Open Graph images from CMS
- Structured data for SEO

## 🛒 State Management

### Cart Context

The application uses React Context for cart state management (`/web/contexts/cart-context.tsx`):

#### Features

- Add/remove items
- Update quantities
- Persistent storage via localStorage
- TypeScript interfaces for type safety

#### Usage

```typescript
const { addItem, removeItem, totalItems, totalPrice } = useCartContext();
```

### Local Storage Hook

Custom hook `/web/hooks/use-local-storage.ts` provides:

- Persistent cart data
- SSR-safe initialization
- Type-safe storage operations
- Event-driven synchronization across tabs
- Error handling for storage operations

#### Implementation Details

```typescript
export default function useLocalStorage<T>(
  key: string,
  initialValue: T | (() => T),
  options: UseLocalStorageOptions<T> = {}
): [T, Dispatch<SetStateAction<T>>, () => void]
```

The hook returns a tuple with:

1. Current stored value
2. Setter function (similar to useState)
3. Remove function to clear the storage

## 🎨 UI Components

### Component Architecture

- **shadcn/ui** for base components (`/web/components/ui/`)
- **Custom components** organized by feature:
  - `checkout/` - Checkout flow components
  - `common/` - Reusable components
  - `home/` - Homepage sections
  - `products/` - Product-related components

### Styling

- **Tailwind CSS 4** with custom configuration
- **CSS Variables** for theme consistency
- **Responsive design** with mobile-first approach
- **Custom animations** with Framer Motion

## 🔧 TypeScript Configuration

### Type Definitions

Product types are defined in `/web/types/product.ts`:

```typescript
export interface StrapiProduct {
  id: number;
  documentId: string;
  name: string;
  slug: string;
  isNew: boolean;
  price: number;
  description: string;
  features: string;
  image: StrapiImage;
  category: ProductCategory;
  includes: IncludeItem[];
  gallery: GalleryItem[];
}
```

### Form Validation

Checkout forms use Zod schemas for validation (`/web/hooks/use-checkout-form.ts`):

```typescript
export const checkoutFormSchema = z
  .object({
    name: z
      .string()
      .min(1, { message: "Name is required" })
      .regex(/^[^<>%$#^*]*$/, { message: "Wrong format" }),
    email: z
      .string()
      .min(1, { message: "Email is required" })
      .email({ message: "Wrong format" }),
    // ... other fields
  })
  .refine((data) => {
    // Custom validation logic
  });
```

## 📁 Project Structure

```
audiophile/
├── cms/                    # Strapi CMS
│   ├── config/            # Strapi configuration
│   ├── src/api/           # API endpoints & content types
│   ├── database/          # Migration files
│   └── public/            # Static assets
├── web/                   # Next.js application
│   ├── app/              # App Router pages
│   ├── components/       # React components
│   ├── contexts/         # React contexts
│   ├── hooks/           # Custom hooks
│   ├── lib/             # Utility functions
│   ├── types/           # TypeScript definitions
│   └── public/          # Static assets
└── README.md
```

## 🔐 Environment Variables

### CMS Variables (`.env`)

```bash
# Server Configuration
HOST=0.0.0.0
PORT=1337
APP_KEYS="your-app-keys-here"
API_TOKEN_SALT="your-api-token-salt"
ADMIN_JWT_SECRET="your-admin-jwt-secret"
TRANSFER_TOKEN_SALT="your-transfer-token-salt"
JWT_SECRET="your-jwt-secret"

# Database Configuration (PostgreSQL)
DATABASE_CLIENT=postgres
DATABASE_HOST=localhost
DATABASE_PORT=5432
DATABASE_NAME=audiophile_cms
DATABASE_USERNAME=strapi
DATABASE_PASSWORD=strapi
DATABASE_SSL=false

# Railway Production Database
DATABASE_URL=postgresql://username:password@host:port/database

# Cloudinary Configuration (for image/media storage)
CLOUDINARY_NAME=your-cloudinary-name
CLOUDINARY_KEY=your-cloudinary-key
CLOUDINARY_SECRET=your-cloudinary-secret

# Strapi Configuration
NODE_ENV=development
PUBLIC_URL=http://localhost:1337
STRAPI_ADMIN_CLIENT_URL=http://localhost:3000
```

### Web Variables (`.env.local`)

```bash
# API Configuration - Strapi CMS
API_URL=http://localhost:1337
BEARER_TOKEN=your-strapi-bearer-token-here

# Next.js Configuration
NEXT_PUBLIC_APP_URL=http://localhost:3000
NODE_ENV=development
```

### Setup Instructions

1. **CMS Environment**:
   - Copy `cms/.env.example` to `cms/.env`
   - Update database credentials
   - Configure Cloudinary for image hosting
   - Generate secure random strings for API keys

2. **Web Environment**:
   - Copy `web/.env.example` to `web/.env.local`
   - Set API_URL to your Strapi instance
   - Get BEARER_TOKEN from Strapi admin panel
