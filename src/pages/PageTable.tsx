import { state } from "@/store";

export default function PagePlot() {

  const activeTab = state.table.find(o => o.id === state.activeTab);

  return (
    <div>
      Content for Table
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
