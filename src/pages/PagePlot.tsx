// import { getTabData } from "@/store";

import { getTabData } from "@/store/tabs";


export default function PagePlot() {
  return (
    <div>
      Content for PagePlot
      <pre>
        {JSON.stringify(
          getTabData(),
          null,
          2
        )}
      </pre>
    </div>
  );
}
