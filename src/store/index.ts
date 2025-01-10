import { createStore } from "solid-js/store";
import { JSX, lazy } from "solid-js";

type JSXLazy = (() => JSX.Element) & {
  preload: () => Promise<{
      default: () => JSX.Element;
  }>;
}

export interface Tab {
  id: number;
  name: string;
  data: any;
  page: JSXLazy;
}

interface AppState {
  activeTab: number;
  tabs: Tab[];
}

export const [state, setState] = createStore<AppState>({
  activeTab: 1,
  tabs: [
    {
      id: 1,
      name: "Main",
      data: null,
      page: lazy(() => import("@/pages/PageMain")),
    },
    {
      id: 2,
      name: "Design",
      data: null,
      page: lazy(() => import("@/pages/PageDesign")),
    },
  ],
});

export const generatePlot = () => {
  const randomArray = (length: number) =>
    Array.from({ length }, () => Math.floor(Math.random() * 10) + 1);

  const newObject = {
    id: Date.now(),
    name: "Plot",
    data: {
      x: randomArray(4),
      y: randomArray(4),
    },
    page: lazy(() => import("@/pages/PagePlot")),
  };

  // if to much "Please close some tabs"
  setState("tabs", (tabs) => [...tabs, newObject]);
  setState("activeTab", newObject.id);
};



// const Page1 = lazy(() => import("@/pages/Page1"));
// Usage
// <Page1/>


