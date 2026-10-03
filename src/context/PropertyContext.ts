import { createContext } from "react";
import type { Property } from "./types";


interface PropertyContextType {

  properties: Property[];

  addProperty: (property: Property) => void;

}


export const PropertyContext =
  createContext<PropertyContextType | null>(null);