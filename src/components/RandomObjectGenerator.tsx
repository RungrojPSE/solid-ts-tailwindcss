import { createSignal } from "solid-js";

const RandomObjectGenerator = () => {
  const [tabs, setTabs] = createSignal<{ id: number; data: { x: number[]; y: number[] } }[]>([]);
  const [activeTab, setActiveTab] = createSignal<number | null>(null);

  const generateRandomObject = () => {
    const randomArray = (length: number) =>
      Array.from({ length }, () => Math.floor(Math.random() * 10) + 1);

    const newObject = {
      id: Date.now(), // Unique identifier for each tab
      data: {
        x: randomArray(4),
        y: randomArray(4),
      },
    };

    setTabs((prev) => [...prev, newObject]);
    setActiveTab(newObject.id);
  };

  const closeTab = (id: number) => {
    setTabs((prev) => prev.filter((tab) => tab.id !== id));
    if (activeTab() === id) {
      const remainingTabs = tabs();
      setActiveTab(remainingTabs.length > 0 ? remainingTabs[0].id : null);
    }
  };

  return (
    <div>
      <button 
        class="border p-2 mb-4 bg-blue-500 text-white rounded hover:bg-blue-600"
        onClick={generateRandomObject}
      >
        Generate Random Object
      </button>
      <div class="border-b mb-2 flex space-x-2 overflow-x-auto">
        {tabs().map((tab) => (
          <div
            class={`flex items-center space-x-2 p-2 border-b-2 ${
              activeTab() === tab.id
                ? "border-blue-500 text-blue-500"
                : "border-transparent text-gray-500 hover:text-blue-500"
            }`}
          >
            <button
              onClick={() => setActiveTab(tab.id)}
              class="focus:outline-none"
            >
              Tab {tabs().indexOf(tab) + 1}
            </button>
            <button
              onClick={() => closeTab(tab.id)}
              class="text-red-500 hover:text-red-700 focus:outline-none"
            >
              &times;
            </button>
          </div>
        ))}
      </div>

      <div class="p-4 border rounded">
        {activeTab() !== null ? (
          <pre>
            {JSON.stringify(
              tabs().find((tab) => tab.id === activeTab())?.data,
              null,
              2
            )}
          </pre>
        ) : (
          <p>No data selected</p>
        )}
      </div>
      
    </div>
  );
};

export default RandomObjectGenerator;
