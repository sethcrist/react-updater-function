// updater function = A function passed as an argument to setState() usually 
  // ex. setYear(year + 1)
  // Allow for safe updates based on the previous state
  // Used with multilple state updates and asynchronous functions
  // Good practice to use updater functions

import MyComponent from "./MyComponent";

function App() {
  return (
    <div>
      <MyComponent />
    </div>
  );
}

export default App;
