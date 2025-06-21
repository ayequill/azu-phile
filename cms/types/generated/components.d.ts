import type { Schema, Struct } from '@strapi/strapi';

export interface ProductCatefory extends Struct.ComponentSchema {
  collectionName: 'components_product_catefories';
  info: {
    displayName: 'Category';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    name: Schema.Attribute.String;
  };
}

export interface ProductGallery extends Struct.ComponentSchema {
  collectionName: 'components_product_galleries';
  info: {
    displayName: 'Gallery';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
  };
}

export interface ProductIncludes extends Struct.ComponentSchema {
  collectionName: 'components_product_includes';
  info: {
    displayName: 'Includes';
  };
  attributes: {
    item: Schema.Attribute.String;
    quantity: Schema.Attribute.Integer;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'product.catefory': ProductCatefory;
      'product.gallery': ProductGallery;
      'product.includes': ProductIncludes;
    }
  }
}
