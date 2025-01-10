import { generatePlot } from "@/store";

export default function PageMain() {
  return (
    <div>
      <h1>Content for PageMain</h1>
      <button
        class="border p-2 mb-4 bg-blue-500 text-white rounded hover:bg-blue-600"
        onClick={generatePlot}
      >
        Generate Random Object
      </button>
    </div>
  );
}
