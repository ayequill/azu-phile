export interface ProviderMetadata {
  public_id: string;
  resource_type: string;
}

export interface ImageFormat {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: string | null;
  size: number;
  width: number;
  height: number;
  sizeInBytes: number;
  provider_metadata: ProviderMetadata;
}

export interface ImageFormats {
  thumbnail?: ImageFormat;
  small?: ImageFormat;
  medium?: ImageFormat;
  large?: ImageFormat;
}

export interface StrapiImage {
  id: number;
  documentId: string;
  name: string;
  alternativeText: string | null;
  caption: string | null;
  width: number;
  height: number;
  formats: ImageFormats;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string | null;
  provider: string;
  provider_metadata: ProviderMetadata;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface GalleryItem {
  id: number;
  image: StrapiImage;
}

export interface IncludeItem {
  id: number;
  item: string;
  quantity: number;
}

export interface ProductCategory {
  id: number;
  name: string;
}

export interface StrapiProduct {
  id: number;
  documentId: string;
  name: string;
  slug: string;
  isNew: boolean;
  price: number;
  description: string;
  features: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  image: StrapiImage;
  category: ProductCategory;
  includes: IncludeItem[];
  gallery: GalleryItem[];
}

export interface StrapiProductResponse {
  data: StrapiProduct;
}

export interface StrapiProductsResponse {
  data: StrapiProduct[];
  meta?: {
    pagination?: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}
