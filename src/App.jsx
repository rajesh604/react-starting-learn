// rename the file App.jsx
// delete the React import
import { createRoot } from "react-dom/client";
// delete Pet import, and add SearchParams
import SearchParams from "./SearchParams";

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>;
      <SearchParams />;
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
