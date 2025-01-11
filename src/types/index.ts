import { JSX } from "solid-js";

// Define the structure of the `linear` and `parabora` data
export interface LinearData {
  a: number;
  b: number;
}

export interface ParaboraData {
  a: number;
  b: number;
  c: number;
}

type JSXLazy = (() => JSX.Element) & {
  preload: () => Promise<{
      default: () => JSX.Element;
  }>;
}

// Define the structure of the `main` array elements
export interface MainItem {
  id: number;
  name: string;
  data: {
    linear: LinearData;
    parabora: ParaboraData;
  };
  page: JSXLazy;
}

// type aa = MainItem["data"]

// Define the structure of the `plot` and `table` array elements
export interface PlotTableData {
  x: number;
  y: number;
}

export interface PlotItem {
  id: number;
  name: string;
  data: PlotTableData[];
  page: JSXLazy;
}

export interface TableItem {
  id: number;
  name: string;
  data: PlotTableData[];
  page: JSXLazy;
}

// Define the entire state structure
export interface AppState {
  activeTab: number;
  tabs: { id: number; name: string }[];
  main: MainItem[];
  plot: PlotItem[];
  table: TableItem[];
}