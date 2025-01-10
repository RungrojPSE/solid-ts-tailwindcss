
import { activeTab } from '@/store/tabs';
import { Suspense, type Component } from 'solid-js';

const ActiveTabContent: Component = () => {
  // const activeTab = () => state.tabs.find((tab) => tab.id === state.activeTab);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      {(() => {
        const tab = activeTab();
        // return tab?.page ? <tab.page /> : <div>No content available</div>;
        return <tab.page />;
      })()}
    </Suspense>

    
  );
};

export default ActiveTabContent;


{/* Tab Content */}
{/* <div class="p-4">
  {state.tabs.map(
    (tab) =>
      state.activeTab === tab.id && (
        <div class="tab-panel">
          <Suspense fallback={<div>Loading...</div>}>
            <tab.page />
          </Suspense>
        </div>
      )
  )}
</div> */}