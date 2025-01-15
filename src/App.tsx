import ActiveTabContent from "@components/ActiveTabContent";
import { state, setState } from "@/store"; // Adjust the import path as needed
import { closeTab } from "@/store/tabs";

// update css to show full page

function App() {
  const isMainTab = (id: number) => {
    return state.main.map((o) => o.id).includes(id)
  }

  return (
    <div class="min-h-screen bg-gray-100 p-8">
      <div class="max-w-xl mx-auto bg-white shadow-md rounded-md">
        {/* Tab Navigation */}
        <div class="border-b">
          <nav class="flex">
            {state.tabs.map((tab) => (
              <div>
                <button
                  class={`flex-1 text-center py-2 px-4 ${
                    state.activeTab === tab.id
                      ? "border-b-2 border-blue-500 text-blue-500 font-semibold"
                      : "text-gray-500 hover:text-gray-800"
                  }`}
                  onClick={() => setState("activeTab", tab.id)}
                >
                  {tab.name}
                </button>

                {isMainTab(tab.id) ? null : (
                  <button
                    onClick={() => closeTab(tab.id)}
                    class="text-red-500 hover:text-red-700 focus:outline-none"
                  >
                    &times;
                  </button>
                )}
              </div>
            ))}
          </nav>
        </div>

        {/* Tab Content */}
        <div class="p-4">
          <ActiveTabContent />
        </div>
      </div>
    </div>
  );
}

export default App;
