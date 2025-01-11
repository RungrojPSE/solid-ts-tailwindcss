import { generatePlot, state, updateMainData } from "@/store";

export default function PageMain() {

  const activeTab = state.main.find(o => o.id === state.activeTab);

  return (
    <div>
      <h1>Linear</h1>
      <p>{activeTab?.data.linear.a}</p>
      <p>{activeTab?.data.linear.b}</p>
      <h1>Parabora</h1>
      <p>{activeTab?.data.parabora.a}</p>
      <p>{activeTab?.data.parabora.b}</p>
      <p>{activeTab?.data.parabora.c}</p>
      <button
      onclick={() => updateMainData({ linear: { a: 1, b: 2 }})}
      >
        update linear params
      </button>
      <button
      onclick={() => generatePlot()}
      >
        generate Plot
      </button>
    </div>
  );
}
