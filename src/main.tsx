import { StrictMode } from "react";
import { createRoot, type Root } from "react-dom/client";
import { App } from "./App";
import "./styles.css";

const elem = document.getElementById("root")!;
const app = (
  <StrictMode>
    <App />
  </StrictMode>
);

type HotData = { root?: Root };
((import.meta.hot.data as HotData).root ??= createRoot(elem)).render(app);
