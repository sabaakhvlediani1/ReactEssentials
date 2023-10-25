import Header from "./components/Header/Header.jsx";
import { CORE_CONCEPTS } from "./data.js";
import CoreConcepts from "./components/CoreConcepts.jsx";
import { EXAMPLES } from "./data.js";
import TabButton from "./components/TabButton.jsx";
import { useState } from "react";

function App() {
  const [selectedTopic, setSelectedTopic] = useState();

  const handleClick = (selectedItem) => {
    setSelectedTopic(selectedItem);
  };

  let tabContent = <p>Please select a topic</p>;

  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((item) => (
              <CoreConcepts key={item.title} {...item} />
            ))}
          </ul>
        </section>

        <section id="examples">
          <h1>Examples</h1>
          <menu>
            <TabButton isSelected={selectedTopic === 'components'} click={() => handleClick("components")}>
              Components
            </TabButton>
            <TabButton isSelected={selectedTopic === 'jsx'} click={() => handleClick("jsx")}>Jsx</TabButton>
            <TabButton isSelected={selectedTopic === 'props'} click={() => handleClick("props")}>Props</TabButton>
            <TabButton isSelected={selectedTopic === 'state'} click={() => handleClick("state")}>State</TabButton>
          </menu>
          {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;
