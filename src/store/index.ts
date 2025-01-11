import { AppState, MainItem } from "@/types";
import { lazy } from "solid-js";
import { createStore } from "solid-js/store";

// Create the store with the defined type
export const [state, setState] = createStore<AppState>({
  activeTab: 111,
  tabs: [
    { id: 111, name: "Problem" },
    { id: 222, name: "Plot" },
    { id: 333, name: "Table-Linear" },
  ],
  main: [
    {
      id: 111,
      name: "Problem",
      data: { linear: { a: 0, b: 2 }, parabora: { a: 1, b: 2, c: 2 } },
      page: lazy(() => import("@/pages/PageMain")),
    },
  ],
  plot: [
    {
      id: 222,
      name: "Plot-Linear",
      data: [
        { x: 1, y: 2 },
        { x: 2, y: 4 },
        { x: 3, y: 6 },
      ],
      page: lazy(() => import("@/pages/PagePlot")),
    },
  ],
  table: [
    {
      id: 333,
      name: "Table-Linear",
      data: [
        { x: 1, y: 2 },
        { x: 2, y: 4 },
        { x: 3, y: 6 },
      ],
      page: lazy(() => import("@/pages/PageTable")),
    },
  ],
});


export function updateMainData(updatedFields: Partial<MainItem["data"]>) {
  
  const index = state.main.findIndex((item) => item.id === state.activeTab);

  if (index !== -1) {
    setState("main", index, "data", (data) => ({
      ...data,
      ...updatedFields,
    }));
  }
}

export const generatePlot = () => {
  const randomArray = (length: number) =>
    Array.from({ length }, () => Math.floor(Math.random() * 10) + 1);

  const index = state.main.findIndex((item) => item.id === state.activeTab);

  if (index !== -1) {
    const linear = state.main[index].data.linear
    const xval = randomArray(3);
    const data = xval.map(i => ({x: i, y: linear.a + linear.b * i}));

    const newObject = {
      id: Date.now(),
      name: "Plot",
      data: data,
      page: lazy(() => import("@/pages/PagePlot")),
    };

    // if to much "Please close some tabs"
    setState("plot", (plots) => [...plots, newObject]);
    setState("tabs", (tabs) => [...tabs, {id: newObject.id, name: newObject.name}]);
    setState("activeTab", newObject.id);
  }
};

