import { state } from "@/store";

export default function PagePlot() {

  const activeTab = state.plot.find(o => o.id === state.activeTab);

  return (
    <div>
      Content for PagePlot
      <pre>
        {JSON.stringify(
          activeTab,
          null,
          2
        )}
      </pre>
    </div>
  );
}
