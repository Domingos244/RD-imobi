import {
  useState,
  type ReactNode
} from "react";


import {
  properties as initialProperties
} from "../components/FeaturedProperties/data";


import { PropertyContext } from "./PropertyContext";

import type { Property } from "./types";



export function PropertyProvider({

  children

}: {

  children: ReactNode;

}) {


  const [properties, setProperties] =
    useState<Property[]>(initialProperties);



  function addProperty(property: Property) {

    setProperties(prev => [

      ...prev,

      property

    ]);

  }



  return (

    <PropertyContext.Provider

      value={{
        properties,
        addProperty
      }}

    >

      {children}

    </PropertyContext.Provider>

  );

}