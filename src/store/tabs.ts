import { setState, state, Tab } from '@/store';
import { lazy } from "solid-js";

export const activeTab = (): Tab => {
  return (
    state.tabs.find((tab) => tab.id === state.activeTab) ?? {
      id: 0,
      name: "Not Found",
      data: null,
      page: lazy(() => import("@/pages/PageError")),
    }
  );
};

export const getTabData = () => {
  return state.tabs.find((tab) => tab.id === state.activeTab)?.data;
};

export const closeTab = (id: number) => {
  setState("tabs", (prev) => prev.filter((tab) => tab.id !== id));

  if (state.activeTab === id) {
    setState("activeTab", state.tabs.length > 0 ? state.tabs[0].id : 1);
  }
};
