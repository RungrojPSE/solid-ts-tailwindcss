import { setState, state } from '@/store';
import { lazy } from "solid-js";

export const activeTab = () => {
  return (
    state.main.find((tab) => tab.id === state.activeTab) ||
    state.plot.find((tab) => tab.id === state.activeTab) ||
    state.table.find((tab) => tab.id === state.activeTab) ||
    {
      id: 0,
      name: "Not Found",
      data: null,
      page: lazy(() => import("@/pages/PageError")),
    }
  );
};

export const closeTab = (id: number) => {
  setState("tabs", (prev) => prev.filter((tab) => tab.id !== id));
  setState("main", (prev) => prev.filter((tab) => tab.id !== id));
  setState("plot", (prev) => prev.filter((tab) => tab.id !== id));
  setState("table", (prev) => prev.filter((tab) => tab.id !== id));

  if (state.activeTab === id) {
    setState("activeTab", state.tabs.length > 0 ? state.tabs.slice(-1)[0].id : state.tabs[0].id);
  }
};
