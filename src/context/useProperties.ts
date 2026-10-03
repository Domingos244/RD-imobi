import { useContext } from "react";

import { PropertyContext } from "./PropertyContext";


export function useProperties() {

  const context = useContext(PropertyContext);


  if (!context) {

    throw new Error(
      "useProperties deve estar dentro do PropertyProvider"
    );

  }


  return context;

}