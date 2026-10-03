export interface Property {

  id: number;

  title: string;

  location: string;

  price: string;

  type: string;

  purpose?: string;

  bedrooms: number;

  bathrooms: number;

  garage: number;

  area: string;

  description?: string;

  features?: string[];

  image: string;

  gallery?: string[];

}