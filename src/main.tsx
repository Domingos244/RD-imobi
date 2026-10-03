import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";

import App from "./App";

import { PropertyProvider } from "./context/PropertyProvider";

createRoot(
 document.getElementById("root")!
).render(

<StrictMode>

<PropertyProvider>

<App />

</PropertyProvider>

</StrictMode>

);