export interface Product {
  id: string;
  name: string;
  slug: string;
  collection: string;
  collectionSlug: string;
  images: {
    whiteBg: string;
    lifestyleOn: string;
    lifestyleOff: string;
    hero: string;
    detail: string;
  };
  description: string;
}

export interface Project {
  id: string;
  name: string;
  client: string;
  type: string;
  location: string;
  year: string;
  image: string;
}

export interface Collection {
  name: string;
  slug: string;
  productCount: number;
}
